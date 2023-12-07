import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTTECHIE: SPORTSBOX AI TO LAUNCH 3D GOLF ON MONDAY, DELIVERS SLO-MO
        BIOMECHANICS TO SMARTPHONES
      </div>

      <div className={`${anton.className} py-10`}>Oct 10</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>Go HERE to read the full story. </div>
      </div>
    </div>
  );
}
