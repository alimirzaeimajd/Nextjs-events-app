import Nav from "@/components/nav";
import { getFeaturedEvents } from "../dummy-data";
import Eventlist from "@/components/events/event-list";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <>
      <Nav />
      <Eventlist items={FeaturedEvents} />
    </>
  );
}
