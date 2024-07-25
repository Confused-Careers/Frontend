import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Slider from "react-slick";
import DataSci from "../assets/DataSci.jpg"
import MarketingMang from "../assets/marketingMang-3.jpg"
import BusinessAnalyst from "../assets/BusinessAnalyst.jpg"
import SoftwareDev from "../assets/SoftwareDev.jpg"
import Verified from '../assets/verified.png'
import Search from '../assets/magnifying-glass.png'
// import Menu from '../assets/whitemenubar.png'
import Menubar from '../assets/menubar.png'
import Dropdown from '../assets/down.png'
import SampleVid from '../assets/samplevideo1.mp4'
import CheckMark from '../assets/checkmark.png'
import Feature from '../assets/feature.png'
import Lightning from '../assets/lightningbolt.png'
import ExploreArrow from '../assets/explorearrow.png'
import Logo from '../assets/ConfusedCareersLogo.svg'
import '../newwebpage/button.css'
import '../newwebpage/searchbar.css'

function Overview() {

    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className="bg-white">
            {/* Top nav-bar */}
            <nav className="bg-white text-black flex justify-between items-center rounded-2xl m-1 mt-0 z-40">
              <RouterLink to="/">
                <div className="font-semibold text-lg flex items-center">

                  <img className="h-8 w-auto" src={Logo} alt="" />
                  <p>Confused Careers</p>
                </div>
              </RouterLink>
              <div className="flex md:gap-20 sm:gap-14">
                <div className='sm:block hidden hover:underline underline-offset-8'>For Highschooler</div>
                <div className='sm:block hidden hover:underline underline-offset-8'>For College</div>
                <div className='sm:block hidden hover:underline underline-offset-8'>For Highschooler</div>
              </div>
              <div className="group">
                <img className='h-6 w-auto m-3' src={Menubar} alt="" />
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
            <hr className="border-t-1 border-gray-100 my-0" />

            {/* Search Bar */}
            <nav className='flex md:gap-44 sm:gap-14 gap-16 py-1 items-center w-full md:px-8 sm:px-5 px-3 my-2 bg-white z-30'>
              <div className='flex md:gap-6 gap-2 mx-auto'>
                <div className='px-3 flex items-center gap-2 rounded-full text-white bg-explore group relative'>
                  Explore
                    <img className='h-3' src={Dropdown} alt="" />
                    <ul className='hidden group-hover:block z-50 bg-opacity-100 absolute bg-slate-100 space-y-2 top-8 left-0 mt-2'>
                            <li className='hover:bg-white'><button className='w-full p-2 px-10 py-2 text-black'>AI</button></li>
                            <li className='hover:bg-white'><button className='w-full p-2 px-10 py-2 text-black'>Category</button></li>
                            <li className='hover:bg-white'><button className='w-full p-2 px-10 py-2 text-black'>Portfolios</button></li>
                            <li className='hover:bg-white'><button className='w-full p-2 px-10 py-2 text-black'>Collabs</button></li>
                            <li className='hover:bg-white'><button className='w-full p-2 px-10 py-2 text-black'>News</button></li>
                    </ul>
                </div>
                <div class="search">
                  <input placeholder="Search..." type="text"/>
                  <button type="submit">Go</button>
                </div>
              </div>
            </nav>

            <article className="md:flex bg-primary py-2">
                <section className="md:w-8/12 flex flex-col gap-4 p-4 justify-center my-4">
                    <p className="font-nunito text-3xl font-semibold text-white">Welcome to Your Career Pathway</p>
                    <p className="font-nunito text-xl font-medium text-white"><span className=" underline-offset-2 underline decoration-1">Discover</span>,<span className=" underline-offset-2 underline decoration-1"> Learn</span>, and <span className=" underline-offset-2 underline decoration-1">Grow</span> with Our Tools</p>
                    <p className="font-nunito text-lg font-light text-white">Welcome to our platform, your ultimate destination for career guidance and professional growth. Whether you are exploring new fields or seeking to advance in your current career, our tools are designed to provide you with the insights and resources you need. Our platform offers unique features like the Playground and Case Study sections to help you on your journey.</p>
                    <div className="flex gap-2">

                        <div className="bg-white w-72 rounded-xl border-[1px] flex flex-col p-2 px-4 justify-center mt-3 text-black ">
                            <p className="text-lg flex items-center gap-2 font-heading5"> <img className="h-5" src={Feature} alt="" />Features:</p>
                            <ul className="list-disc pl-10 font-light">
                                <li>Interactive and Engaging</li>
                                <li>Personalized Experience</li>
                                <li>Skill Development</li>
                                <li>Comprehensive Resources</li>
                                <li>AI-Powered Assistance</li>
                                <li>Supportive Community</li>
                            </ul>
                        </div>
                        <div className="bg-white w-56 rounded-xl border-[1px] flex flex-col p-3 px-4 mt-3 h-48 text-black">
                            <p className="text-lg flex items-center gap-1 font-heading5">  <img className="h-5" src={Lightning} alt="" />Our best:</p>
                            <ul className="list-disc pl-10 font-light">
                                <li>Playground</li>
                                <li>Career Counsellers</li>
                                <li>AI Chat-bot</li>
                                <li>Case Study</li>
                                <li>Best Collabs</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="md:w-4/12 flex flex-col m-4 md:items-center text-primary bg-white rounded-lg">
                    <div className="m-0 rounded-lg md:w-10/12 w-full h-full flex flex-col items-center p-5 gap-7 text-black">
                        <p className="text-4xl font-heading1">Your Personalized AI Career Counselor.</p>
                        <p > Get instant, tailored career advice and support. Navigate your career path with confidence and clarity, guided by our advanced AI Chatbot.</p>
                        
                        
                    <RouterLink to='/AnotherChatwindow'>
                      <button className="here w-full">Chat with AI</button>
                    </RouterLink>
                        
                    </div>
                </section>
            </article>
            <section className="bg-white sticky top-0 z-40 bg-off white border-t-1">
            <nav className="bg-white flex sm:gap-24 gap-16 mx-8 sm:mx-20 py-3">
                
                <div className="">
                    <Link
                    activeClass="underline underline-offset-4 decoration-dotted"
                    className="cursor-pointer"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={500}
                    >
                        About
                    </Link>
                </div>    
                <div className="">
                    <Link
                    activeClass="underline underline-offset-8 decoration-dotted"
                    className="cursor-pointer"
                    to="playground"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        Playground
                    </Link>
                    
                </div>    
                <div className="">
                    <Link
                    activeClass="underline underline-offset-8 decoration-dotted"
                    className="cursor-pointer"
                    to="case-study"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    >
                        Case Study
                    </Link>
                
                </div>    
                   
            </nav>  
            <hr className="border-t-1 border-gray-200 w-11/12 mb-3 mx-auto"/>
            </section>

            {/* About  */}
            <section className="flex flex-col gap-4 m-8 my-8" name='about'>
                <p className="text-4xl font-heading2">About our features</p>
                <p className="text-2xl font-nunito">Explore What We Offer</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="border-[1px] rounded-xl p-4 gap-1 border-gray-200 flex flex-col font-nunito w-[350px] my-4">
                        <p className="text-lg mb-2 font-heading3">Playground:</p>
                        <p className="flex gap-1 items-center font-light"><img className="h-5 w-auto" src={CheckMark} alt="" /> Interactive Learning Environment</p>
                        <p className="flex gap-1 font-light"><img className="h-5 w-auto" src={CheckMark} alt="" /> The Playground is designed to offer an engaging and hands-on learning experience. Here, you can participate in simulations and activities that help you build and refine your skills. With personalized feedback, you can track your progress and identify areas for improvement.</p>
                    </div>
                    <div className="border-[1px] rounded-xl p-4 gap-1 border-gray-200 flex flex-col font-nunito w-[350px] my-4">
                        <p className="text-lg font-heading3 mb-2">Case Study:</p>
                        <p className="flex gap-1 items-center font-light"><img className="h-5 w-auto" src={CheckMark} alt="" />Real-Life Insights and Mentorship</p>
                        <p className="flex gap-1 font-light"><img className="h-5 w-auto" src={CheckMark} alt="" />Our Case Study section allows you to leverage the experiences of professionals in various fields. This section provides real-life insights and mentorship opportunities to help guide your career decisions. Additionally, our AI chatbot is available to answer your questions and provide guidance based on your career interests.</p>
                    </div>
                    <div className="border-[1px] rounded-xl p-4 gap-1 border-gray-200 flex flex-col font-nunito w-[350px] my-4">
                        <p className="text-lg font-heading3 mb-2">AI Chat-bot:</p>
                        <p className="flex gap-1 items-center font-light"><img className="h-5 w-auto" src={CheckMark} alt="" />Personalized AI-Powered Career Assistant</p>
                        <p className="flex gap-1 font-light"><img className="h-5 w-auto" src={CheckMark} alt="" /> Our AI Chatbot is your personalized career assistant, designed to provide instant support and guidance tailored to your unique needs and career goals. Trained in various career fields, the AI Chatbot offers valuable insights and personalized advice to help you navigate your career journey effectively.</p>
                    </div>
                </div>
            </section>

            {/* Playground  */}
            <article name='playground'>
                <section className="m-10 mt-10 mb-0 flex flex-col gap-4">
                <p className="text-4xl font-heading2">Playground</p>
                <p className="font-nunito text-lg w-8/12 font-light">Ready to dive into the world of AI? Explore our AI Playground and start experimenting with cutting-edge technology today. Gain the skills and knowledge you need to excel in the AI-driven future.</p>
                </section>
                <section className="bg-primary text-white w-auto m-8 mt-3 h-auto px-8 py-14 rounded-lg flex gap-4">
                    <div className="w-7/12 flex flex-col gap-6">
                        <p className="font-heading1 text-4xl flex flex-col">Virtual Career Playground with AI Insights</p>
                        <p className="text-xl font-extralight">Step into our AI-Powered Career Playground, where innovative technology meets career preparation. This unique feature allows you to upload your resume and engage in realistic, AI-driven interview simulations. The Playground crafts personalized questions based on your career history, providing instant feedback to help you refine your responses. Experience real-life interview scenarios and receive tailored advice, all within a dynamic, interactive environment. Perfect for both budding professionals and seasoned experts, our Career Playground offers an unparalleled approach to mastering interviews and advancing your career. Enhance Your Skills Today. Click on: Get Started.</p>
                        {/* <button className="bg-white text-primary p-2 rounded-lg w-1/2 flex justify-center self-center items-center">Get Started</button> */}
                    </div>
                    <div className="w-5/12 flex flex-col gap-6"> 
                        <video className="rounded-lg " src={SampleVid} controls ></video>
                        
                        <button className="bg-white text-primary p-2 rounded-lg w-1/2 flex justify-center self-center items-center">Get Started</button>
                    </div>
                </section>
            </article>

            {/* Case Study  */}
            <section className="sm:w-11/12 w-9/12 m-auto py-8" name='case-study'>
            <div className="flex flex-col gap-2 my-8">
              <p className=" text-4xl font-heading2">Discover Your Future Career</p>
              <p className="text-lg w-10/12"> "Artificial intelligence (AI) has been increasingly used in various fields, including career counseling. AI can help career counselors in various ways such as identifying career options, predicting job market trends, and providing personalized advice based on an individual's skills, interests, and personality traits."</p>
              <p></p>
              </div>
            <div className="">
            <Slider {...settings}>
              {data.map((e)=> (
                <div key={e.id} className="bg-white border-[1px] border-gray-300 drop-shadow-lg rounded-xl">
                  <div className="rounded-t-xl flex">
                    <img className='h-56 w-full object-cover rounded-t-xl' src={e.img} alt="" />
                  </div>


                  <div className="flex flex-col gap-2 px-3 mt-3">
                    <p className="text-xl font-semibold underline-offset-8 underline decoration-pink-700 decoration-2">{e.field}</p>
                    <p className="font-weight[330]">{e.content}</p>
                    <hr className="border-t-1 border-gray-200 w-full mt-3"/>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-medium">What you'll get:</p>
                      <p className="text-sm font-light"> <span className="border-[0.5px] border-gray-100 p-1 bg-gray-200 rounded-lg">Leadership</span> <span className="border-[0.5px] border-gray-100 p-1 bg-gray-200 rounded-lg">Communication</span> <span className="border-[0.5px] border-gray-100 p-1 bg-gray-200 rounded-lg">AI chat</span> <span className="border-[0.5px] border-gray-100 p-1 bg-gray-200 rounded-lg">Case Study</span> </p>
                      <p className="flex items-center">
                        <img className="h-4 w-auto" src={Verified} alt="" /> Verified Users
                      </p>
                    </div>
                    <hr className="border-t-1 border-gray-200 w-full mt-3"/>
                    <button className="my-2 border-[0.5px] border-gray-200 rounded-xl p-2 flex justify-center items-center w-1/2 bg-sky-700 text-white gap-2 hover:drop-shadow-lg">
                        <RouterLink to={`/Landingpage/${e.id}`}>Explore More</RouterLink> 
                        <img className="h-3" src={ExploreArrow} alt="" /></button>
                    {/* <div className="flex gap-4">
                      <button className="border-[1px] bg-blue-950 text-white p-3 rounded-full" >{e.button1}</button>
                      <button className="border-[1px] bg-blue-950 text-white p-3 rounded-full" >{e.button2}</button>
                    </div> */}
                  </div>

                </div>
              ) )}
              </Slider>

            </div>

          </section>
          
        </div>
    )
}
const data = [
    {
      field : "Naman Jha",
      img: DataSci ,
      content: "Leverage statistical methods, machine learning, and data analysis to solve complex problems and derive actionable insights from large datasets",
      button1: "Explore More",
      button2: "Career-AI",
      id:"1"
    },
    {
      field : "Joe Dan",
      img: SoftwareDev ,
      content: " Design and maintain software applications to meet user needs. Work with various programming languages to create scalable solutions.",
      button1: "Explore More",
      button2: "Career-AI",
      id:"2"
    },
    {
      field : "John Jake",
      img: BusinessAnalyst ,
      content: " Bridge the gap between business needs and technical solutions by analyzing business processes, and recommending solutions.",
      button1: "Explore More",
      button2: "Career-AI",
      id:"3"
    },
    {
      field : "Cristina",
      img: MarketingMang ,
      content: "Plan and oversee marketing strategies to promote products and services. Coordinate marketing efforts across various channels to drive growth.",
      button1: "Explore More",
      button2: "Career-AI",
      id:"4"
    },
  ]

export default Overview
