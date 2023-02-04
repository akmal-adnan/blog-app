import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Model3d from './components/three/Model3d';
import Home from './pages/Home';
import Post from './pages/Post';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <Navbar />
      <Model3d />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
