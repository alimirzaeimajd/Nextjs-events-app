import React from "react";
import styles from "./event-list.module.css";
import EventItem from "./event-item";

const Eventlist = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default Eventlist;
