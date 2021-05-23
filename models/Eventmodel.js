import mongoose from "mongoose";
const eventmodel = mongoose.Schema({
  collegename: {
    type: String,
  },
  alumniname: {
    type: String,
  },
  id: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  topic: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventmodel);

export default Event;
