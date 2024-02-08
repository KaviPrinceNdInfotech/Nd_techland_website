import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Indexpage from './Components/Main/Indexpage'
import Aboutus from './Components/About/Aboutus'
import Header from './Components/Header/Header'
import Footer from './Components/Pages/Footer'
import WhyUs from './Components/About/WhyUs'
import Mission from './Components/About/Mission'
import Ourteam from './Components/About/Ourteam'
import WebApplication from './Components/Service/WebApplication'
import MobileApplication from './Components/Service/MobileApplication'
import DigitalMarketing from './Components/Service/DigitalMarketing'
import Itsecurity from './Components/Service/Itsecurity'
import Careerpage from './Components/Blog/Careerpage'
import Blog from './Components/Blog/Blog'
import ContactUs from './Components/Blog/ContactUs'
import TopScroll from './Components/Pages/TopScroll'
import DigitalDetails from './Components/DetailPage/DigitalDetails'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Indexpage />} />
          <Route path="/aboutus" element={[<Header/>,<Aboutus />,<Footer/>]} />
          <Route path="/whyus" element={[<Header/>,<WhyUs />,<Footer/>]} />
          <Route path="/mission" element={[<Header/>,<Mission />,<Footer/>]} />
          <Route path="/ourteam" element={[<Header/>,<Ourteam />,<Footer/>]} />

          <Route path="/webapplication" element={[<Header/>,<WebApplication />,<Footer/>]} />
          <Route path="/mobileapplication" element={[<Header/>,<MobileApplication />,<Footer/>]} />
          <Route path="/digitalmarketing" element={[<Header/>,<DigitalMarketing />,<Footer/>]} />
          <Route path="/itsecurity" element={[<Header/>,<Itsecurity />,<Footer/>]} />

          <Route path="/career" element={[<Header/>,<Careerpage />,<Footer/>]} />
          <Route path="/blog" element={[<Header/>,<Blog />,<Footer/>]} />
          <Route path="/contactus" element={[<Header/>,<ContactUs />,<Footer/>]} />
          <Route path="/digitalservice" element={[<Header/>,<DigitalDetails />,<Footer/>]} />
        </Routes>
        <TopScroll/>
      </Router>

    </>


  )
}

export default App
