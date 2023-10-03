import { ProductDemo } from "././components/ProductDemo";
import { HoverButton } from "../../components/HoverButton";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-y-16 wrapper p-32">
      <ProductDemo />
      <HoverButton
        text="Still have questions? Request a 15-minute product demo"
        color="bg-sb-blue"
        width="500px"
        height="60px"
      />
    </div>
  );
}
