// import herokitchen from "../../assests/Kitchen/herokitchen.webp";
// import herokitchenvertical from "../../assests/Kitchen/herokitchenvertical.webp";
// import image1 from "../../assests/Kitchen/Thumbnils/image1.webp";
// import image2 from "../../assests/Kitchen/Thumbnils/image2.webp";
// import image3 from "../../assests/Kitchen/Thumbnils/image3.webp";
// import image4 from "../../assests/Kitchen/Thumbnils/image4.webp";
// import image5 from "../../assests/Kitchen/Thumbnils/image5.webp";
// import image6 from "../../assests/Kitchen/Thumbnils/image6.webp";
// import {useState,useEffect } from 'react'
// const Kitchen = () => {
//   const [featuredImage, setFeaturedImage] = useState({
//     src: image1,
//     alt: "Modern Minimalist Kitchen Design",
//     aspectRatio: '2846 / 1671',
//   });

//   // Thumbnails array to map over
//   const thumbnails = [
//     {
//       src: image2,
//       alt: "Modern Minimalist Kitchen Design",
//       aspectRatio: '2846 / 1671',
//     },
//     {
//       src:image3,
//       alt: "Modern Kitchen Renovation",
//       aspectRatio: '2846 / 1671',
//     },
//     {
//       src: image4,
//       alt: "Minimalist Kitchen Remodel",
//       aspectRatio: '2500 / 1250',
//     },
//     {
//       src:image5,
//       alt: "Minimalist Dining Room Design",
//       aspectRatio: '2500 / 1471',
//     },
//   ];

// useEffect(()=>{
//   window.scrollTo(0, 0);
// },[]);

//   return (
//     <section className=" mb-2">
//       <div className="-mt-24 relative">
//         <img className="md:w-screen" src={herokitchen} alt="Kitchen" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
//       </div>
//       {/* <h2 className=" text-5xl text-slate-500 flex justify-center mt-[5rem] pb-7 poppins-extralight">Modern Minimalist Kitchen Design</h2> */}
//       <article className="space-y-12">
      
//       {/* Section: Modern Minimalist Kitchen Design */}
//       <div className="sample-row py-6 xl:mt-[4rem]">
//         <div className="col-12">
//           <h2 className=" text-[1.40rem] md:text-4xl lg:text-5xl text-slate-500 py-14 flex justify-center poppins-extralight">Modern Minimalist Kitchen Design</h2>
          
//           {/* Featured Image */}
//           <div className="featured-sample-container mx-auto px-4 md:mx-4 lg:mx-0  mt-4 relative">
//             <img 
//               className=" h-[15rem] w-[25rem] md:w-[75rem] md:mx-[10rem] border-[1.5rem] mx-auto md:border-[2rem] lg:border-[4rem] border-slate-700 xl:h-[40rem] object-cover" 
//               style={{ aspectRatio: featuredImage.aspectRatio }} 
//               alt={featuredImage.alt} 
//               src={featuredImage.src}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Thumbnail Grid */}
//       <div className="sample-row thumb-row">
//         <div className="col-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto px-4 md:mx-5 lg:-mt-10 lg:mx-5 xl:mx-[10rem]">
//             {thumbnails.map((thumb, index) => (
//               <div 
//                 key={index} 
//                 className="thumb-container cursor-pointer" 
//                 onClick={() => setFeaturedImage(thumb)}
//               >
//                 <img 
//                   className=" h-[10rem] md:h-[10rem] lg:h-[9rem] lg:w-[22rem] xl:w-full xl:h-full hover:scale-110 hover:translate-y-4 transition-transform duration-700 rounded-3xl object-cover" 
//                   style={{ aspectRatio: thumb.aspectRatio }} 
//                   alt={thumb.alt} 
//                   src={thumb.src}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonial Section */}
//       <div className="testimonial-row flex justify-center mx-auto md:px-[5rem] lg:px-[10rem] lg:py-28 xl:px-[27rem] xl:py-14">
//         <div className="col-12">
//           <p className="testimonial text-sm mx-auto px-5 md:text-lg lg:text-xl xl:text-2xl text-slate-700 poppins-thin-italic">
//             <q>If I could give 6 stars I would! The team at Decorilla is amazing and worked with me to get exactly what I needed for my kitchen renovation.</q>
//           </p>
//         </div>
//       </div>

//       {/* Section: Sleek and Modern Kitchen Remodel */}
//       <div className="sample-row py-6 bg-zinc-800 rounded-bl-full">
//         <div className="col-12">
//           <h2 className=" text-[1.30rem] md:text-4xl lg:text-5xl text-slate-500 xl:py-14 flex justify-center poppins-extralight">Sleek and Modern Kitchen Remodel</h2>
          
//           <div className="portfolio-piece-container mt-4 md:mx-5 lg:mx-0">
//             <img 
//               className=" h-[20rem] px-10 md:h-[40rem] md:mb-14 mx-auto py-4 xl:w-[75rem] xl:h-[60rem] xl:mx-[10rem] opacity-55 hover:opacity-100  object-cover" 
//               style={{ aspectRatio: '2688 / 1792' }} 
//               alt="Sleek and Modern Kitchen Remodel" 
//               src={image6}
//             />
//           </div>
//         </div>
//       </div>
      
//     </article>
//     </section>
//   );
// };

// export default Kitchen;

