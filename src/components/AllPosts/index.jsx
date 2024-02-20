import { useEffect, useState } from "react";
import react from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { UseGet } from "../../hooks";
import { API_URL } from "../../config";
const AllPosts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    UseGet(API_URL.POST).then((res) => setPost(res));
  }, []);

  return (
    <>
      {post.map((post, index) => {
        return (
          <>
            <div
              className={`w-full h-[400px] flex border-slate-400 border-2 px-10 py-6 justify-between items-center  ${
                index !== post.length - 1 ? "mb-6" : "mb-0"
              }`}
              key={index}
            >
              <img
                src={react}
                alt="blog-img"
                className="w-[30%]  object-contain"
              />
              <div className="w-[60%]">
                <Link to={`/post/${post._id}`}>
                  <h1 className="text-white font-bold text-3xl">
                    {post.title}
                  </h1>
                </Link>

                <p className="text-white">{post.body}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AllPosts;
