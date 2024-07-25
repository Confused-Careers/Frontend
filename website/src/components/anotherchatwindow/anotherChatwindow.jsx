


import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import back from '../assets/arrow-left.png';
import Menu from '../assets/menu-gray.png';
import send from '../assets/send.png';
import user from '../assets/user.png';
import ai from '../assets/ai.png';
import Logo from '../assets/ConfusedCareersLogo.svg'

function AnotherChatwindow() {
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
        <div className="bg-primary h-screen w-full relative">
            <section className="bg-sky-800 bg-opacity-60">
                <nav className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4 p-2 px-4">
                        <Link to='/'>
                            <button><img className="h-7 w-auto" src={back} alt="" /></button>
                        </Link>
                        <p className="h-12 w-12 flex justify-center items-center bg-white rounded-full">
                            <img className="h-10 w-auto" src={Logo} alt="" />
                        </p>
                    </div>
                    <div className="group z-40 p-2">
                        <img className="h-7 w-auto" src={Menu} alt="" />
                        <ul className="hidden group-hover:block z-50 bg-opacity-100 absolute bg-slate-100 w-44 right-0">
                            <li className='hover:bg-white py-3 block sm:hidden'><button className='w-full text-black'>For Highschooler</button></li>
                            <li className='hover:bg-white py-3 block sm:hidden'><button className='w-full text-black'>For College</button></li>
                            <li className='hover:bg-white py-3 block sm:hidden'><button className='w-full text-black'>For Highschooler</button></li>
                            <li className='hover:bg-white py-3'><button className='w-full text-black'>About</button></li>
                            <li className='hover:bg-white py-3'><button className='w-full text-black'>Blog</button></li>
                            <li className='hover:bg-white py-3'><button className='w-full text-black'>Contact</button></li>
                            <li className='hover:bg-white py-3'><button className='w-full text-black'>Services</button></li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className="w-full h-5/6 flex justify-center">
                <div className="w-9/12 h-9/12 my-auto bg-primary absolute bottom-16 flex flex-col justify-end gap-4 overflow-y-auto scrollbar-thin-transparent">
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
            </section>
            <section className="flex justify-center">
                <div className="w-9/12 m-auto border-[1px] border-gray-300 rounded-full flex justify-between items-center p-2 bg-white absolute bottom-3">
                    <input
                        placeholder="Type here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="text-lg bg-transparent border-transparent outline-none mx-3 w-full overflow-y-visible"
                        type="text"
                        onKeyDown={handleKeyDown}
                    />
                    <button ref={sendRef} onClick={generateAnswer}>
                        <img className="h-6 w-auto" src={send} alt="" />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default AnotherChatwindow;


