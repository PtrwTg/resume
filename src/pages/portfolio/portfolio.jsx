import React from 'react';
import { Link } from 'react-router-dom';
import Bluenavbar from '../../components/bluenavbar/bluenavbar';
import styles from './portfolio.module.css';
import webimg from './Web_button.png';
import appimg from './App_button.png';
import Contact from '../../components/contact/contact';

const Portfolio = () => {
  return (
    <div>
      <Bluenavbar />
      <main className={styles.main}>
        <div className={styles.choice}>
          <Link to="/appproject">
            <img className={styles.appimg} src={appimg} alt="" />
            <p>Application</p>
          </Link>
          <Link to="/webproject">
            <img className={styles.webimg} src={webimg} alt="" />
            <p>Website</p>
          </Link>
        </div>
        
      </main>
      <Contact />
    </div>
  );
};

export default Portfolio;