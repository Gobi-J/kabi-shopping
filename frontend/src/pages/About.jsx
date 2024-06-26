import PgBanner from "../components/Banners/PgBanner"
import bg from '../assets/images/about/banner.png'
import Features from "../components/Features/Features"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import vid from '../assets/images/about/1.mp4'
import img from '../assets/images/about/a6.jpg'
const About = () => {
  return (
    <>
    <PgBanner text={'#knowAboutUs'} description={'Save more with coupons & get up to 70% off!'} image={bg} />

    <section className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] text-center flex items-center">
        <img src={img} alt="" className="w-1/2 h-auto rounded-lg" />
        <div className="pl-10">
            <h2>Who we are?</h2>
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, culpa. Fugiat voluptatem
                cupiditate quasi, dicta, quidem eligendi quia nemo earum, provident debitis cum deleniti magnam saepe
                perferendis optio? Excepturi, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                delectus iusto officiis vel mollitia deserunt, explicabo, est praesentium, rerum minus enim quis autem!
                Hic totam reiciendis in natus architecto perferendis.</p>
            <abbr title="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque excepturi odio quidem delectus molestias aut autem consectetur quo ut reiciendis tenetur sapiente, officia, repellat praesentium sit? Quaerat quas enim repellat.</abbr>
            <br /><br />
            <marquee width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa saepe accusantium repudiandae molestiae et amet omnis molestias corrupti nulla odio ullam non quia error perferendis pariatur, officiis assumenda! Ut!</marquee>
        </div>
    </section>

    <section className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] text-center">
        <h1 className="font-bold">Download Our App</h1>
        <div className="w-[60%] h-full mx-auto mt-7">
            <video src={vid} className="w-full h-full rounded-lg" autoPlay muted loop></video>
        </div>
    </section>
    <Features />
    <NewsLetter />
    </>
  )
}

export default About