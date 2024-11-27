import Button from "../components/Button";
const Introduction = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-evenly items-center pt-40 flex-wrap container">
        <div className="text-white text-4xl">
          <h1 className="font-bold">INTRODUCTION</h1>
          <div className="flex flex-row items-center space-x-5">
            <h1 className="font-light">TO HYDRA VR</h1>
            <img src="/icons/Component 1.png" alt="long-arrow" />
          </div>
        </div>
        <p className="text-white max-w-[560px]">
          itae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly items-center mt-14 container">
        <img
          src="/graphics/introduction.png"
          alt="Introduction"
          className="rounded-[100px] rounded-tl-[250px] rounded-br-[250px] "
        />
        <div className="text-white">
          <h1 className="font-bold text-4xl">ABOUT</h1>
          <h1 className="text-4xl font-light">HYDRA VR</h1>
          <p className="max-w-[600px] my-10 ">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <Button title="BUILD YOUR WORLD" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
