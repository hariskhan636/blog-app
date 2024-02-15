import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          username,
          password,
        }
      );

      console.log(response.data.userRole);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <form
      onSubmit={login}
      className="flex flex-col gap-6 items-center justify-center border-4 m-auto border-slate-500 h-[500px] w-[50%] rounded-md p-6"
    >
      <h1 className="text-3xl text-white font-bold">Login to start blogin!</h1>
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username === "" && <p className="text-red-500">Please enter username</p>}
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password === "" && <p className="text-red-500">Please enter password</p>}
      <button
        disabled={username === "" || password === ""}
        type="submit"
        className={`rounded-md w-[100px] p-2 bg-slate-500 font-bold text-black  ${
          username === "" || password === ""
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
