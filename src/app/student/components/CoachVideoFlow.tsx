import { Anton } from "next/font/google";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const CoachVideoFlow = () => {
  return (
    <>
      <div className="bg-sb-darkblue flex justify-start w-full px-[180px] py-[20px] gap-x-4">
        <div className="flex flex-col gap-10 w-2/3 justify-center">
          <div className="bg-sb-blue px-3 w-fit text-[12px]">
            REMOTE COACHING{" "}
          </div>
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {
              "SEND LESSON NOTES WITH\nSCREEN RECORDINGS + VOICE-\nOVERS TO YOUR STUDENTS"
            }
          </div>
          <HoverButton
            color="bg-sb-blue"
            text="Become a 3D Expert"
            width="w-[250px]"
            height="h-[60px]"
          />
        </div>
        <div className="">
          <video autoPlay muted loop className="w-[300px]">
            <source src="videos/coach/Coach_3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-center w-full px-[200px] py-[20px] gap-x-32">
        <div className="">
          <video autoPlay muted loop className="w-[350px]">
            <source src="videos/coach/Coach_3.mp4" type="video/mp4" />{" "}
          </video>
        </div>
        <div className="flex flex-col gap-y-8 w-2/3 justify-center">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {
              "CREATE CUSTOM WATCHLISTS FOR YOUR STUDENTS AND TRACK THEIR PROGRESS\n"
            }
          </div>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-start w-full px-[180px] py-[20px] gap-x-4">
        <div className="flex flex-col gap-4 w-2/3 justify-center">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {"IMPORT AND ANALYZE VIDEOS FROM YOUR INBOX"}
          </div>
          <div className="text-[18px] font-light">
            Track your students’ progress and message them directly through the
            app
          </div>
        </div>
        <div className="">
          <video autoPlay muted loop className="w-[300px]">
            <source src="videos/coach/Coach_4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-sb-darkblue flex flex-col justify-center items-center w-full px-[180px] py-[20px] gap-y-12 pb-16">
        <div className="flex flex-col gap-y-4 w-fit justify-center items-center">
          <div
            className={`${anton.className} text-6xl whitespace-pre-wrap text-center	`}
          >
            {"COMPARE TWO SWINGS WITH\n 3D MOTION DATA"}
          </div>
          <div className="text-[18px] font-light whitespace-pre-wrap text-center	`">
            {
              "Quantify the difference between before and after\n swings or use a pro’s swing as a model reference"
            }
          </div>
        </div>
        <div className="flex">
          <video autoPlay muted loop className="w-[750px]">
            <source src="videos/coach/Coach_6.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
