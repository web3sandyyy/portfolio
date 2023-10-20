"use client"
import React from 'react'
import Link from 'next/link'
import "../globals.css"
import Project from './Project'

export default function Projects() {
  return (
    <div className='px-[10vw] py-16 glass-copy border mx-4 rounded-xl w-4/5 lg:w-[70%]'>
      <p className="text-center text-4xl font-bold my-4">Projects</p>
      <div className="flex gap-4 flex-col md:flex-row">

        <div className='gap-4 w-full flex flex-col md:flex-row flex-1'>
          <Project
          images={["/CertifyChain/1.png"]}
            title="Certify Chain"
            description="Created a blockchain-based certificate generation system for our college, enabling secure and wallet-free interactions with the technology."
            tools={["reactjs","tailwind","hardhat","solidity"]}
            demoLink="https://www.linkedin.com/posts/sandeep-prajapatii_certifychain-blockchain-educationrevolution-activity-7114249133145677825-TQA6?utm_source=share&utm_medium=member_android"
          />
          <Project
            images={["/CryptoCafe/1.png"]}
            title="Crypto Cafe"
            description="This website lets you donate or give reward to the creator in crypto."
            tools={["reactjs","tailwind","hardhat","solidity"]}
            demoLink="https://cryptocafe-sandeep.netlify.app/"
            codeLink="https://github.com/sandeep-prajapatii/CryptoCafe/tree/main"
        />
        </div>
      </div>
      <Link href="/projects" className='p-2 border rounded-xl mx-auto block my-6 w-min whitespace-nowrap'> View More</Link>
    </div>
  );
}
