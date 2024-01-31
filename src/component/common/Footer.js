import Logo from "../../assets/images/Vector 12.svg";

export default function Footer() {
  return (
    <div className="bg-[#2678F2] px-16 py-20">
      <div className="container mx-auto">
        <div className="grid md:flex gap-10 xl:gap-24 pb-3 justify-between">
          {/* Sub-Section-1 */}

          <div className="flex-col xl:flex-row xl:flex">
            <div className="pr-0 justify-center pb-8 sm:pb-16 grid xl:pr-[85px]">
              <img src={Logo} alt="Logo" className="cursor-pointer" />
            </div>
            <div className="grid sm:flex gap-8 lg:gap-6 xl:gap-[51px] text-center lg:text-start font-medium justify-center">
              <div className="-mb-6 xl:mb-6 text-white">
                <p className="text-base font-[Avenir-Next-Regular]  leading-6">
                  Main
                </p>
              </div>
              <ul className="text-white gap-y-[13px] flex flex-row flex-wrap sm:flex-nowrap gap-x-8 justify-center sm:flex-col font-thin w-auto lg:w-[73px]">
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="-mb-6 xl:mb-6 text-white">
                <p className="text-base font-[Avenir-Next-Regular]  leading-6">
                  Services
                </p>
              </div>
              <ul className="text-white gap-y-[13px] flex flex-row flex-wrap sm:flex-nowrap gap-x-8 justify-center sm:flex-col font-thin w-auto lg:w-[120px]">
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Design &#38; building
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Others
                  </a>
                </li>
              </ul>
              <ul className="text-white gap-y-[13px] flex flex-col font-thin">
                <li className="-mb-2 xl:mb-6">
                  <p className="text-base font-[Avenir-Next-Regular] leading-6">
                    Privacy &#38; Terms
                  </p>
                </li>
                <li>
                  <a
                    href="_blank"
                    className="hover:border-b-[1px] border-white"
                  >
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-Section-2 */}

          <div className="grid text-center lg:text-start w-auto md:w-[350px] lg:w-[500px] gap-y-3 lg:gap-y-0 xl:gap-y-6">
            <div className="gap-y-4 grid">
              <p className="text-white text-base font-[Avenir-Next-Regular] font-medium leading-6">
                Lorem Ipsum
              </p>
              <p className="text-white text-base font-[Avenir-Next-Regular] font-medium leading-6 opacity-[0.72]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco
                laboris
              </p>
            </div>
            <div className="gap-y-4 grid">
              <form
                action=""
                className="gap-x-4 items-end grid gap-y-6 lg:flex"
              >
                <input
                  type="text"
                  placeholder="Enter Your Text"
                  className="placeholder:text-white w-auto lg:w-[341px]  bg-inherit text-base text-white font-normal leading-6 font-[Avenir-Next-Regular] p-3 border-b-[1px] border-solid border-white focus:outline-none text-center lg:text-start"
                />
                <button className="bg-white text-black font-[Avenir-Next-Regular] font-medium rounded-full px-6 py-3">
                  Subscribe
                </button>
              </form>
              <p className="text-white text-sm font-[Avenir-Next-Regular] font-medium leading-[21px] opacity-[0.72]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor in
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <hr class="mt-16 mb-8 h-[1px] border-t-0 bg-white" />
          <div className="grid sm:flex gap-y-4 items-center justify-center sm:justify-between">
            <div className="text-center">
              <p className="opacity-[0.72] text-white font-[Avenir-Next-Regular] text-sm font-normal leading-normal sm:leading-[21px]">
                2023 TECHSCYLLA. All right reserved.
              </p>
            </div>
            <div className="flex gap-4 text-white text-2xl justify-center">
              <i className="fa-brands fa-facebook-f rounded-full hover:-mt-3 hover:text-[#316FF6] hover:w-[40px] hover:pl-3 hover:duration-0 hover:bg-white hover:p-2 duration-200"></i>
              <i className="fa-brands fa-instagram rounded-full hover:w-[40px] hover:-mt-3 hover:pl-[9px] hover:text-purple-600 hover:bg-white hover:p-2 duration-200"></i>
              <i className="fa-brands fa-twitter rounded-full hover:w-[40px] hover:-mt-3 hover:text-[#1DA1F2] hover:bg-white hover:p-2 duration-200"></i>
              <i className="fa-brands fa-linkedin rounded-full hover:w-[40px] hover:-mt-3 hover:pl-[9px] hover:text-[#0077b5] hover:bg-white hover:p-2 duration-200"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
