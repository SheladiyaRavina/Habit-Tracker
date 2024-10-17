import React, { useState } from 'react';

const HabitManagement = () => {
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [habits, setHabits] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: Math.random(),
      name: habitName,
      goal,
      frequency,
      startDate,
      progress: 0,
      streak: 0,
      motivationalMessage: 'New habit added!',
    };
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    setHabitName('');
    setGoal('');
    setFrequency('daily');
    setStartDate('');
  };

  return (
    <div className="flex flex-col min-h-screen  p-8 items-center bg-gradient-to-r from-blue-200 to-purple-200">
      <div className='max-w-7xl w-full'>
      <div className="bg-violet-300 p-8 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-rose-600">Add a New Habit</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="habitName">Habit Name</label>
            <input
              type="text"
              id="habitName"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="goal">Goal</label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
            />
          </div>
          <button
            type="submit"
            className="bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition duration-300 w-full"
          >
            Add Habit
          </button>
        </form>
      </div>


      <div className="flex-grow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Your Habits</h2>
        {habits.length === 0 ? (
          <p className="text-gray-500 text-center">No habits added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className={`bg-${habit.frequency === 'daily' ? 'green' : habit.frequency === 'weekly' ? 'yellow' : 'blue'}-100 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
                <p className="text-gray-700">Goal: {habit.goal}</p>
                <p className="text-gray-700">Frequency: {habit.frequency}</p>
                <p className="text-gray-700">Start Date: {habit.startDate}</p>
                <p className="text-green-600 font-bold">{habit.motivationalMessage}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default HabitManagement;
