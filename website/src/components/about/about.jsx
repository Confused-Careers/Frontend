import React from 'react'
import logo from '../assets/ConfusedCareersLogo.svg'
import { Link, NavLink } from 'react-router-dom'
import menubar from '../assets/menubar.png'

function About() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="./output.css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            />
            <header className="flex mx-0 justify-between bg-gray-50 border-[0.5px] border-gray-200 items-center sticky top-0 z-40 w-full left-0 right-0">
                <div className="flex items-center font-mono px-4">
                    <img className="h-12 " src={logo} alt="" srcSet="" />
                    AI-Port
                </div>
                <ul className="sm:flex md:gap-14 sm:gap-8 hidden">
                    <li className="hover:underline text-lg"><NavLink className={(e)=>{return e.isActive?"underline underline-offset-8 hover:no-underline":""}} to='/'>Home</NavLink></li>
                    <li className="hover:underline text-lg"><NavLink className={(e)=>{return e.isActive?"underline underline-offset-8 hover:no-underline":""}} to='/About'>About</NavLink></li>
                    <li className="hover:underline text-lg">Services</li>
                    <li className="hover:underline text-lg">Blog</li>
                    <li className="hover:underline text-lg">Contact</li>
                </ul>
                <div className="group relative">
                    <button>
                        <img className="h-6 px-4 sm:hidden group" src={menubar} alt="" />
                    </button>
                    <div className="absolute w-40 right-0 text-end hidden group-hover:block bg-slate-50 rounded-lg">
                        <Link
                            to='/'
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-base"
                        >
                            Home
                        </Link>
                        <Link
                            to='/About'
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-base"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-base"
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-base"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-base"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </header>
            <div className="min-h-screen m-2 border border-black p-4">
                <h1 className="pt-5 px-5 text-center text-3xl font-bold">Meet Our Team</h1>
                <div className="py-6 text-center font-normal font-2xl">
                    Get to know the talented individuals behind our company
                </div>
                <div className="m-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
                    <div className=" bg-slate-200 rounded-lg text-center min-h-80 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 justify-center my-5">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                    <div className="min-h-80 bg-slate-200 rounded-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 hover:bg-gradient-to-br from-purple-100 via-orange-100 to-yellow-50">
                        <div className="flex justify-center text-center">
                            <img
                                className="rounded-full h-20 pt-1 "
                                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                                alt=""
                            />
                        </div>
                        <p className="pt-4 font-bold">John Doe</p>
                        <p className="font-medium ">CEO</p>
                        <p className="pt-4 px-0.5 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
                        </p>
                        <div id="social-media" className="flex gap-4 my-5 justify-center">
                            <button className="fa-brands fa-linkedin" />
                            <button className="fa-brands fa-twitter" />
                            <button className="fa-brands fa-github" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
