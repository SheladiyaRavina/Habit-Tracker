import React, { useState } from 'react';

const NotificationPanel = () => {
  const [notifications] = useState([
    'Time to drink water!',
    'You have a habit reminder: Go for your morning run.',
    'Read 5 pages of your book today!',
  ]);

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
         <h2 className="text-xl font-bold mb-4">Habit Reminders</h2>
      <ul className="list-disc list-inside">
        {notifications.map((notification, index) => (
          <li key={index} className="text-gray-800 mb-2">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;

