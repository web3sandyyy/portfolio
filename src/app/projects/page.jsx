"use client"
import React from "react";
import Project from '../components/Project';

export default function page() {
  return (
    <div className="bg py-4 ">
      <p className="text-4xl font-bold py-2 text-white text-center">Projects</p>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <Project
        images={["/CertifyChain/1.png","/CertifyChain/2.png","/CertifyChain/3.png","/CertifyChain/4.png","/CertifyChain/5.png","/CertifyChain/6.png","/CertifyChain/7.png"]}
          title="Certify Chain"
          description="CertifyChain: Redefining academic certificates. Colleges issue blockchain-backed certificates, providing students with a hassle-free, secure, and trustworthy verification process. No blockchain knowledge required."
          tools={["reactjs","tailwind","hardhat","solidity"]}
          demoLink="https://www.linkedin.com/posts/sandeep-prajapatii_certifychain-blockchain-educationrevolution-activity-7114249133145677825-TQA6?utm_source=share&utm_medium=member_android"
        />
          <Project
            images={["/CryptoCafe/1.png", "/CryptoCafe/2.png"]}
            title="Crypto Cafe"
            description="CryptoCafe: The exclusive platform on Ethereum's Goerli testnet, where you can effortlessly donate cryptocurrency and reward content creators. Empower creators with crypto support, all in one place."
            tools={["reactjs","tailwind","hardhat","solidity"]}
            demoLink="https://cryptocafe-sandeep.netlify.app/"
            codeLink="https://github.com/sandeep-prajapatii/CryptoCafe/tree/main"
        />
          <Project
            images={["/JavaBlockchain/1.jpg"]}
            title="Blockchain Prototype"
            description="Introducing a Java-based blockchain prototype with two core functions: adding multiple blocks securely and viewing the entire blockchain. It uses the SHA-256 algorithm for data hashing, providing a user-friendly solution for blockchain development."
            tools={["java"]}
            codeLink="https://github.com/sandeep-prajapatii/Simple-Blockchain-using-Java"
        />
          <Project
            images={["/Twitter/1.jpg"]}
            title="Twitter Smart Contract"
            description="Introducing a blockchain-based Decentralized Twitter Project with core features mirroring Twitter. Users can post tweets, chat, follow others, access the latest tweets and recent users, and grant account management authority to individuals of their choice."
            tools={["solidity"]}
            codeLink="https://github.com/sandeep-prajapatii/Decentralised-Twitter"
        />
          <Project
            images={["/Prioritize/1.png","/Prioritize/2.png","/Prioritize/3.png"]}
            title="Todo App"
            description="Introducing 'Prioritize' a versatile to-do list app. Users can customize themes, add and update tasks effortlessly, and achieve better task management in style."
            tools={["reactjs"]}
            codeLink="https://github.com/sandeep-prajapatii/Prioritize"
            demoLink="https://prioritize-by-sandeep.netlify.app/"
        />
      </div>
    </div>
  );
}
