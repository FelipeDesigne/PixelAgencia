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

  if (clientData?.status === 'inactive') {
    return <InactiveAccountMessage reason={clientData.deactivationReason} />;
  }

  return (
    <ClientLayout>
      <Routes>
        <Route index element={<OrderList />} />
        <Route path="orders" element={<OrderList />} />
        <Route path="orders/new" element={<OrderForm />} />
        <Route path="orders/:id" element={<OrderForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </ClientLayout>
  );
}