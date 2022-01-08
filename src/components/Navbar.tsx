import React, { 
  useState,
  useEffect, 
} from 'react'
import { Button } from '../components'
import { MOBILE_SIZE } from '../constants'
import {  
  useMeasure,
  useWindowSize
} from '../hooks'
import { Images } from '../assets'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width, setWidth } = useWindowSize()
  const [rect, myRef]: any = useMeasure()
  
  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="flex justify-between items-center md:px-16 lg:px-24 px-5 py-4 sticky top-0 left-0 w-full z-50 bg-black"
      ref={myRef}
    >
      <h1 className="text-xl text-gray-300 cursor-default">Johnathan Specter</h1>
      {width > MOBILE_SIZE ? (
        <>
          <ul className="flex">
            <li className="nav-link">Articles</li>
            <li className="nav-link">Chats</li>
            <li className="nav-link">Awards</li>
            <li className="nav-link">About</li>
          </ul>
          <Button>Get in touch</Button>
        </>
      ) : (
        <>
          {isOpen ? (
            <div className="border bg-white absolute top-2 md:top-2 right-3 md:right-14 p-4">
              <img 
                src={Images.Close}
                alt="close"
                className="absolute right-4 top-4 scale-150 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <ul className="mb-3 pb-1 border-b flex flex-col items-center">
                <li className="mobile-nav-link">Articles</li>
                <li className="mobile-nav-link">Chats</li>
                <li className="mobile-nav-link">Awards</li>
                <li className="mobile-nav-link">About</li>
              </ul>
              <Button>Get in touch</Button>
            </div>
          ) : (
            <img 
              src={Images.HamburgerMenu}
              alt="Hamburger menu"
              onClick={() => setIsOpen(true)}
            />
          )}
        </>
      )}
    </div>
  )
}