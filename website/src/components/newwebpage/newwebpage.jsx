import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Datasci1 from '../assets/dataSci-1.jpg'
import Marketingmang1 from '../assets/marketingMang-1.jpg'
import Marketingmang2 from '../assets/marketingMang-2.jpg'
import Marketingmang3 from '../assets/marketingMang-3.jpg'
import Softwaredev1 from '../assets/softwareDev-1.jpg'
import Softwaredev2 from '../assets/softwareDev-2.jpg'
import Softwaredev3 from '../assets/softwareDev-3.jpg'
import Businessanalyst1 from '../assets/businessAnalyst-1.jpg'
import LocationIcon from '../assets/locationicon.png'
import ReviewStar from '../assets/reviewstar.png'
import Search from '../assets/magnifying-glass.png'
// import Menu from '../assets/whitemenubar.png'
import Menubar from '../assets/menubar.png'
import Dropdown from '../assets/down.png'
import Heropageimg from '../assets/Heropageimg.png'
import '../newwebpage/rightleftbutton.css'
import ExploreArrow from '../assets/explorearrow.png'
import linkedin from '../assets/linkedin-black.png'
import instagram from '../assets/instagram-black.png'
import twitter from '../assets/twitter-black.png'
import facebook from '../assets/facebook-black.png'
import { Link } from 'react-router-dom'
import Logo from '../assets/ConfusedCareersLogo.svg'
import '../newwebpage/button.css'
import '../newwebpage/searchbar.css'


