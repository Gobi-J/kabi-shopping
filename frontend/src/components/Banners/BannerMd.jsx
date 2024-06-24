import bg1 from "../../assets/images/banner/b17.jpg";
import bg2 from "../../assets/images/banner/b10.jpg";
import bg3 from "../../assets/images/banner/b7.jpg";
import bg4 from "../../assets/images/banner/b4.jpg";
import bg5 from "../../assets/images/banner/b18.jpg";

const BannerMd = () => {
  const style1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexGrow:1,
    minWidth: "50%",
    height: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px",
  };

  return (
    <>
      <section className="flex justify-between flex-wrap px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px]">
        <div style={{...style1, backgroundImage:`url(${bg1})`}}>
          <h4 className="text-white font-semibold">Crazy Deals</h4>
          <h2 className="text-white py-3">Buy 1 Get 1 free</h2>
          <span className="text-white font-semibold pb-4">The best classic dress is on sale</span>
          <button className="white hover:bg-primary hover:border-primary">Learn More</button>
        </div>
        <div style={{...style1, backgroundImage:`url(${bg2})`}}>
          <h4 className="text-white font-semibold">Spring/Summer</h4>
          <h2 className="text-white py-3">Upcoming Season</h2>
          <span className="text-white font-semibold pb-4">The best classic dress is on sale</span>
          <button className="white hover:bg-primary hover:border-primary">Collection</button>
        </div>
      </section>

      <section className="flex justify-between flex-wrap px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px]">
        <div style={{...style1, minWidth:"30%", height:"30vh", padding:"20px", marginBottom:"20px", backgroundImage:`url(${bg3})`}}>
          <h2 className="text-xl text-white font-bold">SEASONAL SALE</h2>
          <h3 className="text-red-800 font-semibold text-base">Winter Collection - 50% OFF</h3>
        </div>
        <div style={{...style1, minWidth:"30%", height:"30vh", padding:"20px", marginBottom:"20px",backgroundImage:`url(${bg4})`}}>
          <h2 className="text-xl text-white font-bold">NEW FOOTWEAR COLLECTION</h2>
          <h3 className="text-red-800 font-semibold text-base">Trendy Shoes</h3>
        </div>
        <div style={{...style1, minWidth:"30%", height:"30vh", padding:"20px", marginBottom:"20px",backgroundImage:`url(${bg5})`}}>
          <h2 className="text-xl text-white font-bold">T-SHIRTS</h2>
          <h3 className="text-red-800 font-semibold text-base">New Trendy Prints</h3>
        </div>
      </section>
    </>
  );
};

export default BannerMd;
