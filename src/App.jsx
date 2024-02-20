import "./App.css";
import Navbar from "./layout/Navbar";
import { Hero, AddBlog, AllPosts, PostDetail, EditPost } from "./components";
import { Outlet, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages/public";
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
        {localStorage.getItem("userRole") === null && (
          <Route
            index
            element={
              <div className="px-16 py-8">
                <Hero />
              </div>
            }
          />
        )}

        {localStorage.getItem("userRole") !== null && (
          <Route
            index
            element={
              <div className="px-16 py-8">
                <AllPosts />
              </div>
            }
          />
        )}

        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/add-blog"} element={<AddBlog />} />
        <Route path={"/post/:id"} element={<PostDetail />} />
        <Route path={"/edit/:id"} element={<EditPost />} />
      </Route>
    </Routes>
  );
}

export default App;
