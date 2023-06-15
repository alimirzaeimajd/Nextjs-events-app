import React from "react";
import { getAllEvents } from "@/dummy-data";
import Eventlist from "@/components/events/event-list";

const events = () => {
  const events = getAllEvents();

  return <Eventlist items={events} />;
};

export default events;
