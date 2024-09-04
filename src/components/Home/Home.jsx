import { useState, useEffect } from 'react';
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
  const [currentImage, setCurrentImage] = useState(HomeImage);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setCurrentImage(Tallimge);
      } else {
        setCurrentImage(HomeImage);
      }
    };

    // Call the function on initial render
    updateImage();

    // Add event listener for window resize
    window.addEventListener('resize', updateImage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);
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
          variants={FadeFront(0.1)}
          initial="hidden"
          whileInView={"visible"}
          className=" w-screen h-full md:h-[calc(70vh)]  lg:h-[calc(60vh)] xl:h-[calc(100vh)] object-cover bg-center"
          src={currentImage} // Use the state variable here
          alt=""
        ></motion.img>
      </div>
      <div className=" flex justify-center flex-col h-[100vh] mx-auto items-center text-center px-[20rem]">
        <motion.h1
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView={"visible"}
          className=" text-slate-600 font-semibold poppins-regular -ml-[15rem] text-[2rem] mx-auto -mt-[17rem]  py-4  md:text-3xl md:w-screen md:-mx-4 lg:text-4xl lg:-mt-[30rem] lg:-mx-3 xl:text-5xl xl:-mx-4 xl:mt-1"
        >
          Bringing
          nature home
        </motion.h1>
        <motion.p
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView={"visible"}
          className="text-base mx-auto -ml-[15rem] flex lg:px-10 text-zinc-500  md:poppins-regular md:w-screen md:-mx-14 md:text-xl  lg:text-xl lg:w-screen lg:-mb-14 xl:w-auto xl:ml-4"
        >
          "By embracing "Bringing Nature Home," interior spaces not only reflect a contemporary aesthetic but also promote well-being, sustainability, and a deeper appreciation for the beauty and serenity found in the natural world.."
        </motion.p>
      </div>

      {/* images sector */}
      <motion.div
        variants={FadeFront(0.3)}
        initial="hidden"
        whileInView={"visible"}
        className=" grid lg:grid-cols-2 -mt-14  w-screen p-10 bg-stone-900 rounded-ss-full"
      >
        <motion.img
          variants={FadeRight(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className=" h-[20rem] mx-auto ml-1 py-3 w-screen rounded-[3rem] md:h-[27rem] md:mx-14 md:py-2 md:w-[35rem] lg:h-[37rem] lg:w-[27rem] xl:h-[44rem] xl:mx-[9rem]  xl:w-[90%]"
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
            className=" h-[20rem]  w-[30rem]  rounded-[3rem] lg:h-[17rem] lg:w-[25rem]  xl:h-[20rem]  xl:w-[30rem]"
            src={bedroom}
            alt=""
          />

          <img
            className=" h-[20rem] w-[30rem]  rounded-[3rem] lg:h-[17rem] lg:w-[25rem] xl:h-[20rem] xl:w-[30rem]"
            src={Tvunit}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* part second */}
      <div className=" grid mx-auto md:grid-cols-2 gap-32 h-[100vh] items-center">
        <div>
          <motion.h2
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className=" text-2xl mx-auto -ml-1 text-zinc-600 pt-10 poppins-regular justify-center flex md:text-2xl md:mx-auto md:ml-10 md:w-full lg:text-[2.30rem] lg:ml-[6rem] xl:ml-[2.8rem] "
          >
            Elegance in Interior Design.
          </motion.h2>
          <motion.div>
            <motion.p
              variants={FadeRight(0.3)}
              initial="hidden"
              whileInView={"visible"}
              className=" text-base mx-auto justify-center py-2 text-slate-500 flex px-10  md:text-base md:mx-auto md:ml-4 lg:text-base lg:ml-14 xl:text-xl xl:ml-[8rem]"
            >
              Elegance in Interior Design captures the essence of sophisticated,
              timeless decor. Explore modern home interior design ideas and
              luxury living room decor tips to create serene and stylish spaces.
            </motion.p>
            <motion.button
              //  variants={FadeRight(-0.2)}
              //  initial="hidden"
              //  whileInView={"visible"}
              className=" text-sm poppins-regular h-[2.9rem] w-[8rem] items-center rounded-[2rem] flex  m-2 mx-auto ml-9 md:h-[2.5rem] md:w-[7rem] md:mx-auto md:ml-[3.4rem] lg:h-[2.5rem] lg:w-[7rem] lg:ml-[6rem] xl:ml-[10rem] justify-center border border-black hover:text-white hover:bg-zinc-400 hover:scale-110 transition-transform duration-700 "
            >
              GET A QUOTE
            </motion.button>
          </motion.div>
        </div>
        <motion.img
          variants={FadeLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          className=" h-[26rem] w-[20rem] -mt-24  rounded-3xl mx-auto md:h-[28rem] md:w-full md:mt-14 md:-mx-14 lg:h-[40rem] lg:w-[30rem] flex lg:-mx-10"
          src={Tallimge}
          alt=""
        ></motion.img>
      </div>

      {/* third part  */}
      <section className=" flex flex-cols-3 justify-around h-[210rem] lg:h-[73rem] mx-auto md:h-[117rem]  mt-24 bg-stone-900 rounded-se-full">
        <div className=" ">
          <motion.div
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className=" poppins-regular mx-auto px-10 text-zinc-500 mb-4 py-10 text-[2rem] md:text-3xl md:pl-4 lg:text-4xl"
          >
            <span className=" text-slate-500">What you can do in</span>{" "}
            STEADLERS & SCALES
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    className=" rounded-3xl cursor-pointer flex mx-auto"
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
