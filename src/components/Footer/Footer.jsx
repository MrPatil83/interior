// // import React from 'react'
// import { FaFacebook,FaInstagram,FaLinkedin,FaPinterest  } from "react-icons/fa";

// import whitelogo from "../../assests/logos/whitelogo.png"

// const Footer = () => {
//   return (
//     <footer className=" overflow-hidden h-[66vh]">
//       <div className=" grid  grid-cols-2 bg-slate-800 text-gray-400 rounded-ss-full">
//         <img className="h-[22rem] w-[30rem] ml-[10rem] cursor-pointer" src={whitelogo} alt="logo"/>
//         <div className=" grid py-[7rem] poppins-regular ">
//         <p className=" text-base"><strong className="text-xl">Address: </strong>123 Main St, Anytown, USA 12345</p>
//         <p className=" text-base"><strong className="text-xl">Website: </strong>demo@gmail.com</p>
//         <p className=" text-base"><strong className="text-xl">Email: </strong>demo@gmail.com</p>
//         <p className=" text-base"><strong className="text-xl">Contact: </strong>+911234567890</p>
       
//         <div className=" flex flex-row-2 -ml-2">
//         <FaFacebook className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-blue-500 transition duration-500" />
//         <FaInstagram className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-pink-600 transition duration-500"  />
//         <FaPinterest className=" h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-red-600 transition duration-500"  />
//         <FaLinkedin className="h-[2.4rem] w-[3rem] cursor-pointer rounded-full hover:text-blue-600 transition duration-500"   />
//         <button className=" ml-[20rem] border border-white rounded-[2rem] text-sm h-[2.7rem] w-[7rem] hover:text-black hover:scale-110 transition-transfrom duration-500 hover:transition-transform hover:duration-700 hover:bg-zinc-300">GET AQUOTE</button>
//         </div>
        
//         </div>
        
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import {Link} from "react-router-dom";

import whitelogo from "../../assests/logos/whitelogo.png"

const Footer = () => {
  return (
    <footer className="overflow-hidden my-auto md:h-[84vh] lg:h-[85vh] xl:h-auto">
      <div className="grid grid-cols-2  rounded-bl-full bg-slate-800 text-gray-400 md:grid-cols-1 md:text-center md:h-auto">
        <div className="flex justify-center md:justify-center">
          <img 
            className=" h-[15rem] w-screen mx-auto ml-[10rem] cursor-pointer md:h-[20rem] md:w-[24rem] md:ml-[10rem] md:mt-[rem] lg:ml-[20rem] lg:h-[22rem] lg:-mt-5 xl:mt-4" 
            src={whitelogo} 
            alt="logo"
          />
        </div>
        <div className="grid py-[7rem] mt-24 -ml-24 mx-auto poppins-regular md:py-[2rem] md:-mt-7 md:ml-[18rem] md:gap-4 lg:ml-[25rem] lg:-mt-[7rem] xl:ml-[60rem] xl:-mt-[20rem]">
          <p className="text-sm -ml-14 md:text-sm md:text-center xl:text-base"><strong className="text-xl md:text-base xl:text-xl">Address: </strong>123 Main St, Anytown, USA 12345</p>
          <p className="text-sm -ml-14 md:text-sm md:text-center xl:text-base xl:-ml-[10.8rem]"><strong className="text-xl md:text-base xl:text-xl">Website: </strong>demo@gmail.com</p>
          <p className="text-sm -ml-14 md:text-sm md:text-center xl:text-base xl:-ml-[12rem]"><strong className="text-xl md:text-base xl:text-xl">Email: </strong>demo@gmail.com</p>
          <p className="text-sm -ml-14 md:text-sm md:text-center xl:text-base xl:-ml-[11.8rem]"><strong className="text-xl md:text-base xl:text-xl">Contact: </strong>+911234567890</p>

          <div className="flex justify-center mx-auto mt-24 -ml-[0.5rem] -mb-14 md:-mt-3 md:flex-row lg:-mt-2 xl:-ml-14">
            <FaFacebook className="h-[2rem] w-[2.5rem] cursor-pointer rounded-full hover:text-blue-500 transition duration-500" />
            <FaInstagram className="h-[2rem] w-[2.5rem] cursor-pointer rounded-full hover:text-pink-500  transition duration-500" />
            <FaPinterest className="h-[2rem] w-[2.5rem] cursor-pointer rounded-full hover:text-red-500 transition duration-500" />
            <FaLinkedin className="h-[2rem] w-[2.5rem] cursor-pointer rounded-full hover:text-blue-600 transition duration-500" />
          </div>

          <div className="flex justify-center mt-[6rem] pb-4 mx-auto ml-[2rem] md:mt-7 lg:mt-8 xl:-ml-5" >
            <Link to="/contact">
            <button className="border border-white rounded-[2rem] text-sm h-[2.7rem] w-[7rem]  md:mb-4 hover:text-black hover:scale-110 transition-transform duration-500 hover:bg-zinc-300">
              GET A QUOTE
            </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
