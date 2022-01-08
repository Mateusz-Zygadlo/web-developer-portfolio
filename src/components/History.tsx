import React from 'react'
import { HISTORY_CONTENT } from '../content'

export const History = () => {
  const { h1, p1, p2, p3, p4, p5, p6 }  = HISTORY_CONTENT
  
  return(
    <div className="flex flex-col lg:flex-row py-10 bg-light-gray md:px-16 lg:px-24 px-5 items-start">
      <div className="mr-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">{h1}</h1> 
        <p className="my-3">{p1}</p>
        <p className="my-3">{p2}</p>
      </div> 
      <div>
        <p className="my-3">{p3}</p>
        <p className="my-3">{p4}</p>
        <p className="my-3">{p5}</p>
        <p className="my-3">{p6}</p>
      </div>
    </div>
  )
}