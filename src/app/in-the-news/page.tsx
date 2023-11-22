import { NewsBlock } from "./components/NewsBlock";
import { TitleBlock } from "./components/TitleBlock";

export default function InTheNews() {
  return (
    <div className="flex flex-col items-center">
      <TitleBlock />
      <NewsBlock />
    </div>
  );
}
