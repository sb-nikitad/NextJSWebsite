import { HoverButton } from "../../components/HoverButton/HoverButton";
import clsx from "clsx";
import { StudentThumbnail } from "./components/StudentThumbnail";
import { CoachVideoFlow } from "./components/CoachVideoFlow";
import { CoachStarted } from "./components/CoachStarted";

export default function HomePage() {
  return (
    <div className="">
      <StudentThumbnail />
      <CoachVideoFlow />
      <CoachStarted />
    </div>
  );
}
