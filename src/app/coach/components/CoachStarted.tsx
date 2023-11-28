import { Anton } from "next/font/google";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const CoachStarted = () => {
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center w-full h-fit px-[200px] py-[100px] gap-y-8">
        <div className="flex flex-col gap-y-8 text-center items-center justify-center">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {"STOP GUESSING, START\n MEASURING"}
          </div>
          <div className="text-[20px] font-normal whitespace-pre-wrap pb-8">
            {
              "Communicate more clearly with 3D data to teach more\n effectively - remote or live"
            }
          </div>
          <HoverButton
            color="bg-sb-blue"
            text="Get Started"
            width="w-[240px]"
            height="h-[65px]"
          />
        </div>
      </div>
    </>
  );
};
