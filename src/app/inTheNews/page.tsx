import { NewsBlock } from "./components/newsBlock";
import { TitleBlock } from "./components/TitleBlock";

export default function InTheNews() {
  return (
    <div className="flex flex-col items-center">
      <TitleBlock></TitleBlock>
      <NewsBlock></NewsBlock>
    </div>
  );
}
