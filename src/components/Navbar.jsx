import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

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
      <a href="/About" className={`nav-button ${aboutCurrentPage}`}>
        About Me
      </a>
      <a href="/Portfolio" className={`nav-button ${portfolioCurrentPage}`}>
        Portfolio
      </a>
      <a href="/Contact" className={`nav-button ${contactCurrentPage}`}>
        Contact
      </a>
      <a href="/Resume" className={`nav-button ${resumeCurrentPage}`}>
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
