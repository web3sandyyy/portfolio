import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profile from "./assets/profile.jpg";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg text-white ">
      <Head>
        <title>Sandeep's Portfolio</title>
        <meta name="description" content="I'm a Passionate Blockchain Developer." />
        <meta property="og:title" content="Sandeep's Portfolio" />
        <meta property="og:description" content="I'm a Passionate Blockchain Developer." />
        <meta property="og:image" content="https://sandeepp-portfolio.vercel.app/profile.jpg" />
        <meta property="og:url" content="https://sandeepp-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="px-[10vw] py-16 glass-copy rounded-xl flex flex-col lg:flex-row gap-4 items-center text-center md:text-left mx-4 w-4/5  lg:w-[70%] justify-around">
          <div className=" text-2xl md:text-3xl lg:text-4xl text-center font-semibold ">
            <p className="inline">Hi!{" "}</p>
            <span className="text-3xl md:text-4xl lg:text-5xl text-purple-700">
              Im Sandeep,
            </span>
            <br />
            <p className="whitespace-nowrap mt-2"> A Blockchain Developer</p>
          </div>

          <Image
            src={profile}
            alt="profile"
            className="rounded-full h-[12em] w-[12em] md:h-[14em] md:w-[14em] object-scale-down  profile"
          />
        </div>
      </div>

      <div
        id="about"
        className="min-h-screen flex justify-center items-center "
      >
        <About />
      </div>

      <div
        id="project"
        className="min-h-screen flex justify-center items-center"
      >
        <Projects />
      </div>

      <div
        id="contact"
        className="min-h-screen flex justify-center items-center"
      >
        <Contact />
      </div>
    </div>
  );
}
