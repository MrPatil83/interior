// import React from 'react'
import HomeImage from "../../assests/HomeCarosulImage/HomeImage.png";
import sofa from "../../assests/HeroImages/sofa.jpg";
import bedroom from "../../assests/HeroImages/bedroom.png";
import Tvunit from "../../assests/HeroImages/Tvunit.jpg";
import Tallimge from "../../assests/HeroImages/Tallimge.png";
import { motion } from "framer-motion";
import {FadeFront,FadeUp,FadeRight,FadeLeft} from "../../utils/Animation"


const Home = () => {
  return <section className=" -mt-24 overflow-hidden">
            <div
             className="w-screen">
              <motion.img
               variants={FadeFront(-0.1)}
               initial="hidden"
               whileInView={"visible"}
              //  whileHover={{ scale: 1.07 }}
               className=" w-screen  h-[calc(100vh)] object-cover bg-center" src={HomeImage} alt=""></motion.img>
            </div>
            <div className=" flex justify-center flex-col h-[100vh] items-center text-center px-[20rem]">
              <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView={"visible"}
               className=" text-slate-600 font-semibold poppins-regular text-7xl py-8 -mt-14">Work</motion.h1>
              <motion.p 
               variants={FadeUp(0.1)}
               initial="hidden"
               whileInView={"visible"}
              className="text-2xl poppins-regular text-zinc-500">"Your home should tell the story of who you are, and be a collection of what you love.
              In every detail, let your space reflect the beauty of your life and the comfort of your soul.
              Design with intention, creating spaces that inspire and soothe.
              Let every corner be a sanctuary, filled with warmth and meaning."</motion.p>
            </div>

            {/* images sector */}
            <motion.div
             variants={FadeFront(0.3)}
             initial="hidden"
             whileInView={"visible"}
             className=" grid grid-cols-2 -mt-10  w-screen p-10 bg-zinc-500 rounded-ss-full">
              <motion.img
               variants={FadeRight(0.2)}
               initial="hidden"
               whileInView={"visible"}
               className=" h-[40rem] ml-14 w-screen rounded-[3rem] " src={sofa} alt=""></motion.img>
              <motion.div
              variants={FadeLeft(0.2)}
              initial="hidden"
              whileInView={"visible"}
               className=" flex  flex-col-reverse gap-2 justify-center items-center">
              <img className=" h-[20rem]  w-[30rem]  rounded-[3rem]" src={bedroom} alt=""/>
              
              <img className=" h-[20rem] w-[30rem]  rounded-[3rem]" src={Tvunit} alt=""/>
              </motion.div>
            </motion.div>

            {/* part second */}
            <div className=" grid grid-cols-2 gap-32 h-[100vh] items-center">
              <div>
              <motion.h2
               variants={FadeUp(0.2)}
               initial="hidden"
               whileInView={"visible"}
               className=" text-5xl text-zinc-600 py-4 poppins-regular justify-center flex ml-[10rem]">Elegance in Interior Design.</motion.h2>
               <motion.div>
              <motion.p
               variants={FadeRight(0.3)}
               initial="hidden"
               whileInView={"visible"}
               className=" text-xl justify-center text-slate-500 flex ml-[10rem]">Elegance in Interior Design captures the essence of sophisticated, timeless decor. Explore modern home interior design ideas and luxury living room decor tips to create serene and stylish spaces.</motion.p>
              <motion.button
              //  variants={FadeRight(-0.2)}
              //  initial="hidden"
              //  whileInView={"visible"}
               className=" text-sm poppins-regular h-[2.9rem] w-[8rem] items-center rounded-[2rem] flex ml-[10rem] m-4 justify-center border border-black hover:text-white hover:bg-zinc-400 hover:scale-110 transition-transform duration-700 ">GET A QUOTE</motion.button>
               </motion.div>
              </div>
              <motion.img
              variants={FadeLeft(0.3)}
              initial="hidden"
              whileInView={"visible"}
               className=" h-[40rem] w-[30rem] rounded-3xl ml-10 mt-24" src={Tallimge} alt=""></motion.img>
            </div>  
            

  </section>;
};

export default Home;
