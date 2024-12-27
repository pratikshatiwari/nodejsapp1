// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Container } from '@mui/material';
import appInsights from './appInsights';
appInsights.trackPageView();
export function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
