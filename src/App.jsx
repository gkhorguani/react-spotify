import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import styles from './App.css';
import HomePage from './containers/HomePage';

const App = () => (
  <div className={styles.main}>
    <Menu />
    <div className={styles.content}>
      <Header />
      <div className={styles.inner}>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    </div>
  </div>
);

export default App;
