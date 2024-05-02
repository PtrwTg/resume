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
        <div className={styles.selectchoice}>
          <Link to="/appproject">
            <img className={styles.appimg} src={appimg} alt="" />
          </Link>
          <p>Application</p>
          </div>
          <div className={styles.selectchoice}>
          <Link to="/webproject">
            <img className={styles.webimg} src={webimg} alt="" />
          </Link>
          <p>Website</p>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default Portfolio;