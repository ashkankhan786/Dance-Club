import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import AboutComponent from "../components/AboutComponent";
import Choreo from "../components/Choreo";
import EventsComponents from "../components/EventsComponents";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Navbar open={open} setOpen={setOpen} />
      {open === true ? <Sidebar /> : <></>}
      <Hero />
      <AboutComponent />
      <Choreo />
      <EventsComponents />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
