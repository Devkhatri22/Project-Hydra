const AboutusCard = ({ iconSrc, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 py-8 flex flex-row items-center justify-evenly text-white">
    <img src={iconSrc} alt={title} />
    <div className="text-white">
      <h3 className="mb-2 text-center text-xl">{title}</h3>
      <p className="font-semibold text-center text-xs">{description}</p>
    </div>
    {title !== "Send Us a Message" && (
      <div className="divider divider-horizontal divider-primary "></div>
    )}
  </div>
);
export default AboutusCard;
