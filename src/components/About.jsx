import React from 'react'
import aboutImg from '../assets/Daniel.jpg'

const About = () => {
  return (
    <div className=" text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-stary py-6 md:py-0">
            <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              About Me
            </h2>
                <p className="text-base lg:text-lg">
                I'm a committed full-stack web developer and technical support specialist that loves to explore and use new technologies. 
                I have worked with NodeJS, and Python for backend programming, in addition to HTML, CSS, JavaScript,
                and ReactJS for web design. MongoDB and MySQL are two of the databases I know well. I am now learning AWS, and I am also 
                familiar with Google Cloud. Furthermore, I am continuously researching the possibilities of machine learning and data science. 
                I am an invaluable member of any technical team since I have an excellent attention to detail and a strong work ethic.
                </p>
            </div>
        </div>
        <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300}/>
      </div>
    </div>
  )
}

export default About