import herokitchen from "../../assests/Kitchen/herokitchen.webp";
import herokitchenvertical from "../../assests/Kitchen/herokitchenvertical.webp";
import image1 from "../../assests/Kitchen/Thumbnils/image1.webp";
import image2 from "../../assests/Kitchen/Thumbnils/image2.webp";
import image3 from "../../assests/Kitchen/Thumbnils/image3.webp";
import image4 from "../../assests/Kitchen/Thumbnils/image4.webp";
import image5 from "../../assests/Kitchen/Thumbnils/image5.webp";
import image6 from "../../assests/Kitchen/Thumbnils/image6.webp";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FadeFront, FadeUp, FadeRight } from "../../utils/Animation";
import KtchenParallex from "../Parallesx/KtchenParallex";


const Kitchen = () => {
  const [featuredImage, setFeaturedImage] = useState({
    src: image1,
    alt: "Modern Minimalist Kitchen Design",
    aspectRatio: '2846 / 1671',
  });
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Choose image based on screen width
  const heroImage = windowWidth <= 768 ? herokitchenvertical : herokitchen;

  // Thumbnails array to map over
  const thumbnails = [
    {
      src: image2,
      alt: "Modern Minimalist Kitchen Design",
      aspectRatio: '2846 / 1671',
    },
    {
      src: image3,
      alt: "Modern Kitchen Renovation",
      aspectRatio: '2846 / 1671',
    },
    {
      src: image4,
      alt: "Minimalist Kitchen Remodel",
      aspectRatio: '2500 / 1250',
    },
    {
      src: image5,
      alt: "Minimalist Dining Room Design",
      aspectRatio: '2500 / 1471',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-2">
      <motion.div
      variants={FadeFront(-0.1)}
      initial="hidden"
      whileInView={"visible"}
       className="-mt-24 relative">
        <img className=" w-screen h-screen md:w-screen md:h-auto object-cover" src={heroImage} alt="Kitchen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      </motion.div>
      <article className="space-y-12">
      
      {/* Section: Modern Minimalist Kitchen Design */}
      <div className="sample-row py-6 xl:mt-[4rem]">
        <div className="col-12">
          <motion.h2
          variants={FadeUp(-0.1)}
          initial="hidden"
          whileInView={"visible"}
           className="text-[1.40rem] md:text-4xl lg:text-5xl text-slate-500 py-14 flex justify-center poppins-extralight">Modern Minimalist Kitchen Design</motion.h2>
          
          {/* Featured Image */}
          <div className="featured-sample-container mx-auto px-4 md:mx-4 lg:mx-0 mt-4 relative">
            <img 
              className="h-[15rem] w-[25rem] md:w-[75rem] md:mx-[10rem] border-[1.5rem] mx-auto md:border-[2rem] lg:border-[4rem] border-slate-700 xl:h-[40rem] object-cover" 
              style={{ aspectRatio: featuredImage.aspectRatio }} 
              alt={featuredImage.alt} 
              src={featuredImage.src}
            />
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <motion.div
      variants={FadeRight(0.5)}
      initial="hidden"
      whileInView={"visible"}
       className="sample-row thumb-row">
        <div className="col-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto px-4 md:mx-5 lg:-mt-10 lg:mx-5 xl:mx-[10rem]">
            {thumbnails.map((thumb, index) => (
              <div 
                key={index} 
                className="thumb-container cursor-pointer" 
                onClick={() => setFeaturedImage(thumb)}
              >
                <img 
                  className="h-[10rem] md:h-[10rem] lg:h-[9rem] lg:w-[22rem] xl:w-full xl:h-full hover:scale-110 hover:translate-y-4 transition-transform duration-700 rounded-3xl object-cover" 
                  style={{ aspectRatio: thumb.aspectRatio }} 
                  alt={thumb.alt} 
                  src={thumb.src}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <div className="testimonial-row flex justify-center mx-auto md:px-[5rem] lg:px-[10rem] lg:py-28 xl:px-[27rem] xl:py-14">
        <div className="col-12">
          <motion.p
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
           className="testimonial text-sm mx-auto px-5 md:text-lg lg:text-xl xl:text-2xl text-slate-700 poppins-thin-italic">
            <q>If I could give 6 stars I would! The team at Decorilla is amazing and worked with me to get exactly what I needed for my kitchen renovation.</q>
          </motion.p>
        </div>
      </div>
      {/* Section: Sleek and Modern Kitchen Remodel */}
      <motion.div
      variants={FadeFront(1)}
      initial="hidden"
      whileInView={"visible"}
       className="sample-row py-6 bg-zinc-800 rounded-br-full">
        <div className="col-12">
          <motion.h2
          variants={FadeUp(0.8)}
          initial="hidden"
          whileInView={"visible"}
           className="text-[1.30rem] md:text-4xl lg:text-5xl text-slate-500 xl:py-14 flex justify-center poppins-extralight">Sleek and Modern Kitchen Remodel</motion.h2>
          {/* last image component */}
          <div className="portfolio-piece-container mt-4 md:mx-5 lg:mx-0">
            <img 
              className="h-[20rem] px-10 md:h-[40rem] md:mb-14 mx-auto py-4 xl:w-[75rem] xl:h-[60rem] xl:mx-[10rem] opacity-55 hover:opacity-100 object-cover" 
              style={{ aspectRatio: '2688 / 1792' }} 
              alt="Sleek and Modern Kitchen Remodel" 
              src={image6}
            />
          </div>
        </div>
      </motion.div>
    </article>
    <KtchenParallex/>
  </section>
  );
};

export default Kitchen;
