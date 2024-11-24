import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Plus, X } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import CreateClientForm from './components/CreateClientForm';
import OrderNotification from '../../components/OrderNotification';

interface Order {
  id: string;
  viewed: boolean;
  createdAt: string;
  // outros campos do pedido...
}

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [unviewedOrders, setUnviewedOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Monitora pedidos não visualizados
    const ordersRef = collection(db, 'orders');
    const unviewedQuery = query(ordersRef, where('viewed', '==', false));

    const unsubscribe = onSnapshot(unviewedQuery, (snapshot) => {
      const orders = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      setUnviewedOrders(orders);
    });

    return () => unsubscribe();
  }, []);

  const markOrderAsViewed = async (orderId: string) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        viewed: true
      });
    } catch (error) {
      console.error('Error marking order as viewed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                Painel do Administrador
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <OrderNotification count={unviewedOrders.length} />
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Gerenciar Clientes
          </h2>
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Novo Cliente
          </button>
        </div>

        {/* Modal de criação de cliente */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Criar Novo Cliente
                </h3>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <CreateClientForm
                onSuccess={() => setShowCreateForm(false)}
                onCancel={() => setShowCreateForm(false)}
              />
            </div>
          </div>
        )}

        {/* Lista de pedidos não visualizados */}
        {unviewedOrders.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Novos Pedidos
            </h3>
            <div className="bg-white shadow rounded-lg divide-y">
              {unviewedOrders.map(order => (
                <div
                  key={order.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => markOrderAsViewed(order.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">
                        Pedido #{order.id}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Novo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
