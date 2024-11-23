import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase';
import { toast } from 'react-hot-toast';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface ClientFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'pending' | 'active' | 'inactive';
  password?: string;
}

const initialFormData: ClientFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  status: 'pending',
  password: '',
};

export default function ClientForm() {
  const [formData, setFormData] = useState<ClientFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchClient();
    }
  }, [id]);

  const fetchClient = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'clients', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as ClientFormData;
        // Remove password from edit form
        delete data.password;
        setFormData(data);
      } else {
        toast.error('Cliente não encontrado');
        navigate('/admin');
      }
    } catch (error) {
      toast.error('Erro ao carregar dados do cliente');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (id) {
        // Updating existing client
        const { password, ...clientData } = formData;
        await setDoc(doc(db, 'clients', id), {
          ...clientData,
          updatedAt: new Date().toISOString(),
        });
      } else {
        // Creating new client
        if (!formData.password) {
          throw new Error('Senha é obrigatória para novos clientes');
        }

        // Create Firebase Auth account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        // Create client document
        const { password, ...clientData } = formData;
        await setDoc(doc(db, 'clients', userCredential.user.uid), {
          ...clientData,
          status: 'pending', // Sempre criar novo cliente como pendente
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        // Create user document with role
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: formData.email,
          role: 'client',
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      toast.success(id ? 'Cliente atualizado com sucesso' : 'Cliente cadastrado com sucesso');
      navigate('/admin');
    } catch (error: any) {
      console.error('Error:', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Este email já está em uso');
      } else if (error.code === 'auth/weak-password') {
        toast.error('A senha deve ter pelo menos 6 caracteres');
      } else {
        toast.error(error.message || 'Erro ao salvar cliente');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            onClick={() => navigate('/admin')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {id ? 'Editar Cliente' : 'Novo Cliente'}
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
              disabled={!!id}
            />
          </div>

          {!id && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pr-10"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {id && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="input-field"
              >
                <option value="pending">Pendente</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Endereço
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="input-field"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin')}
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
              id ? 'Atualizar' : 'Cadastrar'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}