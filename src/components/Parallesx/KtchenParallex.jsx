// import React from 'react';
import './ParallaxSection.css'; // Custom CSS for parallax effect

const KtchenParallex = () => {
  return (
    <div>
      {/* Parallax Background */}
      <section className="relative overflow-hidden">
        <div className="parallax-bg opacity-80">
          <h1 className="absolute top-1/2 left-1/2 mx-1 transform -translate-x-1/2 -translate-y-1/2 text-zinc-200 text-4xl md:text-[3.5rem] poppins-regular text-center">
            Why Choose Steadlers & Scales Interior for Your Home?
          </h1>
        </div>
        <div className="relative bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="md:text-5xl raleway text-slate-700 mx-auto px-4 text-2xl poppins-regular text-center mb-8">"Discover the Core Benefits of Our Interior Design Expertise"</h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="md:w-1/2 p-4">
                <h3 className="text-3xl text-slate-700 poppins-regular mb-4 ml-7">Customizable Designs</h3>
                <p className="text-gray-700 px-8">"At Steadlers & Scales, we specialize in customizable interior designs that perfectly align with your unique needs. Our tailored design solutions ensure that every space is not only functional but also stylish. From modular kitchen layouts to bespoke living room arrangements, our designs enhance both aesthetics and usability. Explore how our flexible design options can transform your home into a personalized sanctuary. Choose Steadlers & Scales for innovative and adaptable design solutions that reflect your individual style."</p>
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-3xl text-slate-700 poppins regular mb-4 ml-7">Durable Materials with Sleek Finish</h3>
                <p className="text-gray-700 px-8">"This image showcases the elegance and durability of premium materials such as plywood, granite, and stainless steel. The sleek finishes of these high-quality materials not only enhance the visual appeal of your kitchen but also offer easy maintenance. By incorporating granite countertops and stainless steel appliances, you ensure a stylish yet practical kitchen environment. Discover how these durable materials can transform your space into a sophisticated and functional culinary haven."</p>
              </div>
            </div>
            <div className="text-center mt-16">
            <button className=" rounded-[2rem] h-[2.7rem] w-[7rem]  md:mb-4 border border-black bg-slate-700 text-white raleway px-2 text-[0.800rem] hover:text-black hover:scale-110 transition-transform duration-500 hover:bg-zinc-300">
              GET A QUOTE
            </button>
            </div>
          </div>
        </div>
        <div className="parallax-bgsecond opacity-80">
          <h1 className="absolute mx-auto px-10 top-1/2 text-3xl left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2  text-slate-100 md:text-4xl md:text-6xl poppins-regular text-center">
          "Elevate Your Home with Steadlers & Scales: The Top Choice for Premium Interiors"
          </h1>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-20"></div> */}
        </div>
        <p className='raleway text-slate-700 mx-14 py-8 text-xl '>Discover how Steadlers & Scales can transform your living space into a haven of elegance and sophistication. Our expert team specializes in creating bespoke interior designs that reflect your personal style while enhancing functionality. We begin with detailed 3D modeling to visualize your dream space, followed by a collaborative design selection process to ensure every detail aligns with your vision. With a commitment to using the highest quality materials and cutting-edge design techniques, we ensure that every project not only meets but exceeds your expectations. From custom kitchen designs to luxurious living room renovations, our approach guarantees a seamless and elevated interior experience. Choose Steadlers & Scales for an unmatched blend of innovation and elegance that will bring your home to new heights.</p>
      </section>
    </div>
  );
};

export default KtchenParallex;
