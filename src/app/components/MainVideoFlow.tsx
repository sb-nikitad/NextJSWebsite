import { Anton } from "next/font/google";
import { HoverButton } from "../../components/HoverButton/HoverButton";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MainVideoFlow = () => {
  return (
    <>
      <div className="bg-sb-darkblue flex justify-between w-full px-10 xl:px-[250px] py-[20px] flex-wrap gap-10">
        <div className="flex flex-col gap-10 md:w-2/3 justify-center">
          <div className="bg-sb-blue p-3 font-bold w-fit">
            With Sportsbox 3D Golf, you can…
          </div>
          <div
            className={`${anton.className} text-2xl lg:text-[2.5rem] leading-10 `}
          >
            VISUALIZE ANY SWING IN 3D ANIMATION CREATED FROM A <em>SINGLE</em>
            {"  "} VIDEO TAKEN ON YOUR PHONE.
          </div>
          <div className="text-xl">
            See the swing motion from six different angles: Face-on,
            Down-the-Line, Behind, From Target, Above and Below
          </div>
        </div>
        <div className="md:w-[27%]">
          <video autoPlay muted loop>
            <source src="videos/main-3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-between w-full px-10 lg:px-[150px] py-[20px] flex-wrap lg:flex-nowrap flex-col-reverse md:items-center lg:flex-row gap-10">
        <div className="md:w-[50%] lg:w-[50%]">
          <video autoPlay muted loop>
            <source src="videos/main-4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 lg:w-[50%] justify-center">
          <div
            className={`${anton.className} text-2xl lg:text-[2.5rem] leading-10 `}
          >
            THE ULTIMATE VIDEO ANALYSIS TOOL
          </div>
          <div className="text-xl font-light">
            Analyze in both 3D and 2D using our 3D trackers and drawing tools
          </div>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-between w-full px-10 lg:px-[200px] py-[20px] flex-wrap gap-4">
        <div className="flex flex-col gap-10 md:w-[55%] justify-center">
          <div
            className={`${anton.className} text-2xl lg:text-[2.5rem] lg:leading-10  `}
          >
            GET ACCURATE 3D BIOMECHANICAL MEASUREMENTS FOR EVERY SWING
          </div>
          <div className="text-xl">
            So you can stop guessing and start measuring the swing in inches and
            degrees
          </div>
        </div>
        <div className="md:w-[27%]">
          <video autoPlay muted loop>
            <source src="videos/main-5.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-center w-full px-10 lg:px-[150px] py-[20px] flex-wrap lg:flex-nowrap flex-col-reverse md:flex-row gap-32">
        <div className="md:w-[25%]">
          <video autoPlay muted loop>
            <source src="videos/main-6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 md:w-[50%] justify-center">
          <div
            className={`${anton.className} text-2xl lg:text-[2.5rem] lg:leading-10  `}
          >
            CREATE CUSTOM WATCHLISTS FOR IMMEDIATE FEEDBACK
          </div>
          <div className="text-xl font-light">
            Coaches can set goal ranges that provide students with immediate
            feedback to quantify and track their progress (i.e. More turn in the
            backswing, using chest and pelvis turn trackers)
          </div>
        </div>
      </div>

      <div className="bg-sb-darkblue flex flex-col gap-10 w-full items-center px-10 lg:px-[250px] py-[20px] lg:py-[100px] flex-wrap">
        <div className="flex flex-col gap-y-4">
          <div
            className={`${anton.className} text-3xl lg:text-[2.5rem] lg:leading-10  `}
          >
            COMPARE TWO SWINGS WITH 3D MOTION DATA.
          </div>
          <div className="text-xl">
            Quantify the difference between before and after swings or use a
            pro’s swing as a model reference
          </div>
        </div>
        <div className=" md:w-[75%] flex justify-center">
          <video autoPlay muted loop>
            <source src="videos/main-7.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-sb-darkblue flex justify-between w-full px-10 lg:px-[250px] py-[20px] flex-wrap lg:flex-nowrap flex-col-reverse md:flex-row gap-10">
        <div className=" md:w-[25%]">
          <video autoPlay muted loop>
            <source src="videos/main-8.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 md:w-[55%] justify-center">
          <div
            className={`${anton.className}  text-3xl lg:text-[2.5rem] lg:leading-10  `}
          >
            AUTO SWING DETECTION RECORDS AND CUTS YOUR SWING VIDEOS FOR YOU
          </div>
          <HoverButton
            color="bg-sb-blue"
            text="Get Started"
            width="w-[180px]"
            link="https://3dgolf.sportsbox.ai/sign-up"
          />
        </div>
      </div>

      <div className="bg-sb-darkblue flex items-center w-full px-10 lg:px-[250px] py-[50px] lg:py-[20px] flex-wrap">
        <div className="flex flex-col gap-10 items-center">
          <div
            className={`${anton.className} text-3xl lg:text-[2.5rem] lg:leading-10  `}
          >
            HOW IT WORKS
          </div>
          <div className=" lg:w-[80%]">
            <video autoPlay muted loop>
              <source src="videos/main-9.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
