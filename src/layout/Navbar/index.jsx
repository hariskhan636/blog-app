const Navbar = () => {
  return (
    <nav className="navbar w-full flex py-6 justify-between items-center">
      <h2 className=" text-white font-bold">BlogsArena</h2>
      <ul className="list-none flex justify-end items-center flex-1">
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          Login
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white">
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
