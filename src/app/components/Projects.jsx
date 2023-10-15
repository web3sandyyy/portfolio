import React from 'react'
import Image from 'next/image'
import ss from '../assets/projectss.png'
import ss2 from '../assets/project2ss.png'
import  react  from "../assets/react-js-icon.png"
import  hardhat  from "../assets/hardhat-icon.png"
import  tailwind  from "../assets/tailwind-css-icon.png"
import  vite  from "../assets/Vitejs.png"
import "../globals.css"
import Link from 'next/link'

export default function Projects() {
  return (
    <div className='px-[10vw] py-16 glass-copy border mx-4 rounded-xl w-4/5 lg:w-[70%]'>
      <p className="text-center text-4xl font-bold my-4">Projects</p>
      <div className="flex gap-4 flex-col md:flex-row">

        <div className="p-4 glass-copy project-bg rounded-xl border md:w-1/2 w-full  scrollbar-div ">
          <Image
            src={ss}
            className="h-auto w-fit mx-auto rounded-sm object-scale-down   example"
            alt="project ss"
          />
          <p className="font-bold text-center text-3xl py-4 project-title">
            Certify Chain
          </p>
          <p className="h-20 overflow-y-auto p-2 mt-2 text-justify mb-2 scrollbar">
          Created a blockchain-based certificate generation system for our college, enabling secure and wallet-free interactions with the
technology.
          </p>

          <div className="flex justify-between gap-2">
            <div className="flex flex-wrap gap-1 items-center">
              <Image src={react} alt='react' className="h-6 w-auto object-scale-down" />
              <Image src={tailwind} alt='tailwind' className="h-6 w-auto object-scale-down" />
              <Image src={hardhat} alt='hardhat' className="h-6 w-auto object-scale-down" />
            </div>
            <div className="flex gap-1 items-center flex-col lg:flex-row">
              <a  href='https://www.linkedin.com/posts/sandeep-prajapatii_certifychain-blockchain-educationrevolution-activity-7114249133145677825-TQA6?utm_source=share&utm_medium=member_android' className='border p-2 rounded-xl h-fit' target='_blank'>Demo</a>
              {/* <a href='' className='border p-2 rounded-xl h-fit'>Code</a> */}
            </div>
          </div>
        </div>
        <div className="p-4 glass-copy project-bg rounded-xl border md:w-1/2 w-full  scrollbar-div ">
          <Image
            src={ss2}
            className="h-auto w-fit mx-auto rounded-sm object-scale-down   example"
            alt="project ss"
          />
          <p className="font-bold text-center text-3xl py-4 project-title">
            CryptoCafe
          </p>
          <p className="h-20 overflow-y-auto p-2 mt-2 text-justify mb-2 scrollbar">
          This website lets you donate or give reward to the creator in crypto
          </p>

          <div className="flex justify-between gap-2">
            <div className="flex flex-wrap gap-1 items-center">
            <Image src={vite} alt='react' className="h-6 w-auto object-scale-down" />
              <Image src={tailwind} alt='tailwind' className="h-6 w-auto object-scale-down" />
              <Image src={hardhat} alt='hardhat' className="h-6 w-auto object-scale-down" />
            </div>
            <div className="flex gap-1 items-center flex-col lg:flex-row">
              <a href='https://cryptocafe-sandeep.netlify.app/' target='_blank' className='border p-2 rounded-xl h-fit'>Demo</a>
              <a href='https://github.com/sandeep-prajapatii/CryptoCafe/tree/main' target='_blank' className='border p-2 rounded-xl h-fit'>Code</a>
            </div>
          </div>
        </div>


      </div>
      {/* <Link href="/projects" className='p-2 border rounded-xl mx-auto block my-6 w-min whitespace-nowrap'> View More</Link> */}
    </div>
  );
}