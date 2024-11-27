const Button = ({ to, title, className }) => (
  <a
    href={to}
    className={`btn rounded-full bg-transparent text-white border-white hover:bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:text-[#343045] ${className}`}
  >
    {title}
  </a>
);
export default Button;
