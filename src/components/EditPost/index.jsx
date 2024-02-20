import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { UseGet, UsePut } from "../../hooks";
const EditPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      UseGet(`http://localhost:5000/api/v1/post/${id}`).then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
        setImage(response.data.image);
      });
    }
    getPost();
  }, []);

  async function editPost(ev) {
    ev.preventDefault();

    UsePut(`http://localhost:5000/api/v1/post/${id}`, {
      title,
      body,
      image,
    }).then((response) => {
      if (response.data.msg === "Blog Updated Successfully") {
        alert("Blog Updated Successfully");
        window.location.href = "/";
      }
    });
  }

  return (
    <form
      onSubmit={editPost}
      className="flex flex-col gap-6 items-center justify-center border-4 m-auto border-slate-500 min-h-[500px] w-[50%] rounded-md p-6"
    >
      <h1 className="text-3xl text-white font-bold">Edit Blog</h1>
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
        Update
      </button>
    </form>
  );
};

export default EditPost;
