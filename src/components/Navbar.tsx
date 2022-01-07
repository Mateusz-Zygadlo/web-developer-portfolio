import React from 'react'
import { useScrollToTop } from '../hooks'

export const Navbar = () => {
  useScrollToTop()
  
  return(
    <div className="px-5 flex flex-col justify-between md:px-16 lg:px-24 w-full min-h-screen max-w-screen-2xl 2xl:mx-auto">
      <h1>Navbar</h1>
    </div>
  )
}