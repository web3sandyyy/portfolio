import React from 'react';
import profile from "../assets/profile.jpg"
import Image from 'next/image'
import Marquee from "react-fast-marquee";


export default function About() {
  const icons = ["html", "bootstrap", "css", "git", "github", "hardhat", "js", "nextjs", "python", "reactjs", "solidity", "tailwind"]

  return (
    <div className='mx-6 px-[10vw] py-16 w-4/5 lg:w-[70%] glass-copy rounded-xl'>
        <p className='mb-6 text-center text-4xl font-bold'>About me</p>
        <div className='flex flex-col md:flex-row items-center gap-4'>
            <Image src={profile} alt='profile' className="h-[12em] w-[12em] rounded-xl object-scale-down"/>
            <p className='p-2 text-xl text-justify'>A passionate Blockchain and Web developer with a relentless <u><i>thirst for knowledge</i></u> and the audacity to do it.</p>
        </div>
        <Marquee autoFill="true" pauseOnHover="true" className='flex mt-4 p-4 max-w-4/5 w-3/5 glass-copy overflow-hidden rounded-lg' >
          {
            icons.map((icon, index)=>
              <img src={`/tools/${icon}.png`} alt={icon} key={index} className='h-8 w-auto mx-[2vw] inline tools'/>)
          }
        </Marquee>
    </div>
  )
}
