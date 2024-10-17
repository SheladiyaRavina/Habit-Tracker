import React from 'react';


const dummyAnalytics = [
  { id: 1, habitName: 'Drink Water', totalProgress: 50, averageStreak: 5 },
  { id: 2, habitName: 'Exercise', totalProgress: 120, averageStreak: 4 },
  { id: 3, habitName: 'Read a Book', totalProgress: 60, averageStreak: 3 },
  { id: 4, habitName: 'Meditate', totalProgress: 45, averageStreak: 6 },
  { id: 5, habitName: 'Sleep Early', totalProgress: 75, averageStreak: 8 },
  { id: 6, habitName: 'Eat Healthy', totalProgress: 90, averageStreak: 10 },
  { id: 7, habitName: 'Journal', totalProgress: 30, averageStreak: 2 },
  { id: 8, habitName: 'Learn a Language', totalProgress: 40, averageStreak: 3 },
  { id: 9, habitName: 'Practice Guitar', totalProgress: 80, averageStreak: 7 },
  { id: 10, habitName: 'Walk 10,000 Steps', totalProgress: 110, averageStreak: 9 },
  { id: 11, habitName: 'No Sugar', totalProgress: 55, averageStreak: 4 },
  { id: 12, habitName: 'Daily Affirmations', totalProgress: 65, averageStreak: 6 },
  { id: 13, habitName: 'Watch Less TV', totalProgress: 20, averageStreak: 1 },
  { id: 14, habitName: 'Declutter', totalProgress: 95, averageStreak: 8 },
  { id: 15, habitName: 'Practice Mindfulness', totalProgress: 35, averageStreak: 2 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">Analytics</h1>

   
      <div className="max-w-4xl mx-auto bg-teal-100 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-rose-200">
                <th className="px-4 py-4 text-left">Habit Name</th>
                <th className="px-4 py-2 text-center">Total Progress</th>
                <th className="px-4 py-2 text-center">Average Streak</th>
              </tr>
            </thead>
            <tbody>
              {dummyAnalytics.map((analytics) => (
                <tr key={analytics.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="border px-4 py-3">{analytics.habitName}</td>
                  <td className="border px-4 py-2 text-center">{analytics.totalProgress}</td>
                  <td className="border px-4 py-2 text-center">{analytics.averageStreak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
