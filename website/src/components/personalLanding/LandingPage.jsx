import React from 'react'
import Slider from "react-slick";
import blackleft from '../assets/left-arrow.png'
import profile from '../assets/profile.jpg'
// import star from '../assets/star.png'
// import calendar from '../assets/calendar.png'
// import smallright from '../assets/rightarrow-2.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter-1.png'
import { Link } from 'react-router-dom'
import HnM from '../assets/hm.png'
import Myntra from '../assets/myntra.png'
import Amazon from '../assets/amazon.png'
import '../personalLanding/personalChat.css'

function LandingPage() {

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

    return (
        <>
            <header />
            <main className="md:grid md:grid-cols-12 grid grid-cols-1 relative">
              {/* left section */}
              <div className="md:col-span-5 min-h-screen overflow-auto bg-pink-200 flex flex-col items-center">
                {/* back button  */}
                <button>
                  <Link to='/MarketingMang/6'>
                  <img
                    className="h-5 w-auto fixed left-3 top-3"
                    src={blackleft}
                    alt=""
                    />
                  </Link>
                </button>
                <div className=" sm:mt-8 mt-14 flex flex-col gap-4 md:gap-2 sm:gap-2 items-center m-4">
                  {/* image */}
                  <div id="box" className="h-44 w-44 rounded-full bg-white">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={profile}
                      alt=""
                    />
                  </div>
                  {/* about */}
                  <div
                    style={{ fontFamily: '"Space Grotesk"' }}
                    className="text-2xl self-center"
                  >
                    Cristina- Marketing Manager
                  </div>
                  <div className="mx-4 my-2 md:text-lg sm:text-base text-lg">
                    Armed with a degree in [Field of Study] from [University Name], I've
                    delved deep into the realms of creativity. My academic endeavors have
                    equipped me with a robust skill set in [specific skills or areas of
                    expertise].
                  </div>
                  <div className="flex gap-8 self-center mt-4">
                    <a href="#">
                      <img className="h-8 w-auto" src={linkedin} alt="" />
                    </a>
                    <a href="#">
                      <img className="h-8 w-auto" src={instagram} alt="" />
                    </a>
                    <a href="#">
                      <img className="h-8 w-auto" src={twitter} alt="" />
                    </a>
                  </div>
                  <button className="personalChat w-5/12 my-6">
                    <div>
                  <Link to='/ChatWindow'>
                      <span>
                        <p className="mx-auto">Talk to my AI</p>
                      </span>
                  </Link>
                    </div>
                    <div>
                  <Link to='/ChatWindow'>
                      <span>
                        <p className="mx-auto">Know more about me :D</p>
                      </span>
                  </Link>
                    </div>
                  </button>

                </div>
              </div>
              {/* right section */}
              <div className="md:col-span-7 bg-white flex flex-col items-center mt-4">
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

export default LandingPage

