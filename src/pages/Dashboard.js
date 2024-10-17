import React, { useState } from 'react';


const initialHabits = [
  { id: 1, name: 'Morning Jog', goal: '30 minutes', frequency: 'daily', progress: 20, streak: 3, motivationalMessage: 'Keep pushing your limits!', color: 'bg-rose-400' },
  { id: 2, name: 'Read a Book', goal: '20 pages', frequency: 'daily', progress: 15, streak: 5, motivationalMessage: 'Expand your mind!', color: 'bg-green-400' },
  { id: 3, name: 'Meditation', goal: '15 minutes', frequency: 'daily', progress: 10, streak: 7, motivationalMessage: 'Find your inner peace!', color: 'bg-purple-400' },
  { id: 4, name: 'Drink Water', goal: '2 liters', frequency: 'daily', progress: 1, streak: 4, motivationalMessage: 'Stay hydrated!', color: 'bg-teal-400' },
  { id: 5, name: 'Yoga', goal: '30 minutes', frequency: 'daily', progress: 25, streak: 2, motivationalMessage: 'Breathe and stretch!', color: 'bg-orange-400' },
  { id: 6, name: 'Write a Journal', goal: '1 page', frequency: 'daily', progress: 5, streak: 6, motivationalMessage: 'Reflect on your day!', color: 'bg-red-400' },
  { id: 7, name: 'Practice Coding', goal: '1 hour', frequency: 'daily', progress: 30, streak: 1, motivationalMessage: 'Keep improving!', color: 'bg-yellow-400' },
  { id: 8, name: 'Cooking', goal: '1 new recipe', frequency: 'weekly', progress: 1, streak: 1, motivationalMessage: 'Get creative in the kitchen!', color: 'bg-pink-400' },
  { id: 9, name: 'Guitar Practice', goal: '30 minutes', frequency: 'daily', progress: 15, streak: 4, motivationalMessage: 'Strum your worries away!', color: 'bg-indigo-400' },
  { id: 10, name: 'Running', goal: '5 km', frequency: 'weekly', progress: 3, streak: 2, motivationalMessage: 'Feel the wind!', color: 'bg-gray-400' },
  { id: 11, name: 'Language Learning', goal: '10 words', frequency: 'daily', progress: 8, streak: 5, motivationalMessage: 'Expand your horizons!', color: 'bg-rose-300' },
  { id: 12, name: 'Sleep Early', goal: '8 hours', frequency: 'daily', progress: 5, streak: 6, motivationalMessage: 'Rest well to live well!', color: 'bg-green-300' },
  { id: 13, name: 'Photography', goal: '5 photos', frequency: 'weekly', progress: 3, streak: 2, motivationalMessage: 'Capture the moments!', color: 'bg-purple-300' },
  { id: 14, name: 'Volunteer', goal: '1 hour', frequency: 'weekly', progress: 2, streak: 3, motivationalMessage: 'Make a difference!', color: 'bg-teal-300' },
  { id: 15, name: 'Gardening', goal: '1 hour', frequency: 'weekly', progress: 1, streak: 2, motivationalMessage: 'Nurture nature!', color: 'bg-orange-300' },
  { id: 16, name: 'Cycling', goal: '10 km', frequency: 'weekly', progress: 5, streak: 4, motivationalMessage: 'Explore on wheels!', color: 'bg-red-300' },
  { id: 17, name: 'Online Course', goal: '1 module', frequency: 'weekly', progress: 2, streak: 1, motivationalMessage: 'Learn something new!', color: 'bg-yellow-300' },
  { id: 18, name: 'Socialize', goal: '1 meetup', frequency: 'weekly', progress: 1, streak: 3, motivationalMessage: 'Connect with others!', color: 'bg-pink-300' },
];

const Dashboard = () => {
  const [habits, setHabits] = useState(initialHabits);

  const markHabitComplete = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              progress: habit.progress + 1,
              streak: habit.streak + 1,
              motivationalMessage: 'Great job! Keep it up!',
            }
          : habit
      )
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8  bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">Your Daily Habits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <div key={habit.id} className={`${habit.color} p-4 rounded-lg shadow text-white`}>
              <h2 className="text-xl font-semibold">{habit.name}</h2>
              <p className="text-white">Goal: {habit.goal}</p>
              <p className="text-white">Progress: {habit.progress} / {habit.goal}</p>
              <p className="text-white">Streak: {habit.streak} days</p>
              <p className="font-bold">{habit.motivationalMessage}</p>
              <button
                onClick={() => markHabitComplete(habit.id)}
                className="mt-4 w-full bg-white text-rose-700 py-2 rounded hover:bg-rose-200"
              >
                Mark as Complete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
