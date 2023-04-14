import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/static/logo.png';
 
export default function navbar() {
  
  return (
    <>
    <ul className={styles.navbar_others}>
        <li className={styles.navlogo}><Link href={'/'}><Image src={logo} alt="logo" width={40} height={40}></Image></Link></li>
        <li className={styles.navitem}><Link href={'/about'}>About</Link></li>
        <li className={styles.navitem}><Link href={'/lesson'}>Class&Lesson</Link></li>
        <li className={styles.navitem}><Link href={'/reservation'}>Reservation</Link></li>
    </ul>
    </>
  )
}