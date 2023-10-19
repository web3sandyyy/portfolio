import React from "react";
import Image from 'next/image';
// import img from '../assets/projects/project1/'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project({images, title, description, tools, demoLink, codeLink  }) {
  return (
    <div className=" text-white p-4 glass-copy project-bg rounded-xl border mt-4 scrollbar-div">
      {images.length > 1 ? (

        <Carousel autoPlay="true" infiniteLoop="true" stopOnHover="true" showStatus={false} showThumbs={false}>
          {images.map((image, index)=>(
            <img
            src={image}
            className="h-auto mx-auto rounded-sm object-scale-down   example"
            alt="project ss"
            key={index}
            />
          ))}
            
        </Carousel>
      ) : (
        <img
            src={images}
            className="h-auto w-fit mx-auto rounded-sm object-scale-down   example"
            alt="project ss"
            />
      )}
      <p className="font-bold text-center text-3xl py-4 project-title">
        {title}
      </p>

      <p className="h-20 overflow-y-auto p-2 mt-2 text-justify mb-2 scrollbar">
        {description}
      </p>

      <div className="flex justify-between gap-2">
        <div className="flex flex-wrap gap-1 items-center">
          {tools.map((tool, index) => (
            <Image
              key={index}
              src={`/tools/${tool}.png`}
              alt={tool}
              className="h-6 w-auto object-scale-down"
              width={90}
              height={90}
            />
          ))}
        </div>

        <div className="flex gap-1 items-center flex-col lg:flex-row">
          {
            demoLink &&
            <a href={demoLink} className="border p-2 rounded-xl h-fit" target="_blank">
              Demo
            </a>
          }
          {
            codeLink &&
            <a href={codeLink} className="border p-2 rounded-xl h-fit" target="_blank">
              Code
            </a>
          }
        </div>
      </div>
    </div>
  );
}
