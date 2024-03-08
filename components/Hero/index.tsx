"use client"
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sigmaContainer}>
        <div className={styles.sigmaSymbolContainer}>
          {/* <div className={styles.sigmaSymbol}>&Sigma;</div> */}
          <img src="/images/sigma symbol.png" alt="Sigma Symbol" className={styles.sigmaSymbol} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.sigmaText}>SIGMA</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className={styles.businessClub}>Business Club of NITT</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
