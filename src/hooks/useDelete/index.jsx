import axios from "axios";

const UseDelete = async (url, data, headers) => {
  try {
    const response = await axios.delete(url, data, headers);
    return response.data;
  } catch (error) {
    return console.error("There was an error:", error);
  }
};

export default UseDelete;
