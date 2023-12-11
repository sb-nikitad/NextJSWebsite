import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        CAN AI APPS HELP YOUR GOLF SWING? - WSJ
      </div>

      <div className={`${anton.className} py-10`}>Apr 21</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          You can download the PDF of the original article by clicking here.
        </div>
      </div>
    </div>
  );
}
