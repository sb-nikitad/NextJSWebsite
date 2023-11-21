import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Learning() {
  return (
    <div className="p-32 w-full h-fit bg-sb-darkblue bg-center">
      <Separator height={230} />

      <div className="w-full h-fit bg-cover flex flex-col items-center">
        {/* First Video */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/0y39gWWREMo?si=LzqQlmDvD882gueq"
            title="YouTube Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/ZobbJiGzBAM?si=EagNj18VCCM8cTRk"
            title="YouTube Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/dVZlPkzWkog?si=0v_htoJiOhnEhCPh"
            title="YouTube Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/lrxqc_eejnY?si=5ZUooisc78WI_iQH"
            title="YouTube Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/DJKOxQm38tM?si=9a2WFYLp_rBnrFGh"
            title="YouTube Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
