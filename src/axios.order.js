import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-v2-bdaab.firebaseio.com/",
});

export default instance;
