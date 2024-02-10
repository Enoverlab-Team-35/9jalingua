"use client";

import Image from "next/image";
import React, {useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/components/autoplay/autoplay.min.css";

import "swiper/css";

import {Autoplay, Pagination, Navigation} from "swiper/modules";

const testimonials = [
  {
    name: "John Adeyemi",
    profession: "Software Engineer",
    img: "/testimonial/john.png",
    thoughts: `I've always wanted to connect with my Nigerian roots, and this platform has been a game-changer for me. Learning Yoruba has been an enriching experience, and it's deepened my appreciation for my heritage. I can now communicate with my family in Nigeria more effectively, and that means the world to me.`,
  },
  {
    name: "Nkechi Ezeagu",
    profession: "Teacher",
    img: "/testimonial/nkechi.png",
    thoughts: `As an educator, I understand the importance of embracing and preserving our native languages. This platform has not only made learning Igbo fun but also helped me incorporate it into my classroom. My students love it, and so do I. I'm grateful for the opportunity to be part of this initiative.`,
  },
  {
    name: "Aminat Sulaimon",
    profession: "Business Analyst",
    img: "/testimonial/aminat.png",
    thoughts: `Learning Hausa has always been a dream of mine, and this website has turned it into a reality. The course content is engaging and well-structured, making it easy for me to balance my busy schedule with language learning. I can now communicate with my extended family in Nigeria more fluently, and it's been a beautiful journey.`,
  },
];

export default function Testimonial() {
  const [hoverState, setHoverState] = useState(null);

  return (
    <section className="mt-24">
      <div className="container mx-auto px-5 font-arimo">
        <h5 data-aos="zoom-in" className="text-greens-100 text-xl text-center">
          Testimonial
        </h5>
        <h1
          data-aos="zoom-in"
          className="mt-8 text-blues-1100 text-[32px] sm:text-5xl font-bold text-center"
        >
          Hear from our Happy Users
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <div className="mt-12 sm:mt-8 flex flex-wrap justify-evenly xl:justify-between gap-x-6 gap-y-6 sm:gap-y-14">
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  data-aos-delay={index * 100 + 100}
                  className={`w-full max-w-[387px] py-10 px-7 rounded-lg hover:bg-greens-300 hover:text-white bg-greens-1100 text-grays-600`}
                  onMouseEnter={() => setHoverState(index)}
                  onMouseLeave={() => setHoverState(null)}
                >
                  <div className="flex place-items-center gap-6">
                    <div className="w-28 h-28">
                      <Image
                        width={866}
                        height={1300}
                        src={item.img}
                        alt={item.name}
                        className="w-full"
                        data-aos="zoom-in"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          hoverState === index
                            ? "text-white"
                            : "text-blues-1100"
                        }`}
                      >
                        {item.name}
                      </h3>
                      <h6 className="mt-3 text-base" data-aos="fade-down">
                        {item.profession}
                      </h6>
                    </div>
                  </div>
                  <p
                    className="mt-8 text-xl leading-relaxed"
                    data-aos="zoom-in"
                  >
                    {item.thoughts}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
