import { featureData } from "../../assets/data/feature";

const Features = () => {
  return (
    <section className="flex justify-evenly gap-3 my-4 flex-wrap">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className="w-[180px] text-center py-6 px-4 border border-[#cce7d0] rounded-md my-4 shadow-md hover:shadow-lg"
        >
          <img src={feature.image} alt={feature.name} className="mb-3" />
          <h6 className={`inline-block rounded-sm text-primary px-2 py-2 font-bold`} style={{backgroundColor:feature.color}}>
            {feature.name}
          </h6>
        </div>
      ))}
    </section>
  );
};

export default Features;
