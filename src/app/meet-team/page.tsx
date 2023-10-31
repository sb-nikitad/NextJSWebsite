import { FoundingTeam } from "./components/FoundingTeam";
import { Advisors } from "./components/Advisors";
import { GolfAdvisors } from "./components/GolfAdvisors";
import { SportsScienceAdvisors } from "./components/SportsScienceAdvisors";
import clsx from "clsx";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function MeetTeam() {
  return (
    <div className="flex flex-col items-center gap-y-24 p-8">
      <div
        className={clsx(anton.className, "flex", "items-center", "gap-x-52")}
      >
        <span className="border-b-4 border-sb-blue text-4xl">
          FOUNDING AND EXECUTIVE TEAM
        </span>
        <span className="text-2x w-[550px]">
          WE ARE A TEAM OF EXPERTS IN SPORTS, AI TECHNOLOGY, AND BIOMECHANICAL
          SCIENCE.
        </span>
      </div>
      <FoundingTeam />
      <Advisors />
      <GolfAdvisors />
      <SportsScienceAdvisors />
    </div>
  );
}
