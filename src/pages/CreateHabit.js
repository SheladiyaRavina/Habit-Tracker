import React, { useState } from 'react';

const CreateHabit = () => {
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = { habitName, goal, frequency };

    const existingHabits = JSON.parse(localStorage.getItem('habits')) || [];
    existingHabits.push(newHabit);
    localStorage.setItem('habits', JSON.stringify(existingHabits));

    setHabitName('');
    setGoal('');
    setFrequency('daily');
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">Create a New Habit</h1>


      <div className="max-w-md mx-auto bg-violet-300 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2" htmlFor="habitName">Habit Name</label>
            <input
              type="text"
              id="habitName"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2" htmlFor="goal">Goal</label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2" htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600"
          >
            Create Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHabit;
