import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import p1 from "../assets/person1.jpg";
import p3 from "../assets/person2.jpg";
import p2 from "../assets/person3.jpg";

import * as motion from "framer-motion/client";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="bg-black w-screen h-fit py-8 lg:px-32 md:px-28 px-10"
      id="testimonials"
    >
      <div className="flex items-center justify-center py-3 pb-7">
        <motion.h1
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl tracking-wide"
        >
          TESTIMONIALS
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
            <TestimonialCard
              img={p1}
              alt={"img1"}
              name={"Ananya"}
              para={
                "Joining SAVI has been the best decision I've made in school. Not only have I grown as a dancer, but I've also made incredible friendships. The instructors push us to be our best while making every practice so much fun!"
              }
            />
          </div>
          <div>
            <TestimonialCard
              img={p3}
              name={"Rohan"}
              alt={"img2"}
              para={
                "SAVI Dance Club is like a second family to me. I never thought I’d find a place where I could express myself so freely. Whether it's hip-hop, contemporary, or jazz, SAVI has helped me explore new dance styles and build confidence."
              }
            />
          </div>
          <div>
            <TestimonialCard
              img={p2}
              name={"Priya"}
              alt={"img3"}
              para={
                "I was new to dancing when I joined SAVI, but the club welcomed me with open arms. The supportive environment and amazing teachers made me fall in love with dance. Now, I can't imagine my school life without it!"
              }
            />
          </div>
        </Carousel>
      </div>
      {/* <div className="text-white text-center flex justify-center items-center text-sm ">
        <Carousel responsive={responsive}>
          <p>Hello</p>
          <TestimonialCard
            img={""}
            name={"Ananya"}
            para={
              "Joining SAVI has been the best decision I've made in school. Not only have I grown as a dancer, but I've also made incredible friendships. The instructors push us to be our best while making every practice so much fun!"
            }
          />
          <TestimonialCard
            img={""}
            name={"Rohan"}
            para={
              "SAVI Dance Club is like a second family to me. I never thought I’d find a place where I could express myself so freely. Whether it's hip-hop, contemporary, or jazz, SAVI has helped me explore new dance styles and build confidence."
            }
          />
          <TestimonialCard
            img={""}
            name={"Priya"}
            para={
              "I was new to dancing when I joined SAVI, but the club welcomed me with open arms. The supportive environment and amazing teachers made me fall in love with dance. Now, I can't imagine my school life without it!"
            }
          />
        </Carousel>
      </div> */}
    </div>
  );
};

export default Testimonials;
