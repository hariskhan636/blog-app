import axios from "axios";
import { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  async function addPost(ev) {
    ev.preventDefault();
    const response = await axios
      .post("http://localhost:5000/api/v1/post/add-post", {
        title,
        body,
        image,
      })
      .catch((err) => {
        console.log(err);
      });

    if (response.data.msg === "Blog Added Successfully") {
      alert("Blog Added Successfully");
      window.location.href = "/";
    }
  }

  return (
    <form
      onSubmit={addPost}
      className="flex flex-col gap-6 items-center justify-center border-4 m-auto border-slate-500 min-h-[500px] w-[50%] rounded-md p-6"
    >
      <h1 className="text-3xl text-white font-bold">Add Blog</h1>
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        className="border-2 border-slate-500 w-[80%] p-2"
        type="text"
        name="description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter description"
      />
      <input
        className="border-2 border-slate-500 w-[80%] p-2 text-white"
        type="file"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* <ReactQuill className="bg-white w-[80%]" /> */}
      <button
        className={`rounded-md w-[100px] p-2 bg-slate-500 font-bold text-black  ${
          body === "" || title === "" ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddBlog;
