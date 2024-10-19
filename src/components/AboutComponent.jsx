import React, { useState } from "react";
import A1 from "../assets/ABOUT2.jpg";
import * as motion from "framer-motion/client";

const AboutComponent = () => {
  const [about, setAbout] = useState("MISSION");

  return (
    <div
      className="min-h-screen w-screen bg-black flex flex-col md:py-5 pt-5"
      id="about"
    >
      <div className="lg:px-28 md:px-24 px-12 md:py-10 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl tracking-wide"
          >
            ABOUT US
          </motion.h1>
        </div>
        <div className="flex items-center justify-evenly list-none text-sm md:tracking-tight tracking-tighter">
          <motion.li
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.75 }}
            className={`${
              about === "MISSION" ? "text-yellow-100" : "text-yellow-500"
            } cursor-pointer hover:text-white`}
            onClick={() => setAbout("MISSION")}
          >
            MISSION
          </motion.li>
          <motion.li
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className={`${
              about === "HISTORY" ? "text-yellow-100" : "text-yellow-500"
            } cursor-pointer hover:text-white`}
            onClick={() => setAbout("HISTORY")}
          >
            HISTORY
          </motion.li>
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.75 }}
            className={`${
              about === "COMPETITIONS" ? "text-yellow-100" : "text-yellow-500"
            } cursor-pointer hover:text-white`}
            onClick={() => setAbout("COMPETITIONS")}
          >
            COMPETITIONS
          </motion.li>
        </div>
        <div className="text-white md:tracking-normal tracking-tight">
          {about == "MISSION" && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="text-center"
            >
              The mission of SAVI Dance Club is to inspire creativity and
              self-expression through dynamic dance performances and community
              engagement. We strive to provide a welcoming space for all
              students to explore diverse dance styles, improve their technique,
              and build lifelong friendships. Through our passion for dance, we
              aim to uplift and unite our school community.
            </motion.p>
          )}
          {about == "HISTORY" && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="text-center"
            >
              SAVI Dance Club was founded in 2005 by a small group of students
              eager to create a space for creative self-expression through
              dance. Growing rapidly, it became known for its dynamic
              performances and inclusive community. Today, SAVI continues to
              inspire dancers and is a vital part of the school's cultural life.
            </motion.p>
          )}
          {about == "COMPETITIONS" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-center">
                <h1 className="font-bold text-center">
                  SAVI Dance Battle Royale:
                </h1>{" "}
                A high-energy, knockout-style competition where solo dancers and
                teams showcase their skills in various dance genres to claim the
                title of "SAVI Champion."
              </p>
              <p>
                <h1 className="font-bold text-center">
                  Dance Fusion Challenge:
                </h1>{" "}
                A unique competition where participants blend two different
                dance styles, such as hip-hop and contemporary, to create
                innovative and exciting routines.
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-80 w-screen bg-black bg-opacity-50"></div>
        <img src={A1} alt="" className="w-screen h-80 object-cover" />
      </div>
    </div>
  );
};

export default AboutComponent;
