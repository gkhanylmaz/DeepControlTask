import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Map from './pages/Map/Map';
import { AuthWrapper } from 'context/authContext';
import { PrivateRoute, PublicRoute } from 'components';

function App() {
  return (
    <AuthWrapper>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Map />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </AuthWrapper>
  );
}

export default App;
