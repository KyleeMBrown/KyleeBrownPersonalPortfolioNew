import {React, useState} from 'react'
import { ProductMenu } from './ProductMenu'
import { ProductCard } from './ProductCard'




export const ProductPage = ({products, setItem, open}) => {

  const [langValue, setLangValue] = useState("all")
  const [type, setType] = useState("all")
  

  return (
    <>
        <ProductMenu langVal={langValue} setLangVal={setLangValue} typeVal={type} setTypeVal={setType}></ProductMenu>
        <div className="w-full min-h-[20em] p-[2em] flex gap-[3em] flex-wrap items-center justify-start">
          {products
          .filter(item => (item.categories.includes(langValue) && item.categories.includes(type)))
          .map((item, index)=>(
            <ProductCard key={index} {...item} item={item} setCurrItem={setItem} openDrawer={open}></ProductCard>
          ))}
          
        </div>

    </>
    
  )
}


export default ProductPage