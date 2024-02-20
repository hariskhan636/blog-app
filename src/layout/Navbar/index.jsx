import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseGet } from "../../hooks";
import { API_URL } from "../../config";

const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, []);

  async function logout() {
    UseGet(API_URL.LOGOUT).then((response) => {
      if (response.data.msg === "Logout Successful") {
        localStorage.clear();
        setUserRole(null);
        navigate("/");
      }
    });
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
