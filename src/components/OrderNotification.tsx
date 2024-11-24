import { Bell } from 'lucide-react';

interface OrderNotificationProps {
  count: number;
}

export default function OrderNotification({ count }: OrderNotificationProps) {
  if (count === 0) return null;

  return (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}
