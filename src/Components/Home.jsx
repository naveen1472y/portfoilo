import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";


function Home() {
  return (
    <>
      <div name='Home' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1> Hello, I'm a</h1>
              <span className="text-red-700 font-bold">Developer</span>
            </div>
            <p className="text-sm md:text-md text-justify">
            I am a dedicated MERN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My experience spans across both frontend and backend development, enabling me to create seamless, responsive, and scalable applications.
            <br /><br />
            I have a passion for problem-solving, writing clean and efficient code, and ensuring the best user experience. With a deep understanding of JavaScript and the latest web technologies, I continuously work on improving my skills and staying current with industry trends. I enjoy working both independently and in collaborative team environments to turn ideas into innovative digital solutions.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                  <FaSquareInstagram className="text-2xl cursor-pointer" />
                  </a>
      
                </li>
                <li>
                   <a href="https://www.t.me/" target="_blank">
                  <FaTelegramPlane className="text-2xl cursor-pointer" />
                  </a>
                  
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center">Currently working on</h1>
              <ul className="flex space-x-5">
                <li>
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </li>
                <li>
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </li>
                <li>
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </li>
                <li>
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
            </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img src="profile.png" className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
