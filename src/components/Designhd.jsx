const Designhd = ({ stat, titlea, titleb }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] size-32 border-[16px] border-[#0d0d0dda] text-4xl font-bold">
      {stat}
    </div>
    <a className="flex items-center">
      <img
        src="/icons/arrow-small-right.png"
        alt=""
        height="50px"
        width="50px"
      />
      <article className="text-white ">
        <p>{titlea}</p>
        <p>{titleb}</p>
      </article>
    </a>
  </div>
);

export default Designhd;
