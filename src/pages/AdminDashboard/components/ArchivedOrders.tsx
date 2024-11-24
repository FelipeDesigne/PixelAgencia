import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { Order } from '../../../types/Order';
import { formatDate } from '../../../utils/formatDate';
import { Loader2 } from 'lucide-react';

export function ArchivedOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArchivedOrders() {
      try {
        const ordersRef = collection(db, 'orders');
        const q = query(
          ordersRef,
          where('status', '==', 'completed'),
          orderBy('createdAt', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const loadedOrders: Order[] = [];
        
        querySnapshot.forEach((doc) => {
          loadedOrders.push({ id: doc.id, ...doc.data() } as Order);
        });

        setOrders(loadedOrders);
      } catch (error) {
        console.error('Error loading archived orders:', error);
      } finally {
        setLoading(false);
      }
    }

    loadArchivedOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-200">Pedidos Arquivados</h2>
      
      {orders.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Nenhum pedido arquivado encontrado.</p>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {order.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Cliente: {order.clientName}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Finalizado em: {formatDate(order.completedAt)}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-300">{order.description}</p>
              </div>
              
              {order.attachments && order.attachments.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    Anexos:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {order.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        {attachment.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
