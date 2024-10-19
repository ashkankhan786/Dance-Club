import React from "react";
import p1 from "../assets/PrabhuDeva.jpg";
import p2 from "../assets/Remo.jpg";
import p3 from "../assets/Raghav.jpg";
import p4 from "../assets/Dharmesh.jpg";
import * as motion from "framer-motion/client";

const Choreo = () => {
  return (
    <div
      className="w-screen h-fit md:py-10 px-32 text-wrap bg-black flex items-center justify-center"
      id="choreographers"
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl tracking-wide hidden md:block"
          >
            OUR CHOREOGRAPHERS
          </motion.h1>
          <div className="md:hidden flex flex-col">
            <h1 className=" text-white text-3xl tracking-wide text-center">
              OUR
            </h1>
            <h1 className=" text-white text-3xl tracking-wide text-center">
              CHOREOGRAPHERS
            </h1>
          </div>
        </div>
        <div className="md:flex flex-wrap items-center justify-center gap-4 grid grid-cols-2">
          <div className="flex flex-col gap-2 md:w-52 w-32">
            <div className="md:h-96 md:w-52 h-72 w-32">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                whileTap={{ scale: 1.1 }}
                src={p1}
                alt="Prabhu Deva"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white tracking-tight">PRABHU DEVA</h1>
              <h1 className="text-yellow-500 tracking-tighter text-xs">
                CHOREOGRAPHER
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-52 w-32">
            <div className="md:h-96 md:w-52 h-72 w-32">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                whileTap={{ scale: 1.1 }}
                src={p2}
                alt="Remo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white tracking-tight">REMO D'SOUZA</h1>
              <h1 className="text-yellow-500 tracking-tighter text-xs">
                CHOREOGRAPHER
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-52 w-36">
            <div className="md:h-96 md:w-52 h-72 w-32">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                whileTap={{ scale: 1.1 }}
                src={p3}
                alt="Raghav"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white tracking-tight">RAGHAV JUYAL</h1>
              <h1 className="text-yellow-500 tracking-tighter text-xs">
                CHOREOGRAPHER
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-52 w-36">
            <div className="md:h-96 md:w-52 h-72 w-32">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                whileTap={{ scale: 1.1 }}
                src={p4}
                alt="Dharmesh"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white tracking-tight">DHARMESH</h1>
              <h1 className="text-yellow-500 tracking-tighter text-xs">
                CHOREOGRAPHER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choreo;
