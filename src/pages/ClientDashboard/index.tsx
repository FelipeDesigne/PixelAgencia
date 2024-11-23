import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../lib/firebase';
import ClientLayout from './components/ClientLayout';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import Profile from './components/Profile';
import PendingApprovalMessage from '../../components/PendingApprovalMessage';
import InactiveAccountMessage from '../../components/InactiveAccountMessage';
import { AlertTriangle, MessageCircle } from 'react-feather';

interface ClientData {
  status: string;
  deactivationReason?: string;
}

export default function ClientDashboard() {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userRole !== 'client') {
      navigate('/login');
      return;
    }

    const checkClientStatus = async () => {
      if (!user) return;

      try {
        const clientRef = doc(db, 'clients', user.uid);
        const clientSnap = await getDoc(clientRef);

        if (clientSnap.exists()) {
          const data = clientSnap.data() as ClientData;
          setClientData(data);
        }
      } catch (error) {
        console.error('Error checking client status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkClientStatus();
  }, [userRole, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (clientData?.status === 'pending') {
    return <PendingApprovalMessage />;
  }

  return (
    <ClientLayout>
      {clientData?.status === 'inactive' && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <span className="font-medium">Conta Inativa: </span>
                {clientData.deactivationReason || 'Sua conta está atualmente inativa.'}
              </p>
              <button
                onClick={() => {
                  const phoneNumber = '14981181568';
                  const message = 'Olá, gostaria de solicitar a reativação da minha conta na Pixel Agência.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="mt-2 text-sm text-green-600 hover:text-green-800 flex items-center space-x-1"
              >
                <MessageCircle size={16} />
                <span>Entrar em Contato via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route index element={<OrderList isInactive={clientData?.status === 'inactive'} />} />
        <Route path="orders" element={<OrderList isInactive={clientData?.status === 'inactive'} />} />
        <Route path="orders/new" element={
          clientData?.status === 'inactive' ? (
            <Navigate to="/client" replace />
          ) : (
            <OrderForm />
          )
        } />
        <Route path="orders/:id" element={<OrderForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </ClientLayout>
  );
}