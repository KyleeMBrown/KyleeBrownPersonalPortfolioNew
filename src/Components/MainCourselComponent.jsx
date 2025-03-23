import {React} from 'react'
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from '@mantine/hooks';



const MainCarouselComponent = ({data}) => {
  const phone = useMediaQuery('(max-width:760px)')

  return (
    <div className="w-full h-auto">
        <Carousel
        style={{height:"100%"}}
        slideSize="100%"
        height={phone ? 500 : 675}
        loop
        withIndicators
        align="center"
        withControls={phone? false : true}
        controlSize={30} // Adjust button size
        >
            {data.map((data, index)=>(
                <Carousel.Slide key={index}>
                    <div style={{backgroundImage:`url("${data.url}")`}} className="bg-cover font-sans bg-center h-[100%] flex items-center justify-center">
                     {data.title ? 
                     <div className="flex items-center text-[1.25em] max-[500px]:w-[80%] max-[900px]:w-[75%] text-[#355748] justify-center backdrop-blur-lg bg-[#cdeaeb65] p-[1em] flex-col">
                        <p className="italic ">Aspiring...</p>
                        <br></br>
                        <h2 className="font-bold text-[2em] max-[760px]:text-[0.75em] max-[760px]:text-center">{data.title}</h2>
                        <br></br>
                        <a href="#projects" className="border text-[0.9em] bg-[rgb(53,87,72)] text-white p-[0.3em] cursor-pointer hover:bg-[#ffffffa8] drop-shadow-md hover:text-[#355748] hover:scale-102 active:scale-100 transition-all ease-in duration-[0.25s]"> Shop Projects</a>
                     </div> 
                     : null} 
                      
                    </div>
                </Carousel.Slide>
            ))}
        </Carousel>
    </div>
  )
}

export default MainCarouselComponent