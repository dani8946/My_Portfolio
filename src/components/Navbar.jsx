import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-transparent h-[100px] text-white max-w-[1200px] mx-auto flex justify-between items-center sticky top-0">
      <h1 className="text-3xl m-4 text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Portfolio</h1>
      <ul className="hidden md:flex">
          <li className="p-2"><a href="#home">Home</a></li>
          <li className="p-2"><a href="#skills">Skills</a></li>
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#project">Projects</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"}>
      <h1 className="text-3xl m-4 text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Portfolio</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2"><a href="#home">Home</a></li>
          <li className="p-2"><a href="#skills">Skills</a></li>
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#project">Projects</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
