import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); 
    window.location.href = '/login'; 
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Habit Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            {currentUser ? (
              <>
                {currentUser.role === 'user' && (
                  <>
                    <li>
                      <Link to="/" className="hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/profile" className="hover:text-gray-300">Profile</Link>
                    </li>
                    <li>
                      <Link to="/habits" className="hover:text-gray-300">Habit Management</Link>
                    </li>
                  </>
                )}
                
                {currentUser.role === 'admin' && (
                  <>
                    <li>
                      <Link to="/admin" className="hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/create-habit" className="hover:text-gray-300">Create Habit</Link>
                    </li>
                    <li>
                      <Link to="/analytics" className="hover:text-gray-300">View Analytics</Link>
                    </li>
                  </>
                )}
                <li>
                  <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-gray-300">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-gray-300">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
