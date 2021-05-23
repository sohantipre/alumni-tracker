import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Collegescreen = (props) => {
  const [alumniinfo, setstate] = useState({
    alumnis: [],
    error: "",
    loading: true,
  });

  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/college/getalumnis", config)
      .then((value) => {
        setstate({ loading: false, alumnis: value.data.alumnis });
        console.log("successful");
      })
      .catch((E) => {
        console.log(E);
      });
  }, [alumniinfo.loading]);
  const name = JSON.parse(localStorage.getItem("name"));
  return (
    <div>
      {alumniinfo.loading ? (
        <h2>loading...</h2>
      ) : (
        <div className='collegescreen'>
          <button
            style={{ height: "50px", background: "gray" }}
            onClick={() => {
              props.history.push(`/allevents/${name}`);
            }}
          >
            All events
          </button>
          {/* <img
            style={{ height: "100px", width: "100px" }}
            src='data:image/jpeg;base64,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'
          ></img> */}
          <h1>**Alumni List** </h1>
          {alumniinfo.alumnis.map((a, i) => (
            <h2>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={`/profile/${a.id}`}
                // onClick={() => {
                //   props.history.push(`/profile/${a.id}`);
                // }}
              >
                {i + 1}. {a.name}
              </a>
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collegescreen;
