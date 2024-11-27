import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="container py-12">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="max-w-[490px] ">
          <h1 className="text-white text-[40px] font-bold leading-normal">
            <span className="text-gradient">Dive&nbsp;</span>
            Into The Depths Of&nbsp;
            <span className="text-gradient">Virtual Reality</span>
          </h1>
          <p className="mt-5 text-white max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className="flex items-center mt-10">
            <Button title="BUILD YOUR WORLD" />
            <a href="#">
              <img src="/icons/arrow-small-right.png" alt="Arrow-btn" />
            </a>
          </div>
        </div>
        <img
          src="/graphics/hero.png"
          alt="VR Set"
          className="rounded-[100px] rounded-bl-[250px] shadow-2xl object-contain max-h-[426px] max-w-[490px]"
          height="426"
          width="490"
        />
      </div>
    </div>
  );
};
export default Hero;
