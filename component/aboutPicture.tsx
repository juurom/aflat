import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import about1 from '@/static/about1.jpeg'
import about2 from '@/static/about2.jpeg'
import about3 from '@/static/about3.jpeg'
import about4 from '@/static/about4.jpeg'
import about5 from '@/static/about5.jpeg'
import about6 from '@/static/about6.jpeg'
import about7 from '@/static/about7.jpeg'

function aboutPicture() {
  const picArr = [about1, about2, about3, about4, about5, about6, about7];
  const [picIdx, setPicIdx] = useState(0);

  useEffect(() => {
    const intervalItem = setInterval(()=>{
        setPicIdx((picIdx)=>((picIdx+1)%picArr.length));
    }, 3000)
    return () => {
      clearInterval(intervalItem);
    }
  },[])

  return (
    <> 
    {picArr.map((p, idx)=>(
        <Image key={idx} src={p} alt="aboutpic" fill 
        style={{objectFit:"cover", opacity:idx===picIdx?"1":"0", transition: "opacity 1s ease-in-out"}}/>
    ))}
    </>
  )
}

export default aboutPicture