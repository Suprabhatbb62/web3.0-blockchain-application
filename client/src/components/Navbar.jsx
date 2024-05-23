import { NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    {title}
  </li>
);
const Navbar = () => {
  return (
    <div className="gradient-bg-navbar">
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <NavLink to="/" className="text-white text-base text-center mx-2 cursor-pointer">Home</NavLink>
          <NavLink to="/market" className="text-white text-base text-center mx-2 cursor-pointer">Market</NavLink>
          <NavLink to="/tuitorial" className="text-white text-base text-center mx-2 cursor-pointer">Tuitorial</NavLink>
          <NavLink to="/about" className="text-white text-base text-center mx-2 cursor-pointer">About</NavLink>
          <NavLink to="/contact" className="text-white text-base text-center mx-2 cursor-pointer">Contact</NavLink>
          <Outlet />
        </div>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;