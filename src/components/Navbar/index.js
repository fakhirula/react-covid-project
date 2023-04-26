import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div id="navbar" className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h2>Covid ID</h2>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="#global">Global</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#indonesia">Indonesia</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#provinsi">Provinsi</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
