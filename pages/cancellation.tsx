
import React, {useState} from 'react'
import axios from 'axios';
const SERVER = 'http://localhost:4000'

function Cancellation() {
  /*
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [DBdata, setDBdata] = useState([" "]);

  const checkDB = async()=>{
    const res = await axios.post(SERVER+"/searchReserved",{
        "name": name,
        "phone": phone
    })
    const data = await res.data;
    setDBdata(data);
    console.log("DB:",data);  
    }

  const searched:JSX.Element = (
        <div>
            <div>
                예약일
                room
                예약시간
            </div>
            {DBdata.map(d=>(
            <div>
                {d.reservationDate}
                {d.room}
                {d.timeFrom}-{d.timeTo}
            </div>
            ))}
        </div>
  )
    
  return (
    <div>
        <div>예약 목록 조회 및 취소</div>
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='성함'></input>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='전화번호 뒷 4자리'></input>
            <button onClick={checkDB}>조회</button>
        </div>
        {(DBdata.length>0)?searched:<div>"예약 목록이 없습니다."</div>}
    </div>
  )
  */
}

export default Cancellation