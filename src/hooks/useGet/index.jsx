import axios from "axios";

const UseGet = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return console.error("There was an error:", error);
  }
};

export default UseGet;
