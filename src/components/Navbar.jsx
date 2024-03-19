import { useState } from 'react';

function Navbar() {
  return (
    <nav>
      <a href="/About" className="nav-button">
        About Me
      </a>
      <a href="/Portfolio" className="nav-button">
        Portfolio
      </a>
      <a href="/Contact" className="nav-button">
        Contact
      </a>
      <a href="/Resume" className="nav-button">
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
