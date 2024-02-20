import { useState } from "react";
import { UsePost } from "../../../hooks";
import { API_URL } from "../../../config";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function register(ev) {
    ev.preventDefault();

    UsePost(API_URL.REGISTER, {
      username,
      password,
      role,
    }).then((response) => {
      if (response.data.msg === "User Created successfully") {
        window.location.href = "login";
      }
    });
  }
  return (
    <form
      onSubmit={register}
      className="flex flex-col gap-6 items-center justify-center border-4 m-auto border-slate-500 h-[500px] w-[50%] rounded-md p-6"
    >
      <h1 className="text-3xl text-white font-bold">Register now!</h1>
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username === "" && (
        <p className="text-red-500 self-start ml-14">Please enter username</p>
      )}
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password === "" && (
        <p className="text-red-500 self-start ml-14">Please enter password</p>
      )}
      <div className="flex flex-row gap-2 items-center justify-center w-[80%]">
        <label className="text-white mr-1">
          <input
            className="mr-1"
            type="radio"
            name="role"
            value="Contributor"
            onChange={(e) => setRole(e.target.value)}
          />
          Contributor
        </label>
        <label className="text-white mr-1">
          <input
            className="mr-1"
            type="radio"
            name="role"
            value="Editor"
            onChange={(e) => setRole(e.target.value)}
          />
          Editor
        </label>
        <label className="text-white mr-1">
          <input
            className="mr-1"
            type="radio"
            name="role"
            value="Admin"
            onChange={(e) => setRole(e.target.value)}
          />
          Admin
        </label>
      </div>
      {role === "" && (
        <p className="text-red-500 self-start ml-14">Please select role</p>
      )}

      <button
        disabled={username === "" || password === "" || role === ""}
        type="submit"
        className={`rounded-md w-[100px] p-2 bg-slate-500 font-bold text-black  ${
          username === "" || password === ""
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        Register
      </button>
    </form>
  );
};

export default Register;
