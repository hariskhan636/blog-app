import "./App.css";
import Navbar from "./layout/Navbar";
import { Hero, Login, Register } from "./components";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-full min-h-screen bg-black">
            <div className="px-16 flex justify-center items-center">
              <div className="w-full">
                <Navbar />
                <Outlet />
              </div>
            </div>
          </div>
        }
      >
        <Route
          index
          element={
            <div className="px-16">
              <Hero />
            </div>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
