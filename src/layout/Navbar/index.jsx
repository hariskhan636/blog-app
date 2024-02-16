import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, []);

  async function logout() {
    const response = await axios
      .get("http://localhost:5000/api/v1/user/logout")
      .catch((err) => {
        console.log(err);
      });

    if (response.data.msg === "Logout Successful") {
      localStorage.removeItem("userRole");
      setUserRole(null);
      window.location.href = "/";
    }
  }

  return (
    <nav className="navbar w-full flex py-6 justify-between items-center">
      <h1 className=" text-white font-bold text-3xl">
        <Link to="/">
          Blogs<span className="text-blue-500">Arena</span>
        </Link>
      </h1>
      <ul className="list-none flex justify-end items-center flex-1">
        {userRole === "Contributor" && (
          <>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <Link to={"/add-blog"}>Add Blog</Link>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white">
              <Link onClick={logout} to="/">
                Logout
              </Link>
            </li>
          </>
        )}
        {userRole === "Admin" && (
          <>
            <li className="font-normal cursor-pointer text-[16px] text-white">
              <Link onClick={logout} to="/">
                Logout
              </Link>
            </li>
          </>
        )}
        {userRole === "Editor" && (
          <>
            <li className="font-normal cursor-pointer text-[16px] text-white">
              <Link onClick={logout} to="/">
                Logout
              </Link>
            </li>
          </>
        )}
        {userRole === null && (
          <>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <Link to="/">Home</Link>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <Link to="/login">Login</Link>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
