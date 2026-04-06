import React, { memo, useState, useEffect } from 'react'
import Hero from './Hero'

const Home = memo(function Home() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 500 : false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 500);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
    <section>
    <Hero isMobile={isMobile}></Hero>
    </section>
    </>
  )
})

export default Home