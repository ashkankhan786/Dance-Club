import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import * as motion from "framer-motion/client";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col" id="contacts">
      <div className="min-h-24 bg-black flex items-center justify-evenly text-sm py-5 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <p className="text-yellow-600 tracking-tight md:text-base text-xs">
            SIGN UP FOR A TRIAL LESSON
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            className="border-2 border-yellow-600 px-3 py-1 bg-black text-yellow-500 md:text-base text-xs"
            onClick={() => navigate("/form")}
          >
            SIGN UP NOW
          </button>
        </motion.div>
      </div>
      <div className="min-h-48 bg-gray-800">
        <div className="flex flex-col items-center justify-center lg:px-48 md:px-40 px-32 py-10 gap-5">
          <div className="flex justify-center items-center gap-3 text-yellow-600 md:text-sm text-xs">
            <div className="flex items-center justify-center">
              <MdLocationPin size={30} />
              <p className="text-white">123, XYZ, India</p>
            </div>
            <div className="flex items-center justify-center">
              <FaWhatsapp size={20} />
              <p className="text-white">+91 99999999</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-white text-sm text-center">
              Join SAVI Dance Club: Where Passion Meets Performance!
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 text-lg text-yellow-600"
          >
            <FiTwitter />
            <FaWhatsapp />
            <FaFacebookF />
            <FaInstagram />
          </motion.div>
          <hr className="border-yellow-600 w-10 border-[1.25px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
