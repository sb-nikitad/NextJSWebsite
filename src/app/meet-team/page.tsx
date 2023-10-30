import { FoundingTeam } from "./components/FoundingTeam";
import { Advisors } from "./components/Advisors";
import { GolfAdvisors } from "./components/GolfAdvisors";
import { SportsScienceAdvisors } from "./components/SportsScienceAdvisors";

export default function MeetTeam() {
  return (
    <div className="flex flex-col items-center gap-y-24 p-8">
      <FoundingTeam />
      <Advisors />
      <GolfAdvisors />
      <SportsScienceAdvisors />
    </div>
  );
}
