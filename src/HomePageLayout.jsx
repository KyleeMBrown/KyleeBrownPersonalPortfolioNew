import {React, useState} from 'react'
import HomeScreen from './Sections/HomeScreen'
import { Header } from './Sections/Header'
import { Footer } from './Sections/Footer'
import { ProductSection } from './Sections/ProductSection'
import BannerSection1 from './Sections/BannerSection1'
import { useDisclosure } from '@mantine/hooks';
import About from './Sections/About'



export const HomePageLayout = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [opened, { open, close }] = useDisclosure(false);
 
  

  return (
    <div id="top">
    <Header opened={opened} close={close} open={open} setShoppingCart={setShoppingCart} cart={shoppingCart} ></Header>
    <HomeScreen></HomeScreen>
    <BannerSection1></BannerSection1>
    
    <ProductSection openCart={open} cart={shoppingCart} setShoppingCart={setShoppingCart}></ProductSection>
    <About></About>
    <Footer></Footer>
    </div>
  )
}
