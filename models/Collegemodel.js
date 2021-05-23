import mongoose from "mongoose";
const alumnischema = mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
});

const collegemodel = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  alumnis: [alumnischema],
});

const College = mongoose.model("College", collegemodel);

export default College;
