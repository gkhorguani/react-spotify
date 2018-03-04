import React from 'react';
import Menu from './Menu';
import Header from './Header';
import styles from './App.css';

const App = () => (
  <div className={styles.main}>
    <Menu />
    <div className={styles.content}>
      <Header />
      <div className={styles.inner} />
    </div>
  </div>
);

export default App;
