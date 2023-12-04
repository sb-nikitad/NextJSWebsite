"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/mini-logo.png";
import { ArrowRight, Menu } from "react-feather";
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
            onClick: () => redirect("/all-coaches"),
          },
          {
            title: "Official Staff Members",
            onClick: () => redirect("/all-coaches"),
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
            onClick: () => redirect("/"),
          },
          {
            title: "Contact",
            onClick: () => redirect("/"),
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
    <header suppressHydrationWarning>
      <div>
        <nav className="flex absolute top-0 w-full text-white justify-between p-6 bg-sb-darkblue box-border">
          <Link href="/">
            <Image src={logo} alt="Logo" width={25} height={25} />
          </Link>

          <Menu onClick={() => setShowMenu((prev) => !prev)} />
        </nav>
      </div>
      {showMenu ? (
        <div className=" inset-0 bg-sb-darkblue z-50 flex justify-center items-center w-screen h-screen flex-col text-[32px] box-border">
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
  );
};
