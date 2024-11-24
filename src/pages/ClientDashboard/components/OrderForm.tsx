import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';

interface OrderFormData {
  title: string;
  description: string;
  deliveryDate: string;
}

const initialFormData: OrderFormData = {
  title: '',
  description: '',
  deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
};

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      fetchOrder();
    }
  }, [id]);

  const fetchOrder = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'orders', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          ...data,
          deliveryDate: new Date(data.deliveryDate).toISOString().split('T')[0],
        } as OrderFormData);
      } else {
        toast.error('Pedido não encontrado');
        navigate('/client');
      }
    } catch (error) {
      toast.error('Erro ao carregar dados do pedido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error('Usuário não autenticado');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        ...formData,
        clientId: user.uid,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deliveryDate: new Date(formData.deliveryDate).toISOString(),
      };

      if (id) {
        await setDoc(doc(db, 'orders', id), {
          ...orderData,
          status: (await getDoc(doc(db, 'orders', id))).data()?.status || 'pending',
        });
      } else {
        // Criar documento do pedido no Firestore
        await addDoc(collection(db, 'orders'), {
          ...formData,
          clientId: user.uid,
          status: 'pending',
          viewed: false,
          createdAt: new Date().toISOString(),
        });
      }

      toast.success(id ? 'Pedido atualizado com sucesso' : 'Pedido criado com sucesso');
      navigate('/client');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Erro ao salvar pedido');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/client')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {id ? 'Editar Pedido' : 'Novo Pedido'}
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Título do Pedido
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field"
            required
            placeholder="Ex: Logo para minha empresa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descrição
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="input-field"
            required
            placeholder="Descreva os detalhes do seu pedido..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data de Entrega Desejada
          </label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="input-field"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/client')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary flex items-center justify-center min-w-[100px]"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              id ? 'Atualizar' : 'Criar Pedido'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
