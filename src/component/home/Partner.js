import HTML from "../../assets/images/HTML.png";
import Javascript from "../../assets/images/Javascript.png";
import React from "../../assets/images/React.png";
import Flutter from "../../assets/images/Flutter.png";
import Bootstrap from "../../assets/images/Bootstrap.png";
import NodeJS from "../../assets/images/NodeJS.png";
import Python from "../../assets/images/Python.png";

export default function Partner() {
  return (
    <div className="container mx-auto">
      <div className="grid justify-center pt-[90px]">
        <div className="justify-center text-center pb-[78px] gap-y-2 grid">
          <h1 className="w-[627px] text-black font-[Avenir-Next-Regular] text-[40px] font-semibold leading-[48px]">
            Your Full-Spectrum Digital Partner
          </h1>
          <p className="w-[627px] text-black text-base font-[Avenir-Next-Regular] font-normal leading-6 px-12">
            At TechScylla, we offer more than just services; we provide
            partnerships. By hiring a dedicated team from us.
          </p>
        </div>
        <div className="gap-x-[80px] flex mb-[55px] border-b-[1px] border-solid border-[#54505066]">
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              Web Development
            </button>
          </div>
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              Digital Marketing
            </button>
          </div>
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              Ecommerce
            </button>
          </div>
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              Design and Branding
            </button>
          </div>
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              SEO
            </button>
          </div>
          <div>
            <button className="hover:px-[40px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium font-[Avenir-Next-Regular] leading-8 tracking=[0.36px] hover:text-[white] hover:mb-2 hover:bg-[#2678F2] duration-200">
              Others
            </button>
          </div>
        </div>
        <div className="grid justify-center">
          <div className="mb-[50px] gap-x-[78px] flex">
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={HTML} alt="HTML" />
              </div>
              <p className="">HTML5</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={Javascript} alt="Javascript" />
              </div>
              <p className="">Javascript</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={React} alt="React" />
              </div>
              <p className="">React</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={Flutter} alt="Flutter" />
              </div>
              <p className="">Flutter</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={Bootstrap} alt="Bootstrap" />
              </div>
              <p className="">Bootstrap</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={NodeJS} alt="NodeJS" />
              </div>
              <p className="">Node.JS</p>
            </button>
            <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
              <div className="grid justify-center">
                <img src={Python} alt="Python" />
              </div>
              <p className="">Python</p>
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
