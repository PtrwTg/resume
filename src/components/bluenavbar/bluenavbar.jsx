import React, { useState, useEffect } from 'react';
import styles from './bluenavbar.module.css';
import Back from './arrow.png';
import { Link, useNavigate } from 'react-router-dom';

function BlueNavbar() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className={`${styles.bluenavbar} ${visible ? '' : styles.hidden}`}>
      <img className={styles.back} src={Back} alt="" onClick={handleGoBack} />
      <div className={styles.menu}>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/" onClick={(event) => scrollToSection(event, 'contact')}>
            Contact Me
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default BlueNavbar;