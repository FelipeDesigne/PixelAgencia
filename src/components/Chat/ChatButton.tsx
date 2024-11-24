import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatWindow } from './ChatWindow';

interface ChatButtonProps {
  orderId: string;
}

export function ChatButton({ orderId }: ChatButtonProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        title="Abrir chat"
      >
        <MessageSquare size={18} />
        <span>Chat</span>
      </button>

      <ChatWindow
        orderId={orderId}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
}
