import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AdminLayout from './components/AdminLayout';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import OrderList from './components/OrderList';
import { ArchivedOrders } from './components/ArchivedOrders';

export default function AdminDashboard() {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== 'admin') {
      navigate('/login');
    }
  }, [userRole, navigate]);

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/client/new" element={<ClientForm />} />
        <Route path="/client/edit/:id" element={<ClientForm />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/archived" element={<ArchivedOrders />} />
      </Routes>
    </AdminLayout>
  );
}