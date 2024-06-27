import React from 'react'
import Ar from '../assets/AR.png'
import Net from '../assets/Netflix.png'
import Gm from '../assets/GlassMorphism.png'
import LC from '../assets/LungCancer.png'
import Opt from '../assets/Optimize.jpg'
import AC from '../assets/Air Canvas.png'

const Projects = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8">
          <p className="text-4xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Projects
          </p>
          <p className="text-white">Check out some of my projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={Net}  alt="Project1"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/Netflix-App">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={Gm}  alt="Project2"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/Glass-Morphism-Effect-LogIn-Form">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={LC}  alt="Project3"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/LungCancerRiskPrediction">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={Ar}  alt="Project4"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/IGDTUWInternshipProject">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={Opt}  alt="Project5"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/Optimization-of-Web-Page-based-on-Network-Bandwidth">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
        items-center h-[200px] bg-cover relative">
            <img src={AC}  alt="Project6"/>
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
            justify-center items-center">
                <span classname="text-2xl font-bold text-white tracking-wider"></span>
                <div className="pt-8 text-center">
                    <a href="https://github.com/dani8946/Air-Canvas">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                       test-gray-700 font-bold text-lg">
                        GitHub
                       </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
