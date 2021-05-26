import React, { useState, useEffect } from "react";
import axios from "axios";
import { CenterFocusStrong } from "@material-ui/icons";

const Alleventscreen = (props) => {
  const [loading, setloading] = useState(true);
  const [events, setevents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/event/college/${props.match.params.id}`)
      .then((value) => {
        setevents(value.data.event);
        setloading(false);
      });
  }, [events]);

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div style={{ marginTop: "20px" }}>
      {events.length === 0 ? (
        <h3>there are no events yet</h3>
      ) : (
        events.map((e, i) => (
          <div
            style={{
              background: "gray",
              marginBottom: "20px",
              color: "white",
              marginLeft: "500px",
              width: "500px",
            }}
          >
            <h3>Event {i + 1}</h3>
            <h3>{e.topic}</h3>
            <h3>{e.time}</h3>
            <h3>{e.date}</h3>
            <h3>{e.alumniname}</h3>
            <h3>{e.collegename}</h3>
            <h3>{e.link}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Alleventscreen;
