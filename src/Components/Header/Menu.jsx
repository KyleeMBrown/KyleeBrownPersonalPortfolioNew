import React from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { MobileMenu } from './MobileMenu'

export const Menu = ({openCart, cart, updateTotal}) => {
  const phone = useMediaQuery('(max-width:768px)')
  

  return (
    <>
    {/*  Menu Wrap */}
    <div className='w-full h-[3.5em] bg-white flex items-center jsutify-center '>
        <div className='w-full flex text-gray-700 items-center justify-between p-[0.75em]'>

            {/* Logo Area */}
          <div aria-label="portfolio logo" className="w-[50%] max-[850px]:w-[90%] max-[760px]:hidden flex items-center justify-between">
              <a href="#top" className="w-[6%] cursor-pointer max-[860px]:hidden hover:scale-103 active:scale-100 mr-[-3.5em]"><img src="/images/Logo.png" ></img></a>
              <a href="#top" className="cursor-pointer"><h2 className=''> <strong className='text-[#709d9e]'>Personal Portfolio </strong>| Kylee Brown</h2></a>
              <div className="flex gap-[2em] text-[0.95em] max-[860px]:text-[12px] font-medium">
              <a href="#projects" className="cursor-pointer ">Shop Projects and Skills</a>
              <a href="#about" className="cursor-pointer">About</a>
              <a target="_blank" href="/Resume.pdf" className="cursor-pointer">Resume</a>
              </div>
          </div>
          {/* Menu Area */}
          <div className="flex items-center max-[760px]:justify-end justify-center gap-[1em] max-[760px]:w-full">
            <svg  xmlns="http://www.w3.org/2000/svg" className='hover:scale-103 active:scale-100 cursor-pointer fill-black'  width="8%"  height="8%"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            <div className="hover:scale-105 active:scale-100">
              <img onClick={() =>{openCart(), updateTotal()}} className='w-[46%] cursor-pointer' src="/icons/icons8-cart-64.png"></img>
              <div className="absolute flex items-center justify-center ml-[1.4em] mt-[-0.75em] bg-red-500 text-white font-semibold rounded-[80%] h-[10px] w-[5px] p-[0.80em] text-[12px]">
                {cart.length}
              </div>
            </div>
            {phone ? 
             <MobileMenu></MobileMenu>
              :null}
          </div>
        </div>
        
    </div>
    </>
  )
}
