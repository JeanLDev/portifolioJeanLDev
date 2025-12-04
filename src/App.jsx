
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import Home from './Pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      
    </Routes>
  );
}

export default App;
  