function Newwebpage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Simulating a delay of 1 second for loading effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
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
        <div className="bg-white min-h-screen font-nunito">
          
          {/* Top nav-bar */}
          <nav className="bg-white text-black flex justify-between items-center rounded-2xl m-1 mt-0 z-40">
            <div className='flex md:gap-20 gap-14 px-4'>
              <div className="font-semibold text-lg flex items-center">
                <img className="h-8 w-auto" src={Logo} alt="" />
                <p>Confused Careers</p>
              </div>
            </div>
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
          <nav className='flex md:gap-44 sm:gap-14 gap-16 py-1 items-center w-full md:px-8 sm:px-5 px-3 my-2 bg-white sticky top-0 z-30'>
            <div className='flex md:gap-6 gap-2 mx-auto py-2'>
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
          <hr className="border-t-1 border-gray-100 my-0 z-40 sticky top-17" />

          {/* Hero Page */}
          <article className={`grid md:grid-cols-12 grid-cols-1 md:gap-1 gap-5 md:m-2 m-3 text-primary`}>
            {/* Left section  */}
            <div id="smooth-section" className={`text-black border-gray-100 drop-shadow-sm border-[0.5px] md:col-span-8 bg-white rounded-lg flex flex-col gap-4 relative row-span-1 transition-transform duration-1000 ${loaded ? 'translate-y-0' : 'translate-y-10'} transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <p className=" w-10/12 place-self-end mt-5 md:text-3xl text-lg z-10 text-right mr-2">“ConfusedCareers.com completely changed my life and helped me achieve my dream of becoming a doctor. </p>
              <div className='flex'>
                  <img className=' h-64 sm:w-auto w-80  self-end relative right-8 bottom-0 z-10' src={Heropageimg} alt="" />
                  <p className="sm:text-lg z-10 w-auto text-right mr-2">When I first signed up, I was overwhelmed with career options and unsure of where to begin. The General Career Counselor AI Agent, CareerBot, guided me through an initial assessment, understanding my interests in science and helping others” -Farida Seikh</p>
              </div>
              {/* circles */}
              <div className="h-56 w-28 bg-yellow-200 rounded-tr-full rounded-br-full absolute top-20 left-0 z-0"> </div>
              <div className="h-28 w-56 bg-yellow-200 rounded-tr-full rounded-tl-full absolute bottom-0 right-32 z-0"> </div>
            </div>
              
            {/* Right section  */}
            <div className={`border-gray-100 drop-shadow-sm border-[0.5px] md:col-span-4 bg-white h-full text-black rounded-lg flex flex-col justify-center gap-6 p-8 items-center row-span-1 transition-transform duration-1000 ${loaded ? 'translate-y-0' : '-translate-y-10'} transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-3xl font-semibold">Revolutionize Your Career Path with AI-Driven Guidance</p>
              <p className="text-lg opacity-[60%]">Empowering students to make informed career decisions</p>
              {/* <button className="border-black bg-sky-900 text-white p-3 rounded-full md:w-full w-5/12 text-lg">
                  Talk to AI
              </button> */}
              <Link to='/AnotherChatwindow'>
              <button className="here w-full">Talk to AI</button>
              </Link>
            </div>
              
          </article>


          {/* Career Section */}
          <section className="flex flex-col justify-center items-center m-5 gap-4 my-16" name='case-study'>
                <div className="text-4xl font-nunito my-1">Meet Our Diverse Field Experts</div>
                <div className="flex flex-wrap gap-4">
                    <button onClick={() => setActiveCategory('All')} className={`border-[1px] border-gray-300 px-5 py-2 ${activeCategory==='All' ? 'bg-explore text-white' : ''} rounded-full hover:bg-explore hover:text-white`}>All</button>
                    <button onClick={() => setActiveCategory('SoftwareDev')} className={`border-[1px] border-gray-300 px-5 py-2 ${activeCategory==='SoftwareDev' ? 'bg-explore text-white' : ''} rounded-full hover:bg-explore hover:text-white`}>Software Developer</button>
                    <button onClick={() => setActiveCategory('MarketingMang')} className={`border-[1px] border-gray-300 px-5 py-2 ${activeCategory==='MarketingMang' ? 'bg-explore text-white' : ''} rounded-full hover:bg-explore hover:text-white`}>Marketing Manager</button>
                    <button onClick={() => setActiveCategory('BusinessAnalyst')} className={`border-[1px] border-gray-300 px-5 py-2 ${activeCategory==='BusinessAnalyst' ? 'bg-explore text-white' : ''} rounded-full hover:bg-explore hover:text-white`}>Business Analyst</button>
                    <button onClick={() => setActiveCategory('DataSci')} className={`border-[1px] border-gray-300 px-5 py-2 ${activeCategory==='DataSci' ? 'bg-explore text-white' : ''} rounded-full hover:bg-explore hover:text-white`}>Data Science</button>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                    {number[activeCategory].map((e)=> (
                        
                        <div key={e.id} className="h-auto w-auto border-[1px] border-gray-300 rounded-xl flex flex-col gap-0">
                            <div>
                                <img className="rounded-t-xl h-44 w-full object-cover object-center" src={e.img} alt="" />
                            </div>
                            <div className="p-3 flex flex-col gap-3">
                                <div>
                                    <p className="text-sm font-light flex">
                                        <img className="h-4 w-auto" src={LocationIcon} alt="" />
                                        {e.content1}</p>
                                    <p className="font-nunito">{e.content2}</p>
                                </div>
                                <div className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ratione earum placeat iste illum, necessitatibus minus?</div>
                                <div className="flex gap-1 items-center font-extralight">
                                    <button className="flex items-center">
                                        <img className="h-4 w-auto" src={ReviewStar} alt="" />
                                        <p>{e.rating}</p>
                                    </button>
                                    <p>{e.reviews}</p>
                                </div>
                                <div className="hover:text-sky-400 hover:underline font-normal flex justify-center items-center gap-1 ">
                                <Link to={`/MarketingMang/${e.id}`}>Explore More</Link>
                                <img className="h-3 w-auto" src={ExploreArrow} alt="" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



          <footer className="text-white bg-sky-900 mt-10">
                <article className=" sm:flex sm:justify-around md:p-16 p-8 py-28">
                    <div className="sm:w-[40%] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                        <p className="bg-white rounded-full text-sky-900 w-14 h-14 flex justify-center items-center">
                          <img className="h-12 w-auto" src={Logo} alt="" />
                        </p>
                        <p className="text-2xl" style={{ fontFamily: "Abril Fatface" }}>
                            Confused Career
                        </p>
                        </div>
                        <p>
                            Unlock the potential of AI in your projects. Explore our portfolio to
                            see how we blend human ingenuity with artificial intelligence for
                            groundbreaking solutions.
                        </p>
                        <div className="flex gap-3 mt-4">
                          <img className="h-6 opacity-70 " src={linkedin} alt="" />
                          <img className="h-6 opacity-70 " src={twitter} alt="" />
                          <img className="h-6 opacity-70 " src={instagram} alt="" />
                          <img className="h-6 opacity-70 " src={facebook} alt="" />
                        </div>
                        <hr className="border-t-2 border-gray-300 my-3 sm:hidden block" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-lg font-sans font-semibold">Follow us</p>
                        <div className="flex flex-col gap-0.5">
                            <a className="hover:underline" href="https://www.google.com">
                                Instagram
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                X
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                LinkedIn
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                Git-hub
                            </a>
                        </div>
                        <hr className="border-t-2 border-gray-300 my-3" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-lg font-sans font-semibold">AI-Port</p>
                        <div className="flex flex-col gap-0.5">
                            <a className="hover:underline" href="https://www.google.com">
                                About
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                Services
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                Blog
                            </a>
                            <a className="hover:underline" href="https://www.google.com">
                                Contact Us
                            </a>
                        </div>
                        <hr className="border-t-2 border-gray-300 my-3" />
                    </div>
                </article>
                <article className="flex flex-col items-center">
                    <hr className="border-t-2 border-gray-300 w-9/12 sm:block hidden" />
                    <div className="my-8">© 2024 Adobe Inc. All rights reserved.</div>
                </article>
            </footer>
          
        </div>
    )
}
const number = {
    
  'SoftwareDev': [
      {
      id:1,
      img: Softwaredev1,
      content1: 'USA',
      content2: 'Software Developer',
      reviews: '(4.5k reviews)',
      rating:'4.5',
  },
  {
      id:2,
      img: Softwaredev2,
      content1: 'UAE',
      content2: 'Software Developer',
      reviews: '(3.8k reviews)',
      rating:'4.0',
  },
  {
      id:3,
      img: Softwaredev3,
      content1: 'India',
      content2: 'Software Developer',
      reviews: '(4.0k reviews)',
      rating:'4.6',
  },

],
'MarketingMang': [
  {
      id:4,
      img: Marketingmang1,
      content1: 'India',
      content2: 'Marketing Manager',
      reviews: '(1.3k reviews)',
      rating:'3.9',
  },
  {
      id:5,
      img: Marketingmang2,
      content1: 'London',
      content2: 'Marketing Manager',
      reviews: '(2.9k reviews)',
      rating:'3.5',
  },
  {
      id:6,
      img: Marketingmang3,
      content1: 'Russia',
      content2: 'Marketing Manager',
      reviews: '(4.7k reviews)',
      rating:'4.3',
  },
],
'BusinessAnalyst': [
  {
      id:7,
      img: Businessanalyst1,
      content1: 'India',
      content2: 'Business Analyst',
      reviews: '(3.4k reviews)',
      rating:'4.4',
  },
],
'DataSci': [
  {
      id:8,
      img: Datasci1,
      content1: 'India',
      content2: 'Data Science',
      reviews: '(1.2k reviews)',
      rating:'3.7',
  },
],

}
number['All'] = [
...[].concat(...Object.values(number)), // Flatten all arrays and concatenate them into one array
];


export default Newwebpage

                    