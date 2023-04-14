import Navbar from '@/component/navbar'
import React from 'react'
import styles from '@/styles/About.module.css'
import Footer from '@/component/footer';
import AboutPicture from '@/component/aboutPicture';

export default function about() {
  return (
    <>
    <div className={styles.about_wrapper}>
    <Navbar></Navbar>

    <div className={styles.pic}>
      <AboutPicture></AboutPicture>
    </div>
    <div className={styles.text}>
에이플랫 뮤직 스튜디오는 <br/>
취향이 가득한 공간입니다.<br/><br/>

음악을 좋아하고 알아가길 원하는 분들이<br/> 
서로 공유하며 넓혀가길 바라요.<br/><br/>

당신의 음악이 궁금해요.<br/>
우리 서로의 취향을 알아가요.<br/><br/>
넓혀가요.<br/><br/>
<span className={styles.aflat}>AFLAT MUSIC STUDIO & LESSON</span>
    </div>
    </div>
    <Footer></Footer>

    </>
  )
}