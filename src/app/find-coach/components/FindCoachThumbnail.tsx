import { Separator } from "../../../components/Separator";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const FindCoachThumbnail = () => {
  return (
    <>
      <div className="w-full pb-[20px] bg-sb-darkblue bg-cover bg-center flex flex-col items-center pt-[100px] lg:pt-[130px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className={`${anton.className} text-5xl p-6`}>
            3DGOLF COACH <span className="text-sb-blue">DIRECTORY.</span>
          </h2>
          <span className="text-xl px-14 lg:w-1/2 text-center">
            If you are a current 3DGolf Coach and you are not yet listed in the
            Directory, please either fill out this form or select ‘Add Entry’
            below and complete the fields. We will approve and add you after we
            review your entry.
          </span>
        </div>
      </div>
      <Separator height={50} />
    </>
  );
};
