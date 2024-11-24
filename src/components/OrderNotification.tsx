import { Bell } from 'lucide-react';

interface OrderNotificationProps {
  count: number;
}

export default function OrderNotification({ count }: OrderNotificationProps) {
  return (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-600" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}
