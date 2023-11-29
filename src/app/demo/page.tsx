import { ProductDemo } from "././components/ProductDemo";
import { HoverButton } from "../../components/HoverButton/HoverButton";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-y-16 px-10 py-20 lg:p-32">
      <ProductDemo />
      <HoverButton
        text="Still have questions? Request a 15-minute product demo"
        color="bg-sb-blue"
        height="h-[60px]"
      />
    </div>
  );
}
