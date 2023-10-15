import React from 'react';
import profile3 from "../assets/profile3.jpg"
import Image from 'next/image'
import  html  from "../assets/html-5.png"
import  bootstrap  from "../assets/bootstrap.png"
import  css  from "../assets/css.png"
import  git  from "../assets/git-icon.png"
import  github  from "../assets/github-icon.png"
import  hardhat  from "../assets/hardhat-icon.png"
import  js  from "../assets/js.png"
import  next  from "../assets/nextjs-icon.png"
import  python  from "../assets/python.png"
import  react  from "../assets/react-js-icon.png"
import  solidity  from "../assets/solidity-icon.png"
import  tailwind  from "../assets/tailwind-css-icon.png"
import Marquee from "react-fast-marquee";


export default function About() {
  const icons = [html, bootstrap, css, git, github, hardhat, js, next, python, react, solidity, tailwind]

  return (
    <div className='mx-6  glass-copy rounded-xl px-[10vw] py-16  w-4/5 lg:w-[70%]'>
        <p className='text-center text-4xl font-bold mb-6'>About me</p>
        <div className='flex gap-4 flex-col md:flex-row items-center'>
            <Image src={profile3} alt='profile' className="rounded-xl  h-[12em] w-[12em] object-scale-down"/>
            <p className='text-xl p-2 text-justify'>I am passionate about leveraging the power of blockchain technology to create secure and transparent solutions for a wide range of industries.</p>
        </div>
        <Marquee autoFill="true" pauseOnHover="true" className='glass-copy overflow-hidden p-4 rounded-lg max-w-4/5 w-3/5 mt-4  flex' >
          {
            icons.map((icon, index)=>
              <Image src={icon} alt={icon} key={index} className='h-8 w-auto inline mx-[2vw]'/>)
          }
        </Marquee>
    </div>
  )
}
