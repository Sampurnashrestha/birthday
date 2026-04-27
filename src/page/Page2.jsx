import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Page2 = ({ onNext, onPrev }) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-white/10 w-100 md:w-150 h-113 md:h-120 flex flex-col gap-4 items-center rounded-2xl pt-9 shadow-[0_0_30px_rgba(255,255,255,0.3)]
 shadow-white/30   hover:scale-101 transition duration-300 "
        >
          <h1 className="text-white/70  tracking-wide text-3xl md:text-4xl font-playwrite">
            Poem For You 💙
          </h1>
          <div className=" text-justify pl-0 md:pl-4 pt-1 md:pt-3 text-white/80 tracking-wide text-lg ">
            <p>
              In quiet shades of blue and grey,
              <br />
              You light my world in your own way.
              <br />
              Like midnight skies so calm and deep,
              <br />
              You hold the dreams I always keep.{" "}
            </p>

            <p className="pt-5">
              Not loud, not bright, yet strong and true,
              <br />
              There’s something rare and pure in you.
              <br />
              Through every storm, through every weather,
              <br />
              Life feels better — just together.
            </p>
          </div>
          <div className="flex justify-between pt-5  md:pt-4  pl-0 md:pl-7 gap-20 md:gap-40 ">
            <motion.button
             whileTap={{scale : 0.1}}
                        transition={{duration : 0.2}} 
              onClick={onPrev}
              className="bg-gray-200 text-black px-8 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-300 transition duration-300 font-medium"
            >
              Previous
            </motion.button>
            <motion.button
             whileTap={{scale : 0.1}}
                        transition={{duration : 0.2}} 
              onClick={onNext}
              className="bg-gray-200 text-black px-8 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-white/30 transition duration-300 font-medium"
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page2;
