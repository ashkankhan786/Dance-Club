import React from "react";
import img1 from "../assets/Dance.jpg";
import * as motion from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen overflow-hidden relative" id="home">
      <div className="min-h-screen w-screen bg-black absolute top-0 z-10 bg-opacity-45"></div>
      <img
        src={img1}
        alt="Hero Image"
        className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 h-full w-full object-cover opacity-80"
      />
      <div className="flex items-center justify-center h-screen w-screen relative z-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:text-9xl md:text-8xl text-8xl font-normal text-white tracking-widest"
          >
            SAVI
          </motion.h1>
          <div className="flex items-center justify-center gap-3">
            <motion.hr
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:w-32 w-28 border-[1.25px] border-yellow-300"
            />
            <motion.p
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-semibold text-white"
            >
              DANCE CLUB
            </motion.p>
            <motion.hr
              initial={{ x: 150 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:w-32 w-28 border-[1.25px] border-yellow-300"
            />
          </div>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={() => navigate("/form")}
            className="border-2 border-yellow-200 px-4 py-1 bg-black bg-opacity-30 text-yellow-300 md:text-base text-sm"
          >
            SIGN UP FOR TRAINING
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
