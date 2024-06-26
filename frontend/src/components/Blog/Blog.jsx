import { blogs } from "../../assets/data/blogs";

const Blog = () => {
  return (
    <section className="p-12 pb-0">
      {blogs.map((blog, index) => (
        <div key={index} className={`flex items-center w-full relative pb-20 gap-5 ${index%2==1 ? 'flex-row-reverse' : ''}`}>
          <div className="w-1/2">
            <img src={blog.image} alt="" className="w-full h-[300px] object-cover" />
          </div>
          <div className="w-1/2">
            <h4>{blog.heading}</h4>
            <p>{blog.content}</p>
            <a href="#" className="text-primary relative after:h-[2px] after:w-0 after:bg-primary after:absolute after:top-1/2 after:-right-10 hover:after:w-7 after:transition-all font-semibold">Continue Reading</a>
          </div>
          <h1 className={`absolute top-[-40px] text-6xl font-bold text-gray-500 -z-10 ${index%2==1 ? 'right-0' : 'left-0'}`}>{blog.date}</h1>
        </div>
      ))}
    </section>
  );
};

export default Blog;
