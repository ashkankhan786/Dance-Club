import React, { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="fixed z-30 right-0 h-screen bg-black bg-opacity-85 py-20">
      <div className="flex flex-col gap-4 text-white list-none px-5 pr-20">
        <div className="border-b-2 hover:border-yellow-200 hover:text-yellow-200 px-10">
          <li
            className={`${
              selected === "Home" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("Home")}
          >
            <a href="#home">Home</a>
          </li>
        </div>
        <div className="border-b-2 px-10 hover:border-yellow-200 hover:text-yellow-200">
          <li
            className={`${
              selected === "About" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("About")}
          >
            <a href="#about">About</a>
          </li>
        </div>
        <div className="border-b-2 px-10 hover:border-yellow-200 hover:text-yellow-200">
          <li
            className={`${
              selected === "Events" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("Events")}
          >
            <a href="#events">Events</a>
          </li>
        </div>
        <div className="border-b-2 px-10 hover:border-yellow-200 hover:text-yellow-200">
          <li
            className={`${
              selected === "Choreographers" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("Choreographers")}
          >
            <a href="#choreographers">Choreographers</a>
          </li>
        </div>
        <div className="border-b-2 px-10 hover:border-yellow-200 hover:text-yellow-200">
          <li
            className={`${
              selected === "Testimonials" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("Testimonials")}
          >
            <a href="#testimonials">Testimonials</a>
          </li>
        </div>
        <div className="border-b-2 px-10 hover:border-yellow-200 hover:text-yellow-200">
          <li
            className={`${
              selected === "Contacts" ? "text-yellow-600" : "text-white"
            } cursor-pointer hover:text-yellow-200`}
            onClick={() => setSelected("Contacts")}
          >
            <a href="#contacts">Contacts</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
