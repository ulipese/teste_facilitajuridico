import axios from "axios";

const API_URL = "http://localhost:3000/client";

const callApi = (path, token) => {
  try {
    return axios.create({
      baseURL: `${API_URL}/${path}`,
      headers: {
        "content-type": "application/json",
        "x-access-token": `${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default callApi;
