import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });
import { Separator } from "@/components/Separator";

export default function AllCoaches() {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[40vh] bg-sb-darkblue bg-cover bg-center flex flex-col items-center">
        <Separator height={130} />
        <div className="flex flex-col justify-center items-center">
          <h2 className={`${anton.className} text-5xl p-6`}>
            3DGOLF COACH <span className="text-sb-blue">DIRECTORY.</span>
          </h2>
          <span className="text-xl px-14 w-1/2 text-center">
            If you are a current 3DGolf Coach and you are not yet listed in the
            Directory, please either fill out this form or select ‘Add Entry’
            below and complete the fields. We will approve and add you after we
            review your entry.
          </span>
        </div>
      </div>

      <div className="bg-white text-black flex flex-col items-center">
        <div className={`${anton.className} text-4xl p-10`}>All Coaches</div>
      </div>
    </div>
  );
}
