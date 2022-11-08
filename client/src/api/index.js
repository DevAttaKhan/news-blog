import axiox from "axios";

const baseURL = axiox.create({
  baseURL: "http://localhost:3002/blog/v1/",
});

export default baseURL;
