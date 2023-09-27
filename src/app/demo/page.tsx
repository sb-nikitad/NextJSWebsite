import { ProductDemo } from "././components/ProductDemo";
import { HoverButton } from "../../components/HoverButton";
import { log } from "console";

export default function Demo() {
  return (
    <div className="flex flex-col wrapper p-32">
      <ProductDemo />
      <HoverButton
        text="Still have questions? Request a 15-minute product demo"
        color="sb-blue"
        width="300px"
      />
    </div>
  );
}
