import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Newwebpage from './components/newwebpage/newwebpage'
import MainAbout from './components/about/about.jsx'
import LandingPage from './components/personalLanding/LandingPage.jsx'
import Chatwindow from './components/chatwindow/chatwindow.jsx'
import AnotherChatwindow from './components/anotherchatwindow/anotherChatwindow.jsx'
import Overview from './components/SecondPage/Overview.jsx'
import ScrollToTop from './components/scrollTop/ScrollTop.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Newwebpage/>} />
          <Route path='/MarketingMang/6' element={<Overview/>} />
          <Route path='/AnotherChatwindow' element={<AnotherChatwindow/>} />
          <Route path='/Landingpage/4' element={<LandingPage/>} />
          <Route path='/ChatWindow' element={<Chatwindow/>} />
          <Route path='/MainAbout' element={<MainAbout/>} />
        </Routes>
    </>
  )
}

export default App
