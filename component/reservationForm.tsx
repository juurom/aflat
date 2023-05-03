import React, {ReactElement, useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import logo from '@/static/logo.png';
import styles from '@/styles/Reservation.module.css'
import CustomCalendar from '@/component/custom_calendar';
import rooma from '@/static/rooma.jpeg';
import roomb from '@/static/roomb.jpeg';
import roomc from '@/static/roomc.jpeg';
import roomd from '@/static/roomd.jpeg';
import roomData from '@/static/roomExp.json'
import ReservationModal from '@/component/reservationModal';
import LoadingSpinner from '@/component/loadingSpinner';
const SERVER = 'https://aflatserver.herokuapp.com'

interface reservationInfo {
    reservationDate:string;
    room:string;
    timeFrom:string;
    timeTo:string;
}

export default function reservationForm() {
  const [reservationDate, setReservationDate] = useState("날짜를 선택하세요.")
  const [reservationTimeIdx, setReservationTimeIdx] = useState<Array<number>>([])
  const [reservationName, setReservationName] = useState("")
  const [reservationPhone, setReservationPhone] = useState("")
  const [reservationRoom, setReservationRoom] = useState("room을 선택하세요.")
  const [roomImage, setRoomImage] = useState(<Image src={rooma} alt="room a" fill style={{objectFit:"cover"}}/>)
  const [roomExplain, setRoomExplain] = useState("room을 선택하세요.")

  const [nameError, setNameError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [roomError, setRoomError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [noError, setNoError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [reservedData, setReservedData] = useState([]);
  const [disabledArr, setDisabledArr] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]);
  
  const [modalState, setModalState] = useState(false);

  const checkboxesRef = useRef<(HTMLInputElement)[]>([]);

  const axios = require('axios')

  const getDB = async()=>{
    setLoading(true);
    const res = await axios.get(SERVER+"/showReserved");
    const data = await res.data;
    setReservedData(data);
    //console.log("DB:",data);
    setLoading(false);
  }

  useEffect(()=>{
    getDB();
  },[])

  const reservationTime = 
  ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30","21:00","21:30","22:00","22:30","23:00","23:00","24:00"]; 

  useEffect(()=>{
  if (reservationDate==="날짜를 선택하세요." || reservationRoom==="room을 선택하세요."){
    return;
  }
  const enableTimeBtn = ()=>{
    let disabled:Array<number> = [];
    const curDate = moment(reservationDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    reservedData.map((d:reservationInfo)=>{
      if (curDate === d.reservationDate && reservationRoom === d.room){
        const timeFrom = reservationTime.indexOf(d.timeFrom);
        const timeTo = reservationTime.indexOf(d.timeTo);
        for (let idx = timeFrom; idx < timeTo; idx++) disabled.push(idx);
      }
    })
    setDisabledArr(disabled);
    setReservationTimeIdx([]);
  }
  enableTimeBtn();
  }, [reservationDate, reservationRoom])

  useEffect(() => {
    setNoError(
      reservationDate!=="날짜를 선택하세요." &&
      reservationTimeIdx.length!==0 &&
      reservationName!=="" &&
      reservationPhone!=="" &&
      reservationRoom!=="room을 선택하세요."
    )
  }, [reservationDate, [...reservationTimeIdx], reservationName, reservationPhone, reservationRoom]);

  useEffect(() => {
    if (reservationDate!=="날짜를 선택하세요." && reservationRoom!=="room을 선택하세요."){
      checkboxesRef.current.forEach((checkbox:HTMLInputElement) => checkbox.checked = false);
    }
  }, [reservationDate, reservationRoom])

  const roomChange = (param)=>{
    setReservationRoom(param);
    switch(param){
      case('A'):{setRoomImage(<Image src={rooma} alt="Eb room" fill style={{objectFit:"cover"}}/>); setRoomExplain(roomData.A.explanation); break;}
      case('B'):{setRoomImage(<Image src={roomb} alt="Db room" fill style={{objectFit:"cover"}}/>); setRoomExplain(roomData.B.explanation); break;}
      case('C'):{setRoomImage(<Image src={roomc} alt="F room" fill style={{objectFit:"cover"}}/>); setRoomExplain(roomData.C.explanation); break;}
      case('D'):{setRoomImage(<Image src={roomd} alt="Bb room" fill style={{objectFit:"cover"}}/>); setRoomExplain(roomData.D.explanation); break;}
      default: setRoomImage(<Image src={logo} alt="error"/>); setRoomExplain("일시적인 오류입니다. 잠시 후 다시 시도해주세요.")
    }
  }

  const timeblock = ()=>{ 
    return(
      <>
          {reservationTime.map((t, idx)=>(
              <div key={idx} className={styles.times}>
                <input id={"timeCheckbox-"+idx} type="checkbox" className={styles.timeCheckbox}
                ref={(el) =>  {
                    if (el) {
                    checkboxesRef.current[idx] = el;
                  }}}
                disabled={disabledArr.includes(idx)?true:false}
                data-idx={idx} onChange={timeChange}/>
                <label htmlFor={"timeCheckbox-"+idx} className={styles.timebox} style={idx===reservationTime.length-1 ? {"visibility":"hidden"} : {}}></label>
                <div className={styles.timeline}>{reservationTime[idx]}</div>
              </div>
          ))}
      </>
      )
  }

  const continuous = (arr:Array<number>)=>{
    if (arr.length===0) return true;
    for (let i=1; i<arr.length; i++){
      if (arr[i-1]!==arr[i]-1) return false;
    }
    return true;
  }

  const timeChange = (e)=>{
    const idx = parseInt(e.target.dataset.idx);
    let idxArr:Array<number>=reservationTimeIdx;
    if (e.target.checked){
      idxArr.push(idx);
    }
    else{
      const eraseIdx = reservationTimeIdx.indexOf(idx); 
      idxArr.splice(eraseIdx, 1);
    }
    idxArr.sort((a,b)=>a-b);
    setReservationTimeIdx(idxArr);

    if (idxArr.length>4) setTimeError(" * 최대이용시간은 2시간입니다.");
    else if (!continuous(idxArr)) setTimeError("* 연속된 시간을 선택해주세요.")
    else setTimeError("");
  }

  const nameChange = (e)=>{
    setReservationName(e.target.value);
  }

  const phoneChange = (e)=>{
    const keyCode = e.keyCode;
    const number = keyCode-48;
    if (keyCode===8){
      switch(reservationPhone.length){
        case 0:
          break;
        case 4:
        case 9:
          setReservationPhone(reservationPhone.slice(0,reservationPhone.length-2));
          break;
        default:
          setReservationPhone(reservationPhone.slice(0,reservationPhone.length-1));
      }
    }
    else if(number>=0 && number<=9){
    switch(reservationPhone.length){
      case 2:
      case 7:
        setReservationPhone(reservationPhone+number+"-");
        break;
      case 13:
        break;
      default:
        setReservationPhone(reservationPhone+number);
    }
    }
  }

  const showErrorMessage = () =>{
    (reservationName==="")?setNameError(" * 이름을 입력해주세요."):setNameError("");
    (reservationDate==="날짜를 선택하세요.")?setDateError(" * 날짜를 선택해주세요."):setDateError("");
    (reservationTimeIdx.length===0)? setTimeError(" * 이용시간을 선택해주세요."):setTimeError("");
    (reservationRoom==="room을 선택하세요.")? setRoomError(" * room을 선택해주세요."):setRoomError("");
    (reservationPhone==="")? setPhoneError(" * 연락처를 입력해주세요."):reservationPhone.length<13?setPhoneError("* 올바른 연락처를 입력해주세요."):setPhoneError("");
  }

  const reserve = (e) =>{
   // console.log("noError:",noError);
   // console.log(reservationDate, reservationTimeIdx, reservationName, reservationPhone, reservationRoom);
    showErrorMessage();
    if (!noError){
       e.preventDefault();
    }
    else{
      e.preventDefault();
      setModalState(true);
    }
  }



  return (
    <div>
      {loading&&<LoadingSpinner/>}
      {modalState&&<ReservationModal modalState={modalState} setModalState={setModalState}
      name={reservationName} date={reservationDate} timeFrom={reservationTime[reservationTimeIdx[0]]} timeTo={reservationTime[reservationTimeIdx[reservationTimeIdx.length-1]+1]} room={reservationRoom} phone={reservationPhone}/>}
      <div className={styles.reservation_wrapper}>
        <div className={styles.left}>
          <div className={styles.imagediv}>
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={40} height={40}></Image>
          </Link>
          </div>
          <div className={styles.calendar}>
            <CustomCalendar setReservationDate={setReservationDate}/>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.topbar}>연습실 예약</div>
          <div className={styles.input}>
            <div className={styles.roomSelectBtn}>
              <button className={reservationRoom==="A"?styles.roomSelected:""} onClick={()=>roomChange("A")}>Eb Room</button>
              <button className={reservationRoom==="B"?styles.roomSelected:""} onClick={()=>roomChange("B")}>Bb Room</button>
              <button className={reservationRoom==="C"?styles.roomSelected:""} onClick={()=>roomChange("C")}>F Room</button>
              <button className={reservationRoom==="D"?styles.roomSelected:""} onClick={()=>roomChange("D")}>Db Room</button>
            </div>
            <div className={styles.roomImageOuter}>
              <div className={styles.roomImageInner}>
                {roomImage}
              </div>
              </div>
            <div className={styles.roomExplain}>{roomExplain}</div>

            <div className={styles.category}>
              예약일 / room
              <span className={styles.validationError}>{dateError}</span>
              <span className={styles.validationError}>{roomError}</span>
            </div>
            <div className={styles.date}>{reservationDate}/ 
            {reservationRoom==="A"?"Eb room":
            reservationRoom==="B"?"Bb room":
            reservationRoom==="C"?"F room":
            reservationRoom==="D"?"Bb room":
            reservationRoom
            }</div>
            <div className={styles.category}>
              예약 시간
              <span className={styles.validationError}>{timeError}</span>
            </div>
            <div className={styles.reservation_time}>
              {timeblock()}
            </div>
            <div className={styles.category}>
              예약자명
              <span className={styles.validationError}>{nameError}</span>
            </div>
            <input type='text' placeholder="성함을 입력해주세요." className={styles.reservation_input} value={reservationName} onChange={nameChange}></input>
            <div className={styles.category}>
              연락처
              <span className={styles.validationError}>{phoneError}</span>
            </div>
            <input type='text' placeholder="010-0000-0000" className={styles.reservation_input} value={reservationPhone} onKeyDown={(e)=>phoneChange(e)}></input>
            <button className={styles.reservation_btn} 
            onClick={reserve}>
              예약하기
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}