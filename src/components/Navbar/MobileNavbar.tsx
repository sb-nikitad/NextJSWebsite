"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/mini-logo.png";
import { ArrowRight, Menu, X } from "react-feather";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Tab = ({
  title,
  hasSubContent = false,
  onClick,
  isCurrent,
}: {
  title: string;
  hasSubContent?: boolean;
  onClick: () => void;
  isCurrent: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-1 items-center ${isCurrent && "underline"}`}
    >
      <div>{title}</div>
      {hasSubContent ? <ArrowRight /> : <></>}
    </div>
  );
};

export const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSubTabs, setSelectedSubTabs] = useState<null | string>(null);
  const [showBanner, setShowBanner] = useState(true);
  const router = useRouter();

  const redirect = (url: string) => {
    setShowMenu(false);
    setSelectedSubTabs(null);
    router.push(url);
  };

  const mainTabs = [
    {
      title: "About",
      hasSubContent: true,
      onClick: () => setSelectedSubTabs("about"),
    },
    {
      title: "Education",
      onClick: () => redirect("/education"),
    },
    {
      title: "Pricing",
      onClick: () => redirect("https://3dgolf.sportsbox.ai/sign-up"),
    },
    {
      title: "Find a Coach",
      hasSubContent: true,
      onClick: () => setSelectedSubTabs("find-coach"),
    },
    {
      title: "Pro Shop",
      onClick: () => redirect("https://shop.sportsbox.ai/"),
    },
    {
      title: "Support",
      hasSubContent: true,
      onClick: () => setSelectedSubTabs("support"),
    },
    {
      title: "More",
      hasSubContent: true,
      onClick: () => setSelectedSubTabs("more"),
    },
  ];

  const subTabs = (type: string) => {
    switch (type) {
      case "about":
        return [
          {
            title: "Company Info",
            onClick: () => redirect("/about"),
          },
          {
            title: "Product Demo",
            onClick: () => redirect("/demo"),
          },
          {
            title: "Meet the Team",
            onClick: () => redirect("/meet-team"),
          },
          {
            title: "Ambassadors",
            onClick: () => redirect("/ambassadors"),
          },
          {
            title: "In the News",
            onClick: () => redirect("/in-the-news"),
          },
          {
            title: "Press Releases",
            onClick: () => redirect("/about"),
          },
        ];

      case "find-coach":
        return [
          {
            title: "All 3DGolf Coaches",
            onClick: () => redirect("/find-coach/all-coaches"),
          },
          {
            title: "Official Staff Members",
            onClick: () => redirect("/find-coach/staff-coaches"),
          },
        ];
      case "support":
        return [
          {
            title: "Help Center",
            onClick: () => redirect("https://help.sportsbox.ai/"),
          },
          {
            title: "Webinar Series",
            onClick: () => redirect("https://app.hubspot.com"),
          },
          {
            title: "Learning",
            onClick: () => redirect("/learning"),
          },
          {
            title: "Contact",
            onClick: () => redirect("/contact"),
          },
        ];

      case "more":
        return [
          {
            title: "For Coaches",
            onClick: () => redirect("/coach"),
          },
          {
            title: "For Players",
            onClick: () => redirect("/student"),
          },
          {
            title: "Login",
            onClick: () => redirect("https://3dgolf.sportsbox.ai/sign-in"),
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div>
      {showBanner ? (
        <div className="flex justify-between items-center w-full bg-sb-blue px-10 py-3 relative z-20">
          <div></div>
          <Link
            href={
              "https://sportsbox-21571110.hs-sites.com/3dstudio?__hstc=120525143.4fef867f6150e3eb0c496cca45a2185a.1703079104662.1703079104662.1703079104662.1&__hssc=120525143.1.1703079104662&__hsfp=467677067"
            }
          >
            <div>SPORTSBOX STUDIO IS HERE! CLICK HERE TO BOOK A DEMO</div>
          </Link>
          <X className="cursor-pointer" onClick={() => setShowBanner(false)} />
        </div>
      ) : (
        <></>
      )}

      <header suppressHydrationWarning>
        <div>
          <nav
            className={`flex absolute top-0 w-full text-white justify-between p-6 bg-sb-darkblue box-border ${
              showBanner ? "mt-16" : ""
            }`}
          >
            <Link href="/">
              <Image src={logo} alt="Logo" width={25} height={25} />
            </Link>

            <Menu onClick={() => setShowMenu((prev) => !prev)} />
          </nav>
        </div>
        {showMenu ? (
          <div className=" inset-0 bg-sb-darkblue z-50 flex justify-center items-center w-full h-screen flex-col text-[32px] box-border">
            {selectedSubTabs ? (
              <>
                <Tab
                  hasSubContent={false}
                  isCurrent={false}
                  onClick={() => setSelectedSubTabs(null)}
                  title="Back"
                />
                {subTabs(selectedSubTabs).map((el) => {
                  return <Tab key={el.title} {...el} isCurrent={false} />;
                })}
              </>
            ) : (
              mainTabs.map((el) => {
                return <Tab key={el.title} {...el} isCurrent={false} />;
              })
            )}
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
};
