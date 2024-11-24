import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import ClientActionButtons from '../../components/ClientActionButtons';
import { LogOut } from 'lucide-react';

interface ClientData {
  name: string;
  email: string;
  driveLink?: string;
  status: string;
}

export default function ClientDashboard() {
  const { user, signOut } = useAuth();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientData = async () => {
      if (user?.uid) {
        try {
          const docRef = doc(db, 'clients', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setClientData(docSnap.data() as ClientData);
          }
        } catch (error) {
          console.error('Error fetching client data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchClientData();
  }, [user?.uid]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                Dashboard do Cliente
              </h1>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Bem-vindo, {clientData?.name}!
            </h2>
            <p className="text-gray-600">
              {clientData?.email}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ações Rápidas
            </h3>
            <ClientActionButtons driveLink={clientData?.driveLink} />
          </div>

          {clientData?.status === 'pending' && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Sua conta está em análise. Em breve você terá acesso completo à plataforma.
                  </p>
                </div>
              </div>
            </div>
          )}

          {clientData?.status === 'inactive' && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    Sua conta está inativa. Entre em contato conosco pelo WhatsApp para reativação.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}