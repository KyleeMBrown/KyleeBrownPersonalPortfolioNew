import {React, useState} from 'react'
import { Menu } from '../Components/Header/Menu'
import ShoppingCart from '../Components/Header/ShoppingCart/ShoppingCart';

export const Header = ({setCount, cart, setShoppingCart, opened, open, close}) => {
 
  const [total, setTotal] = useState(0)

  const updateTotal = () =>{
    var tempTotal = 0;
    for(var i = 0; i < cart.length; ++i){
      const item = cart[i];
      tempTotal += (item.price * item.quantity)
    }
    setTotal(tempTotal)
  }
  
  return (
    <div className="w-full sticky top-0 z-[99]">
      {/* Promo section */}
      <div className="flex font-sans text-gray-700 items-center justify-center italic bg-[#cdeaeb] text-[12px] p-[0.5em]">
        <strong>Limited time Offer: 15% 0ff Select Items</strong>
        <p className="ml-[0.25em]">+ Free Shipping</p>
        <button className="ml-[1em] hover:bg-gray-500 hover:text-white transition-all ease-in duration-[0.3s] hover:border-transparent cursor-pointer underline border p-[0.5em] rounded-[5px] text-[10px]">SHOP NOW</button>
        <p></p>
      </div>
      <Menu openCart={open} cart={cart} updateTotal={updateTotal} setCount={setCount}></Menu>
      <ShoppingCart updateTotal={updateTotal} total={total} setShoppingCart={setShoppingCart} cart={cart} opened={opened} close={close}></ShoppingCart>
      
    </div>
  )
}
