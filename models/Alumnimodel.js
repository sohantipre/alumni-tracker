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
  followinglist: [
    {
      id: {
        type: String,
      },
    },
  ],
  followerlist: [
    {
      id: {
        type: String,
      },
    },
  ],
  extrainfo: {
    company: {
      type: String,
    },
    age: {
      type: String,
    },
    post: {
      type: String,
    },
  },
});

const Alumni = mongoose.model("Alumni", alumnimodel);

export default Alumni;
