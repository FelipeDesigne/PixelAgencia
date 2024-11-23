import { AlertCircle } from 'lucide-react';

export default function PendingApprovalMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <AlertCircle className="h-12 w-12 text-yellow-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Aprovação Pendente
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sua conta está aguardando aprovação do administrador. Por favor, aguarde o email de confirmação.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            Se você tiver alguma dúvida, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  );
}
