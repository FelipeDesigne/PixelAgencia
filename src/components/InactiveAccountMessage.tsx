import { AlertTriangle, MessageCircle } from 'lucide-react';

interface InactiveAccountMessageProps {
  reason?: string;
}

export default function InactiveAccountMessage({ reason }: InactiveAccountMessageProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = '14981181568';
    const message = 'Olá, gostaria de solicitar a reativação da minha conta na Pixel Agência.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <AlertTriangle className="h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Conta Inativa
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sua conta está atualmente inativa.
          </p>
          {reason && (
            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-sm text-red-700">
                <strong>Motivo:</strong> {reason}
              </p>
            </div>
          )}
          <button
            onClick={handleWhatsAppClick}
            className="mt-6 flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
          >
            <MessageCircle size={20} />
            <span>Entrar em Contato via WhatsApp</span>
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            Entre em contato com o administrador para reativar sua conta.
          </p>
        </div>
      </div>
    </div>
  );
}
