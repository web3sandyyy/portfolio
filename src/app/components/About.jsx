import React from 'react'
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


export default function About() {
  const icons = [html, bootstrap, css, git, github, hardhat, js, next, python, react, solidity, tailwind]

  return (
    <div className='mx-6  glass rounded-xl p-6 w-4/5 lg:w-[70%]'>
        <p className='text-center text-4xl font-bold mb-6'>About me</p>
        <div className='flex gap-4 flex-col md:flex-row items-center'>
            <Image src={profile3} alt='profile' className="rounded-xl  h-[12em] w-[12em] object-scale-down"/>
            <p className='text-xl p-2 text-justify'>Possessing a passion for creating clean, efficient code, dynamic and user-friendly websites and a drive to continuously learn.</p>
        </div>
        <div className='glass flex overflow-hidden p-4 rounded-lg w-4/5 mt-4 mx-auto gap-4'>
          {
            icons.map((icon, index)=>
              <Image src={icon} alt={icon} key={index} className='h-8 w-auto logo'/>)
          }
        </div>
    </div>
  )
}
