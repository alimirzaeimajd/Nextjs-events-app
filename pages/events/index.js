import React, { Fragment } from "react";
import { getAllEvents } from "@/dummy-data";
import Eventlist from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

const events = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <Eventlist items={events} />
    </Fragment>
  );
};

export default events;
