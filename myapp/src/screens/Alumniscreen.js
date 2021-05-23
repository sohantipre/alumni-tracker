import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Alumniscreen = (props) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [event, setevent] = useState({
    alumniname: "",
    collegename: "",
    time: "",
    date: "",
    topic: "",
    link: "",
    id: id,
  });

  const handlecreate = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/event/add", event)
      .then((value) => {
        console.log();
        console.log("added successfully!!");
        alert("added successfully");
        setevent({
          alumniname: "",
          collegename: "",
          time: "",
          date: "",
          topic: "",
          link: "",
          id: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setevent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <button
        onClick={() => {
          props.history.push(`/profile/${id}`);
        }}
        style={{ width: "100vw", height: "50px" }}
      >
        My Profile
      </button>
      <div className='eventform'>
        <h1>Schedule new event</h1>
        <form className='event__form__box' onSubmit={handlecreate}>
          <>
            <label>Name :</label>
            <input
              className='formcomponent'
              type='text'
              name='alumniname'
              value={event.alumniname}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <>
            <label>College :</label>
            <input
              className='formcomponent'
              type='text'
              name='collegename'
              value={event.collegename}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <>
            <label>Time :</label>
            <input
              className='formcomponent'
              type='text'
              name='time'
              value={event.time}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <>
            <label>Date :</label>
            <input
              className='formcomponent'
              type='text'
              name='date'
              value={event.date}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <>
            <label>Topic :</label>
            <input
              className='formcomponent'
              type='text'
              name='topic'
              value={event.topic}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <>
            <label>Link :</label>
            <input
              className='formcomponent'
              type='text'
              name='link'
              value={event.link}
              onChange={handlechange}
            ></input>
          </>
          <br></br>
          <button type='submit'>Create Event</button>
        </form>
      </div>
    </>
  );
};

export default Alumniscreen;
