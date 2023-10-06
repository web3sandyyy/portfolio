import React from 'react'
import Image from 'next/image'
import ss from '../assets/projectss.png'
import  html  from "../assets/html-5.png"
import  bootstrap  from "../assets/bootstrap.png"
import  css  from "../assets/css.png"
import  git  from "../assets/git-icon.png"
import  code  from "../assets/coding.png"
import  web  from "../assets/web.png"
import "../globals.css"

export default function Projects() {
  return (
    <div className='p-4 glasstwo border mx-4 rounded-xl w-4/5 md-3/5'>
      <p className="text-center text-4xl font-bold mb-4 py-4">Projects</p>
      <div className="flex gap-4 flex-col md:flex-row">

        <div className="p-4 glasstwo rounded-xl border md:w-1/2 w-full ">
          <Image
            src={ss}
            className="h-auto w-fit mx-auto object-scale-down p-2"
            alt="project ss"
          />
          <p className="font-bold text-center text-3xl border-b py-4">
            Certify Chain
          </p>
          <p className="h-20 overflow-y-auto p-2 text-justify">
            This is the small desc of the project it doesnt have to be to big
            you know
          </p>
          <div className="flex justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              <Image src={html} alt='html' className="h-8 w-auto object-scale-down" />
              <Image src={css} alt='css' className="h-8 w-auto object-scale-down" />
              <Image src={git} alt='git' className="h-8 w-auto object-scale-down" />
              <Image src={bootstrap} alt='bootstrap' className="h-8 w-auto object-scale-down" />
            </div>
            <div className="flex gap-1">
              <button className='border p-2 rounded-xl'>Demo</button>
              <button className='border p-2 rounded-xl'>Code</button>
            </div>
          </div>
        </div>

        <div className="p-4 glasstwo rounded-xl border md:w-1/2 w-full ">
          <Image
            src={ss}
            className="h-[7em] w-auto mx-auto object-scale-down"
            alt="project ss"
          />
          <p className="font-bold text-center text-3xl border-b py-4">
            Certify Chain
          </p>
          <p className="h-20 overflow-y-auto p-2 text-justify">
            This is the small desc of the project it doesnt have to be to big
            you know
          </p>
          <div className="flex justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              <Image src={html} alt='html' className="h-8 w-auto object-scale-down" />
              <Image src={css} alt='css' className="h-8 w-auto object-scale-down" />
              <Image src={git} alt='git' className="h-8 w-auto object-scale-down" />
              <Image src={bootstrap} alt='bootstrap' className="h-8 w-auto object-scale-down" />
            </div>
            <div className="flex gap-1">
              <button className='border p-2 rounded-xl'>Demo</button>
              <button className='border p-2 rounded-xl'>Code</button>
            </div>
          </div>
        </div>

      </div>
      <button className='p-2 border rounded-xl mx-auto block my-6'> View More</button>
    </div>
  );
}
