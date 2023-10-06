import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Image from 'next/image'
import profile3 from "./assets/profile3.jpg"
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className='main text-white '>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="px-6 py-10 glass rounded-xl flex flex-col lg:flex-row gap-6 items-center text-center md:text-left mx-6 w-4/5 lg:w-[70%] justify-around ">
          <p className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">Hi! < span className="text-3xl md:text-4xl lg:text-5xl text-purple-700 no-wrap" >Im Sandeep,</span ><span className="whitespace-nowrap"> A Blockchain Developer</span></p>
          <Image src={profile3} className="rounded-full h-[12em] w-[12em] md:h-[14em] md:w-[14em] object-scale-down profile"/>
        </div>
      </div>
      <div id="about" className="min-h-screen flex justify-center items-center ">
        <About/>
      </div>
      <div id="project" className="min-h-screen flex justify-center items-center">
        <Projects/>
      </div>
      <div id="contact" className="min-h-screen flex justify-center items-center">
        <Contact/>
      </div>
    </div>
  )
}
 