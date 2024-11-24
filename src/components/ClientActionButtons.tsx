import { MessageCircle, FolderGoogle } from 'lucide-react';

interface ClientActionButtonsProps {
  driveLink?: string;
  whatsappNumber?: string;
}

export default function ClientActionButtons({ 
  driveLink,
  whatsappNumber = '14981181568' // Número padrão
}: ClientActionButtonsProps) {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDriveClick = () => {
    if (driveLink) {
      window.open(driveLink, '_blank');
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </button>

      {driveLink && (
        <button
          onClick={handleDriveClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FolderGoogle className="w-5 h-5" />
          Google Drive
        </button>
      )}
    </div>
  );
}
