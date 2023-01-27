import React from 'react';

function Footer() {
  return (
    <footer className="footer container">
      <span className="footer__copy">
        &#169; {new Date().getFullYear()} Akmal Adnan. All rigths reserved
      </span>
    </footer>
  );
}

export default Footer;
