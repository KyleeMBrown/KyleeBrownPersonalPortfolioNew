import React from 'react'
import { Carousel } from '@mantine/carousel'
import { Avatar, Card, Group,Badge, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const About = () => {
  const phone = useMediaQuery('(max-width:760px)')

  const images = [
    "/images/SlideShow/About/pexels-vortex-1033922.jpg",
    "/images/SlideShow/About/pexels-gochrisgoxyz-1643409.jpg",
    "/images/SlideShow/About/pexels-prithiviraj-9660579.jpg"
    
  ]
  const colorMap = {
    "Soft Pretzels":"brown",
    "focused":"purple",
    "determined": "green",
    "Marvel Rivals":"red",
    "Cats and Dogs":"pink",
  }

  const badges = [
    "Soft Pretzels",
    "focused",
    "determined",
    "Marvel Rivals",
    "Cats and Dogs",
    "Southern New Hampshire University"
  ]

  const slides = images.map((image, index)=>(
    <Carousel.Slide key={index}>
      <div style={{backgroundImage:`url("${image}")`}} className="h-full w-full bg-cover bg-center">

      </div>
    </Carousel.Slide>
  ))

  return (
    <div className="flex justify-items  max-[760px]:flex-col items-center h-[auto] w-full">
      <div className="w-[50%] max-[760px]:w-full h-full">
        <Carousel
         slideSize="100%"
         height={phone? 500 :603}
         loop
         withIndicators
         align="center"
         withControls={phone? false : true}
         controlSize={30} // Adjust button size
        >
          {slides}
        </Carousel>
      </div>
      <div className="w-[50%] max-[760px]:w-full  flex items-center justify-center h-auto p-[2em]">
        
          <Card color="pink" style={{ backgroundColor: '#92b1a4', width:"100%", height:"100%", boxShadow:"0px 0px 10px 1px #92b1a4" }}>
            <Card.Section style={{padding:"1em"}}>
              <Group justify={phone? "center":"space-between"} style="">
                <div>
                <Avatar style={{width:"5em", height:"5em" }} src="/images/profile.jpg"></Avatar>
                <Text variant='gradient' gradient={{ from: 'purple', to: 'pink', deg: 90 }}>Kylee Brown</Text>
                </div>
                
                <div className="w-[82%] h-[auto] p-[1em] rounded-md gap-[1em] shadow-[0px_0px_5px_1px_#7f998e_inset] flex items-center justify-center flex-wrap">
                  {badges.map((item,index)=>(
                    <Badge key={index} color={colorMap[item]}>{item}</Badge>
                  ))}
                </div>
              </Group>
            </Card.Section>

            <div className="text-white">
              <Text style={{width:"100%"}}>
                  Hello! 
              </Text>
              
              <Text style={{width:"100%", textIndent:"1em"}}>
               
                  Thank you for visiting my <strong>personal portfolio</strong>! 
                  I am an aspiring <strong>Fullstack Developer/Software Engineer </strong> 
                  persuing a <strong>Bachelors in Computer Science with a concentration in Software 
                  Engineering</strong>. I currently work as a Tier 1 support tech for DealerEProcess 
                  while persuing my education.
                
              </Text>
              
              
              <Text style={{width:"100%", textIndent:"1em"}}>
                  In my spare time I enjoy working & collaborating on 
                  personal projects and playing video games like Marvel Rivals. I'm always looking
                  for new opportunities to learn and grow within my field. I enjoy eating soft 
                  pretzels and my favorite animals are cats and dogs. : )
              </Text>
              
            </div>
            <br></br>
            <Card.Section style={{padding:"1em"}}>
                  
            </Card.Section>

          </Card>
      </div>
    </div>
  )
}

export default About