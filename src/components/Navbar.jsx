import React from 'react';

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
          <li className="navbar-item" key={item}>
            <button className="navbar-link" onClick={() => onNavClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
