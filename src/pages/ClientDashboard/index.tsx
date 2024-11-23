import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ClientDashboard() {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== 'client') {
      navigate('/login');
    }
  }, [userRole, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Client Dashboard</h1>
      <p className="text-gray-600">Client interface coming soon...</p>
    </div>
  );
}