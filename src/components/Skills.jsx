import React from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollDirection from './useScrollDirection'; // Import the custom hook
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/java-script.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import node from '../assets/nodejs.png';
import c from '../assets/c-.png';
import csharp from '../assets/c-sharp.png';
import sql from '../assets/mysql.png';
import gc from '../assets/Google Cloud.png';
import aws from '../assets/AWS.png';
import lin from '../assets/Linuxx.png';
import git from '../assets/git.png';

const skillsData = [
  { src: html, alt: 'html', label: 'HTML' },
  { src: css, alt: 'css', label: 'CSS_3' },
  { src: js, alt: 'Java Script', label: 'JS' },
  { src: tailwind, alt: 'tailwind css', label: 'Tailwind' },
  { src: react, alt: 'react', label: 'React' },
  { src: java, alt: 'java', label: 'Java' },
  { src: python, alt: 'python', label: 'Python' },
  { src: node, alt: 'node js', label: 'NodeJS' },
  { src: c, alt: 'c++', label: 'C++' },
  { src: csharp, alt: 'C#', label: 'C#' },
  { src: sql, alt: 'MySQL', label: 'MySQL' },
  { src: gc, alt: 'Google CLoud', label: 'Google Cloud' },
  { src: aws, alt: 'AWS', label: 'AWS' },
  { src: lin, alt: 'Linux', label: 'Linux' },
  { src: git, alt: 'Git', label: 'Git' },
];

const SkillItem = ({ src, alt, label, scrollDirection }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transition-transform duration-500 ${
        inView
          ? 'transform translate-y-0 opacity-100'
          : scrollDirection === 'down'
          ? 'transform -translate-y-10 opacity-0'
          : 'transform translate-y-10 opacity-0'
      }`}
    >
      <img src={src} alt={alt} width={100} height={100} />
      <p className="mt-2">{label}</p>
    </div>
  );
};

const Skills = () => {
  const scrollDirection = useScrollDirection(); // Use the custom hook

  return (
    <div className="mt-8">
      <h2 className="text-4xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:text-4xl font-bold m-4">
        My Tech Stack
      </h2>
      <div className="text-white md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center" id="skills">
        {skillsData.slice(0, 5).map((skill, index) => (
          <SkillItem key={index} {...skill} scrollDirection={scrollDirection} />
        ))}
      </div>
      <div className="text-white md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center" id="skills">
        {skillsData.slice(5, 10).map((skill, index) => (
          <SkillItem key={index} {...skill} scrollDirection={scrollDirection} />
        ))}
      </div>
      <div className="text-white md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center" id="skills">
        {skillsData.slice(10, 15).map((skill, index) => (
          <SkillItem key={index} {...skill} scrollDirection={scrollDirection} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
