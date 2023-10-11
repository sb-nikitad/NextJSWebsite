import { FoundingTeam } from "./components/FoundingTeam";
import { Advisors } from "./components/Advisors";
import { GolfAdvisors } from "./components/GolfAdvisors";

export default function MeetTeam() {
  return (
    <div className="flex flex-col items-center gap-y-24 p-8">
      <FoundingTeam />
      <Advisors />
      <GolfAdvisors />
    </div>
  );
}
