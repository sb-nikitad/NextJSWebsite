import { Separator } from "../../components/Separator";
import { NewsBlock } from "./components/NewsBlock";
import { TitleBlock } from "./components/TitleBlock";

export default function PressReleases() {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <TitleBlock />
      <NewsBlock />
      <Separator height={100} />
    </div>
  );
}
