import React from 'react'
import heroimage from '../assets/picofme.png'
import { TypeAnimation } from 'react-type-animation'

const hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8" id="home">
      <div className="col-span-1 my-auto mx-auto  w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} className="rounded-full" alt="heroImage"/>
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                I'm a 
            </span><br/>
            <TypeAnimation
            sequence={[
                "Engineer",
                1000,
                "Web Devloper",
                1000,
                "Tech Support",
                1000,
                "ML Enthusiast",
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />

        </h1>
        <p className="text-white sm-text-lg my-6 lg:text-xl">
            My name is Daniel Kr Brahma and I am a Web Developer, Technical Support
            and ML enthusiast.
        </p>
        <div className="my-8">
            <a href="/Recent_Res.pdf" className="px-6 py-3 w-full rounded-xl mr-4 
            text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white" download>
                Download CV
            </a>
            <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4
            border border-gray-400 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
            text-white hover:border-none">
                Contact
            </a>
        </div>
      </div>
    </div>
  )
}

export default hero
