import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { FcGraduationCap } from "react-icons/fc";
import Navbar from "../components/navbar";
import { Table, LinkContainer, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Followedscreen = (props) => {
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
  const name = JSON.parse(localStorage.getItem("collegename"));
  const id = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/student/getfollowedalumnis/${props.match.params.id}`
      )
      .then((value) => {
        setstate({ loading: false, alumnis: value.data.alumnis });
        console.log("successful");
      })
      .catch((E) => {
        console.log(E);
      });
  }, [alumniinfo.loading]);
  return (
    <div>
      {alumniinfo.loading ? (
        <h2>loading...</h2>
      ) : (
        <div className='collegescreen'>
          <h1 style={{ marginTop: "20px" }}>Alumni List</h1>
          {alumniinfo.alumnis.length == 0 ? (
            <>You haven't followed any Alumni yet!!!</>
          ) : (
            <></>
          )}
          <Table
            striped
            hover
            style={{ marginTop: "50px" }}
            resource
            className='table-sm'
            size='sm'
          >
            <thead>
              <tr>
                <th>key</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {alumniinfo.alumnis.map((a, i) => (
                <tr>
                  <td>{i + 1}.</td>

                  <Link
                    style={{ textDecoration: " none" }}
                    to={`/alumniprofile/${a.id}`}
                  >
                    <td>{a.name}</td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </Table>
          <div
            className='cap'
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "250px",
            }}
          >
            <FcGraduationCap size='100px'></FcGraduationCap>
            {/* <FcGraduationCap size='100px'></FcGraduationCap>
    <FcGraduationCap size='100px'></FcGraduationCap> */}
            <FcGraduationCap
              style={{ marginRight: "20px" }}
              size='100px'
            ></FcGraduationCap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followedscreen;
