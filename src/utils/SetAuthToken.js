import axios from "axios";

const setAuthToken = (token) => {
  axios.defaults.headers.common["Bearer Token"] = token;
};

export default setAuthToken;
