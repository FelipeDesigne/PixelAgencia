import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
        <Route path="/" element={<OrderList />} />
        <Route path="/order/new" element={<OrderForm />} />
        <Route path="/order/:id" element={<OrderForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ClientLayout>
  );
}