import Logo from "../../assets/images/Vector 12.svg";

export default function Footer() {
  return (
    <div className="bg-[#2678F2] px-6 sm:px-16 py-20">
      <div className="container mx-auto">
        <div className="grid md:flex gap-10 xl:gap-24 pb-3 justify-between ">
          {/* Sub-Section-1 */}

          <div className="justify-between md:grid flex px-2 sm:px-0">
            <div className="pr-0 justify-center pb-8 sm:pb-16 hidden md:grid md:pr-10 xl:pr-[134px]">
              <img src={Logo} alt="Logo" className="cursor-pointer" />
            </div>
            <div className="grid md:flex gap-8 lg:gap-6 xl:gap-[51px] text-start font-medium justify-start md:justify-center">
              <ul className="text-white gap-y-[13px] md:gap-0 flex flex-col font-thin w-auto">
                <li className="mb-2 xl:mb-6">
                  <p className="text-base font-[Avenir-Next-Regular] leading-6">
                    Main
                  </p>
                </li>
                <div className="gap-y-3 grid tracking-[0.6px]">
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Contact Us
                    </a>
                  </li>
                </div>
              </ul>
              <ul className="text-white gap-y-[13px] mt-5 md:mt-0 md:gap-0 flex flex-col font-thin w-auto">
                <li className="mb-2 xl:mb-6">
                  <p className="text-base font-[Avenir-Next-Regular]  leading-6">
                    Services
                  </p>
                </li>
                <div className="gap-y-3 grid tracking-[0.6px]">
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Ecommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Design &#38; building
                    </a>
                  </li>
                  <li>
                    <a
                      href="_blank"
                      className="hover:border-b-[1px] border-white opacity-[0.72]"
                    >
                      Others
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="pr-0 justify-center md:hidden items-end pb-12 sm:pb-16 grid md:pr-10 xl:pr-[134px]">
              <img src={Logo} alt="Logo" className="cursor-pointer" />
            </div>
          </div>

          {/* Sub-Section-2 */}

          <div className="grid justify-center text-start w-auto sm:w-[500px] gap-y-3 lg:gap-y-0 xl:gap-y-6">
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
                className="gap-x-4 items-end justify-evenly flex mt-6"
              >
                <input
                  type="text"
                  placeholder="Enter Your Text"
                  className="placeholder:text-white placeholder:opacity-[0.72] w-full sm:w-[341px] bg-inherit text-base text-white font-normal leading-6 font-[Avenir-Next-Regular] px-0 py-3 md:p-3 border-b-[1px] border-solid border-white focus:outline-none md:text-center text-start lg:text-start"
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
          <div className="grid sm:flex gap-y-4 items-center justify-start sm:justify-between">
            <div className="text-center">
              <p className="opacity-[0.72] text-white pb-16 sm:pb-0 font-[Avenir-Next-Regular] text-sm font-normal leading-normal sm:leading-[21px]">
                2023 TECHSCYLLA. All right reserved.
              </p>
            </div>
            <div className="hidden sm:flex gap-4 text-white text-2xl justify-center">
              <i className="fa-brands fa-facebook-f rounded-full cursor-pointer duration-200"></i>
              <i className="fa-brands fa-instagram rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-twitter rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-linkedin rounded-full cursor-pointer"></i>
            </div>
          </div>
          <div className="flex sm:hidden gap-4 text-white text-2xl justify-center">
              <i className="fa-brands fa-facebook-f rounded-full cursor-pointer duration-200"></i>
              <i className="fa-brands fa-instagram rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-twitter rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-linkedin rounded-full cursor-pointer"></i>
            </div>
        </div>
      </div>
    </div>
  );
}
