import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    {title}
  </li>
);
const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <a href="https://finance-123.com/">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          </a>
          <a href="https://finance-123.com/">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          </a>
          <a href="https://finance-123.com/">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          </a>
          <a href="https://finance-123.com/">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;