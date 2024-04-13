import React from 'react';
import { Link } from 'react-router-dom';
import Bluenavbar from '../../components/bluenavbar/bluenavbar';
import styles from './webprojec.module.css';
import Contact from '../../components/contact/contact';
import Web1 from './Web1.png';
import Web2 from './Web2.png';
import Web3 from './Web3.png';

function webproject() {
  return (
    <div>
      <Bluenavbar />
      <main className={styles.main}>
        <div className={styles.choice}>
          <Link to="/web2">
            <img className={styles.web1img} src={Web1} alt="" />
          </Link>
          <Link to="/web3">
            <img className={styles.web3img} src={Web3} alt="" />
          </Link>
        </div>
        <div className={styles.divp}>
          <p className={styles.pmargin1}>Livinghouse</p>
          <p className={styles.pmargin3}>2 hand</p>
        </div>
      </main>
      <Contact />
    </div>
  )
}

export default webproject