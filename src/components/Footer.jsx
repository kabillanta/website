import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Kabillan T A</p>
    </footer>
  );
};

export default Footer;
