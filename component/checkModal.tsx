import React from 'react'
import styles from '@/styles/Check.module.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/static/logo.png';
import { useRouter } from 'next/router'

function checkModal() {

  const router = useRouter()
  const props = router.query;
  return (
    <div className={styles.check_wrapper}>
        <div className={styles.check_box}>
            <div className={styles.imagediv}>
                <Image src={logo} alt="logo" width={40} height={40}></Image>
            </div>
            <div className={styles.textdiv}>
                <div className={styles.title}>예약이 완료되었습니다.</div>
                <div>예약일: {props.reservationDate}</div>
                <div>room: {props.room==="A"?"Eb":props.room==="B"?"Bb":props.room==="C"?"F":props.room==="D"?"Db":""}</div>
                <div>예약시간: {props.timeFrom}-{props.timeTo}</div>
                <div>예약자명: {props.name}</div>
                <div>연락처: {props.phone}</div>
            </div>
            <div className={styles.btndiv}>
                <Link className={styles.mainbtn} href={'/'}>메인으로</Link>
                <Link className={styles.resbtn} href={'/reservation'}>추가예약</Link>
            </div>
        </div>
    </div>
  )
}

export default checkModal