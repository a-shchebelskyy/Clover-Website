/* eslint-disable no-undef */
import React, {  } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// routes
import { ToastContainer } from 'react-toastify';
import Routers from './routes';
import UserRoutes from './UserRouters'
// theme
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {

  const token = localStorage.getItem('token');

  // eslint-disable-next-line react-hooks/exhaustive-deps, prefer-const
 const user = JSON.parse(localStorage.getItem('user'))
  useNavigate()

  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <ToastContainer />
      {token && user?.role ? (
        user?.role === 'admin' ? <Routers /> : user?.role === 'user' ? <UserRoutes /> : undefined
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
      )}
    </ThemeProvider>
  );
}
