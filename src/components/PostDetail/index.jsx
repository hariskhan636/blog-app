import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import react from "../../assets/react.svg";
import { Link } from "react-router-dom";
const PostDetail = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:5000/api/v1/post/${id}`).then((res) => {
      res.json().then((post) => {
        setPost(post);
      });
    });
  }, []);

  function deleteBlog() {
    fetch(`http://localhost:5000/api/v1/post/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }

  return (
    <div
      className={`w-full min-h-[400px] flex flex-col border-slate-400 border-2 px-10 py-6 justify-between items-center`}
    >
      <h1 className="text-white font-bold text-3xl">{post?.title}</h1>
      {localStorage.getItem("userRole") === "Admin" && (
        <div className="flex gap-4">
          <button className="rounded-md bg-blue-700 text-white border-0 px-4 py-2">
            <Link to={`/edit/${post?._id}`}>Edit</Link>
          </button>
          <button
            onClick={deleteBlog}
            className="rounded-md bg-red-700 text-white border-0 px-4 py-2"
          >
            Delete
          </button>
        </div>
      )}
      {localStorage.getItem("userRole") === "Editor" && (
        <div className="flex gap-4">
          <button className="rounded-md bg-blue-700 text-white border-0 px-4 py-2">
            <Link to={`/edit/${post?._id}`}>Edit</Link>
          </button>
        </div>
      )}
      <img
        src={react}
        alt="blog-img"
        className="w-[250px] border-4 object-contain"
      />
      <p className="text-white self-start">{post?.body}</p>
    </div>
  );
};

export default PostDetail;
