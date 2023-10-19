import React from 'react';
import profile from "../assets/profile.jpg"
import Image from 'next/image'
import Marquee from "react-fast-marquee";


export default function About() {
  const icons = ["html", "bootstrap", "css", "git", "github", "hardhat", "js", "nextjs", "python", "reactjs", "solidity", "tailwind"]

  return (
    <div className='mx-6  glass-copy rounded-xl px-[10vw] py-16  w-4/5 lg:w-[70%]'>
        <p className='text-center text-4xl font-bold mb-6'>About me</p>
        <div className='flex gap-4 flex-col md:flex-row items-center'>
            <Image src={profile} alt='profile' className="rounded-xl  h-[12em] w-[12em] object-scale-down"/>
            <p className='text-xl p-2 text-justify'>I am passionate about leveraging the power of blockchain technology to create secure and transparent solutions for a wide range of industries.</p>
        </div>
        <Marquee autoFill="true" pauseOnHover="true" className='glass-copy overflow-hidden p-4 rounded-lg max-w-4/5 w-3/5 mt-4  flex' >
          {
            icons.map((icon, index)=>
              <img src={`/tools/${icon}.png`} alt={icon} key={index} className='h-8 w-auto inline mx-[2vw]'/>)
          }
        </Marquee>
    </div>
  )
}
