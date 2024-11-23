import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ClientLayout from './components/ClientLayout';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import Profile from './components/Profile';

export default function ClientDashboard() {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== 'client') {
      navigate('/login');
    }
  }, [userRole, navigate]);

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