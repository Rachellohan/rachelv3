import React from 'react';
import styles from '../styles/HomeHeader.module.css';
import profilePic from '/Users/rachellohan/Rachellohan/rachellohan/public/Screen Shot 2023-09-19 at 9.47.27 PM.png';

import Image from 'next/image';

export default function HomeHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div
            className={`${styles.headerFirstLineText} ${styles.greyGradientText}`}
          >
            Hi, I'm
          </div>
          <div
            className={`${styles.headerSecondLineText} ${styles.colorGradientText}`}
          >
            Rachel Lohan!
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={profilePic}
            alt="Picture of Rachel Elizabeth Lohan"
            priority
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
      </div>
    </>
  );
}