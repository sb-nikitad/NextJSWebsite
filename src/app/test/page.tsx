"use client";

import { useEffect, useRef, useState } from "react";

export default function TestPage() {
  const scrollContainerRef = useRef(null);
  const [scrollState, setScrollState] = useState(0);

  // useEffect(() => {

  // }, []);

  const onClick = () => {
    if (scrollContainerRef.current) {
      //@ts-ignore
      scrollContainerRef.current.scrollTop += 250;
    }
  };

  useEffect(() => {
    console.log(scrollState);
  }, [scrollState]);

  const onClick2 = () => {
    setScrollState((prev) => (prev += 250));
  };

  return (
    <div>
      {/* <div
        style={{
          transform: `translate(${scrollState}px)`,
          transitionDuration: "0.6s",
        }}
        className="h-[500px] w-[600px] overflow-hidden whitespace-nowrap"
        ref={scrollContainerRef}
      >
        <div className="w-[200px] h-[200px] bg-blue-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-red-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-green-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-yellow-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-orange-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-blue-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-red-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-green-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-yellow-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-orange-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-blue-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-red-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-green-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-yellow-500 inline-block overflow-hidden"></div>
        <div className="w-[200px] h-[200px] bg-orange-500 inline-block overflow-hidden"></div>
      </div>

      <button onClick={onClick2}>click</button> */}
    </div>
  );
}
