import Logo from "../../assets/images/Logo.svg";
import Cross from "../../assets/images/Vector.png";
import Vector from "../../assets/images/Vector.svg";
import ResponsiveArrow from "../../assets/images/responsive-arrow.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Responsive-Navbar

  const [isActiveMobile, setIsActiveMobile] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActiveMobile(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className="grid container mx-auto px-8 sm:px-3 xl:px-[70px] py-6"
      ref={menuRef}
    >
      <div className="flex justify-between md:justify-center gap-0 md:gap-x-14 lg:gap-0 lg:justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="cursor-pointer" />
        </Link>

        {/* Hamburger */}

        <div className="md:hidden grid">
          <button
            className=""
            onClick={(e) => setIsActiveMobile(!isActiveMobile)}
          >
            <img src={ResponsiveArrow} alt="Responsive-Arrow" />
          </button>
        </div>

        {/* Responsive-Navbar */}

        {isActiveMobile && (
          <div className="bg-[#FBFBFB] w-[-webkit-fill-available] top-0 left-0 md:hidden grid mx-auto absolute">
            <div className="justify-end grid">
              <div className="px-4 py-[21.67px]">
                <img
                  src={Cross}
                  alt="Cross"
                  className="cursor-pointer"
                  onClick={(e) => setIsActiveMobile(!isActiveMobile)}
                />
              </div>
            </div>
            <ul className="font-[Avenir-Next-Regular] font-bold text-base text-black text-start">
              <li className="px-6 py-4 border-b-2 border-t-2 border-solid border-black border-opacity-10">
                <Link to="/about">About</Link>
              </li>
              <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                <Link>Blogs</Link>
              </li>
              <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                <Link>Services</Link>
              </li>
              <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden md:flex items-center gap-x-14 lg:gap-x-20">
          <div className="">
            <ul className="gap-x-10 items-center hidden md:flex font-[Avenir-Next-Regular] font-normal">
              <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
                <Link>Blogs</Link>
              </li>
              <li
                className="text-base text-black font-normal leading-6 tracking-[0.32px]"
                onClick={(e) => setIsActive(!isActive)}
              >
                <Link className="flex">
                  Services
                  <img src={Vector} alt="Vector" className="pl-[10px]" />
                </Link>
              </li>
              <div className="md:grid hidden">
                <div className="bg-[#2678F2] text-white px-[30px] py-[10px] rounded-3xl">
                  <Link>Contact Us</Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {isActive && (
        <div className="justify-center hidden md:flex">
          <div
            className="bg-[#EFF5FD] px-4 lg:px-[130px] py-[22px] rounded-full mt-[10px] flex justify-center w-[700px] lg:w-[1000px] xl:w-[1136px]
        absolute top-[4.48rem]"
          >
            <div className="">
              <ul className="font-[Avenir-Next-Regular] flex gap-x-4 lg:gap-x-8 xl:gap-x-[60px] font-bold text-black">
                <li>
                  <Link>
                    <p className="hover:text-[#2678F2]">Web Development</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="hover:text-[#2678F2]">Digital Marketing</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="hover:text-[#2678F2]">Ecommerce</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="hover:text-[#2678F2]">Design and Branding</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="hover:text-[#2678F2]">Others</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
