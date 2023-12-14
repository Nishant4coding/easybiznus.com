"use client"
import React from 'react';
import styles from './category.module.css';
import { RightIcon } from '@/assets/svg';
import Image from 'next/image';

const Category = () => {
  return (
    <div className={styles.category}>
        <div className={styles.mensSection}>
         <Image src={RightIcon} alt='right icon'/>
            Mens
        </div>
        <div className={styles.womensSection}>
            Womens
        </div>
        <div className={styles.kidsSection}>
            Kids
        </div>
    </div>
  )
}

export default Category;