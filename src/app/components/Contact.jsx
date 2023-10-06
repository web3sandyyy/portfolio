import React from 'react'
import "../globals.css"
import { BsLinkedin} from "react-icons/bs"
import { BsGithub} from "react-icons/bs"

export default function 
() {
  return (
    <div className='p-4 border glass rounded-xl'>
        <p className="text-center text-4xl font-bold mb-4">Contact</p>
        <div className='p-6 glass rounded-xl'>
            <div className='p-4 border rounded-xl mb-4'>
                <p>Contact me at</p>
                <BsGithub />
                <p>or</p>
                <BsLinkedin/>

            </div>
            <div className='p-4 border glass rounded-xl mb-4'>
                <p>Email me here</p>
            </div>
            <div className='p-4 border glass rounded-xl mb-4'>
                <p>Get my Resumer</p>
            </div>
        </div>
    </div>
  )
}
