import React from 'react';
import { Link } from 'react-router-dom';
import Bluenavbar from '../../components/bluenavbar/bluenavbar';
import styles from './appproject.module.css';
import Contact from '../../components/contact/contact';
import App1 from './App1.png';
import App2 from './App2.png';
import App3 from './App3.png';

function AppProject() {
  return (
    <div>
      <Bluenavbar />
      <main className={styles.main}>
        <div className={styles.choice}>
          <div>
            <Link to="/app1">
            <img className={styles.app1img} src={App1} alt="" />
          </Link>
          <p className={styles.margin1}>JournalMood</p>
          </div>
          <div>
          <Link to="/app2">
            <img className={styles.app2img} src={App2} alt="" />
          </Link>
          <p className={styles.margin2}>Wonder</p>
          </div>
          <div>
          <Link to="/app3">
            <img className={styles.app3img} src={App3} alt="" />
          </Link>
          <p className={styles.margin3}>Pocket</p>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  )
}

export default AppProject