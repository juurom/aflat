import React, { useState, Dispatch, SetStateAction } from 'react';
import styles from '@/styles/ResModal.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import LoadingSpinner from './loadingSpinner';
import apple from '@/static/logo_apple.png';
declare namespace JSX {
    interface IntrinsicElements {
      reservationModal: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

interface Props {
  name: string;
  date: string;
  room: string;
  timeTo: string;
  timeFrom: string;
  phone: string;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const axios = require('axios');
const SERVER = 'https://aflatserver.herokuapp.com';


function reservationModal(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const hideModal = (props:Props)=>{
    props.setModalState(false);
  }

  const reserve = (props:Props)=>{
      axios.post(SERVER+"/reserve",{
          "name": props.name,
          "reservationDate": props.date,
          "timeFrom": props.timeFrom,
          "timeTo": props.timeTo,
          "room": props.room,
          "phone": props.phone
      })
    }

  const handleReserve = async (e, props:Props)=>{
    e.preventDefault();
    setIsLoading(true);
    try {
      await reserve(props);
      router.push({
        pathname: '/check',
        query: { 
          name: props.name, 
          reservationDate: props.date, 
          timeTo:props.timeTo,
          timeFrom:props.timeFrom, 
          room: props.room, 
          phone: props.phone 
        },
      }, '/check')    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
};

return (
    <div className={styles.modal_wrapper}>
      {isLoading&&<LoadingSpinner/>}
        <div className={styles.modal_window}>
            <button className={styles.modal_xbtn} onClick={()=>hideModal(props)}>X</button>
            <div className={styles.modal_info}>
          <Image src={apple} alt="logo" width={50} height={50}></Image>
                <div className={styles.modal_title}>예약을 확인해주세요.</div>
                <div> </div>
                <div>예약일: {props.date}</div>
                <div>room: {props.room==="A"?"Eb":props.room==="B"?"Bb":props.room==="C"?"F":props.room==="D"?"Db":""}</div>
                <div>예약시간: {props.timeFrom}-{props.timeTo}</div>
                <div>예약자명: {props.name}</div>
                <div>연락처: {props.phone}</div>
            </div>
            <Link 
            onClick={(e)=>{handleReserve(e, props)}}
             href={{
              pathname: '/check',
              query: { name: props.name, reservationDate: props.date, timeTo:props.timeTo, timeFrom:props.timeFrom, room: props.room, phone: props.phone },
              }}
              as="/check"
              >
                <button className={styles.modal_reservebtn}>예약하기</button>
            </Link>
        </div>
    </div>
    )
}

export default reservationModal