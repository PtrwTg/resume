import React from 'react'
import styles from './web1.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import Web1_1 from './web1_1.png'
import Web1_2 from './web1_2.png'
import Web1_3 from './web1_3.png'
import Contact from '../../../components/contact/contact'


function app1() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app1_1} src={Web1_1} alt="" />
        <img className={styles.app1_2} src={Web1_2} alt="" />
        <p className={styles.p}>After I took the flaws from my old website and improved them. I ended up 
            <br /> designing my new website which resulted in the following results:</p>
        <img className={styles.app1_3} src={Web1_3} alt="" />

        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default app1