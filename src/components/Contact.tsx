import React from 'react'
import { CONTACT_CONTENT } from '../content'
import { Button } from '../components'

export const Contact = () => {
  const { h1, p } = CONTACT_CONTENT
  
  return(
    <div className="py-16 md:px-16 lg:px-24 px-5">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">{h1}</h1>
      <p className="lg:max-w-lg my-2">{p}</p>
      <Button>Get in touch</Button>
    </div>
  )
}