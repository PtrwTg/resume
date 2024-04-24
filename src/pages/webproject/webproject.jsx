import React from 'react';
import { Link } from 'react-router-dom';
import Bluenavbar from '../../components/bluenavbar/bluenavbar';
import styles from './webprojec.module.css';
import Contact from '../../components/contact/contact';
import Web1 from './Web1.png';
import Web3 from './Web3.png';

function webproject() {
  return (
    <div>
      <Bluenavbar />
      <main className={styles.main}>
        <div className={styles.choice}>
          <div className={styles.selectchoice}>
          <Link to="/web2">
            <img className={styles.web1img} src={Web1} alt="" />
          </Link>
          <p className={styles.pmargin}>Livinghouse</p>

          </div>
          <div className={styles.selectchoice}>
          <Link to="/web3">
            <img className={styles.web3img} src={Web3} alt="" />
          </Link>
          <p className={styles.pmargin}>2 hand</p>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  )
}

export default webproject