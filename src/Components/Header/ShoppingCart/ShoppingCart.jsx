import {React, useState} from 'react'
import { Drawer, Table, Group, Text, Button } from '@mantine/core'
import Total from './Total'
import { useMediaQuery } from '@mantine/hooks'

const ShoppingCart = ({opened, close, cart, setShoppingCart, total, updateTotal}) => {
    const phone = useMediaQuery('(max-width:768px)')
    const removeItem = (index) =>{
        const newItems = cart.filter((_, i) => i !== index);
        setShoppingCart(newItems);
        cart.pop(index)
        updateTotal()
    }

    

    const rows = cart.map((item, index)=>(
       <Table.Tr key={index}>
            <Table.Td>
                <div style={{backgroundImage:`url("${item.images[0]}")`}} className="bg-cover bg-center w-[5em] h-[5em] rounded-md"></div>
            </Table.Td>
            <Table.Td><h2 className="font-semibold">{item.title}</h2></Table.Td>
            <Table.Td>${item.price}.00</Table.Td>
            <Table.Td><p className="text-gray-400">X{item.quantity}</p></Table.Td>
            <Table.Td>
                <svg style={{color:"red", cursor:"pointer"}} onClick={()=>{removeItem(index)}}  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </Table.Td>
       </Table.Tr>

    ))
    
  return (
    <div className="z-[999]">
    <Drawer size={phone ? '100%' : '80%'} position="right" opened={opened} onClose={close} title={"SHOPPING CART"}>
        <div className="flex w-full gap-[1em] h-[90vh]">
            <div className='w-[80%] max-[760px]:w-full h-full'>
                
                {cart.length > 0 ?
                <>
                <div className="h-[80%] overflow-x-hidden overflow-y-scroll">
                <Table>
                    <Table.Tbody>
                        {rows}
                    </Table.Tbody>
                </Table> 
                </div>
               <Total total={total}></Total>
                </>
                : 
                <div className="w-full h-[88vh] uppercase tracking-wide flex items-center justify-center">Cart Is Empty</div>}
                
                
            </div>
            
            <div className="w-[50%] max-[760px]:hidden text-gray-500 uppercase h-full p-[0.5em] flex justify-center items-center  drop-shadow-md rounded-md from-[#cdeaeb] to-[#75bbbe] bg-gradient-to-b">
            <h1>thanks for checking out : )</h1>
            </div>
           
                
        </div>
      
    </Drawer>
    </div>
  )
}

export default ShoppingCart