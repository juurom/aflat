import React from 'react'
import Navbar from '@/component/navbar'
import LessonExplain from '@/component/lesson_explain'
import Footer from '@/component/footer';

export default function lesson() {
  return (
    <div>
      <Navbar></Navbar>
      <LessonExplain></LessonExplain>
      <Footer></Footer>
    </div>
  )
}
