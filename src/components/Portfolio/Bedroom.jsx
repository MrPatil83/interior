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
        className=" text-sm max-w-auto m-4 md:text-lg text-slate-600 md:mx-[15rem] poppins-light-italic py-14"
      >
        Discover luxury bedroom interiors and custom wardrobes tailored to your
        style, crafted from premium materials like plywood, glass, and hardwood.
        Our modern designs maximize storage with smart, space-saving layouts,
        blending elegance and functionality. Transform your space with bespoke
        wardrobe systems and sophisticated decor for a stylish, clutter-free
        look.
      </motion.p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto mb-10 px-4 xl:px-[15rem]">
  <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
      <h1 className="text-xl font-semibold text-zinc-100 mb-2">Luxury Bedroom Interiors & Wardrobes</h1>
      <p className="text-sm text-slate-400">
        Transform your space with luxury bedroom interiors and custom wardrobe solutions designed for style and functionality. Our modern designs feature premium materials like hardwood, glass, and plywood, offering space-saving layouts that maximize storage. Elevate your bedroom with bespoke wardrobes and elegant decor for a clutter-free, sophisticated look.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
      <h1 className="text-xl font-semibold text-zinc-100 mb-2">Elegant Bedroom Interiors & Smart Storage</h1>
      <p className="text-sm text-slate-400">
        Revamp your bedroom with luxury interiors and custom wardrobe solutions, blending style and functionality. Our designs feature premium materials like hardwood, glass, and plywood, offering smart, space-saving layouts to maximize storage. Create a sophisticated, clutter-free sanctuary tailored to your unique taste with bespoke wardrobes and elegant decor.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-white via-slate-800 to-white p-[1px] rounded-2xl shadow-lg max-w-xs">
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-6 rounded-2xl">
      <h1 className="text-xl font-semibold text-zinc-100 mb-2">Elegant Bedroom Colors & Custom Interiors</h1>
      <p className="text-sm text-slate-400">
        Elevate your bedroom with elegant color palettes and tailored interior designs. Our approach combines premium materials and innovative custom solutions to create a harmonious and stylish space. Discover how our bespoke designs and sophisticated color schemes can transform your bedroom into a refined and functional retreat, blending luxury and practicality.
      </p>
    </div>
  </div>
</div>

{/* image section */}
<div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-14">
  {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    {/* second */}
     {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    {/* third */}
     {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    {/* fourth */}
     {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    {/* fifth */}
     {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    {/* sisxth */}
     {/* first image`` */}
<div className="p-4 max-w-xs mx-auto">
      <figure className="relative overflow-hidden rounded-lg">
        <img
          alt="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          title="Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed"
          loading="lazy"
          width="368"
          height="300"
          className="w-full h-auto object-cover"
          // srcSet="
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-384 1x,
          //   https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768 2x
          // "
          src="https://img.interiorcompany.com/interior/webproduct/509638580099624647332.png?aio=w-768"
        />
      </figure>
      <div className="mt-4">
        <div className="text-center">
          <a
            // href="https://www.interiorcompany.com/in/interior-design-ideas/master-bedroom/-modern-master-bedroom-design-with-teal-blue-wall-and-wooden-bed-br-pid-6218"
            className="text-blue-600 hover:underline"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Master Bedroom Design With Teal Blue Wall And Wooden Bed
            </h2>
          </a>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};
