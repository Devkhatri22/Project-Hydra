import { techimgContent } from "../constants";
const Technonogies = () => {
  return (
    <section className="container">
      <div className="flex justify-center items-center my-20">
        <div className="text-white bg-bgimage text-4xl text-center bg-no-repeat rounded-full h-[303px] w-[1276px] relative">
          <h1 className="font-bold pt-28">TECHNOLOGIES & HARDWARE</h1>
          <p className="font-light">USED BY HYDRA VR.</p>
          <button className="btn btn-circle btn-lg bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] absolute -bottom-8 -ms-6 border-8 border-[#0e0e0ee7] max-xl:hidden">
            <img src="/icons/chevron-small-down.png" alt="small-down" />
          </button>
        </div>
      </div>
      <div className="flex mt-16 md:justify-between justify-center md:gap-x-0 gap-x-4 items-center flex-wrap">
        {techimgContent.map((item) => (
          <img
            className="max-h-[150px] max-w-[150px] object-contain"
            height={150}
            width={150}
            key={item.alt}
            src={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Technonogies;
