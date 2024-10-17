// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const validateLogin = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.email === email && user.password === password && user.role === role);
};

const Login = ({ setAuthUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
 
      navigate(currentUser.role === 'admin' ? '/admin' : '/'); 
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    

    const loggedInUser = validateLogin(email, password, role);
    
    if (loggedInUser) {
 
      localStorage.setItem('currentUser', JSON.stringify(loggedInUser));

      setAuthUser({ isAuthenticated: true, role: loggedInUser.role });

      navigate(loggedInUser.role === 'admin' ? '/admin' : '/'); 
    } else {
      setError('Invalid email, password, or role');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="bg-violet-300 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
