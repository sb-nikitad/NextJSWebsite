import { HoverButton } from "../../components/HoverButton/HoverButton";

export const MainCoachPlayerRedirect = () => {
  return (
    <div className="px-10 lg:px[100pxg] 2xl:px-[250px] flex justify-between py-[100px] flex-wrap">
      <div className="bg-[url('/images/main/for-players.jpeg')] bg-cover bg-center w-full lg:w-1/2 lg:h-[600px] p-[150px] flex items-end justify-center">
        <HoverButton
          color="bg-sb-blue"
          text="For Players"
          width="w-fit"
          link="/student"
        />
      </div>

      <div className="bg-[url('/images/main/for-coaches.jpeg')] bg-cover bg-center w-full lg:w-1/2 lg:h-[600px] p-[150px] flex items-end justify-center">
        <HoverButton
          color="bg-sb-blue"
          text="For Coaches"
          width="w-fit"
          link="/coach"
        />
      </div>
    </div>
  );
};
