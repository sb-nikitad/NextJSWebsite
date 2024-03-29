import { HoverButton } from "../../../components/HoverButton/HoverButton";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const StudentThumbnail = () => {
  return (
    <>
      <div className="bg-sb-darkblue bg-cover bg-center flex justify-between w-full px-[20px] lg:px-[80px] pt-[100px] lg:pt-[200px] lg:pb-[100px] items-center flex-wrap gap-y-10">
        <div className="flex flex-col gap-10">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"KNOW YOUR NUMBERS,\nMAKE"}
            <span className="text-blue-500"> REAL </span>
            PROGRESS!
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-[24px]">DO YOU PRACTICE TO IMPROVE</span>
            <span className="text-[24px]">OR DO YOU JUST HIT BALLS?</span>
          </div>
          <Link href="https://3dgolf.sportsbox.ai/sign-up?plansType=players">
            <HoverButton
              color="bg-sb-blue"
              text="Get Started"
              width="w-[230px]"
              height="h-[60px]"
            />
          </Link>
        </div>
        <div className="flex w-fill gap-x-4 flex-wrap">
          <video autoPlay muted loop className="w-[160px] lg:w-[300px]">
            <source src="videos/student/1.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop className="w-[160px] lg:w-[300px]">
            <source src="videos/student/2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="bg-sb-darkblue flex justify-center w-full py-[100px] lg:pt-[0px] lg:px-[200px] lg:pb-[200px] px-[20px] gap-32 flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap ">
        <div className="w-fit">
          <video autoPlay muted loop className="w-[430px]">
            <source src="videos/student/3.mp4" type="video/mp4" />{" "}
          </video>
        </div>
        <div className="flex flex-col gap-y-8 w-[80%] justify-center">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {"TURN SWING THOUGHTS INTO\nMEASURABLE"}
            <span className="text-blue-500"> GOALS.</span>
          </div>
          <div className="flex flex-col text-[20px] font-light gap-y-8">
            <span>
              FIRST STEP TO ACHIEVING A SWING CHANGE IS TO QUANTIFY THE CHANGE.
              IF YOU WANT TO MAKE A BIGGER BACKSWING TURN, HOW MANY DEGREES?
            </span>
            <span>
              USE OUR GOALS FEATURE TO DEFINE AND QUANTIFY THE SWING CHANGE YOU
              WANT TO MAKE WITH DATA.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-sb-darkblue flex justify-center w-full lg:px-[200px] lg:pb-[200px] gap-x-32 ">
        <div className="flex lg:flex-row items-center justify-center flex-col flex-wrap px-[20px]">
          <div className="flex flex-col gap-y-8 lg:w-[50%] justify-center items-center text-center lg:border-r-2 lg:border-white lg:pr-8 lg:py-36">
            <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
              {"READY TO TRAIN"}
              <span className="text-blue-500"> SOLO?</span>
            </div>
            <div className="flex flex-col text-[20px] font-light gap-y-8">
              <span>
                YOU KNOW WHAT YOU WANT TO WORK ON. LET’S TURN THAT INTO A
                MEASURABLE GOAL AND HELP YOU TRAIN WITH DATA.
              </span>
            </div>
            <Link href="https://3dgolf.sportsbox.ai/sign-up?plansType=players">
              <HoverButton
                color="bg-sb-blue"
                text="Get Started"
                width="w-[175px]"
                height="h-[60px]"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-y-8 lg:w-[50%] justify-center items-center text-center lg:pl-8 py-36">
            <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
              NEED A<span className="text-blue-500"> FREE </span>
              SWING ASSESSMENT?
            </div>
            <div className="flex flex-col text-[20px] font-light gap-y-8">
              <span>
                SEND A SWING AND YOUR VERY OWN 3D EXPERT COACH WILL PROVIDE A
                FREE 3D SWING ANALYSIS AND PERSONALIZED GOAL TO GET YOU STARTED.
              </span>
            </div>
            <Link href="https://3dgolf.sportsbox.ai/swing-analysis-offer">
              <HoverButton
                color="bg-sb-blue"
                text="Sign Up"
                width="w-[175px]"
                height="h-[60px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-sb-darkblue flex justify-center w-full px-[20px] lg:px-[200px] pb-[100px] lg:pb-[200px] gap-32 flex-wrap lg:flex-nowrap">
        <div className="w-fit">
          <video autoPlay muted loop className="w-[430px]">
            <source src="videos/student/4.mp4" type="video/mp4" />{" "}
          </video>
        </div>
        <div className="flex flex-col gap-y-8 w-[80%] justify-center">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {"PRACTICE LIKE THE"}
            <span className="text-blue-500"> PROS.</span>
          </div>
          <ul className="flex flex-col gap-y-[6px] pl-4 list-disc text-[20px] font-light">
            <li className="pb">AUTO SWING DETECTION</li>
            <li className="pb">INBOX TO COMMUNICATE WITH COACH</li>
            <li className="pb">6 DIFFERENT VIEWS OF YOUR AVATAR</li>
            <li className="pb">TOUR VALIDATED 3D TECHNOLOGY</li>
            <li className="pb">ACCESS TO LPGA & PGA TOUR RANGES</li>
          </ul>
        </div>
      </div>
      <div className="bg-sb-darkblue flex justify-center w-full px-[20px] lg:px-[130px] pb-[100px] lg:pb-[200px] gap-32 flex-wrap lg:flex-nowrap">
        <div className="w-fit">
          <Image
            src={"images/student/map.png"} // Assuming imagePath is correct and imported
            alt="Image Description"
            className=""
            layout=""
            width={1000}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-y-8 w-[85%] justify-center ">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap`}>
            {"FIND A"}
            <span className="text-blue-500"> COACH</span>
          </div>
          <ul className="flex flex-col gap-y-[6px] pl-4 list-disc text-[20px] font-light">
            <li className="pb">IN-PERSON OR DIGITAL LESSONS</li>
            <li className="pb">
              USE SPORTSBOX INBOX TO COMMUNICATE BETWEEN LESSONS
            </li>
          </ul>
          <Link href="/find-coach/all-coaches">
            <HoverButton
              color="bg-sb-blue"
              text="Start here"
              width="w-[175px]"
              height="h-[60px]"
            />
          </Link>
        </div>
      </div>
      <div className="bg-sb-darkblue bg-cover bg-center flex justify-between w-full px-[20px] lg:px-[130px] pb-[100px] gap-12 items-center flex-wrap">
        <div className="flex flex-col gap-10">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"WATCH HOW THE"}
            <span className="text-blue-500"> PROS </span>
            {"\nARE USING SPORTSBOX"}
          </div>
          <Link href="https://3dgolf.sportsbox.ai/sign-up?plansType=players">
            <HoverButton
              color="bg-sb-blue"
              text="Let's Go"
              width="w-[150px]"
              height="h-[60px]"
            />
          </Link>
        </div>
        <div className="flex w-fil gap-x-4">
          <video controls muted className="w-[550px]">
            <source src="videos/student/5.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
