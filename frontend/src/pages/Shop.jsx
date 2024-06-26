import PgBanner from "../components/Banners/PgBanner"
import bg from '../assets/images/banner/b1.jpg'
import { products } from "../assets/data/products"
import ProductSm from "../components/Product/productSm"
import NewsLetter from "../components/NewsLetter/NewsLetter"
const Shop = () => {
  return (
    <>
        <PgBanner text={'#getSurprised'} description={'Save more with coupons & get up to 70% off!'} image={bg} />
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
          {(products.toReversed()).map((product, index) => (
            <ProductSm key={index} {...product} />
          ))}
        </div>
      </section>
      <div className="text-center">
        <button className="border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">1</button>
        <button className=" border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">2</button>
        <button className=" border border-primary py-2 px-3 bg-primary text-white m-3 rounded-sm font-semibold">+</button>
      </div>
      <NewsLetter />
    </>
  )
}

export default Shop