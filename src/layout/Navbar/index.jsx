import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex py-6 justify-between items-center">
      <h2 className=" text-white font-bold">
        <Link to="/">BlogsArena</Link>
      </h2>
      <ul className="list-none flex justify-end items-center flex-1">
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <Link to="/">Home</Link>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <Link to="/login">Login</Link>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
