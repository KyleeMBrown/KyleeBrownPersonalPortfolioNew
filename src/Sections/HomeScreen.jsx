import React from 'react'
import MainCarouselComponent from '../Components/MainCourselComponent'


const HomeScreen = () => {

  const data2 = [
    {url: "/images/SlideShow/Main/pexels-scottwebb-213727.jpg", title:"Software Engineer | Fullstack Developer | Bioinformatician"},
    {url: "/images/SlideShow/Main/pexels-gaurav-kumar-1281378-20738229.jpg"},
    {url:"/images/SlideShow/Main/pexels-sohi-807598.jpg"}
  ]

  return (
    <div className="w-full h-[80vh] flex flex-col bg-blue-200">
      <div className="w-full h-full">
        <MainCarouselComponent data={data2}/>
      </div>
      
    </div>
  )
}

export default HomeScreen