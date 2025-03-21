import { Carousel } from '@mantine/carousel'
import React from 'react'
import { useMediaQuery } from '@mantine/hooks'

const Suggested = ({products, currItem, setCurrItem}) => {
const filterSuggested = (item => currItem.languages.some(item2 => item.categories.includes(item2)) && item.title != currItem.title)
const phone = useMediaQuery('(max-width:760px)')

  return (
    <>
    <center className="pt-6 text-[1.2em] uppercase tracking-widest mb-[1em]">You Might Also Like</center>
    <div className="w-full h-[auto] pl-2">
        
        <Carousel
          slideSize={phone ? "100%":"30%"}
          height={phone ? 350 :260}
          slideGap={8}
          align="start"
          controlSize={30} // Adjust button size
          loop
        >
            
            {products
            .filter(filterSuggested)
            .map((item, index)=>(
            
            <Carousel.Slide key={index}>
                
            <div className="w-full flex-col mt-1 hover:scale-102 max-[760px]:hover:scale-100 transition-all ease-in duration-[0.3s] h-[100%] flex items-center">
            <center>{item.title}</center>
            <div onClick={() => (setCurrItem(item))} style={{backgroundImage:`url("${item.images[0]}")`}} className="w-full cursor-pointer bg-cover bg-center h-[68%] rounded-lg">
                

                
            </div>
            </div>
            
            </Carousel.Slide>
            
          ))}
        </Carousel>
    </div>
    </>
  )
}

export default Suggested