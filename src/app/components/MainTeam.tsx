import { HoverButton } from "../../components/HoverButton/HoverButton";
import { Separator } from "../../components/Separator";
import { FoundingTeam } from "../meet-team/components/FoundingTeam";

import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MainTeam = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={`${anton.className} text-5xl py-10`}>
        FOUNDING AND EXECUTIVE TEAM
      </div>
      <div className="font-bold py-10">
        We are a team of experts in sports, AI technology, and biomechanical
        science.
      </div>
      <FoundingTeam />
      <Separator height={50} />
      <HoverButton text="See Sportsbox AI Team" color="bg-sb-blue" />
    </div>
  );
};
