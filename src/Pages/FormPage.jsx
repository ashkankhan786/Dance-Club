import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import * as motion from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "efb99c7d-0e4f-4eaa-9d20-911ef6a9d7cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col">
      <div className="md:px-40 px-20 py-4 bg-gray-500 bg-opacity-60 flex items-center justify-start">
        <nav>
          <h1
            className="text-lg font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            SAVI
          </h1>
        </nav>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center text-white px-11 py-16">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Enter Your Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="eg. John Doe"
              className="md:w-96 text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter You Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="eg. john123@gmail.com"
              className="md:w-96 text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Tell Us Something About You</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 border-yellow-600 rounded-sm px-3 py-1"
          >
            Submit Form
          </button>
        </form>
        <span>{result}</span>
      </div>
      <div className="min-h-48 bg-gray-800">
        <div className="flex flex-col items-center justify-center lg:px-48 md:px-40 px-32 py-9 gap-5">
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

export default FormPage;
