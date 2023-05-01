import React, {useState} from 'react'
import styles from '@/styles/Lesson.module.css'
import Image from 'next/image'
import section from '@/static/section.jpg';
import piano_class from '@/static/piano_class.jpg';
import piano_lesson from '@/static/piano_lesson.jpg';
import composition from '@/static/composition.jpg';
import guitar_lesson from '@/static/guitar_lesson.jpg';
import guitar_advlesson from '@/static/guitar_advlesson.jpg';
import clarinet_lesson from '@/static/clarinet_lesson.jpg';
import flute_lesson from '@/static/flute_lesson.jpg';


function lesson_explain() {
  const picArr = [section, piano_lesson, piano_class, composition, guitar_lesson, guitar_advlesson, clarinet_lesson, flute_lesson];
  const [picIdx, setPicIdx] = useState(0);

  const picLeftChange=()=>{
    if (picIdx!==0) setPicIdx(picIdx-1);
  }

  const picRightChange=()=>{
    if (picIdx!==picArr.length-1) setPicIdx(picIdx+1);
  }
  return (
    <div className={styles.lessonExplain_wrapper}>
        <div className={styles.lessonImg}>
            <div className={styles.left} onClick={picLeftChange}>
                <div className={styles.button} style={picIdx===0?{"display":"none"}:{}}>&lt;</div>
            </div>
            <Image src={picArr[picIdx]} alt="section" fill/>
            <div className={styles.right} onClick={picRightChange}>
                <div className={styles.button} style={picIdx===picArr.length-1?{"display":"none"}:{}}>&gt;</div>
            </div>
        </div>
    </div>
  )
}

export default lesson_explain