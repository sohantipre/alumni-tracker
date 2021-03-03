import mongoose from "mongoose";
const studentmodel = mongoose.Schema({
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

const Student = mongoose.model("Student", studentmodel);

export default Student;
