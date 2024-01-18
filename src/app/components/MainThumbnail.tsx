import { HoverButton } from "../../components/HoverButton/HoverButton";
import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MainThumbnail = () => {
  return (
    <>
      <div className="bg-[url('/images/main-bg.jpg')] bg-cover bg-center flex justify-between items-center w-full md:px-[50px] xl:px-[100px] xl:py-[200px] py-[100px] flex-wrap ">
        <div className="flex flex-col gap-10 p-5 sm:w-full md:w-fit">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"3D MOTION CAPTURE\nIN THE PALM\nOF YOUR HANDS"}
          </div>
          <div className="flex justify-center xl:justify-between flex-wrap gap-4 xl:w-[500px]">
            <HoverButton
              className="w-full xl:w-52"
              color="bg-sb-blue"
              text="For Players"
              link="/student"
            />
            <HoverButton
              className="w-full xl:w-52"
              color="bg-sb-blue"
              text="For Coaches"
              link="/coach"
            />
          </div>
        </div>
        <div className="flex items-end justify-center mt-10 xl:mt-0 sm:w-[300px] md:w-fit xl:w-[400px] 2xl:w-[500px]">
          <video
            autoPlay
            muted
            loop
            className="w-[150px] md:w-[180px] relative top-0 left-10 xl:left-20 rounded-[35px] z-20"
          >
            <source src="videos/main-1.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            className="w-[290px] md:w-[350px] xl:w-[400px] rounded-[20px] xl:rounded-[35px] -left-20 relative z-0"
          >
            <source src="videos/main-2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
