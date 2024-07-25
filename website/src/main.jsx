import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Newwebpage from './components/newwebpage/newwebpage.jsx'
// import Overview from './components/SecondPage/Overview.jsx'
// import AnotherChatwindow from './components/anotherchatwindow/anotherChatwindow.jsx'
// import LandingPage from './components/personalLanding/LandingPage.jsx'
// import Chatwindow from './components/chatwindow/chatwindow.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <Newwebpage/> */}
    {/* <Overview/> */}
    {/* <LandingPage/> */}
    {/* <Chatwindow/> */}
    {/* <AnotherChatwindow/> */}
  </React.StrictMode>, 
)

{/* <Casestudy/> */}