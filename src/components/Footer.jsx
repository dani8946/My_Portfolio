import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white max-w-[1200px] mx-auto sm:py-20 p-5">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div className="mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center md:justify-start">
                            <li className="mx-2">
                                <a href="#home" className="hover:text-pink-500">Home</a>
                            </li>
                            <li className="mx-2">
                                <a href="#about" className="hover:text-pink-500">About</a>
                            </li>
                            <li className="mx-2">
                                <a href="#services" className="hover:text-pink-500">Services</a>
                            </li>
                            <li className="mx-2">
                                <a href="#contact" className="hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col items-center">
                        <h2 className="text-xl mb-2">Follow me on</h2>
                        <div className="flex space-x-4">
                            <a href="https://x.com/DidwmB2676" className="text-blue-500 hover:text-pink-500">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/daniel-kr-brahma-b11b69227/" className="hover:text-pink-500">
                                <FaLinkedin size={24} className="bg-blue-500 text-white p-1 rounded hover:text-pink-500" />
                            </a>
                            <a href="https://github.com/dani8946" className="text-black hover:text-pink-500">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.instagram.com/dani_brahma1/" className="bg-clip-text text-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 hover:text-pink-500">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p>&copy; 2024 Daniel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
