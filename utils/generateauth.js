import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateauth = (id) => {
  return jwt.sign({ id }, "ABCD");
};

export default generateauth;
