import { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  userRole: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkUserStatus = async (user: User) => {
    // Verificar se é o email do admin
    if (user.email === 'felipebdias98@gmail.com') {
      return { role: 'admin', status: 'active' };
    }

    // Verificar o documento do cliente
    const clientRef = doc(db, 'clients', user.uid);
    const clientSnap = await getDoc(clientRef);

    if (clientSnap.exists()) {
      const clientData = clientSnap.data();
      return { 
        role: clientData.role,
        status: clientData.status
      };
    }

    // Se não encontrar documento do cliente, criar um documento de usuário padrão
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        role: 'client',
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return { role: 'client', status: 'pending' };
    }

    return { 
      role: userSnap.data()?.role || 'client',
      status: userSnap.data()?.status || 'pending'
    };
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const { role, status } = await checkUserStatus(user);
          
          // Se for cliente e estiver pendente ou inativo, não permitir acesso
          if (role === 'client' && status !== 'active') {
            await firebaseSignOut(auth);
            setUser(null);
            setUserRole(null);
            
            if (status === 'pending') {
              toast.error('Sua conta está pendente de aprovação. Por favor, aguarde.');
            } else if (status === 'inactive') {
              toast.error('Sua conta está inativa. Entre em contato com o administrador.');
            }
            return;
          }

          setUser(user);
          setUserRole(role);
        } catch (error) {
          console.error('Error setting up user:', error);
          setUser(null);
          setUserRole(null);
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { role, status } = await checkUserStatus(userCredential.user);

      // Se for cliente e estiver pendente ou inativo, não permitir acesso
      if (role === 'client' && status !== 'active') {
        await firebaseSignOut(auth);
        
        if (status === 'pending') {
          throw new Error('Sua conta está pendente de aprovação. Por favor, aguarde.');
        } else if (status === 'inactive') {
          throw new Error('Sua conta está inativa. Entre em contato com o administrador.');
        }
        return;
      }

      setUser(userCredential.user);
      setUserRole(role);
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setUserRole(null);
    } catch (error) {
      console.error('Signout error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, userRole, loading, signIn, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};