import PgBanner from "../components/Banners/PgBanner"
import bg from '../assets/images/banner/b19.jpg'
import Blog from "../components/Blog/Blog"
import NewsLetter from "../components/NewsLetter/NewsLetter"
const Blogs = () => {
  return (
    <>
        <PgBanner text={'#readMore'} description={'Read all case studies!'} image={bg} />
        <Blog />
        <div className="text-center">
        <button className="border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">1</button>
        <button className=" border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">2</button>
        <button className=" border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">+</button>
      </div>
      <NewsLetter />
    </>
  )
}

export default Blogs