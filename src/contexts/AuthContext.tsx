import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';

interface User {
  uid: string;
  email: string | null;
  role?: string;
  status?: string;
}

interface AuthContextType {
  user: User | null;
  userRole: string | null;
  userStatus: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userStatus, setUserStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Primeiro tenta buscar na coleção 'users'
          let userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          // Se não encontrar na coleção 'users', tenta na coleção 'clients'
          if (!userDoc.exists()) {
            userDoc = await getDoc(doc(db, 'clients', firebaseUser.uid));
          }

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              role: userData?.role || 'client',
              status: userData?.status || 'active'
            });
            setUserRole(userData?.role || 'client');
            setUserStatus(userData?.status || 'active');
          } else {
            // Se não encontrar em nenhuma coleção, cria um documento padrão
            const defaultUserData = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              role: 'client',
              status: 'active',
              createdAt: new Date().toISOString()
            };
            await setDoc(doc(db, 'clients', firebaseUser.uid), defaultUserData);
            setUser(defaultUserData);
            setUserRole('client');
            setUserStatus('active');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Em caso de erro, ainda mantém o usuário logado com dados básicos
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: 'client',
            status: 'active'
          });
          setUserRole('client');
          setUserStatus('active');
        }
      } else {
        setUser(null);
        setUserRole(null);
        setUserStatus(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Primeiro tenta buscar na coleção 'users'
      let userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      
      // Se não encontrar na coleção 'users', tenta na coleção 'clients'
      if (!userDoc.exists()) {
        userDoc = await getDoc(doc(db, 'clients', userCredential.user.uid));
      }

      let userData;
      if (userDoc.exists()) {
        userData = userDoc.data();
      } else {
        // Se não encontrar em nenhuma coleção, usa dados padrão
        userData = {
          role: 'client',
          status: 'active'
        };
        await setDoc(doc(db, 'clients', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role: userData.role,
          status: userData.status,
          createdAt: new Date().toISOString()
        });
      }

      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        role: userData.role || 'client',
        status: userData.status || 'active'
      });
      setUserRole(userData.role || 'client');
      setUserStatus(userData.status || 'active');

      // Redirecionar com base no papel do usuário
      if (userData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/client');
      }
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        throw new Error('Email ou senha incorretos');
      }
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setUserRole(null);
      setUserStatus(null);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, userRole, userStatus, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}