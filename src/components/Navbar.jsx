import React, { useEffect, useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ open, setOpen }) => {
  const [activeSection, setActiveSection] = useState("");
  const [bgOpacity, setBgOpacity] = useState("bg-opacity-20");
  const [selected, setSelected] = useState("");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const height = window.innerHeight / 3;
    setBgOpacity(scrollY >= height ? "bg-opacity-70" : "bg-opacity-20");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const sections = document.querySelectorAll("div");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`${bgOpacity} bg-black z-50 fixed top-0 h-fit w-screen py-5 lg:px-32 md:px-24 px-2 overflow-x-hidden transition-all duration-500`}
    >
      <div className="grid md:grid-cols-3 grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-white cursor-pointer">
            <a href="#home">SAVI</a>
          </h1>
        </div>
        <div className="md:col-span-2 col-span-1 flex items-center md:justify-evenly justify-end relative">
          <div className="md:flex hidden list-none gap-4 text-xs text-yellow-500">
            {[
              "HOME",
              "ABOUT",
              "CHOREOGRAPHERS",
              "EVENTS",
              "TESTIMONIALS",
              "CONTACTS",
            ].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSelected(item);
                }}
                className={`cursor-pointer hover:text-white ${
                  selected === item || activeSection.toUpperCase() === item
                    ? "text-white"
                    : ""
                }`}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </div>
          <div className="md:hidden block px-8 absolute z-50">
            <FaBars
              className={`${open === false ? "block" : "hidden"}`}
              fill="white"
              size={20}
              onClick={() => setOpen(!open)}
            />
            <RxCross2
              fill="white"
              className={`${open === true ? "block" : "hidden"} text-white`}
              size={20}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
