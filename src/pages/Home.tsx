import React from 'react'
import {
  Navbar,
  Header,
  History,
  Contact,
  Footer,
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <div className="flex flex-col justify-between w-full max-w-screen-2xl 2xl:mx-auto bg-black text-white">
      <Navbar />
      <Header />
      <History />
      <Contact />
      <Footer />
    </div>
  )
}