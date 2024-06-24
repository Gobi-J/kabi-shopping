import app from "../../assets/images/pay/app.jpg";
import play from "../../assets/images/pay/play.jpg";
import pay from "../../assets/images/pay/pay.png";
import logo from '../../assets/images/logo.png'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] flex flex-wrap justify-between">
      <div className="col">
        <img className="logo" src={logo} alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>123, Kiot road, Salem
        </p>
        <p>
          <strong>Phone: </strong>6383576055
        </p>
        <p>
          <strong>Hours: </strong>10:00 - 10:10, Mon- Sat
        </p>
        <div className="follow">
          <h4>Follow US</h4>
          <div className="icon">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track my order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Playstore</p>
        <div className="row">
          <img src={app} alt="" />
          <img src={play} alt="" />
        </div>
        <p>Secured Payment Gateway</p>
        <img src={pay} alt="" />
      </div>

      <div className="copy">
        <p>&copy;Made by Gobi</p>
      </div>
    </footer>
  );
};

export default Footer;
