import { ProductDemo } from "././components/ProductDemo";
import { HoverButton } from "../../components/HoverButton/HoverButton";
import Link from "next/link";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-y-16 px-10 py-20 lg:p-32">
      <ProductDemo />
      <Link href="https://meetings.hubspot.com/edwin-fuh/product-demo">
        <HoverButton
          text="Still have questions? Request a 15-minute product demo"
          color="bg-sb-blue"
          height="h-[60px]"
        />
      </Link>
    </div>
  );
}
