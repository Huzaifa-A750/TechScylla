import Logo from "../../assets/images/Logo.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import About from "../../about.js";

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


      <div className="gap-x-10 hidden lg:flex font-[Avenir-Next-Regular] font-normal">
        <button className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          Services
        </button>
        <button className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          Blogs
        </button>
        <button className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          <a href={About}>About Us</a>
          <a href={About}>About</a>
        </button>
        <button className="text-base text-black font-normal leading-6 tracking-[0.32px]">
          FAQ
        </button>
        <button className="bg-[#2678F2] hover:shadow-lg hover:shadow-blue-700 text-white px-[30px] py-[10px] rounded-3xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}
