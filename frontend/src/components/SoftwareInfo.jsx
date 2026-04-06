import React, { useEffect, useRef } from 'react'
import ComputersCanvas from './canvas/Computers'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SoftwareInfo() {

  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)
  const box4Ref = useRef(null)
  const box5Ref = useRef(null)
  const computerCanvasRef = useRef(null)

  const getAnimationValues = () => {
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
    
    if (isMobile) {
      return { box1: -200, box2: -150, box3: -250, box4: -180, box5: -200, canvas: 200 }
    } else if (isTablet) {
      return { box1: -350, box2: -250, box3: -400, box4: -300, box5: -350, canvas: 350 }
    } else {
      return { box1: -550, box2: -400, box3: -600, box4: -450, box5: -500, canvas: 500 }
    }
  }

  useEffect(() => {
    const scrollTriggers = []
    const animations = []

    if (box1Ref.current) gsap.set(box1Ref.current, { clearProps: 'all' })
    if (box2Ref.current) gsap.set(box2Ref.current, { clearProps: 'all' })
    if (box3Ref.current) gsap.set(box3Ref.current, { clearProps: 'all' })
    if (box4Ref.current) gsap.set(box4Ref.current, { clearProps: 'all' })
    if (box5Ref.current) gsap.set(box5Ref.current, { clearProps: 'all' })
    if (computerCanvasRef.current) gsap.set(computerCanvasRef.current, { clearProps: 'all' })

    const timeoutId = setTimeout(() => {
      const animValues = getAnimationValues()
      
      const createAnim = (ref, x, start, end) => {
        if (!ref.current) return
        const anim = gsap.from(ref.current, {
          x, duration: 5, delay: 1,
          scrollTrigger: {
            trigger: ".software-container",
            scroller: "body",
            start, end, scrub: 1,
          }
        })
        animations.push(anim)
        if (anim.scrollTrigger) scrollTriggers.push(anim.scrollTrigger)
      }

      createAnim(box1Ref, animValues.box1, 'top 90%', 'top 40%')
      createAnim(box2Ref, animValues.box2, 'top 90%', 'top 50%')
      createAnim(box3Ref, animValues.box3, 'top 90%', 'top 50%')
      createAnim(box4Ref, animValues.box4, 'top 70%', 'top 30%')
      createAnim(box5Ref, animValues.box5, 'top 70%', 'top 30%')
      createAnim(computerCanvasRef, animValues.canvas, 'top 80%', 'top 40%')

      ScrollTrigger.refresh()
      setTimeout(() => ScrollTrigger.refresh(), 300)
    }, 150)

    return () => {
      clearTimeout(timeoutId)
      animations.forEach(anim => { if (anim) anim.kill() })
      scrollTriggers.forEach(st => { if (st) st.kill() })
      if (box1Ref.current) gsap.set(box1Ref.current, { clearProps: 'all' })
      if (box2Ref.current) gsap.set(box2Ref.current, { clearProps: 'all' })
      if (box3Ref.current) gsap.set(box3Ref.current, { clearProps: 'all' })
      if (box4Ref.current) gsap.set(box4Ref.current, { clearProps: 'all' })
      if (box5Ref.current) gsap.set(box5Ref.current, { clearProps: 'all' })
      if (computerCanvasRef.current) gsap.set(computerCanvasRef.current, { clearProps: 'all' })
      ScrollTrigger.refresh()
    }
  }, []);

  const skills = [
    { name: 'JavaScript', desc: 'JavaScript is a powerful programming language used to create interactive and dynamic web applications', img: '/images/JS.png', ref: box1Ref, width: 'w-full sm:w-[90%]' },
    { name: 'MongoDB', desc: 'MongoDB is a NoSQL database designed for flexible, scalable, and high-performance applications.', img: '/images/mongo.ico', ref: box2Ref, width: 'w-full sm:w-[65%]' },
    { name: 'Express.js', desc: 'Express.js is a fast and minimal backend framework for Node.js. Used to build REST APIs and web servers efficiently.', img: '/images/expressjs.png', ref: box3Ref, width: 'w-full' },
    { name: 'React', desc: 'React is a JavaScript library for building fast and interactive user interfaces.', img: '/images/reactjs.png', ref: box4Ref, width: 'w-full sm:w-[75%]' },
    { name: 'Node.js', desc: 'React & Node.js together power modern full-stack web applications.', img: '/images/nodejs.png', ref: box5Ref, width: 'w-full sm:w-[85%]' },
  ];

  return (
    <div className='software-container w-full min-h-[450px] sm:min-h-[500px] md:h-[500px] flex items-center justify-center p-3 sm:p-4 md:p-5'>
      <div className='w-[98%] sm:w-[95%] md:w-[90%] max-w-6xl h-full flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl overflow-hidden relative justify-between gap-3 sm:gap-4 lg:gap-0 card-light'>
        <div className='w-full lg:w-[50%] h-full flex flex-col justify-around gap-2 sm:gap-3 md:gap-0 py-3 sm:py-4'>

          {skills.map((skill, i) => (
            <div key={i} className={`min-h-[50px] sm:min-h-[60px] md:h-[70px] ${skill.width} relative flex`} ref={skill.ref}>
              <div className='w-full bg-slate-50 border-r-0 border border-slate-100 rounded-r-2xl sm:rounded-r-3xl software-container-box-shadow'>
                <h3 className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-slate-800 px-3 sm:px-4 pt-1.5 sm:pt-2'>{skill.name}</h3>
                <p className='w-[80%] text-slate-400 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] px-3 sm:px-4 leading-tight'>{skill.desc}</p>
              </div>
              <div className='w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-xl sm:rounded-2xl absolute right-0 bottom-0 z-10 bg-white border border-slate-100 shadow-sm p-1.5'>
                <img src={skill.img} alt={`${skill.name} logo`} className="w-full h-full object-contain" loading="lazy" decoding="async"/>
              </div>
            </div>
          ))}

        </div>
        
        <div className='w-full lg:w-[50%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-full flex items-center justify-center relative' ref={computerCanvasRef}>
          <div className='w-full h-full'>
            <ComputersCanvas></ComputersCanvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareInfo