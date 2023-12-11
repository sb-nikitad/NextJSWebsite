import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        HAPPY HOLIDAYS FROM SPORTSBOX!
      </div>

      <div className={`${anton.className} py-10`}>Dec 22</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash., December 22, 2021 -- As we’re nearing the end of our
          first full year as a company, I wanted to take the time to thank you
          all for being part of our 3D Golf Community. It’s only been two months
          since the official launch of our first product – the Sportsbox 3D Golf
          app – and we’ve since blown the minds of THOUSANDS of coaches from all
          over the world with what we can do with just a single mobile phone.
          And truly, the best is yet to come - we have SO much more in the works
          to bring to you all in the new year. With your support and active
          participation, we’re able to continue innovating on our technology and
          improving the experience on our products.
        </div>
        <div>
          So let’s quickly look back on 2021 because I could not be prouder of
          the progress we’ve made in just 12 months. We have successfully
          completed a 3-month beta with top coaches around the world (32 of the
          Golf Magazine Top 100 and 15 of Golf Digest’s Top 50 and coaches from
          20 different countries), incorporated their feedback, and launched our
          first product in Android and iOS. We also welcomed some of the
          biggest, most influential leaders in the game as our investors – Sean
          Foley, David Leadbetter, Michelle Wie, and Marina Alex. And we were
          invited to present at Golf.com’s Top 100 Teachers’ Summit in
          Pinehurst, NC. And most importantly, we have hundreds of top coaches
          who are using Sportsbox 3D Golf daily and sharing some incredibly
          compelling stories about how “3D Golf” is an absolute game-changer
          when it comes to making a difference in their students’ games.
        </div>
        <div>
          2022 is going to be an even bigger year for Sportsbox and our 3D Golf
          Community. We have so many exciting features and new trackers we will
          be bringing to you all. So get ready. It’s going to be an amazing
          ride.
        </div>
        <div>Jeehae Lee</div>
        <div>CEO & Co-Founder of Sportsbox AI</div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn and YouTube.
        </div>
        <div>###</div>
        <div>About Sportsbox.ai, Inc.</div>
        <div>
          Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology
          company that develops AI Coach mobile applications in sports and
          fitness using patent-pending 3D Motion Capture and Kinematic AI
          technology. Through our unique technology that can capture, measure
          and analyze complex athletic motions in 3D, combined with the
          knowledge and experience of the world’s leading instructors in each
          sport, Sportsbox AI brings real-time corrective feedback to help
          athletes achieve their goals in sports and fitness.
        </div>
        <div>***</div>
        <div>Media Contact:</div>
        <div>Stephanie Wei</div>
        <div>VP of Comms & Co-Founder</div>
        <div>stephaniew@sportsbox.ai</div>
        <div>+1 917.617.7183</div>
      </div>
    </div>
  );
}
