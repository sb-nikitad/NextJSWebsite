"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/team/Jeff_Broker.png";
import secondImg from "../../../../public/images/team/Mike_Duffey.png";

import { CardPersonInfo } from "../../../components/PersonInfCard/CardPersonInfo";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "DR. JEFF BROKER",
    secondText: "",
    thirdText: `
    <p>Dr. Jeff Broker is a distinguished expert in the field of sports biomechanics, with a PhD in Biomechanics and extensive experience in research, teaching, and consulting. He currently serves as an Associate Professor in Biomechanics at the University of Colorado at Colorado Springs (UCCS), where he teaches Biomechanics and Exercise Science in the PGAM Program.</p>
    <br>
    <p>Prior to joining UCCS, Dr. Broker worked as a biomechanist at the United States Olympic Committee, where he helped elite athletes optimize their performance through advanced biomechanical analysis and training methods. He has also conducted extensive research in biomechanics, with a focus on sports injury prevention, human movement analysis, and rehabilitation. Dr. Broker has authored numerous peer-reviewed articles on these topics and his work has been recognized for its excellence and contribution to the field. </p>
    <br>
    <p>As an Associate Professor, Dr. Broker is dedicated to training the next generation of sports scientists and biomechanists. He has a passion for helping athletes achieve their full potential through advanced biomechanical analysis and training methods. In addition to his academic work, Dr. Broker has also provided consulting services to athletes, teams, and organizations, helping them optimize their performance through biomechanical analysis and personalized training programs.</p>
    <br>
    <p>Dr. Broker is a highly respected expert in his field, and his contributions to the field of biomechanics have been significant. He is dedicated to advancing the field through research, teaching, and consulting, and continues to inspire and mentor the next generation of sports scientists and performance analysts.</p>
  `,
  },
  {
    imageSrc: secondImg,
    mainText: "DR. MIKE DUFFEY",
    secondText: "",
    thirdText: `
    <p>Dr. Mike Duffey is a distinguished biomechanics expert with extensive experience in the field of sports performance analysis. He holds a PhD in Biomechanics and is currently the President and Founder of Spheres Consulting, LLC, a company that provides biomechanics consulting services to athletes, teams, and organizations.</p>
    <br>
    <p>Prior to starting Spheres Consulting, Dr. Duffey served as an Associate Professor in Biomechanics at Penn State University, where he also created the Annual Biomechanics of Golf Course and established the Golf Teaching and Research Center. During his time at Penn State, Dr. Duffey conducted extensive research on sports performance and injury prevention, and he has authored numerous peer-reviewed articles on these topics.</p>
    <br>
    <p>Dr. Duffey's work in biomechanics has also been applied to a wide range of other sports, including basketball, football, and baseball, among others. He has worked with numerous professional athletes, teams, and organizations to help them optimize their performance through advanced biomechanical analysis and training methods.</p>
    <br>
    <p>As a highly respected biomechanics expert, Dr. Duffey is passionate about advancing the field of sports performance analysis through innovative research, teaching, and consulting. His expertise in biomechanics has made him a sought-after consultant and speaker, and he continues to inspire and mentor the next generation of sports scientists and performance analysts.</p>
    `,
  },
];

export function SportsScienceAdvisors() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className={clsx(anton.className, "flex", "items-center")}>
        <span className={clsx("border-b-4", "border-sb-blue", "text-4xl")}>
          GOLF ADVISORS
        </span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {ambassadors.map((ambassador) => (
          <CardPersonInfo
            imageSrc={ambassador.imageSrc}
            mainText={ambassador.mainText}
            secondText={ambassador.secondText}
            thirdText={ambassador.thirdText}
            width="w-[440px]"
          />
        ))}
      </div>
    </div>
  );
}
