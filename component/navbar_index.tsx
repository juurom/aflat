import React, {useState} from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/static/logo.png';
 
export default function navbar() {
  //const [reservationMenu, setReservationMenu] = useState(false)
  return (
    <>
    <ul className={styles.navbar_index}>
        <li className={styles.navlogo}><Link href={'/'}><Image src={logo} alt="logo" width={40} height={40}></Image></Link></li>
        <li className={styles.navitem}><Link href={'/about'}>About</Link></li>
        <li className={styles.navitem}><Link href={'/lesson'}>Class&Lesson</Link></li>
        <li className={styles.navitem} /*onClick={()=>setReservationMenu(!reservationMenu)}*/ ><Link href={'/reservation'}>Reservation</Link></li>
        {/*reservationMenu&&
          <ul className={styles.dropdown}>
            <li className={styles.dropitem}><Link href={'/reservation'}>예약하기</Link></li>
            <li className={styles.dropitem}><Link href={'/cancellation'}>예약 취소</Link></li>
          </ul>*/
        }
    </ul>
    </>
  )
}