import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Users, Package, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import OrderNotification from '../../../components/OrderNotification';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [unviewedOrdersCount, setUnviewedOrdersCount] = useState(0);

  useEffect(() => {
    // Monitora pedidos não visualizados
    const ordersRef = collection(db, 'orders');
    const unviewedQuery = query(ordersRef, where('viewed', '==', false));

    const unsubscribe = onSnapshot(unviewedQuery, (snapshot) => {
      setUnviewedOrdersCount(snapshot.docs.length);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', icon: Users, label: 'Clientes' },
    { 
      path: '/admin/orders', 
      label: 'Pedidos',
      customIcon: <OrderNotification count={unviewedOrdersCount} />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 p-2 rounded-lg shadow-md text-gray-200"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 shadow-lg transform transition-transform duration-200 ease-in-out border-r border-gray-700
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-200">Admin Panel</h1>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-blue-900 text-blue-200' 
                      : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {item.customIcon ? item.customIcon : Icon && <Icon size={20} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 text-gray-300 hover:text-red-400 w-full px-4 py-3 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-200 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}