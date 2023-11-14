"use client"
import React from 'react';
import styles from './category.module.css';
import { RightIcon } from '@/assets/svg';
import Image from 'next/image';

const Category = () => {
  return (
    <div className={styles.category}>
        <div className={styles.mens}>
         <Image src={RightIcon} alt='right icon'/>
            Mens
        </div>
        <div className={styles.womens}>
            Womens
        </div>
        <div className={styles.kids}>
            Kids
        </div>
    </div>
  )
}

export default Category;