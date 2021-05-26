import React, { useState, useEffect } from "react";
import axios from "axios";

const Studentprofilescreen = (props) => {
  const [collegeinfo, setinfo] = useState({
    name: "",
    alumnis: [],
    email: "",

    loading: true,
  });

  const id = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/event/${props.match.params.id}`)
    //   .then((value) => {
    //     setevents(value.data.event);
    //   });

    axios
      .get(
        `http://localhost:5000/college/collegeprofile/${props.match.params.id}`
      )
      .then((value) => {
        setinfo({
          name: value.data.name,
          email: value.data.email,
          alumnis: value.data.alumnis,
          loading: false,
        });

        // console.log("includes", value.data.followerlist.includes(id));
      });
  }, [collegeinfo.name]);

  const info = {
    id,
  };

  return (
    <div>
      {collegeinfo.loading ? (
        <h2>loading...</h2>
      ) : (
        <div style={{ backgroundColor: "#ebe0e0", bottom: "0px" }}>
          <h1>Profile</h1>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg'></img>
          <h2>Name: {collegeinfo.name}</h2>
          <h2>email: {collegeinfo.email}</h2>
          <h2>Alumnis registered: {collegeinfo.alumnis.length}</h2>

          <h3 style={{ background: "black", height: "5px" }}></h3>
        </div>
      )}
    </div>
  );
};

export default Studentprofilescreen;
