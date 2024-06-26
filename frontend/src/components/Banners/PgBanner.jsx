/* eslint-disable react/prop-types */
const PgBanner = ({ text, description, image }) => {
  return (
    <section className="w-full h-[40vh] bg-cover p-4 flex flex-col text-center justify-center" style={{backgroundImage:`url(${image})`}}>
      <h2 className="text-white font-semibold">{text}</h2>
      <p className="text-white">{description}</p>
    </section>
  );
};

export default PgBanner;
