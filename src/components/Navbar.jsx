import { navbarContent } from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="container">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <img src="/icons/menu.svg" alt="menu" className="size-5" />
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbarContent.map((item) => (
                <li key={item.title}>
                  <a href={item.href} className="uppercase">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="flex cursor-pointer space-x-3">
            <img src="/logo/Vector.png" alt="logo" width="50px" height="50px" />
            <img
              src="/logo/Frame.png"
              alt="icon-text"
              width="50px"
              height="50px"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navbarContent.map((item) => (
              <li key={item.title}>
                <a href={item.href} className="uppercase">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <Button title="Contact us" to="#" className="lg:inline-flex hidden" />
          <Button title="Join Hydra" to="#" />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
