import Logo from '../../assets/Logo.svg';

import styles from '../Header/Header.module.scss';

export const Header = () => {
  return (
    <header>
      <div id="top" className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__logo}>
            <a href="#top">
              <img src={Logo} alt="logo svg" />
            </a>
          </div>
          <div className={styles.navbar__buttons}>
            <a className={styles.navbar__link} href="#users">
              Users
            </a>
            <a className={styles.navbar__link} href="#register">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
