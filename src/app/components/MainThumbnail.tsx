import { HoverButton } from "../../components/HoverButton/HoverButton";
import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MainThumbnail = () => {
  return (
    <>
      <div className="bg-[url('/images/main-bg.jpg')] bg-cover bg-center flex justify-between w-full px-[250px] py-[200px] ">
        <div className="flex flex-col gap-10">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"3D MOTION CAPTURE\nIN THE PALM\nOF YOUR HANDS"}
          </div>
          <div className="flex justify-between w-[300px]">
            <HoverButton color="bg-sb-blue" text="For Players" />
            <HoverButton color="bg-sb-blue" text="For Coaches" />
          </div>
        </div>
        <div className="flex items-end">
          <video
            autoPlay
            muted
            loop
            className="w-[200px] relative top-0 left-20 rounded-[35px]"
          >
            <source src="videos/main-1.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop className="w-[400px] rounded-[35px]">
            <source src="videos/main-2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
