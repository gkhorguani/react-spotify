import React from 'react';
import styles from './Menu.css';

const Menu = () => (
  <div className={styles.nav}>
    <div className={styles.logo}>
      <img className={styles.logoImg} src="images/sp_logo.png" alt="logo" />
    </div>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        <li>
          <a href="#">
            <i className="fas fa-music" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-podcast" />
          </a>
          <span className={styles.borderBottomListItem} />
        </li>
        <li>
          <a href="#">
            <i className="far fa-user" />
          </a>
          <span className={styles.borderBottomListItem} />
        </li>
        <li>
          <a href="#">
            <i className="far fa-heart" />
          </a>
          <span className={styles.borderBottomListItem} />
        </li>
        <li>
          <a href="#">
            <i className="fas fa-list" />
          </a>
          <span className={styles.borderBottomListItem} />
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
