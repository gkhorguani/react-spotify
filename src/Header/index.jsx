import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.topMenu}>
      <ul>
        <li>
          <a href="#">Recommended</a>
        </li>
        <li>
          <a href="#">New Releases</a>
        </li>
        <li>
          <a href="#">Top Charts</a>
        </li>
        <li>
          <a href="#">Moods</a>
        </li>
        <li>
          <a href="#">Arround You</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
