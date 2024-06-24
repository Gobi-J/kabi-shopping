import bg from "../../assets/images/banner/b14.png";
const NewsLetter = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="flex justify-between flex-wrap items-center bg-[#041e42] px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px]"
    >
      <div>
        <h4 className="text-white text-lg font-bold">Signup for Newsletter</h4>
        <p className="text-[#818ea0] text-base">
          Get E-mail updates about our latest products and{" "}
          <span className="text-[#ffbd27]">special offers</span>
        </p>
      </div>
      <div className="flex md:w-2/5">
        <input
          type="email"
          placeholder="Your email address"
          className="h-13 px-4 w-full border text-base rounded-l-md outline-none"
        />
        <button className="normal whitespace-nowrap hover:bg-primary hover:text-white" style={{borderRadius:'0 6px 6px 0'}}>
          Sign up
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
