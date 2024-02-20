import axios from "axios";

const UsePost = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, headers);

    return response.data;
  } catch (error) {
    return console.error("There was an error:", error);
  }
};

export default UsePost;
