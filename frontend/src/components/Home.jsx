import React, { memo } from 'react'
import Hero from './Hero'

const Home = memo(function Home() {
  return (
    <>
    <section>
    <Hero></Hero>
    </section>
    </>
  )
})

export default Home