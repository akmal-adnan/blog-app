/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data';
import DarkMode from './DarkMode';

function Navbar() {
  const [showMenu, setMenu] = useState('');

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('bg-header');
      } else {
        header.classList.remove('bg-header');
      }
    };
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  const handleMenu = () => {
    if (!showMenu) {
      setMenu('show-menu');
    } else {
      setMenu('');
    }
  };

  const removeMenu = () => {
    setMenu('');
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={images.logo} alt="logo" />
          Akmal
        </Link>

        <div className={`nav__menu ${showMenu}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={removeMenu}>
                Home
              </Link>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={removeMenu}>
                About
              </a>
            </li>

            <li className="nav__item">
              <Link to="/post" className="nav__link" onClick={removeMenu}>
                Post
              </Link>
            </li>

            <li className="nav__item">
              <a
                href="https://github.com/akmal-adnan/blog-app"
                target="https://github.com/akmal-adnan/blog-app"
                className="nav__link"
                onClick={removeMenu}>
                Source
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleMenu}>
            <i className="ri-close-line" />
          </div>

          <img src={images.leaf3} alt="nav-pic" className="nav__img-1" />
          <img src={images.leaf3} alt="nav-pic" className="nav__img-2" />
        </div>

        <div className="nav__buttons">
          <DarkMode />

          <div className="nav__toggle" id="nav-toggle" onClick={handleMenu}>
            <i className="ri-apps-2-line change-theme" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
