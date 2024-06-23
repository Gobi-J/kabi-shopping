import Features from "../components/Features/Features";
import ProductSm from "../components/Product/productSm";
import { products } from "../assets/data/products";
import Banner from "../components/Banners/Banner";
import BannerMd from "../components/Banners/BannerMd";

const Home = () => {
  return (
    <>
      <main className="hero-main">
        <h4 className="py-4 font-medium">Trade-in-offer</h4>
        <h2 className="font-semibold">Super Value deals</h2>
        <h1 className="text-primary font-semibold">On all products</h1>
        <p>Save more with coupons</p>
        <button className="hero-btn">Shop Now</button>
      </main>
      <Features />

      <section
        id="featured"
        className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] text-center"
      >
        <h2 className="font-bold">Featured Products</h2>
        <p>Trending Collections - Fast Moving</p>
        <div className="flex justify-between pt-4 flex-wrap">
          {products.map((product, index) => (
            <ProductSm key={index} {...product} />
          ))}
        </div>
      </section>

      <Banner />
      <section
        id="newarrival"
        className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] text-center"
      >
        <h2 className="font-bold">New Arraivals</h2>
        <p>Summer Collections - New Designs</p>
        <div className="flex justify-between pt-4 flex-wrap">
          {products.toReversed().map((product, index) => (
            <ProductSm key={index} {...product} />
          ))}
        </div>
      </section>
      <BannerMd />
    </>
  );
};

export default Home;
