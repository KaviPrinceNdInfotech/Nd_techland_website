import React from 'react'
import Header from '../Header/Header'
import TopRatedApp from '../Pages/TopRatedApp'
import MobileAppPortal from '../Pages/MobileAppPortal'
import OurService from '../Pages/OurService'
import WhyChooseus from '../Pages/WhyChooseus'
import OurWork from '../Pages/OurWork'
import HappyClient from '../Pages/HappyClient'

import Industries from '../Pages/Industries'
import OurClientSay from '../Pages/OurClientSay'
import LetsWorkTogether from '../Pages/LetsWorkTogether'
import OfficeLocation from '../Pages/OfficeLocation'
import Footer from '../Pages/Footer'


function Indexpage() {
  return (
    <>
    <Header/>
    <TopRatedApp/>
    <MobileAppPortal/>
    <OurService/>
    <WhyChooseus/>
    <OurWork/>
    <HappyClient/>
    {/* <RelationShip/> */}
    <Industries/>
    <OurClientSay/>
    <LetsWorkTogether/>
    <OfficeLocation/>
    <Footer/>
    
 
    </>
  )
}

export default Indexpage