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
      <div className={styles.inner}>
        <FeaturedPlaylistCard
          name="New Music Friday"
          description="Fletcher speaks up - Plus Logic and Lil Yachty drop new mixtapes"
          image="https://i.scdn.co/image/cd04b8304b7d22216a4c1867e619ea59105f325f"
        />
      </div>
    </div>
  </div>
);

export default App;
