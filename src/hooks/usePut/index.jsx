import axios from "axios";

const UsePut = async (url, data, headers) => {
  try {
    const response = await axios.put(url, data, headers);
    return response.data;
  } catch (error) {
    return console.error("There was an error:", error);
  }
};

export default UsePut;
