import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { HardDrive } from 'lucide-react';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  driveLink?: string;
}

export default function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'clients', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as ProfileData;
        setProfile(data);
        setEditedProfile(data);
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
      toast.error('Erro ao carregar perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user || !editedProfile) return;

    try {
      const docRef = doc(db, 'clients', user.uid);
      await updateDoc(docRef, editedProfile);
      setProfile(editedProfile);
      setIsEditing(false);
      toast.success('Perfil atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      toast.error('Erro ao atualizar perfil');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Meu Perfil</h2>
      </div>

      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                value={editedProfile?.name || ''}
                onChange={(e) =>
                  setEditedProfile((prev) =>
                    prev ? { ...prev, name: e.target.value } : null
                  )
                }
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={editedProfile?.email || ''}
                onChange={(e) =>
                  setEditedProfile((prev) =>
                    prev ? { ...prev, email: e.target.value } : null
                  )
                }
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                value={editedProfile?.phone || ''}
                onChange={(e) =>
                  setEditedProfile((prev) =>
                    prev ? { ...prev, phone: e.target.value } : null
                  )
                }
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link do Google Drive
              </label>
              <div className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-blue-600" />
                <input
                  type="url"
                  value={editedProfile?.driveLink || ''}
                  onChange={(e) =>
                    setEditedProfile((prev) =>
                      prev ? { ...prev, driveLink: e.target.value } : null
                    )
                  }
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="input-field"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Adicione o link da pasta compartilhada do Google Drive onde seus arquivos serão armazenados.
              </p>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedProfile(profile);
                }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="btn-primary"
              >
                Salvar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Nome</h3>
              <p className="mt-1 text-base text-gray-900">{profile?.name}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-base text-gray-900">{profile?.email}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Telefone</h3>
              <p className="mt-1 text-base text-gray-900">{profile?.phone}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Link do Google Drive</h3>
              <div className="mt-1 flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-blue-600" />
                {profile?.driveLink ? (
                  <a
                    href={profile.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Acessar Google Drive
                  </a>
                ) : (
                  <p className="text-gray-500 italic">Nenhum link configurado</p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="btn-primary"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
