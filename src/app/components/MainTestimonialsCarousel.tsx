"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../public/images/ambassadors/Austin+Na.jpg";
import img2 from "../../../public/images/ambassadors/David+Leadbetter.png";
import img3 from "../../../public/images/ambassadors/Sean+Foley-Headshot.jpg";
import img4 from "../../../public/images/ambassadors/Mike+Adams.jpeg";
import img5 from "../../../public/images/ambassadors/Terry+Rowles.jpeg";
import img6 from "../../../public/images/ambassadors/Erika+Larkin.jpeg";
import img7 from "../../../public/images/ambassadors/James+OH.jpg";
import img8 from "../../../public/images/ambassadors/Jeff+Smith.jpeg";
import img9 from "../../../public/images/ambassadors/Jorge+Parada.jpg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Pagination } from "swiper/modules";

import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const testimonials = [
  {
    avatar: img1,
    name: "Barry Gibson",
    location: "Canada",
    header:
      "Having the ability to show my student this in a busy setting is a game changer!",
    quote:
      "I teach at a busy public range in variable changing conditions…[Sportsbox Golf] very quickly allows me to provide quick, effective analysis to my students. I had one long-time student, [who is a decent player], pick up ten yards in one session",
  },
  {
    avatar: img2,
    name: "David Leadbetter",
    location: "United Kingdom",
    header: "Amazing for coaches and teachers to observe golf swings",
    quote:
      "Sportsbox is really an amazing tool that enables coaches, teachers and golfers to observe golf swings as never seen before.",
  },
  {
    avatar: img3,
    name: "Sean Foley",
    location: "Canada",
    header: "Sportsbox will revolutionize teaching and learning",
    quote:
      "Sportsbox and 3D data will revolutionize teaching and learning. Amazing to compare swings of golfers over time with measurements.",
  },
  {
    avatar: img4,
    name: "Mike Adams",
    location: "United States",
    header: "Sportsbox allows us to make better golfers, quicker",
    quote:
      "My entire career I have emphasized the importance of measuring instead of guessing... Sportsbox allows us to quantify the issues and find solutions to make golfers better, quicker.",
  },
  {
    avatar: img5,
    name: "Terry Rowles",
    location: "United States",
    header: "Gives coaches everything we need",
    quote:
      "Sportsbox is the optimum tool in teaching golf - it gives coaches everything we need for evaluating and analyzing swings.",
  },
  {
    avatar: img6,
    name: "Andrew Park",
    location: "Florida",
    header: "Sportsbox 3D Golf app is the ultimate tool in golf, I believe",
    quote:
      "The Sportsbox 3D Golf app is the ultimate tool in golf, I believe, because it gives you every bit of information that a coach needs for measuring body motion in 3D. It can be used anywhere — on the range, on the course at home...",
  },
  {
    avatar: img7,
    name: "Paul Kaster",
    location: "New Jersey",
    header:
      "I’ve been pleasantly surprised with how much the data has helped newer clients",
    quote:
      "I’ve been pleasantly surprised with how much the data has helped newer clients (as opposed to more experienced golfers) and how useful the measurements are for remote coaching new students as well as clients between sessions!",
  },
  {
    avatar: img8,
    name: "Jason Floyd",
    location: "Spain",
    header: "It’s been a great help to really measure where he’s at",
    quote:
      "One of our graduate students from our full time international junior academy, Tiger Christensen, has now started at Oklahoma State [University]. He’s been sending his swing footage to me, which I’ve then converted into 3D...",
  },
  {
    avatar: img9,
    name: "Sean Kennedy",
    location: "China",
    header:
      "It's been much easier to get them to understand the necessary adjustments",
    quote:
      "[I’ve been] using the app with higher level juniors that have some flaws in their movement [and] it's been much easier to get them to understand the necessary adjustments and the reason for them.",
  },
];

export const MainTestimonialsCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const pagination = {
    clickable: true,
  };

  return (
    <div className="px-10">
      <div className={`${anton.className} text-5xl py-10 `}>TESTIMONIALS</div>
      <Swiper
        spaceBetween={50}
        pagination={pagination}
        slidesPerView={isMobile ? 1 : 3}
        modules={[Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="cursor-grab" key={testimonial.name}>
            <div
              key={index}
              className="inline-block w-full bg-sb-lightdarkblue rounded-3xl "
              style={{ width: "100%" }}
            >
              <div className="h-[300px] p-4">
                <div className="flex gap-2 items-center ">
                  <Image
                    src={testimonial.avatar}
                    className="h-[50px] w-[50px] object-cover rounded-full"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase text-white">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="font-bold my-5">{testimonial.header}</p>

                <p className="text-sm font-medium overflow-wrap break-words">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
