import React, {useState, useRef, useEffect} from 'react'
import Calendar from 'react-calendar';


interface Props {
  setReservationDate:  React.Dispatch<React.SetStateAction<string>>;
}

function custom_calendar(props:Props) {
  const [date, setDate] = useState(new Date());
  const setReservationDate = props.setReservationDate;
  const calendarChange = (e:Date)=>{
    const date=e;
    setDate(date);
    setReservationDate(date.toLocaleDateString('ko'))
  }


  const fromDate = new Date();
  const toDate = new Date();
  toDate.setDate(fromDate.getDate()+7);
  
  const datebox = ()=>{
    return (<div className= {'react-calendar-datebox'}></div>)
  }

  
  return (
    <Calendar locale='ko' calendarType='Hebrew' showNeighboringMonth={false}
    tileContent={datebox}
    
    minDate={fromDate}
    maxDate={toDate}
    minDetail='month'
    formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
    onChange={calendarChange} value={date}/>  )
}

export default custom_calendar