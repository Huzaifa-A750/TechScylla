import HTML from "../../assets/images/HTML.png";
import Javascript from "../../assets/images/Javascript.png";
import React from "../../assets/images/React.png";
import Flutter from "../../assets/images/Flutter.png";
import Bootstrap from "../../assets/images/Bootstrap.png";
import NodeJS from "../../assets/images/NodeJS.png";
import Python from "../../assets/images/Python.png";
import PHP from "../../assets/images/php.svg";
import Wordpress from "../../assets/images/Wordpress.svg";
import Webflow from "../../assets/images/webflow.svg";
import MicrosoftIIS from "../../assets/images/MicrosoftIIS.svg";
import Drupal from "../../assets/images/Drupal.svg";

export default function Partner() {
  return (
    <div className="container mx-auto">
      <div className="grid justify-center pt-[90px]">
        <div className="justify-center text-center pb-9 sm:pb-[78px] gap-y-2 grid px-4">
          <h1 className="text-black w-auto sm:w-[627px] font-[Avenir-Next-Regular] text-[40px] font-semibold leading-[48px] pb-2 px-2 md:px-0 sm:pb-0">
            Your Full-Spectrum Digital Partner
          </h1>
          <p className="text-black w-auto sm:w-[627px] text-base font-[Avenir-Next-Regular] font-normal leading-6 px-12">
            At TechScylla, we offer more than just services; we provide
            partnerships. By hiring a dedicated team from us.
          </p>
        </div>
        <div className="gap-x-[50px] xl:gap-x-[80px] flex-wrap justify-center lg:flex-nowrap text-center grid sm:flex mb-[55px] border-b-[1px] border-solid border-[#54505066] px-4">
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

        {/* Row-1 */}

        <div className="grid justify-center items-center px-8">
          <div className="mb-7 md:mb-[70px] flex-wrap gap-y-7 flex items-center gap-x-12 lg:gap-x-[78px] justify-center relative">
            {/* < className="flex flex-wrap gap-x-14 gap-y-7 lg:gap-x-[78px] justify-center md:mb-0 mb-7 items-center"> */}
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={HTML} alt="HTML" />
                </div>
                <p>HTML5</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Javascript} alt="Javascript" />
                </div>
                <p>Javascript</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={React} alt="React" />
                </div>
                <p>React</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Flutter} alt="Flutter" />
                </div>
                <p>Flutter</p>
              </button>
            
            {/* < className="flex flex-wrap gap-x-14 gap-y-7 lg:gap-x-[78px] justify-center md:mb-0 mb-7 items-center"> */}
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Bootstrap} alt="Bootstrap" />
                </div>
                <p>Bootstrap</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={NodeJS} alt="NodeJS" />
                </div>
                <p>Node.JS</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Python} alt="Python" />
                </div>
                <p>Python</p>
              </button>
            
          </div>

          {/* Row-2 */}

          <div className="justify-center flex-wrap gap-y-7 flex gap-x-12 lg:gap-x-[78px] mb-10 md:mb-[63px] items-center">
            {/* < className="flex flex-wrap gap-x-14 gap-y-7 lg:gap-x-[78px] justify-center md:mb-0 mb-7 items-center"> */}
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={PHP} alt="PHP" />
                </div>
                <p>PHP</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Wordpress} alt="Wordpress" />
                </div>
                <p>Wordpress</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Webflow} alt="Webflow" />
                </div>
                <p>Webflow</p>
              </button>
            
            {/* < className="flex flex-wrap gap-x-14 gap-y-7 lg:gap-x-[78px] justify-center md:mb-0 mb-7 items-center"> */}
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={MicrosoftIIS} alt="MicrosoftIIS" />
                </div>
                <p>Microsoft IIS</p>
              </button>
              <button className="hover:px-12 hover:pt-9 hover:pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] font-[Avenir-Next-Regular]">
                <div className="grid justify-center">
                  <img src={Drupal} alt="Drupal" />
                </div>
                <p>Drupal</p>
              </button>
            
          </div>
          <div className="justify-center grid">
            <button className="py-4 px-8 sm:px-20 md:px-[200px] lg:px-[325px] text-[18px] font-semibold leading-[29px] font-[Avenir-Next-Regular] text-white hover:text-xl bg-[#2678F2] duration-150 rounded-full hover:shadow-lg hover:shadow-blue-700">
              View all Technologies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
