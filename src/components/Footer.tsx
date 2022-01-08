import React from 'react'
import { FOOTER_CONTENT } from '../content'

export const Footer = () => {
  const { logos } = FOOTER_CONTENT
  
  return(
    <div className="flex justify-between md:px-16 py-5 lg:px-24 px-5 bg-light-gray items-center">
      <h1 className="text-xl text-gray-300 cursor-default">Johnathan Specter</h1>
      <div className="flex">
        {logos.map((logo, index: number) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="mx-2" 
          />
        ))}
      </div>
    </div>
  )
}