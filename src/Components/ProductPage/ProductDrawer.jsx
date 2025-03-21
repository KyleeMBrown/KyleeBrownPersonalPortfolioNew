import {React, useState} from 'react'
import { Breadcrumbs, Drawer , Notification} from '@mantine/core'
import TopSection from './ProductDrawer/TopSection'
import Suggested from './ProductDrawer/Suggested'
import { useMediaQuery } from '@mantine/hooks'


const ProductDrawer = ({opened, close, openCart, currItem, setCurrItem, products, setShoppingCart}) => {
    const [notifs, setNotifs] = useState([])
    const menuItems=["Home", "Projects", currItem?currItem.title:null]
    const menu = menuItems.map((item, index)=>(
        <a key={index}>{item}</a>
    ))
    const phone = useMediaQuery('(max-width:760px)')

  return (
    <div>
    <Drawer size={phone? "100%" : "60%"}  opened={opened} onClose={close} title={<Breadcrumbs>{menu}</Breadcrumbs>} position='right'>
        <TopSection setNotifs={setNotifs} setShoppingCart={setShoppingCart} currItem={currItem}></TopSection>
        <Suggested setCurrItem={setCurrItem} currItem={currItem} products={products}></Suggested>
        {notifs.length > 0 ? <div className="flex w-[50%] max-[760px]:w-[80%] z-10 right-0 flex-col absolute bottom-[2em]">
          {notifs.map((item, index)=>(
            <div className='mt-2'>
              <Notification icon={<img src={item.images[0]}></img>} color="cyan" key={index} title={`${item.title} has Been Added to Your Cart`} onClose={()=>{setNotifs(notifs.filter((_, i) => i !== index))}}>
               
              </Notification>
            </div>
            ))}
        </div>: null}
          
       
    </Drawer>

    </div>
  )
}

export default ProductDrawer