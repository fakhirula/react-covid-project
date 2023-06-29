import StyledNavbar from './StyledNavbar';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__brand">
            <h2>Covid ID</h2>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/">Global</Link>
            </li>
            <li className="navbar__item">
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li className="navbar__item">
              <Link to="/covid/provinsi">Provinsi</Link>
            </li>
            <li className="navbar__item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
