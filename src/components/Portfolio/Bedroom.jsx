import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeFront, FadeUp } from "../../utils/Animation";
import bedroom1 from "../../assests/Bedroom/bedroom1.webp";
import bedroom from "../../assests/Bedroom/bedroom.png";

export const Bedroom = () => {
  const [currentImage, setCurrentImage] = useState(bedroom1);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setCurrentImage(bedroom);
      } else {
        setCurrentImage(bedroom1);
      }
    };

    updateImage();

    window.addEventListener("resize", updateImage);

    return () => {
      window.removeEventListener("resize", updateImage);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <motion.div
        variants={FadeFront(-0.1)}
        initial="hidden"
        whileInView={"visible"}
        className="-mt-24 relative"
      >
        <img
          className=" w-screen h-screen md:w-screen md:h-auto object-cover"
          src={currentImage}
          alt="Kitchen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      </motion.div>
      <motion.p
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
        className=" text-base text-slate-600 mx-[15rem] poppins-light-italic py-8"
      >
        "Elevate your bedroom with our exquisite interior design solutions. Our
        luxury bedroom designs focus on blending comfort and style, creating a
        relaxing sanctuary tailored to your preferences. Discover top trends in
        bedroom interior design that incorporate modern aesthetics and
        functional layouts. Whether you're looking for elegant bedroom decor or
        innovative space-saving ideas, our expert team ensures your bedroom
        becomes a serene retreat. Explore our collection of stylish bedroom
        interiors to transform your space into a true haven."
      </motion.p>

      <div className=" grid md:grid-cols-3 gap-4 justify-center mx-14">
        <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
            <h1 className=" text-2xl text-zinc-100">"Luxury Bedroom Interiors & Wardrobes"</h1>
            <p className="text-base text-slate-400">
              Discover luxury bedroom interior designs and high-quality wardrobe
              solutions tailored to your unique taste. We specialize in modern
              bedroom interiors that seamlessly integrate custom wardrobe designs
              crafted from premium materials like plywood, glass, and hardwood.
              Our expertise in space-saving bedroom ideas and functional wardrobe
              layouts ensures maximum storage without compromising on style. From
              elegant bedroom decor to bespoke wardrobe systems, every detail is
              designed to elevate your space, offering both aesthetic appeal and
              lasting durability.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
            <h1 className=" text-2xl text-zinc-100">"Luxury Bedroom Interiors & Wardrobes"</h1>
            <p className="text-base text-slate-400">
              Discover luxury bedroom interior designs and high-quality wardrobe
              solutions tailored to your unique taste. We specialize in modern
              bedroom interiors that seamlessly integrate custom wardrobe designs
              crafted from premium materials like plywood, glass, and hardwood.
              Our expertise in space-saving bedroom ideas and functional wardrobe
              layouts ensures maximum storage without compromising on style. From
              elegant bedroom decor to bespoke wardrobe systems, every detail is
              designed to elevate your space, offering both aesthetic appeal and
              lasting durability.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
            <h1 className=" text-2xl text-zinc-100">"Luxury Bedroom Interiors & Wardrobes"</h1>
            <p className="text-base text-slate-400">
              Discover luxury bedroom interior designs and high-quality wardrobe
              solutions tailored to your unique taste. We specialize in modern
              bedroom interiors that seamlessly integrate custom wardrobe designs
              crafted from premium materials like plywood, glass, and hardwood.
              Our expertise in space-saving bedroom ideas and functional wardrobe
              layouts ensures maximum storage without compromising on style. From
              elegant bedroom decor to bespoke wardrobe systems, every detail is
              designed to elevate your space, offering both aesthetic appeal and
              lasting durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
