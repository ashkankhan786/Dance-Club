import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import e1 from "../assets/Event1.jpg";
import e2 from "../assets/Event2.jpg";
import e3 from "../assets/Event3.jpg";
import e4 from "../assets/Event4.jpg";

import * as motion from "framer-motion/client";
const EventsComponents = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-black w-screen py-8 lg:px-24 md:px-20 px-10" id="events">
      <div className="flex items-center justify-center py-3 pb-3">
        <motion.h1
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl tracking-wide py-2"
        >
          LATEST DANCE EVENTS
        </motion.h1>
      </div>
      <div className="text-white text-center">
        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customTransition="ease-in-out"
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={e1} alt="Event 1" />
          </div>
          <div>
            <img src={e2} alt="Event 2" />
          </div>
          <div>
            <img src={e3} alt="Event 3" />
          </div>
          <div>
            <img src={e4} alt="Event 4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default EventsComponents;
