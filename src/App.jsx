import "./App.css";
import Navbar from "./layout/Navbar";
import { Hero } from "./components";

function App() {
  return (
    <div className="w-full bg-black">
      <div className="px-16 flex justify-center items-center">
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <div className="px-16">
        <Hero />
      </div>
    </div>
  );
}

export default App;
