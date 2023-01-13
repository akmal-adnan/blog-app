/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function DarkMode() {
  const { body } = document;
  const lightTheme = 'light';
  const darkTheme = 'dark-theme';

  let theme;
  let icon;

  if (localStorage) {
    theme = localStorage.getItem('theme');
    icon = localStorage.getItem('icon');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = () => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      //   e.target.classList.remove(clickedClass);
      document.getElementById('theme-button').classList.remove('ri-sun-line');
      localStorage.setItem('icon', 'ri-moon-line');
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
      icon = 'ri-moon-line';
    } else {
      body.classList.replace(lightTheme, darkTheme);
      //   e.target.classList.add(clickedClass);
      document.getElementById('theme-button').classList.add('ri-sun-line');
      localStorage.setItem('icon', 'ri-sun-line');
      localStorage.setItem('theme', 'dark-theme');
      theme = darkTheme;
      icon = 'ri-sun-line';
    }
  };

  return (
    <i
      className={`ri-moon-line change-theme ${icon}`}
      id="theme-button"
      onClick={e => switchTheme(e)}
      role="button"
    />
  );
}

export default DarkMode;
