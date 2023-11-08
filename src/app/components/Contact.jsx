"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BsLinkedin} from "react-icons/bs"
import { BsGithub} from "react-icons/bs"
import { MdEmail} from "react-icons/md"
import "../globals.css"
import { handleClientScriptLoad } from 'next/script';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const { name, email, subject, message } = formData;
    
      const handleChange = (e) => {



        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // console.log(formData)
      };
    

    const sendEmail = (e) => {
      e.preventDefault();

      const templateParams = {
        subject: subject,
        message: message,
        name: name,
        email: email
       };
  
      emailjs.send('service_fdc6e9q', 'template_8pwv1w7', templateParams, '7h-6pHV6G5WSsYTRG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(templateParams)

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
    })
    };
  return (
    <div className='px-[10vw] py-16 w-4/5 lg:w-[70%] border glass-copy rounded-xl '>
        <p className="my-4 mt-4 text-center text-4xl font-bold ">Contact</p>

        {/* <div className='p-6 glass-copy rounded-xl project-bg'>
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
        </div> */}
              <form  onSubmit={sendEmail} className='flex flex-col p-6 w-4/5 md:w-3/5 mx-auto project-bg'>
        <input required className='p-2 mb-4 mx-auto w-full max-w-[600px] border-2 glass-copy rounded-lg' type='text'    name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}/>
        <input required className='p-2 mb-4 mx-auto w-full max-w-[600px] border-2 glass-copy rounded-lg' type='text' name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}/>
        <input required className='p-2 mb-4 mx-auto w-full max-w-[600px] border-2 glass-copy rounded-lg'  type='text' name="subject"
        placeholder="Subject"
        value={subject}
        onChange={handleChange}/>
        <textarea required className='p-2 mb-4 mx-auto w-full max-w-[600px] border-2 glass-copy rounded-lg min-h-[5rem]' type='text' name="message"
        placeholder="Message"
        value={message}
        onChange={handleChange}/>
        <button type='submit' value="Send" className='p-2 px-4 border rounded-lg w-full max-w-[600px]'>Send</button>
        <div className='flex justify-around mt-6'>
        <a href='https://github.com/sandeep-prajapatii' target='_blank'>
                    <BsGithub className='text-3xl md:text-4xl'/>
                </a>
                <a href='https://www.linkedin.com/in/sandeep-prajapatii/' target='_blank'>
                    <BsLinkedin className='text-3xl md:text-4xl '/>
                </a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=sandeeprajapati18@gmail.com&su=Your%20Portfolio%20Caught%20My%20Eye' target='_blank'>
                    <MdEmail className='text-3xl md:text-4xl '/>
                </a>

        </div>
      </form>
    </div>
  )
}
