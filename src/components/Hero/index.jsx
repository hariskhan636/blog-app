import { blogs } from "../../constants";
const Hero = () => {
  return (
    <section id="home">
      {blogs.map((blog, index) => (
        <div
          className={`w-full h-[400px] flex border-slate-400 border-2 px-10 py-6 justify-between items-center gap-5 ${
            index !== blogs.length - 1 ? "mb-6" : "mb-0"
          }`}
          key={blog.id}
        >
          <img
            src={blog.img}
            alt="blog-img"
            className="w-[400px] h-[300px] object-contain"
          />
          <div>
            <h1 className="text-white font-bold text-3xl">{blog.title}</h1>
            <p className="text-white">{blog.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
