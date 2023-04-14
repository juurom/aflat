import React, {useState} from 'react'
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import logo from '@/static/logo.png';
import Navbar from '@/component/navbar_index';

function index() {
  return (
    <div className={styles.index}>
      <Navbar></Navbar>
    <div className={styles.index_wrapper}>
      <div>
        <div>
          <Image src={logo} alt="logo" width={100} height={100}></Image>
        </div>
        <div id='title' className={styles.title}>AFLAT MUSIC STUDIO & LESSON</div>
      </div>
    </div>
    </div>
  )
}



export default index