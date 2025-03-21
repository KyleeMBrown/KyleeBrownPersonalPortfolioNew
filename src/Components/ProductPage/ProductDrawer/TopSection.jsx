import {React, useState} from 'react'
import { Carousel } from '@mantine/carousel'
import { Paper, Group, Text, NumberInput } from '@mantine/core'
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
                    value={quantity}
                    onChange={setQuantity}
                    placeholder="1"
                    description="Choose a Quantity"
                    max="12"
                    min="1"
                    ></NumberInput>
            </div>
            <a onClick={() =>{currItem["quantity"] = quantity, setShoppingCart(prev =>[...prev, currItem]), setNotifs(prev=>[...prev, currItem])}} className=" bg-gray-900 p-[0.5em] active:scale-98 uppercase pl-8 pr-8 mt-4 text-white text-sm border border-black hover:bg-white cursor-pointer hover:text-black">Add to cart</a>
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