import mongoose from "mongoose";
const alumnimodel = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  collegename: {
    type: String,
  },
});

const Alumni = mongoose.model("Alumni", alumnimodel);

export default Alumni;
