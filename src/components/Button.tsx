import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className="font-medium px-5 py-2 flex justify-center items-center bg-yellow text-black">
      {children}
    </button>
  )
}