import React, { useState, useEffect } from "react";
import axios from "axios";

const Profilescreen = (props) => {
  const [alumninfo, setinfo] = useState({
    name: "",
    extrainfo: "",
    email: "",
    college: "",
    loading: true,
  });
  const [events, setevents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/event/${props.match.params.id}`)
      .then((value) => {
        setevents(value.data.event);
      });

    axios
      .get(
        `http://localhost:5000/alumni/alumniprofile/${props.match.params.id}`
      )
      .then((value) => {
        setinfo({
          name: value.data.name,
          email: value.data.email,
          college: value.data.collegename,
          loading: false,
        });
      });
  }, [alumninfo]);

  return (
    <div>
      {alumninfo.loading ? (
        <h2>loading...</h2>
      ) : (
        <div style={{ backgroundColor: "#ebe0e0", bottom: "0px" }}>
          <h1>Profile</h1>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg'></img>
          <h2>Name: {alumninfo.name}</h2>
          <h2>email: {alumninfo.email}</h2>
          <h2>college: {alumninfo.college}</h2>
          <h3 style={{ background: "black", height: "5px" }}></h3>
          <h2>All Events</h2>
          {events.length === 0 ? (
            <>
              <img src='data:image/png;base64,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'></img>
              <h3>no events scheduled as of now....</h3>
            </>
          ) : (
            events.map((e, i) => (
              <div
                style={{
                  background: "gray",
                  marginBottom: "40px",
                  padding: "20px",
                  color: "white",
                  marginLeft: "500px",
                  width: "500px",
                }}
              >
                <h2>Event{i + 1}</h2>
                <h3>Time :{e.time}</h3>
                <h3>Date :{e.date}</h3>
                <h3>Topic :{e.topic}</h3>
                <h3>Link :{e.link}</h3>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Profilescreen;
