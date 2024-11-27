import Waybulidcard from "../components/Waybuildcard";
import { waybuildContent } from "../constants";

const Waybuild = () => {
  return (
    <section className="container">
      <div className="flex lg:flex-row flex-col justify-evenly items-center pt-40">
        <div className="text-white text-4xl">
          <h1 className="font-bold">WHY BUILD</h1>
          <div className="flex flex-row items-center space-x-5">
            <h1 className="font-light">WITH HYDRA?</h1>
            <img src="/icons/Component 1.png" alt="long-arrow" />
          </div>
        </div>
        <p className="text-white max-w-[560px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="flex md:justify-between justify-center items-center flex-wrap gap-10 mt-14">
        {waybuildContent.map((item) => (
          <Waybulidcard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Waybuild;
