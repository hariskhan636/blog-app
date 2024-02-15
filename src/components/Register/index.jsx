const Register = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-6 items-center justify-center border-4 m-auto border-slate-500 h-[500px] w-[50%] rounded-md p-6"
    >
      <h1 className="text-3xl text-white font-bold">Register now!</h1>
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="text"
        name="username"
        placeholder="Enter username"
      />
      <input
        className="border-2 border-slate-500 w-[80%] p-2"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <div className="flex flex-row gap-2 items-center justify-center w-[80%]">
        <label className="text-white mr-1">
          <input
            className="mr-1"
            type="radio"
            name="role"
            value="Contributor"
          />
          Contributor
        </label>
        <label className="text-white mr-1">
          <input className="mr-1" type="radio" name="role" value="Editor" />
          Editor
        </label>
        <label className="text-white mr-1">
          <input className="mr-1" type="radio" name="role" value="Admin" />
          Admin
        </label>
      </div>

      <button className="rounded-md w-[100px] p-2 bg-slate-500 font-bold text-black">
        Register
      </button>
    </form>
  );
};

export default Register;
