import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        GOLF.COM: NEW TECH SHOWS EXACTLY HOW MUCH BRYSON TURNS ON HIS BACKSWING
      </div>

      <div className={`${anton.className} py-10`}>Aug 30</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>Via Golf.com:</div>
        <div>
          Sportsbox AI is an app, currently in beta, that uses artificial
          intelligence to generate a 3D model based on a two-dimensional video.
          After recording a video face on, the app superimposes trackers on a
          number of key points on the body, which users can then use to dissect
          golf swings in 3D.
        </div>
        <div>Which brings us to Bryson.</div>
        <div>
          GOLF Top 100 Teacher Terry Rowles has been an early adopter of the
          technology, and last week, used the app to showcase Bryson
          DeChambeau’s shoulder turn. And in doing so, illustrated why the
          technology is going to be so useful for golfers in the future: Rather
          than eyeballing how much DeChambeau turns his shoulders, the app pegs
          his shoulder turn at the top of the backswing to 112 degrees from
          where they started.
        </div>
        <div>“That’s on the highest side,” Rowles writes.</div>
        <div>
          Go here to read the full story and check out Bryson’s robot swing!
        </div>
      </div>
    </div>
  );
}
