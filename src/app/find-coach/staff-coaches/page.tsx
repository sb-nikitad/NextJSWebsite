import Script from "next/script";
import { Separator } from "../../../components/Separator";
import { FindCoachThumbnail } from "../components/FindCoachThumbnail";
import Link from "next/link";

export default function AllCoachesPage() {
  return (
    <div className="bg-white">
      <Script id="my-script">
        {`
         ( function() { xhr = new XMLHttpRequest(); xhr.open( "POST", "https://cfapi.communitybox.co/bootstrap/revision", true ); xhr.onload = function() { if (xhr.readyState === 4 && xhr.status === 200) { var returnObj = JSON.parse(xhr.responseText); if( returnObj.hasOwnProperty("err") ) { console.error(returnObj.err); } else { var r = returnObj.revision; var l = document.createElement("script"); l.src = "https://dashboard.communitybox.co/embed/"+r+"/cbebloader-"+r+".js"; document.head.appendChild( l ); }; }; }; xhr.send( "2480bc81-3988-4aea-ace5-d344b7c6f8fd" ); })(); 
        `}
      </Script>

      <FindCoachThumbnail />

      <div className="flex justify-center gap-10 mx-[50px] lg:mx-[20px]">
        <Link href="/find-coach/staff-coaches">
          <div className="bg-black text-white text-lg p-2 cursor-pointer">
            Official Staff Members
          </div>
        </Link>
        <Link href="/find-coach/all-coaches">
          <div className="bg-gray-400 text-lg p-2 cursor-pointer">
            All 3D Golf Coaches
          </div>
        </Link>
      </div>

      <div
        className="lg:px-[300px] pt-[50px]"
        id="communitybox-target"
        // @ts-ignore
        box="1d9fb0ee-e394-4668-9f31-bd12e01de4f1"
      />
      <Separator height={100} />
    </div>
  );
}
