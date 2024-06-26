import PgBanner from "../components/Banners/PgBanner";
import bg from "../assets/images/banner/b2.jpg";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import {
  FaClock,
  FaEnvelope,
  FaMap,
  FaPhoneAlt,
} from "react-icons/fa";
import p1 from "../assets/images/people/1.png";
import p2 from "../assets/images/people/2.png";
import p3 from "../assets/images/people/3.png";

const people = [
  {
    name: "Gobi J",
    position: "Senior Developer",
    phone: "9876543210",
    email: "dev.head@kabi.com",
    image: p1,
  },
  {
    name: "Priyanka R",
    position: "Marketing Head",
    phone: "9876543210",
    email: "market.head@kabi.com",
    image:p3
  },
  {
    name: "Vijay C",
    position: "Sales Head",
    phone: "9876543210",
    email: "sales.head@kabi.com",
    image:p2
  },
];
const Contact = () => {
  return (
    <>
      <PgBanner
        text={"#lets_talk"}
        description={"We love to hear from you!! Just leave a message"}
        image={bg}
      />

      <section className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] flex items-center justify-between">
        <div className="w-2/5">
          <span className="text-base font-bold">GET IN TOUCH</span>
          <h2 className="py-5 text-xl">
            Visit our agency locations or contact us today
          </h2>
          <h3 className="pb-4 text-base font-semibold">Head Office</h3>
          <ul className="text-left">
            <li>
              <p className="flex gap-3 items-center">
                <FaMap className="text-primary" /> 123, Kiot Road, Salem -
                637504
              </p>
            </li>
            <li>
              <p className="flex gap-3 items-center">
                <FaEnvelope className="text-primary" />
                gobij2003@gmail.com
              </p>
            </li>
            <li>
              <p className="flex gap-3 items-center">
                <FaPhoneAlt className="text-primary" />
                6383576055
              </p>
            </li>
            <li>
              <p className="flex gap-3 items-center">
                <FaClock className="text-primary" />
                Mon - Sat: 9:00am to 10:00pm
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[55%] h-[250px] md:h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2043.1429770677203!2d78.0059226953411!3d11.553260728074955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzE1LjkiTiA3OMKwMDAnMjUuNiJF!5e0!3m2!1sen!2sin!4v1688368604395!5m2!1sen!2sin"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      <section className="flex justify-between items-center m-10 p-10 border border-[#e1e1e1]">
        <form action="" className="w-3/5 flex flex-col items-start">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-3 px-4 outline-none mb-5 border border-[#e1e1e1]"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full py-3 px-4 outline-none mb-5 border border-[#e1e1e1]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full py-3 px-4 outline-none mb-5 border border-[#e1e1e1]"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full py-3 px-4 outline-none mb-5 border border-[#e1e1e1]"
          ></textarea>
          <button
            className="normal"
            style={{ backgroundColor: "#088178", color: "#fff" }}
          >
            Submit
          </button>
        </form>

        <div>
          {people.map((person, index) => (
            <div key={index} className="pb-6 flex items-start">
              <img
                src={person.image}
                alt=""
                className="size-12 object-cover mr-4"
              />
              <p className="m-0 text-sm">
                <span className="block text-base font-semibold text-black">
                  {person.name}
                </span>{" "}
                {person.position} <br /> Phone: {person.phone} <br /> Email:{" "}
                {person.email}
              </p>
            </div>
          ))}
        </div>
      </section>

      <NewsLetter />
    </>
  );
};

export default Contact;
