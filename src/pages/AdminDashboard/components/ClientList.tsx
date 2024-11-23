import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { PlusCircle, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import { db } from '../../../lib/firebase';
import { toast } from 'react-hot-toast';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  deactivationReason?: string;
  createdAt: string;
}

interface DeactivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

function DeactivationModal({ isOpen, onClose, onConfirm }: DeactivationModalProps) {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(reason);
    setReason('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Motivo da Desativação</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
            rows={4}
            placeholder="Digite o motivo da desativação..."
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'clients'));
      const clientsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Client[];
      setClients(clientsData);
    } catch (error) {
      console.error('Erro ao carregar clientes:', error);
      toast.error('Erro ao carregar clientes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (clientId: string, clientName: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o cliente ${clientName}?`)) {
      try {
        await deleteDoc(doc(db, 'clients', clientId));
        toast.success('Cliente excluído com sucesso');
        fetchClients();
      } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        toast.error('Erro ao excluir cliente');
      }
    }
  };

  const handleStatusChange = async (client: Client) => {
    if (client.status === 'active') {
      setSelectedClient(client);
      setIsModalOpen(true);
    } else {
      try {
        await updateDoc(doc(db, 'clients', client.id), {
          status: 'active',
          deactivationReason: null
        });
        toast.success('Cliente ativado com sucesso');
        fetchClients();
      } catch (error) {
        console.error('Erro ao ativar cliente:', error);
        toast.error('Erro ao ativar cliente');
      }
    }
  };

  const handleDeactivation = async (reason: string) => {
    if (!selectedClient) return;

    try {
      await updateDoc(doc(db, 'clients', selectedClient.id), {
        status: 'inactive',
        deactivationReason: reason
      });
      toast.success('Cliente desativado com sucesso');
      setIsModalOpen(false);
      setSelectedClient(null);
      fetchClients();
    } catch (error) {
      console.error('Erro ao desativar cliente:', error);
      toast.error('Erro ao desativar cliente');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Clientes</h2>
            <button
              onClick={() => navigate('/admin/client/new')}
              className="btn-primary flex items-center space-x-2"
            >
              <PlusCircle size={20} />
              <span>Novo Cliente</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Cadastro
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  </td>
                </tr>
              ) : clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Nenhum cliente cadastrado
                  </td>
                </tr>
              ) : (
                clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${client.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'}`}
                        >
                          {client.status === 'active' ? 'Ativo' : 'Inativo'}
                        </span>
                        {client.deactivationReason && (
                          <span
                            className="ml-2 text-gray-400 hover:text-gray-600 cursor-help"
                            title={`Motivo: ${client.deactivationReason}`}
                          >
                            ℹ️
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(client.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleStatusChange(client)}
                        className={`mr-2 ${
                          client.status === 'active' 
                            ? 'text-green-600 hover:text-green-900' 
                            : 'text-red-600 hover:text-red-900'
                        }`}
                        title={client.status === 'active' ? 'Desativar cliente' : 'Ativar cliente'}
                      >
                        {client.status === 'active' ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                      </button>
                      <button
                        onClick={() => navigate(`/admin/client/edit/${client.id}`)}
                        className="text-blue-600 hover:text-blue-900 mr-2"
                        title="Editar cliente"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(client.id, client.name)}
                        className="text-red-600 hover:text-red-900"
                        title="Excluir cliente"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DeactivationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedClient(null);
        }}
        onConfirm={handleDeactivation}
      />
    </>
  );
}