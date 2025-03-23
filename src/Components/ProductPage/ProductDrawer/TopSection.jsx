import {React, useState} from 'react'
import { Carousel } from '@mantine/carousel'
import { Paper, Group, Text, NumberInput, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const TopSection = ({currItem, setShoppingCart,setNotifs}) => {
    const [quantity, setQuantity] = useState(1)
    const stars = Array.from({length: 5}).map((_, index)=>(
        <svg key={index} style={{color:"rgb(241,221,91)"}}  xmlns="http://www.w3.org/2000/svg"  width="21"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
    ))
    const phone = useMediaQuery('(max-width:760px)')

  return (
    <Paper shadow='xs' radius="md">
    <div className="w-full flex max-[760px]:flex-col gap-2 h-[auto] max-[760px]:mt-2 rounded-lg p-[0.5em] items-center justify-center ">
        <div className="w-[55%] max-[760px]:w-full h-full rounded-lg">
            <Carousel
            slideSize="100%"
            height={phone ? 250 : 395}
            loop
            withIndicators
            align="center"
            controlSize={30} // Adjust button size
            >
                {currItem ? (currItem.images.map((image,index)=>(
                    <Carousel.Slide key={index}>
                        <div style={{backgroundImage:`url("${image}")`}} className="bg-cover bg-center h-full rounded-lg">

                        </div> 
                    </Carousel.Slide>
                ))) : null}
            </Carousel>
        </div>
        <div className="flex flex-col items-start text-gray-700 p-[0.5em]  w-[45%] max-[760px]:w-full h-full">
            <h3 className='text-gray-500 mb-1 text-sm underline'>Personal Portfolio</h3>
            <h2 className='font-semibold text-[1.3em] font-serif uppercase tracking-wider'>{currItem.title}</h2>
            <Group>
                {stars}
            </Group>
            <h2 className=" text-[1.6em] font-serif">${currItem.price}.00</h2>
            <Text size="sm">
                {currItem.description}
            </Text>
            <div className="w-[18%] mt-3">
                <p className="text-[13px] font-semibold">QTY</p>
                    <NumberInput
                    size="md"
                    value={quantity}
                    onChange={setQuantity}
                    placeholder="1"
                    description="Choose a Quantity"
                    max="12"
                    min="1"
                    ></NumberInput>
            </div>
            <a onClick={() =>{currItem["quantity"] = quantity, setShoppingCart(prev =>[...prev, currItem]), setNotifs(prev=>[...prev, currItem])}} className=" bg-gray-900 p-[0.5em] active:scale-98 uppercase pl-8 pr-8 mt-4 text-white text-sm border border-black hover:bg-white cursor-pointer hover:text-black">Add to cart</a>
            {currItem.gitUrls ? <Group style={{marginTop:"1em"}}>
            {currItem.gitUrls.map((item,index)=>(
                        <Button key={index} component='a' target="_blank" href={item.url} color="#343434" leftSection={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>}>{item.title}</Button>
                    )) 
            }
            </Group> : null}
            {currItem.webUrl ? (
            <div className="mt-4 hover:scale-102 active:scale-100">
                <a target="_blank" href={currItem.webUrl}>
                <Group >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-browser-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8h16" /><path d="M12.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" /><path d="M8 4v4" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
                    <Text>Go to Site</Text>
                </Group>
                </a>
            </div>)
            : null}
        </div>
    </div>
    </Paper>
  )
}

export default TopSection