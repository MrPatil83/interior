// import React from 'react'
// import { FaSquareFacebook,FaSquareInstagram,FaSquarePinteres, } from "react-icons/fa6";
import { FaFacebook,FaInstagram,FaLinkedin,FaPinterest  } from "react-icons/fa";

import whitelogo from "../../assests/logos/whitelogo.png"

const Footer = () => {
  return (
    <footer>
      <div className=" grid grid-cols-2 bg-slate-800 text-gray-400 rounded-ss-full">
        <img className="h-[22rem] w-[30rem] ml-[10rem] cursor-pointer" src={whitelogo} alt="logo"/>
        <div className=" grid py-[7rem] poppins-regular ">
        <p className=" text-base"><strong className="text-xl">Address: </strong>123 Main St, Anytown, USA 12345</p>
        <p className=" text-base"><strong className="text-xl">Website: </strong>demo@gmail.com</p>
        <p className=" text-base"><strong className="text-xl">Email: </strong>demo@gmail.com</p>
        <p className=" text-base"><strong className="text-xl">Contact: </strong>+911234567890</p>
       
        <div className=" flex flex-row-2 -ml-2">
        <FaFacebook className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-blue-500 transition duration-500" />
        <FaInstagram className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-pink-600 transition duration-500"  />
        <FaPinterest className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-red-600 transition duration-500"  />
        <FaLinkedin className="h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-blue-600 transition duration-500"   />
        <button className=" ml-[20rem] border border-white rounded-[2rem] text-sm w-[7rem] hover:text-black transition-transform duration-200 hover:bg-zinc-300">GET AQUOTE</button>
        </div>
        
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
