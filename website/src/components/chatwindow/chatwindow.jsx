import React from 'react'
import Slider from "react-slick";
import { useState, useRef } from 'react'
import axios from 'axios'
import send from '../assets/send.png'
import back from '../assets/arrow-left.png'
// import calendar from '../assets/calendar.png'
// import star from '../assets/star.png'
import user from '../assets/user.png'
import ai from '../assets/ai.png'
import { Link } from 'react-router-dom'
import HnM from '../assets/hm.png'
import Myntra from '../assets/myntra.png'
import Amazon from '../assets/amazon.png'


function Chatwindow() {

  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }


  const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const inputRef = useRef(null);
    const sendRef = useRef(null);

    async function generateAnswer() {
        const question = input;
        if (!question.trim()) return;

        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'question', text: question }
        ]);
        setInput('');

        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDd7mrCX_tardoZG9UUG1YVd1aeMaYp_vA",
            method: "post",
            data: { contents: [{ parts: [{ text: question }] }] },
        });

        const answer = response.data.candidates[0].content.parts[0].text;

        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'answer', text: answer }
        ]);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            generateAnswer();
        }
    };
  






  return (
    <>


      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        /* WebKit scrollbar */\n        .scrollbar::-webkit-scrollbar {\n            width: 6px; /* Adjust width of the scrollbar */\n        }\n        .scrollbar::-webkit-scrollbar-thumb {\n            background-color: transparent; /* Make the thumb transparent */\n            border-radius: 6px; /* Roundness of the thumb */\n        }\n        .scrollbar::-webkit-scrollbar-track {\n            background-color: transparent; /* Make the track transparent */\n        }\n\n        /* Firefox scrollbar */\n        .scrollbar {\n            scrollbar-width: thin;\n            scrollbar-color: transparent transparent; /* thumb color, track color */\n        }\n    "
        }}
      />



      <header />
      <main className="md:grid md:grid-cols-12 grid grid-cols-1">
        {/* left section */}
        <div className="md:col-span-5 h-screen flex flex-col justify-between items-center sm:p-2 p-4 bg-blue-950">
          {/* back button  */}
          <Link to='/Landingpage/4'>
          <button id='chatbackbutton'>
            <img
              className="h-7 w-auto fixed left-3 top-3"
              src={back}
              alt=""
              />
          </button>
          </Link>
          <div className="border-white h-5/6 sm:w-10/12 w-full flex flex-col-reverse items-end overflow-y-auto scrollbar-thin-transparent relative">

                    <div className="w-full h-auto bg-transparent flex flex-col justify-end gap-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${message.type === 'question' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-2 justify-${message.type === 'question' ? 'end' : 'start'} w-10/12`}>
                                    {message.type === 'answer' && <img className="h-5 w-auto" src={ai} alt="" />}
                                    <span className={`bg-${message.type} bg-white rounded-lg h-auto p-3`}>
                                        {message.text}
                                    </span>
                                    {message.type === 'question' && <img className="h-5 w-auto" src={user} alt="" />}
                                </div>
                            </div>
                        ))}
                  </div>
  
          </div>
          <div className="relative flex justify-between border-white border-[1px] sm:w-10/12 w-full rounded-full p-2">
            <input
              className="bg-transparent border-transparent text-white focus:outline-none w-11/12"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="message"
              placeholder="write a text"
              onKeyDown={handleKeyDown}
            />
            <button ref={sendRef} id="send" onClick={generateAnswer}>
              <img className="h-4 w-auto" src={send} alt="" />
            </button>
          </div>
        </div>



        {/* right section */}
        <div className="sm:col-span-7 bg-white flex flex-col items-center mt-4">
          <div className="w-10/12 h-auto">
            <Slider {...settings}>
              {brandData.map((e) => (
                <div id={e.id} className="border-[1px] my-4 border-gray-200 rounded-md p-4 shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
                  <img className="h-20 mx-auto" src={e.img} alt="" />
                  {/* <hr className="border-t-1 border-gray-100" /> */}
                  <p className="my-4 underline underline-offset-4 decoration-gray-200 decoration-2 flex justify-center">{e.content}</p>
                </div>
              ))

              }
            </Slider>
          </div>
        </div>
      </main>
    </>

  )
}
const brandData = [
  {
    img : HnM, 
    content: 'H&M',
    id: '1'
  },
  {
    img : Amazon, 
    content: 'Amazon',
    id: '2'
  },
  {
    img : Myntra, 
    content: 'Myntra',
    id: '3'
  },
]

export default Chatwindow
