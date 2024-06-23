import b2 from "../../assets/images/banner/b2.jpg";

const Banner = () => {
  const styles = {
    backgroundImage: `url(${b2})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="banner" style={styles} className="my-[40px]">
      <h4 className="text-white text-lg font-bold">Repair Service</h4>
      <h2 className="text-white py-5 text-xl font-semibold">
        Up to <span className="text-primary">70% Off</span> - All Tshirt & Accessories
      </h2>
      <button className="normal hover:text-white hover:bg-primary">Explore More</button>
    </section>
  );
};

export default Banner;
