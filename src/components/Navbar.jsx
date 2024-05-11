import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  // Following const variables affect what class is present on each button dependent on window location.
  const aboutCurrentPage = location.pathname === '/About' ? 'currentPage' : '';

  const portfolioCurrentPage =
    location.pathname === '/Portfolio' ? 'currentPage' : '';

  const contactCurrentPage =
    location.pathname === '/Contact' ? 'currentPage' : '';

  const resumeCurrentPage =
    location.pathname === '/Resume' ? 'currentPage' : '';

  return (
    <nav>
      <h1 className="name">Evan Keller</h1>
      <div className="navLinks">
        <Link to="/About" className={`nav-button ${aboutCurrentPage}`}>
          About Me
        </Link>
        <Link to="/Portfolio" className={`nav-button ${portfolioCurrentPage}`}>
          Portfolio
        </Link>
        <Link to="/Contact" className={`nav-button ${contactCurrentPage}`}>
          Contact
        </Link>
        <Link to="/Resume" className={`nav-button ${resumeCurrentPage}`}>
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
