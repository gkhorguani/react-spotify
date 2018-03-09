import React from 'react';
import Menu from './Menu';
import Header from './Header';
import styles from './App.css';

import FeaturedPlaylistCard from './components/cards/FeaturedPlaylistCard';

const App = () => (
  <div className={styles.main}>
    <Menu />
    <div className={styles.content}>
      <Header />
      <FeaturedPlaylistCard
        image="https://i.scdn.co/image/f1140a99030272969410e40aab639a888351338a"
        name="New Music Friday Latin"
      />
      <div className={styles.inner} />
    </div>
  </div>
);

export default App;
