import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsePost } from "../../../hooks";
import { API_URL } from "../../../config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();

    UsePost(API_URL.LOGIN, {
      username,
      password,
    }).then((response) => {
      if (response.msg === "Login Confirmed") {
        alert("Login Successful");
        localStorage.setItem("userRole", response.userRole);
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    });
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
