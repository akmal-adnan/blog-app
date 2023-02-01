import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Model3d from './components/three/Model3d';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <>
      <Navbar />
      <Model3d />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
