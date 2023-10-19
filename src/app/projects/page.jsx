"use client"
import React from "react";
import Project from '../components/Project';

export default function page() {
  return (
    <div className="main py-4 ">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <Project
        images={["/CertifyChain/1.png","/CertifyChain/2.png","/CertifyChain/3.png","/CertifyChain/4.png","/CertifyChain/5.png","/CertifyChain/6.png","/CertifyChain/7.png"]}
          title="Certify Chain"
          description="Created a blockchain-based certificate generation system for our college, enabling secure and wallet-free interactions with the technology."
          tools={["reactjs","tailwind","hardhat","solidity"]}
          demoLink="https://www.linkedin.com/posts/sandeep-prajapatii_certifychain-blockchain-educationrevolution-activity-7114249133145677825-TQA6?utm_source=share&utm_medium=member_android"
        />
          <Project
            images={["/CryptoCafe/1.png", "/CryptoCafe/2.png"]}
            title="Crypto Cafe"
            description="This website lets you donate or give reward to the creator in crypto."
            tools={["reactjs","tailwind","hardhat","solidity"]}
            demoLink="https://cryptocafe-sandeep.netlify.app/"
            codeLink="https://github.com/sandeep-prajapatii/CryptoCafe/tree/main"
        />
      </div>
    </div>
  );
}
