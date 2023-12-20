import { HoverButton } from "../../components/HoverButton/HoverButton";
import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MainThumbnail = () => {
  return (
    <>
      <div className="bg-[url('/images/main-bg.jpg')] bg-cover bg-center flex justify-between w-full lg:px-[250px] lg:py-[200px] py-[100px] flex-wrap ">
        <div className="flex flex-col gap-10 p-5">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"3D MOTION CAPTURE\nIN THE PALM\nOF YOUR HANDS"}
          </div>
          <div className="flex justify-center lg:justify-between flex-wrap gap-4 lg:w-[500px]">
            <HoverButton
              className="w-10/12 lg:w-52"
              color="bg-sb-blue"
              text="For Players"
              link="/student"
            />
            <HoverButton
              className="w-10/12 lg:w-52"
              color="bg-sb-blue"
              text="For Coaches"
              link="/coach"
            />
          </div>
        </div>
        <div className="flex items-end mt-10 lg:mt-0 w-[300px] lg:w-fit">
          <video
            autoPlay
            muted
            loop
            className="w-[150px] lg:w-[200px] relative top-0 left-10 lg:left-20 rounded-[35px] z-20"
          >
            <source src="videos/main-1.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            className="w-[290px] lg:w-[400px] rounded-[20px] lg:rounded-[35px] -left-20 relative z-0"
          >
            <source src="videos/main-2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
