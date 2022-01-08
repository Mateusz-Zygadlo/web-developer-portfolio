import React from 'react'
import { HEADER_CONTENT } from '../content'
import { Card } from '../components'

export const Header = () => {
  const { h1, p, logos, projects } = HEADER_CONTENT
  
  return(
    <div className="my-12">
      <h1 className="text-5xl lg:text-6xl lg:max-w-4xl">{h1}</h1>
      <p className="max-w-2xl">{p}</p>
      <div className="flex w-full justify-between my-8 flex-wrap">
        {logos.map((logo, index: number) => (
          <img 
            key={index}
            src={logo}
            alt="logo"
            className="h-6 m-2"
          />
        ))}
      </div>
      <div className="cardGrid">
        {projects.map((project, index: number) => (
          <Card 
            key={index}
            {...project} 
          />
        ))}
      </div>
    </div>
  )
}