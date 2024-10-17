import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const initialHabits = [
  { id: 1, habitName: 'Exercise', goal: '30 minutes daily', frequency: 'daily' },
  { id: 2, habitName: 'Read Books', goal: '1 hour daily', frequency: 'daily' },
  { id: 3, habitName: 'Meditation', goal: '10 minutes daily', frequency: 'daily' },
  { id: 4, habitName: 'Drink Water', goal: '2 liters daily', frequency: 'daily' },
  { id: 5, habitName: 'Journaling', goal: '15 minutes daily', frequency: 'daily' },
  { id: 6, habitName: 'Learn a Language', goal: '30 minutes daily', frequency: 'daily' },
  { id: 7, habitName: 'Weekly Cleanup', goal: 'Clean the house', frequency: 'weekly' },
  { id: 8, habitName: 'Grocery Shopping', goal: 'Once a week', frequency: 'weekly' },
  { id: 9, habitName: 'Family Dinner', goal: 'Every Sunday', frequency: 'weekly' },
  { id: 10, habitName: 'Financial Review', goal: 'Once a month', frequency: 'monthly' },
];

const AdminPanel = () => {
  const [habits, setHabits] = useState(initialHabits);
  const [isEditing, setIsEditing] = useState(false);
  const [editHabit, setEditHabit] = useState(null);
  const [message, setMessage] = useState('');

  const handleEditClick = (habit) => {
    setEditHabit(habit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedHabits = habits.filter(habit => habit.id !== id);
    setHabits(updatedHabits);
    setMessage('Habit deleted successfully!');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedHabits = habits.map(habit =>
      habit.id === editHabit.id ? editHabit : habit
    );
    setHabits(updatedHabits);
    setMessage('Habit updated successfully!');
    setIsEditing(false);
    setEditHabit(null);
  };

  const handleChange = (e) => {
    setEditHabit({
      ...editHabit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">Manage Habits</h1>

      {message && <div className="mb-4 p-5 bg-green-200 text-green-700 rounded">{message}</div>}


      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full bg-rose-100 border border-gray-300 rounded">
          <thead>
            <tr className="bg-rose-200">
              <th className="py-5 border-b ">Habit Name</th>
              <th className="py-2 border-b">Goal</th>
              <th className="py-2 border-b">Frequency</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {habits.map(habit => (
              <tr key={habit.id} className="hover:bg-gray-50">
                <td className="py-4 border-b text-center">{habit.habitName}</td>
                <td className="py-3 border-b text-center">{habit.goal}</td>
                <td className="py-3 border-b text-center">{habit.frequency}</td>
                <td className="py-3 border-b text-center">
                  <button onClick={() => handleEditClick(habit)} className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(habit.id)} className="text-red-500 ml-4 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Edit Habit</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="habitName">Habit Name</label>
                <input
                  type="text"
                  name="habitName"
                  value={editHabit.habitName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="goal">Goal</label>
                <input
                  type="text"
                  name="goal"
                  value={editHabit.goal}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="frequency">Frequency</label>
                <select
                  name="frequency"
                  value={editHabit.frequency}
                  onChange={handleChange}
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
                Update Habit
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 ml-4"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
