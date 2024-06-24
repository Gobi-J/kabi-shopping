import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/products",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="h-[100px] flex justify-between items-center bg-grey px-10 py-2">
      <img src={logo} alt="" className="w-[90px] md:w-[160px]" />
      <nav className="w-1/2">
        <ul className="md:flex justify-evenly flex-col md:flex-row h-[80vh] mt-[600%] md:h-auto md:mt-auto">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary text-lg font-semibold"
                    : "text-black  text-lg font-semibold"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        to="login"
        className="font-semibold text-xl border border-primary px-4 py-2 rounded-3xl"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
