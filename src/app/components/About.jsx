import React from 'react'
import profile3 from "../assets/profile3.jpg"
import Image from 'next/image'


export default function About() {
  return (
    <div className='mx-6 glass rounded-xl p-4 lg:w-3/5'>
        <p className='text-center text-4xl font-bold mb-4'>About me</p>
        <div className='flex gap-4 flex-col md:flex-row items-center'>
            <Image src={profile3} className="rounded-full h-[12em] w-[12em] object-scale-down"/>
            <p className='text-xl p-2'>Possessing a passion for creating clean, efficient code, dynamic and user-friendly websites and a drive to continuously learn.</p>
        </div>
        {/* <div className='p-4 rounded-lg w-4/5 mt-4 mx-auto'>

        </div> */}
    </div>
  )
}
