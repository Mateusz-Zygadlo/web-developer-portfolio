import React from 'react'
import {
  Navbar,
  Header,
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <div className="flex flex-col justify-between w-full max-w-screen-2xl 2xl:mx-auto bg-black text-white">
      <Navbar />
      <div className="md:px-16 lg:px-24 px-5">
        <Header />
      </div>
    </div>
  )
}