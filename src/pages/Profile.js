import React, { useState } from 'react';

const Profile = () => {
  // Initial state for profile, retrieving data from local storage if available
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : { name: '', email: '', goal: '', motivation: '' };
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userProfile', JSON.stringify(profile));
    console.log('Profile updated:', profile);
    alert('Profile updated successfully!'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-4">
      <div className="bg-violet-300 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="goal">Personal Goal</label>
            <input
              type="text"
              id="goal"
              name="goal"
              value={profile.goal}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="motivation">Motivation</label>
            <textarea
              id="motivation"
              name="motivation"
              value={profile.motivation}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600 w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
