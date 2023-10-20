import React from 'react'
import { BsLinkedin} from "react-icons/bs"
import { BsGithub} from "react-icons/bs"
import "../globals.css"

export default function Contact() {
  return (
    <div className='px-[10vw] py-16 w-4/5 lg:w-[70%] border glass-copy rounded-xl '>
        <p className="my-4 mt-4 text-center text-4xl font-bold ">Contact</p>
        <div className='p-6 glass-copy rounded-xl project-bg'>
            <div className='flex flex-wrap  justify-around items-center mb-4 p-4 border glass-copy rounded-xl text-xl '>
                <a href='https://github.com/sandeep-prajapatii' target='_blank'>
                    <BsGithub className='text-3xl md:text-4xl lg:text-6xl'/>
                </a>
                <p>or</p>
                <a href='https://www.linkedin.com/in/sandeep-prajapatii/' target='_blank'>
                    <BsLinkedin className='text-3xl md:text-4xl lg:text-6xl'/>
                </a>
            </div>
            <a className='p-4 block mb-4 border glass-copy rounded-xl text-xl text-center' href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeeprajapati18@gmail.com&su=Your%20Portfolio%20Caught%20My%20Eye" target='_blank' >Email</a>
            <a className='p-4 block border glass-copy rounded-xl text-xl text-center' href='resume.pdf' download={"Sandeep's Resume.pdf"}>Resume</a>
        </div>
    </div>
  )
}
