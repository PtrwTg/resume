import React from 'react'
import styles from './workex.module.css'
import Img1   from './1st.png'
import Img2   from './2st.png'
import Img3   from './3th.png'
import Img4   from './4th.png'
import { Link } from 'react-router-dom';


function workex() {
  return (
    <div className={styles.divcon}>
        <Link to="/portfolio">
        <button className={styles.portbut}>Portfolio</button>
        </Link>
    </div>
  )
}

export default workex