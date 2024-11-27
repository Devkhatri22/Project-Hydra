import { footerContent } from "../constants";

const Footer = () => {
  return (
    <footer className="container footer text-white p-10">
      <div>
        <img src="/logo/Vector.png" alt="logo" />
      </div>
      {footerContent.map((item) => (
        <div className="flex " key={item.id}>
          <div className="divider divider-horizontal  w-1 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#3a3456] via-[#8176AF] from-[#C0B7E8]"></div>
          <nav className="flex flex-col space-y-3">
            {item.links.map((subItem) => (
              <a className="link link-hover" key={subItem} href={`#${subItem}`}>
                {subItem}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
