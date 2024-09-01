import { useEffect, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import {  FadeRight } from "../../utils/Animation";
import PropTypes from 'prop-types';
import {
  IoIosStar as FullStar,
  IoIosStarHalf as HalfStar,
  IoIosStarOutline as EmptyStar,
} from "react-icons/io";
import salmankhan from "../../assests/Testomonial/salmankhan.webp";
import mukeshambani from "../../assests/Testomonial/mukeshambani.webp";
import cyrusmistry from "../../assests/Testomonial/cyrusmistry.webp";
import ashabhosle from "../../assests/Testomonial/ashabhosle.webp";
import divyankturakhia from "../../assests/Testomonial/divyankturakhia.webp";
import rakeshjhunjhunwala from "../../assests/Testomonial/rakeshjhunjhunwala.webp";

// Helper function to count and generate star elements based on full and half star counts
const countStars = (full, half = 0) => {
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(<FullStar className="text-yellow-400" key={`full-${i}`} />);
  }
  for (let i = 0; i < half; i++) {
    stars.push(<HalfStar className="text-yellow-400" key={`half-${i}`} />);
  }
  while (stars.length < 5) {
    stars.push(
      <EmptyStar className="text-gray-400" key={`empty-${stars.length}`} />
    );
  }
  return stars;
};

// Helper function to calculate the number of full and half stars based on the rating
const calculateStars = (rating) => {
  if (Number.isInteger(rating)) {
    return countStars(rating);
  }
  return countStars(Math.floor(rating), 1);
};

// Helper function to calculate the distance of cards based on window width
const calculateDistance = () => {
  if (window.innerWidth < 400) return [0, 0];
  if (window.innerWidth < 600) return [90, 30];
  if (window.innerWidth < 800) return [120, 60];
  if (window.innerWidth < 1000) return [150, 90];
  return [180, 120];
};

// Testimonials data
const testimonialsData = [
  {
    id: 0,
    name: "Mukesh Ambani",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Mukesh Ambani, RIL Chairman, launched Reliance Jio in 2016, transforming Indian telecom with 400+ million subscribers.",
    img: mukeshambani,
    alt: "Mukesh Ambani",
  },
  {
    id: 1,
    name: "Rakesh Jhunjhunwala",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Rakesh Jhunjhunwala, dubbed the Warren Buffett of India, is a billionaire investor celebrated for his successful stock market ventures and influential role in finance.",
    img: rakeshjhunjhunwala,
    alt: "Rakesh Jhunjhunwala",
  },
  {
    id: 2,
    name: "Salman Khan",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Salman Khan, a Bollywood superstar renowned for blockbuster films and philanthropic efforts through Being Human NGO.",
    img: salmankhan,
    alt: "Salman Khan",
  },
  {
    id: 3,
    name: "Divyank Turakhia",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Divyank Turakhia Indian billionaire entrepreneur, co-founder of Directi and Media.net, leading in web infrastructure and online advertising.",
    img: divyankturakhia,
    alt: "Divyank Turakhia",
  },
  {
    id: 4,
    name: "Asha Bhosle",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Asha Bhosle, with over 11,000 songs in 20+ languages, holds a Guinness World Record and is honored with the Dadasaheb Phalke Award and Padma Vibhushan.",
    img: ashabhosle,
    alt: "Asha Bhosle",
  },
  {
    id: 5,
    name: "Cyrus Mistry",
    add: "Mumbai, India",
    stars: 5,
    quote:
      "Cyrus Mistry is noted for his tenure as the sixth chairman of Tata Sons, focusing on restructuring and global expansion initiatives within the Tata Group.",
    img: cyrusmistry,
    alt: "Cyrus Mistry",
  },
];

const Testimonials = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className=" laptop:mx-24 my-10 h-[80vh]  px-24  pt-9  pb-[25rem]   laptop:h-[40rem] flex flex-col justify-between rounded-br-full bg-stone-900 text-white">
      <motion.h1
      variants={FadeRight(0.2)}
      initial="hidden"
      whileInView={"visible"}
       className=" poppins-regular text-[2.5rem] mx-auto -ml-14 w-screen md:text-5xl mt-4 text-zinc-400">
        Esteemed Clients
      </motion.h1>
      <div className="relative flex justify-center h-[12rem] md:h-auto lg:h-auto xl:h-auto w-full mx-auto">
        {cards.map((card, index) => {
          const isCurrent = index === currentCard;
          const isPrev =
            index === (currentCard - 1 + cards.length) % cards.length;
          const isNext = index === (currentCard + 1) % cards.length;
          const stars = calculateStars(card.stars);
          const distance = calculateDistance();

          return (
            <div
              key={card.id}
              className={classNames(
                "text-white w-[19rem] mx-auto h-[10rem] flex flex-col-1 justify-center items-center gap-4 md:gap-2 md:h-[12rem] md:w-[22rem] md:py-4 md:-mt-[20rem] lg:h-[13rem] lg:w-[25rem] lg:-mt-[40rem] xl:mt-4 xl:h-[13.3rem] xl:w-[27rem] rounded-[3rem] border border-gray-300 bg-slate-700 transition-all duration-500 ease-in-out",
                {
                  "absolute z-20 transform scale-110 opacity-100 -translate-x-1/2 translate-y-16 md:translate-y-20 lg:translate-y-20 xl:translate-y-0":
                    isCurrent,
                  "absolute z-10 opacity-70 transform scale-95 translate-y-36 md:translate-y-44 md:-translate-x-[20rem] lg:translate-y-44 lg:-translate-x-[21rem] xl:translate-y-32 xl:-translate-x-[24rem] -translate-x-[98%]":
                    isPrev,
                  "absolute z-10 opacity-70 transform scale-95 translate-y-36 md:translate-y-44  lg:translate-y-44 xl:translate-y-32 translate-x-[8%]":
                    isNext,
                  hidden: !isCurrent && !isPrev && !isNext,
                }
              )}
              style={{
                left: isPrev
                  ? `calc(50% - ${distance[0]}px)`
                  : isNext
                  ? `calc(50% + ${distance[1]}px)`
                  : "50%",
              }}
            >
              <img
                src={card.img}
                alt={card.alt}
                title={card.alt}
                className="rounded-full overflow-hidden w-12 h-auto md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20"
              />
              <div className="flex flex-col gap-2 md:gap-0 lg:gap-3 max-w-[75%]">
                <h1 className="poppins-regular text-sm md:text-base lg:text-xl xl:text-2xl xl:py-2">
                  {card.name}
                </h1>
                <div className="text-xs poppins-regular md:text-sm lg:text-sm xl:text-base xl:-mt-5">
                  {card.add}
                </div>
                <div className="flex gap-2 text-sm lg:text-lg lg:-mt-2 xl:text-2xl">
                  {stars}
                </div>
                <p className="text-xs poppins-extralight text-slate-400 md:text-sm lg:text-sm xl:text-base">
                  {card.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      add: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Testimonial = () => {
  return <Testimonials cards={testimonialsData} />;
};

export default Testimonial;
