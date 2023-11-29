"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/team/RichKennewick.png";
import secondImg from "../../../../public/images/team/MikeKennewick.png";
import thirdImg from "../../../../public/images/team/ProfJenq-Neng_Hwang.jpg";

import { CardPersonInfo } from "../../../components/PersonInfCard/CardPersonInfo";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "RICH KENNEWICK",
    secondText: "CHAIRMAN",
    thirdText: `
    Rich Kennewick is an entrepreneur and tech industry veteran. He is a co-founder and Managing Director of AI Thinktank (AIT), an incubator for Computer Vision and Action Understanding.
  `,
  },
  {
    imageSrc: secondImg,
    mainText: "MIKE KENNEWICK",
    secondText: "DIRECTOR",
    thirdText: `
    <p>Mike Kennewick is an electrical engineer, tech industry veteran and serial entrepreneur. He started his career at Microsoft where he worked with Bill Gates and Steve Balmer to launch Microsoft’s seminal licensing business for MS-DOS and Windows. After Microsoft, Mike founded Saros Corporation and ran it with his co-founder for 10 years. Saros was the inventor and pioneer of a new category of software called enterprise-document-management. Saros’ document management was installed in most of the major law firms in the U.S. as well as in about 200 of the Fortune 1000 companies. Saros was ultimately sold to FileNet Corporation and then FileNet was sold to IBM, where the technology remains in use today.</p>
    <br>
    <p>Mike was also the founder and CEO of Voicebox Corporation. Voicebox was the inventor and pioneer of Voice Assistants and Conversational AI. Voicebox created the first smart-speaker and voice assistant in 2005. The company also became one of the dominant suppliers of voice recognition and natural language understanding in the automotive business with over 20 million cars shipped by companies such as Toyota, Renault, Chrysler, TomTom, Denso, Fujitsu 10, Pioneer, Panasonic and Harman. Voicebox’s mobile and enterprise business shipped over 300 million units with customers such as Samsung, Best Buy, Orange and Bouygues. The automotive business was ultimately sold to Nuance Communications and merged with Nuance’s Automotive business unit.</p>
    <br>
    <p>Mike then founded a company called Speak.ai to provide conversational AI at the “edge. Speak.ai’s initial customers included makers of low power CPUs, emerging AI chips, DSPs, micro controllers and SOCs. The company was sold to a large software company in 2019.</p>
    <br>
    <p>Today, Mike is a co-founder and Managing Director of AI Thinktank (AIT), an incubator for Computer Vision and Action Understanding. Action Understanding is the ability to extract meaning and intent from the contextual relationship of objects and their motion. AIT has also developed a key feature of action understanding called Kinematic AI. Kinematic AI is the ability to, from a single mobile phone, accurately measure the biomechanical movement of the human body in 3D. AIT is an incubator and is in the process of spinning out next generation AI companies around computer vision and action understanding.</p>`,
  },
  {
    imageSrc: thirdImg,
    mainText: "DR. JENQ-NENG HWANG",
    secondText: "SCIENTIFIC ADVISOR",
    thirdText: `
   <p> Dr. Jenq-Neng Hwang received the BS and MS degrees, both in electrical engineering from the National Taiwan University, Taipei, Taiwan, in 1981 and 1983 separately. He then received his Ph.D. degree from the University of Southern California. In the summer of 1989, Dr. Hwang joined the Department of Electrical and Computer Engineering (ECE) of the University of Washington in Seattle, where he has been promoted to Full Professor since 1999. He served as the Associate Chair for Research from 2003 to 2005, and from 2011-2015. He also served as the Associate Chair for Global Affairs from 2015-2020.</p>
   <br>
   <p>Dr. Hwang is currently the International Programs Lead in the ECE Department. He is the founder and co-director of the Information Processing Lab., which has won several AI City Challenges awards in the past years. He has written more than 400 journal, conference papers and book chapters in the areas of machine learning, multimedia signal processing, computer vision, and multimedia system integration and networking (my Google citation), including an authored textbook on "Multimedia Networking: from Theory to Practice," published by Cambridge University Press. Dr. Hwang has a close working relationship with the industry on artificial intelligence and machine learning.</p>

`,
  },
];

export function Advisors() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className={clsx(anton.className, "flex", "items-center")}>
        <span className={clsx("border-b-4", "border-sb-blue", "text-4xl")}>
          ADVISORS
        </span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {ambassadors.map((ambassador) => (
          <CardPersonInfo
            key={ambassador.mainText}
            imageSrc={ambassador.imageSrc}
            mainText={ambassador.mainText}
            secondText={ambassador.secondText}
            thirdText={ambassador.thirdText}
            width="max-w-[440px]"
          />
        ))}
      </div>
    </div>
  );
}
