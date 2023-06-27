import { Link } from 'react-router-dom';
import StyledFooter from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <div id="footer" className="container">
        <footer className="footer">
          <div className="footer__brand">
            <h2 className="footer__title">Covid ID</h2>
            <p className="footer__author">Developed by @fakhirula</p>
          </div>
          <ul className="footer__list">
            <Link className="footer__item" to="/covid/global">
              Global
            </Link>
            <Link className="footer__item" to="/covid/indonesia">
              Indonesia
            </Link>
            <Link className="footer__item" to="/covid/provinsi">
              Provinsi
            </Link>
            <Link className="footer__item" to="/about">
              About
            </Link>
          </ul>
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
