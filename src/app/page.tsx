import { Experience } from '../components/experience/Experience';
import { Landing } from "@/components/Landing";

export default function Home() {

  return (
    <div className="relative z-50 overflow-y-auto">
      <Landing />
      {/* Experiencia*/}
      <div className="w-full">
        <Experience />
      </div>
    </div>
  );
}
