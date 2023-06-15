import Navbar from "@/components/Navbar";
import { getFeaturedEvents } from "../dummy-data";
import Eventlist from "@/components/events/event-list";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <>
      <Navbar />
      <Eventlist items={FeaturedEvents} />
    </>
  );
}
