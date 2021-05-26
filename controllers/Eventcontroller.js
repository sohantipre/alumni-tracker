import asynchandler from "express-async-handler";

import Event from "../models/Eventmodel.js";

export const addevent = asynchandler(async (req, res) => {
  const { collegename, alumniname, id, time, date, link, topic } = req.body;

  const event = await Event.create({
    collegename,
    alumniname,
    id,
    time,
    date,
    link,
    topic,
  });

  if (event) {
    res.json({ event });
  }
});

export const getevent = asynchandler(async (req, res) => {
  const event = await Event.find({ id: req.params.id });

  if (event) {
    res.json({
      event,
    });
  }
});

export const geteventbycollege = asynchandler(async (req, res) => {
  const event = await Event.find({ collegename: req.params.id });

  if (event) {
    res.json({
      event,
    });
  }
});

export const getfollowedalumnis = asynchandler(async (req, res) => {
  const id = req.params.id;
  const alumnis = await Alumni.find({});

  let al = [];
  alumnis.map((a) => {
    if (a.followinglist.includes(id)) {
      al.push(a._id);
    }
  });

  al.map();

  res.json({ alumnis: al });
});
