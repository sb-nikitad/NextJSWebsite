"use client";

import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    console.log("here");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cfapi.communitybox.co/bootstrap/revision", true);
    xhr.onload = function () {
      console.log("start");
      if (xhr.readyState === 4 && xhr.status === 200) {
        var returnObj = JSON.parse(xhr.responseText);
        if (returnObj.hasOwnProperty("err")) {
          console.error(returnObj.err);
        } else {
          var r = returnObj.revision;
          var l = document.createElement("script");
          l.src =
            "https://dashboard.communitybox.co/embed/" +
            r +
            "/cbebloader-" +
            r +
            ".js";
          document.head.appendChild(l);
          console.log("here", r);
        }
      }
    };
    xhr.send("2480bc81-3988-4aea-ace5-d344b7c6f8fd");
  }, []);

  return (
    <div>
      <div className="h-32 w-full bg-purple-500 mt-[500px]">hello</div>
      <div
        id="communitybox-target"
        // @ts-ignore
        box="ff82a082-d776-4051-98de-a63000311bff"
      ></div>
    </div>
  );
}
