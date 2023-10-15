import React from 'react'
import "../globals.css"
import { BsLinkedin} from "react-icons/bs"
import { BsGithub} from "react-icons/bs"

export default function 
() {
  return (
    <div className='px-[10vw] py-16 border glass-copy rounded-xl w-4/5 lg:w-[70%]'>
        <p className="my-4 text-center text-4xl font-bold mt-4">Contact</p>
        <div className='p-6 glass-copy rounded-xl project-bg'>
            <div className='p-4 border glass-copy rounded-xl mb-4 flex flex-wrap text-xl justify-around items-center'>
                {/* <p className='w-full md:w-fit text-center md:mb-0 mb-4'>Contact me at</p> */}
                <a href='https://github.com/sandeep-prajapatii' target='_blank'>
                    <BsGithub className='text-3xl md:text-4xl lg:text-6xl'/>
                </a>
                <p>or</p>
                <a href='https://www.linkedin.com/in/sandeep-prajapatii/' target='_blank'>
                    <BsLinkedin className='text-3xl md:text-4xl lg:text-6xl'/>
                </a>
            </div>
            <div className='p-4 border glass-copy rounded-xl mb-4 text-xl text-center'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeeprajapati18@gmail.com&su=Your%20Portfolio%20Caught%20My%20Eye" target='_blank' className=''>Email me</a>
            </div>
            <div className='p-4 border glass-copy rounded-xl mb-4 text-xl text-center'>
                <a href='resume.pdf' download={"SandeepsResume.pdf"}>Resume</a>
            </div>
        </div>
    </div>
  )
}
