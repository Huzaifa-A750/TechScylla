import Logo from "../../assets/images/Logo.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex container mx-auto justify-between items-center px-8 sm:px-10 lg:px-40 py-6">
      <div className="">
        <img src={Logo} alt="" />
      </div>

      {/* Hamburger */}

      <div className="lg:hidden grid">
        <button className="">
          <img src={Hamburger} alt="Hambuger" />
        </button>
      </div>

      <ul className="gap-x-10 items-center hidden lg:flex font-[Avenir-Next-Regular] font-normal">
        <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          <Link>Services</Link>
        </li>
        <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          <Link>Blogs</Link>
        </li>
        <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          <Link to="/about">About Us</Link>
        </li>
        <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          <Link>FAQ</Link>
        </li>
        <li className="bg-[#2678F2] text-white px-[30px] py-[10px] rounded-3xl">
          <Link>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
