// import React from 'react'
import HomeImage from "../../assests/HomeCarosulImage/HomeImage.png";
import sofa from "../../assests/HeroImages/sofa.jpg";
import bedroom from "../../assests/HeroImages/bedroom.png";
import Tvunit from "../../assests/HeroImages/Tvunit.jpg";
import Tallimge from "../../assests/HeroImages/Tallimge.png";
import office from "../../assests/HeroImages/office.jpg";
import appartment from "../../assests/HeroImages/appartment.jpg";
import bedroomarea from "../../assests/HeroImages/bedroomarea.jpg";
import kitchen from "../../assests/HeroImages/kitchen.jpg";
import livingarea from "../../assests/HeroImages/livingarea.jpg";
import caferesturant from "../../assests/HeroImages/caferesturant.jpg";
import bathroom from "../../assests/HeroImages/bathroom.jpg";
import clasroom from "../../assests/HeroImages/clasroom.jpg";
import house from "../../assests/HeroImages/house.jpg";
import { motion } from "framer-motion";
import { FadeFront, FadeUp, FadeRight, FadeLeft } from "../../utils/Animation";
import Testomonial from "../Testomonial/Testomonial";

const Home = () => {
  const whatCanItems = [
    {
      id: 1,
      title: "Office",
      imgSrc: office,
      alt: "office image",
    },
    {
      id: 2,
      title: "Appartment",
      imgSrc: appartment,
      alt: "appartment image",
    },
    {
      id: 3,
      title: "Bedroomarea",
      imgSrc: bedroomarea,
      alt: "bedroomarea image",
    },
    {
      id: 4,
      title: "Kitchen",
      imgSrc: kitchen,
      alt: "kitchen image",
    },
    {
      id: 5,
      title: "Livingarea",
      imgSrc: livingarea,
      alt: "livingarea image",
    },
    {
      id: 6,
      title: "Cafe/Resturant",
      imgSrc: caferesturant,
      alt: "caferesturant image",
    },
    {
      id: 7,
      title: "Bathroom",
      imgSrc: bathroom,
      alt: "bathroom image",
    },
    {
      id: 8,
      title: "Clasroom",
      imgSrc: clasroom,
      alt: "clasroom image",
    },
    {
      id: 9,
      title: "House",
      imgSrc: house,
      alt: "house image",
    },
  ];

  return (
    <section className=" -mt-24 overflow-hidden">
      <div className="w-screen">
        <motion.img
          variants={FadeFront(-0.1)}
          initial="hidden"
          whileInView={"visible"}
          //  whileHover={{ scale: 1.07 }}
          className=" w-screen h-[calc(44vh)] md:h-[calc(70vh)]  lg:h-[calc(60vh)] xl:h-[calc(100vh)] object-cover bg-center"
          src={HomeImage}
          alt=""
        ></motion.img>
      </div>
      <div className=" flex justify-center flex-col h-[100vh] mx-auto items-center text-center px-[20rem]">
        <motion.h1
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView={"visible"}
          className=" text-slate-600 font-semibold poppins-regular -ml-[14rem] text-xl mx-auto  mt-[10rem] py-8 md:text-3xl md:w-screen lg:text-4xl lg:-mt-[30rem]"
        >
          Bringing
          nature home
        </motion.h1>
        <motion.p
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView={"visible"}
          className="text-2xl poppins-regular text-zinc-500"
        >
          "By embracing "Bringing Nature Home," interior spaces not only reflect a contemporary aesthetic but also promote well-being, sustainability, and a deeper appreciation for the beauty and serenity found in the natural world.."
        </motion.p>
      </div>

      {/* images sector */}
      <motion.div
        variants={FadeFront(0.3)}
        initial="hidden"
        whileInView={"visible"}
        className=" grid grid-cols-2 -mt-10  w-screen p-10 bg-zinc-500 rounded-ss-full"
      >
        <motion.img
          variants={FadeRight(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className=" h-[40rem] ml-14 w-screen rounded-[3rem] "
          src={sofa}
          alt=""
        ></motion.img>
        <motion.div
          variants={FadeLeft(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className=" flex  flex-col-reverse gap-2 justify-center items-center"
        >
          <img
            className=" h-[20rem]  w-[30rem]  rounded-[3rem]"
            src={bedroom}
            alt=""
          />

          <img
            className=" h-[20rem] w-[30rem]  rounded-[3rem]"
            src={Tvunit}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* part second */}
      <div className=" grid grid-cols-2 gap-32 h-[100vh] items-center">
        <div>
          <motion.h2
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className=" text-5xl text-zinc-600 py-4 poppins-regular justify-center flex ml-[10rem]"
          >
            Elegance in Interior Design.
          </motion.h2>
          <motion.div>
            <motion.p
              variants={FadeRight(0.3)}
              initial="hidden"
              whileInView={"visible"}
              className=" text-xl justify-center text-slate-500 flex ml-[10rem]"
            >
              Elegance in Interior Design captures the essence of sophisticated,
              timeless decor. Explore modern home interior design ideas and
              luxury living room decor tips to create serene and stylish spaces.
            </motion.p>
            <motion.button
              //  variants={FadeRight(-0.2)}
              //  initial="hidden"
              //  whileInView={"visible"}
              className=" text-sm poppins-regular h-[2.9rem] w-[8rem] items-center rounded-[2rem] flex ml-[10rem] m-4 justify-center border border-black hover:text-white hover:bg-zinc-400 hover:scale-110 transition-transform duration-700 "
            >
              GET A QUOTE
            </motion.button>
          </motion.div>
        </div>
        <motion.img
          variants={FadeLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          className=" h-[40rem] w-[30rem] rounded-3xl ml-10 mt-24"
          src={Tallimge}
          alt=""
        ></motion.img>
      </div>

      {/* third part  */}
      <section className=" flex flex-cols-3 justify-around h-[75rem] mt-24 bg-stone-900 rounded-se-full">
        <div className=" ">
          <motion.div
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className="text-4xl poppins-regular text-zinc-500 mb-4 py-10"
          >
            <span className=" text-slate-500">What you can do in</span>{" "}
            STEADLERS & SCALES
          </motion.div>
          <div className="what_can_items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whatCanItems.map((item) => (
              <div key={item.id} className="" data-id={item.id}>
                <motion.div
                  variants={FadeLeft(0.2)}
                  initial="hidden"
                  whileInView={"visible"}
                  className=" poppins-regular text-slate-400 flex justify-center text-xl font-semibold"
                >
                  {item.title}
                </motion.div>
                <picture className="">
                  <motion.img
                    variants={FadeRight(0.2)}
                    initial="hidden"
                    whileInView={"visible"}
                    src={item.imgSrc}
                    width="300px"
                    height="300px"
                    className=" rounded-3xl cursor-pointer"
                    alt={item.alt}
                  ></motion.img>
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fourth part */}
      <Testomonial/>
    </section>
  );
};

export default Home;
