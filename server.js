import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import studentroute from "./routes/studentroute.js";
import alumniroute from "./routes/Alumniroute.js";
import collegeroute from "./routes/Collegeroute.js";
import eventroute from "./routes/Eventroute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
connectdb();

app.use(studentroute);
app.use(collegeroute);
app.use(alumniroute);
app.use(eventroute);

app.listen("5000", () => {
  console.log("server is up and running");
});
