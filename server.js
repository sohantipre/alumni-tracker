import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import studentroute from "./routes/studentroute.js";
import alumniroute from "./routes/Alumniroute.js";
import collegeroute from "./routes/Collegeroute.js";

const app = express();
app.use(express.json());

connectdb();

app.use(studentroute);
app.use(collegeroute);
app.use(alumniroute);

app.listen("5000", () => {
  console.log("server is up and running");
});
