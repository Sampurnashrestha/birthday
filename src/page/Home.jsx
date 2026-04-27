import React from "react";
import { motion, scale } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Home = ({onNext}) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center-safe">
        <motion.div
        initial={{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 1.5}}
          className="w-100 md:w-150 h-107 md:h-100 bg-white/10 rounded-3xl py-4 px-5 shadow-[0_0_30px_rgba(255,255,255,0.3)]
 shadow-white/30 flex flex-col gap-3  hover:scale-101 transition duration-300 "
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white/70 text-center">
            Happy Birthday to you
            <br /> Truluuluu DD
          </h1>

          <p className=" text-md md:text-lg text-center  text-blue-300 font-semibold">
            {" "}
            A small modern surprise made just for you 💙
          </p>

          <p className=" text-justify text-white text-md md:text-lg ">
            Today is not just a day—it’s a reminder of how special you are. Like
            nature in black, blue, grey, and white, you carry a calm strength
            and quiet beauty that stands out effortlessly. There’s something
            peaceful and powerful about you, like the night sky or soft morning
            light. Today celebrates you, but you deserve to feel valued and
            appreciated every single day.
          </p>

          <div className=" flex justify-end">
            <motion.button
            whileTap={{scale : 0.1}}
            transition={{duration : 0.2}} 
             onClick={onNext}
            className="bg-gray-200 text-black px-8 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-white/30 transition duration-300 font-medium">
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
