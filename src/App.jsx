import './Global.css'
import { HomePageLayout } from './HomePageLayout'
import '@mantine/core/styles.css';
import "@mantine/carousel/styles.css";  


import { MantineProvider } from '@mantine/core';

function App() {
  

  return (
    <>
     <MantineProvider> <HomePageLayout/></MantineProvider>
    </>
  )
}

export default App
