import React from 'react'

interface CardProps {
  image: string;
  h1: string;
  p: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  h1,
  p
}) => {
  return(
    <div>
      <img 
        src={image}
        alt="Projects"
        className="w-full"
      />
      <h1 className="mt-5 mb-2 text-2xl sm:text-3xl lg:text-4xl">{h1}</h1>
      <p>{p}</p>
    </div>
  )
}