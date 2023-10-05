import Navbar from "./components/Navbar";
import About from "./components/About";
import Image from 'next/image'
import profile3 from "./assets/profile3.jpg"

export default function Home() {
  return (
    <div className='main text-white'>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="px-8 py-12 glass rounded-xl flex flex-col md:flex-row gap-6 items-center text-center md:text-left mx-6">
          <p className="text-4xl font-semibold">Hi! < span className="text-5xl text-purple-700 no-wrap" >Im Sandeep,</span ><span className="whitespace-nowrap"> A Blockchain Developer</span></p>
          <Image src={profile3} className="rounded-full h-[16em] w-[16em] object-scale-down"/>
        </div>
      </div>
      <div id="about" className="h-screen flex justify-center items-center">
        <About className="w-3/5"/>
      </div>
      <div id="projects" className="h-screen">projects</div>
      <div id="contact" className="h-screen">contact</div>
    </div>
  )
}
 