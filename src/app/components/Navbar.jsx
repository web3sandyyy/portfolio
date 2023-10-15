"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../globals.css";
import Link from "next/link";
// import resume from '../assets/resume.pdf'

export default function Navbar() {
  const [show, setShow] = useState(false);
  const liCSS =
    "menu-hover px-2 border-r-2 border-white hover:italic hover:rounded-lg ease-in-out duration-300 translate-x-0 hover:translate-x-1";
  const sidenav =
    "sidenav-li text-center py-6 mx-4 border-b-2 hover:italic hover:rounded-xl  ";
    // ease-in-out duration-300 add these in side nav if needed
  const toggleMenu = () => {
    setShow(!show);
    console.log("clicked");
  };

  return (
    <>
      <div className="header-blur text-white fixed w-full flex justify-around items-center z-10">
        <Link href="/" className="text-3xl py-2 font-semibold cursor-pointer no-underline">Sandeep.</Link>

        <ul className="md:flex hidden items-center text-lg">
          <li className={liCSS}><a href="#about" className="scroll-smooth">ABOUT</a></li>
          <li className={liCSS}><a href="#project">PROJECT</a></li>
          <li className={liCSS}><a href="#contact">CONTACT</a></li>
          <li className={`${liCSS} border-none`}><a href='resume.pdf' download={"SandeepsResume.pdf"}>RESUME</a></li>
        </ul>

        <GiHamburgerMenu
          onClick={toggleMenu}
          className="block md:hidden text-2xl "
        />
      </div>

      {show && (
        <div className=" h-screen w-3/5 fixed right-0 top-0 md:hidden rounded-xl z-[20]">
          <div className="header-blur border-s-2 rounded-xl h-screen w-3/5 fixed right-0 top-0 -z-[1]"></div>
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-white text-3xl  m-4"
          />

          <ul className="flex flex-col h-full  text-lg">
            <li className={sidenav}><a href="#about" >ABOUT</a></li>
            <li className={sidenav}><a href="#project">PROJECT</a></li>
            <li className={sidenav}><a href="#contact">CONTACT</a></li>
            <li className={`${sidenav} border-none`}>RESUME</li>
          </ul>
        </div>
      )}
    </>
  );
}
