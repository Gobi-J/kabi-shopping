import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../components/Product/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
