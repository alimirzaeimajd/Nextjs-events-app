import { Fragment } from "react";
import { getAllEvents } from "@/dummy-data";
import Eventlist from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

function events() {
  const events = getAllEvents();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <Eventlist items={events} />
    </Fragment>
  );
}

export default events;
