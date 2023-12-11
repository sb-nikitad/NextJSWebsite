import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        USA TODAY: FORMER LPGA PLAYER JEEHAE LEE SHOWS OFF NEW GOLF APP THAT
        TURNS 2D VIDEO INTO 3D
      </div>

      <div className={`${anton.className} py-10`}>Jul 15</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>Via USA Today and Golfweek: </div>
        <div>
          Remember when fixing a swing issue meant setting up time with a swing
          coach, driving to the coach’s range, and spending time waiting for
          your coach to finish a lesson?
        </div>
        <div>No longer.</div>
        <div>
          As former LPGA player and former Michelle Wie agent Jeehae Lee tells
          us in this video, sponsored by Rocket Mortgage, now a simple
          smartphone video can be all you need to get a number of key stats, and
          a complete 3D look at what you’re doing through your swing.
        </div>
        <div>
          The day is fast approaching when Lee’s company, Sportsbox AI, will be
          able to send you instant recommendations after you download a video.
        </div>
        <div>
          Go HERE to watch Jeehae talk about how technology is changing the
          sport of golf.
        </div>
      </div>
    </div>
  );
}
