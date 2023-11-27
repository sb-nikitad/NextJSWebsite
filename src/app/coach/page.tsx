import { HoverButton } from "../../components/HoverButton/HoverButton";
import clsx from "clsx";
import { CoachThumbnail } from "./components/CoachThumbnail";
import { CoachVideoFlow } from "./components/CoachVideoFlow";
import { CoachStarted } from "./components/CoachStarted";

export default function HomePage() {
  return (
    <div className="">
      <CoachThumbnail />
      <CoachVideoFlow />
      <CoachStarted />
    </div>
  );
}
