import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
