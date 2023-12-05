import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

import img1 from "../../../public/images/education/img-1.png";
import img2 from "../../../public/images/education/img-2.png";
import Image from "next/image";
import { HoverButton } from "../../components/HoverButton/HoverButton";
import { Separator } from "../../components/Separator";

export default function EducationPage() {
  return (
    <div className="w-full h-fit leading-relaxed">
      <div className="w-full h-[30vh] lg:h-[80vh] lg:py-0 bg-[url('/images/education/thumbnail.png')] bg-cover bg-center"></div>

      <div className="bg-white text-black flex flex-col items-center ">
        <div className={`${anton.className} text-4xl p-10`}>
          SPORTSBOX 3D BOOT CAMP.
        </div>

        <div className="flex justify-evenly flex-wrap">
          <Image src={img1} width={500} height={500} alt="register" />
          <div className="p-10 lg:p-0 lg:w-1/2 flex flex-col items-center">
            <div>
              <p>
                The Sportsbox Boot Camp will train and educate you in becoming
                an expert in using 3D in your day to day lessons. This program
                will be a combination of:
              </p>
              <ul className="list-disc pl-[40px] my-5">
                <li>
                  5 weekly 30-min interactive education sessions that address
                  everything from teaching with 3D and leveraging Sportsbox to
                  increase instruction revenue
                </li>
                <li>Sportsbox 3DGolf Level 1 Certification ($200 value)</li>
                <li>
                  Two months Pro Premium subscription to Sportsbox 3DGolf app
                  ($378 value)
                </li>
                <li>Receive 6 PDR credits</li>
              </ul>
              <p>
                Upon completion of the 5-week program, you&apos;ll receive a
                sizable discount on your annual Sportsbox subscription,
                available exclusively to program participants. Plus, PGA members
                will earn 6 PDR credits. Don&apos;t miss this opportunity to
                enhance your skills and take your coaching to the next level.
              </p>
            </div>
            <div
              className={`${anton.className} text-sb-lowpurple text-4xl underline py-10`}
            >
              $400
            </div>
            <HoverButton text="SIGN UP NOW" color="bg-sb-blue" />
          </div>
        </div>

        <div className={`${anton.className} text-4xl p-10`}>
          SPORTSBOX 3D LEVEL 1 CERTIFICATION
        </div>

        <div className="flex justify-evenly flex-wrap">
          <Image src={img2} width={500} height={500} alt="register" />

          <div className="p-10 lg:p-0 lg:w-1/2 flex flex-col items-center ">
            <div>
              As you work through the level 1 certification you will gain
              knowledge on how to navigate the app and use the various features
              while in a lesson. Dr. Phil Cheetham will share the basics of
              biomechanics, from the difference between kinetics and kinematics,
              what 6 degrees of freedom is and why it is important. We will also
              share important information regarding our trackers, starting with
              defining each tracker, how they are measured, and the numbers
              being shown. Dr. Phil Cheetham will share some tracker truths
              shedding light on what the best players in the world do. There is
              no perfect set of numbers when we analyze with 3D, but we do have
              a ranges of what PGA and LPGA Tour players do that we will share
              with you. Coach Ryan Crawley will provide real examples of
              identifying swing flaws and what trackers are associated with
              those flaws.
            </div>
            <div
              className={`${anton.className} text-sb-lowpurple text-4xl underline py-10`}
            >
              $400
            </div>
            <HoverButton text="SIGN UP NOW" color="bg-sb-blue" />
          </div>
        </div>
        <Separator height={100} />
      </div>
    </div>
  );
}
