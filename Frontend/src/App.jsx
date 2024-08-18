import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';  // Adjust import if needed
import Signup from './components/Sinup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
