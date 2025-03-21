import {React, useState} from 'react'

const SlideShow = ({images, width, height, arrowSize}) => {
    const [index, setIndex] = useState(0)
    //next slide
    const next = () => {
       (index < images.length - 1) ? setIndex(prev => prev + 1) : setIndex(0);
    }
    //prev slide
    const prev = () =>{
        (index > 0) ? setIndex(prev => prev - 1) : setIndex(images.length - 1)
    }


   
    

  return (
    <div style={{width:`${width}`, height:`${height}`}} className=''>
        
        <div style={{backgroundImage:`url("${images[index]}")`}} className={`w-full transition-all flex items-center justify-center ease-in h-full bg-center bg-cover`}>
            {/* Left Arrow */}
            <div style={{height:`${height}`}} className="absolute w-auto p-[0.5em]  left-0 flex items-center justify-center backdrop-blur-">
                <svg onClick={prev} className=" drop-shadow-md invert cursor-pointer hover:scale-105 active:scale-100 opacity-80 rotate-180" xmlns="http://www.w3.org/2000/svg" width={arrowSize} height="800px" viewBox="0 0 24 24" fill="gray">
                    <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            {/* Right Arrow */}
            <div  style={{height:`${height}`}} className="absolute w-auto p-[0.5em]  right-0 flex items-center justify-center backdrop-blur-">
                <svg onClick={next} className=" drop-shadow-md cursor-pointer invert opacity-80 hover:scale-105 active:scale-100" xmlns="http://www.w3.org/2000/svg" width={arrowSize} height="800px" viewBox="0 0 24 24" fill="gray">
                    <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default SlideShow