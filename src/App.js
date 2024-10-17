import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard'; // User Dashboard
import HabitManagement from './pages/HabitManagement';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel'; // Admin Panel
import CreateHabit from './pages/CreateHabit'; // Admin: Create Habit
import Analytics from './pages/Analytics'; // Admin: Analytics
import Profile from './pages/Profile'; // User: Profile

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const ProtectedRoute = ({ isAuthenticated, role, requiredRole, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (role !== requiredRole) {
    return <Navigate to={role === 'admin' ? '/admin' : '/'} />;
  }

  return children;
};

const App = () => {
  const [authUser, setAuthUser] = useState({
    isAuthenticated: false,
    role: null,
  });

  useEffect(() => {
    // Check local storage or some authentication method to set authUser
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setAuthUser({
        isAuthenticated: true,
        role: currentUser.role, // Get the role from the current user data
      });
    }
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes (Protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-habit"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="admin">
                <CreateHabit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="admin">
                <Analytics />
              </ProtectedRoute>
            }
          />

          {/* User Routes (Protected) */}
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="user">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/habits"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="user">
                <HabitManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={authUser.isAuthenticated} role={authUser.role} requiredRole="user">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to={authUser.isAuthenticated ? (authUser.role === 'admin' ? '/admin' : '/') : '/login'} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
