/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { images } from '../data';

function Navbar() {
  const [showMenu, setMenu] = useState('');

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
        <a href="#home" className="nav__logo">
          <img src={images.logo} alt="logo" />
          Akmal Adnan
        </a>

        <div className={`nav__menu ${showMenu}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={removeMenu}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={removeMenu}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#Post" className="nav__link" onClick={removeMenu}>
                Post
              </a>
            </li>
            <li className="nav__item">
              <a href="#Source" className="nav__link" onClick={removeMenu}>
                Source
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleMenu}>
            <i className="ri-close-line" />
          </div>

          {/* <img
            src="assets/img/leaf-branch-4.png"
            alt="nav-pic"
            className="nav__img-1"
          />
          <img
            src="assets/img/leaf-branch-3.png"
            alt="nav-pic"
            className="nav__img-2"
          /> */}
        </div>

        <div className="nav__buttons">
          <i className="ri-moon-line change-theme" id="theme-button" />

          <div className="nav__toggle" id="nav-toggle" onClick={handleMenu}>
            <i className="ri-apps-2-line change-theme" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
