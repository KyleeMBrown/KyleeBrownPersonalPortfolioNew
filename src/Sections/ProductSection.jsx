import {React, useState} from 'react'
import { ProductPage } from '../Components/ProductPage/ProductPage'
import { useDisclosure } from '@mantine/hooks';
import ProductDrawer from '../Components/ProductPage/ProductDrawer';
import ProductData from '../Components/ProductPage/Data/ProductData.json'


export const ProductSection = ({setShoppingCart, cart, count, setCount, openCart, updateTotal}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currItem, setCurrentItem] = useState();
 

  return (
    <div className="w-full h-[auto] from-[#cdeaeb] to-white bg-gradient-to-b">
        <ProductPage products={ProductData} setItem={setCurrentItem} open={open}></ProductPage>
        <ProductDrawer updateTotal={updateTotal} openCart={openCart} cart={cart} setShoppingCart={setShoppingCart} products={ProductData} count={count} setCount={setCount} opened={opened} close={close} currItem={currItem} setCurrItem={setCurrentItem}></ProductDrawer>
        
    </div>
  )
}

