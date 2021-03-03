import mongoose from "mongoose";
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
  students: [
    {
      name: {
        type: String,
      },
      id: {
        type: String,
      },
    },
  ],
});

const college = mongoose.model("College", collegemodel);

export default college;
