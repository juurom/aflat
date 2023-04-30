import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'


function footer() {
  return (
    <div className={styles.footer_wrapper}>
    <div>상호: 에이플랫뮤직스튜디오 | 대표: 이은솔 | 개인정보관리책임자 : 이은솔 | 전화: 0507-1372-8460
    <br/>이메일: eunsoul_atelier@naver.com | 주소: 서울시 용산구 원효로93길 22 3층 | 사업자등록번호: 312-99-30997
</div>
    <div>
        <Link href={'https://m.blog.naver.com/a-flat_music_studio'}>
        <Image src={'/static/blog.png'} alt="blog" height={30} width={30}></Image>
        </Link>
        <Link href={'https://instagram.com/aflat_music_?igshid=YmMyMTA2M2Y='}>
        <Image src={'/static/instagram.png'} alt="insta" height={30} width={30}></Image>
        </Link>
        <Link href={'http://pf.kakao.com/_VTuLxj'}>
        <Image src={'/static/kakao-talk.png'} alt="kakaotalk" height={30} width={30}></Image>
        </Link>
        <Link href={'tel:0507-1372-8460'}>
        <Image src={'/static/phone-call.png'} alt="phone" height={30} width={30}></Image>     
        </Link>
    </div>
    </div>
  )
}

export default footer