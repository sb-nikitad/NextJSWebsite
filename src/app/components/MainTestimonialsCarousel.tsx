"use client";

import { useState } from "react";

export const MainTestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    { name: "qwe", location: "qwe", header: "qwe", text: "qwe" },
    { name: "asd", location: "asd", header: "asd", text: "asd" },
    { name: "zxc", location: "zxc", header: "zxc", text: "zxc" },
    { name: "vbn", location: "vbn", header: "vbn", text: "vbn" },
    { name: "qwe", location: "qwe", header: "qwe", text: "qwe" },
    { name: "asd", location: "asd", header: "asd", text: "asd" },
    { name: "zxc", location: "zxc", header: "zxc", text: "zxc" },
    { name: "vbn", location: "vbn", header: "vbn", text: "vbn" },
    { name: "qwe", location: "qwe", header: "qwe", text: "qwe" },
    { name: "asd", location: "asd", header: "asd", text: "asd" },
    { name: "zxc", location: "zxc", header: "zxc", text: "zxc" },
    { name: "vbn", location: "vbn", header: "vbn", text: "vbn" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentSlide * 420}%)` }}
          className="relative flex gap-1 transition-transform transform "
        >
          {items.map((el) => (
            <div className="w-[420px] h-[320px] custom-hsl-background">
              <div>{el.name}</div>
              <div>{el.location}</div>
              <div>{el.header}</div>
              <div>{el.text}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute inset-y-0 left-0 flex items-center px-4 py-2 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};
