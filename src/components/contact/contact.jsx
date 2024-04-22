import React from 'react';
import styles from './contact.module.css';
import { FaRegCopy } from "react-icons/fa";

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
}

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <p className={styles.pcontact}>Contact me</p>
      <div className={styles.divbutton}>
        <a href="https://github.com/PtrwTg" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello Github ! 👋</span>
            Git
          </button>
        </a>
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello Facebook ! 👋</span>
            F
          </button>
        </a>
        <a href="https://www.linkedin.com/in/pattaravit-duangmark-a33114273/" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello LinkedIn ! 👋</span>
            in
          </button>
        </a>
      </div>
      <div className={styles.divcontact}>
        <p>
          Email : mawngai0001@gmail.com{' '}
          <FaRegCopy
            className={styles.copyIcon}
            onClick={() => copyToClipboard('mawngai0001@gmail.com')}
          />
        </p>
        <p>
          Line ID : mawzaz0002{' '}
          <FaRegCopy
            className={styles.copyIcon}
            onClick={() => copyToClipboard('mawzaz0002')}
          />
        </p>
      </div>
    </div>
  );
}

export default Contact;