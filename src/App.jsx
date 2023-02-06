import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Footer, Navbar } from './components';
import Model3d from './components/three/Model3d';
import Home from './pages/Home';
import Post from './pages/Post';
import Error404 from './pages/Error404';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Model3d />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
