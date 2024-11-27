import AboutusCard from "../components/AboutusCard";
import { aboutusContent } from "../constants";

const Aboutus = () => {
  return (
    <div className="p-4 md:p-6 container">
      <div className="border bg-purpleBgGradient border-gray-200 rounded-full md:flex hidden flex-wrap justify-center">
        {aboutusContent.map((item) => (
          <AboutusCard key={item.title} {...item} />
        ))}
      </div>
      <div className="carousel md:hidden rounded-box mx-auto">
        {aboutusContent.map((item) => (
          <div
            className="carousel-item flex-col justify-center items-center gap-6 w-full"
            key={item.title}
          >
            <img
              src={item.iconSrc}
              className="object-contain"
              alt="Tailwind CSS Carousel component"
            />
            <div className="text-white">
              <h3 className="mb-2 text-center text-xl">{item.title}</h3>
              <p className="font-semibold text-center text-xs">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
