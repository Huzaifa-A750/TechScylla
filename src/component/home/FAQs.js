import dropdownarrow from "../../assets/images/Icon.svg";

export default function FAQs() {
  return (
    <div className="container mx-auto mt-[220px] pb-[65px]">
      <div className="text-black gap-x-10 xl:gap-x-20 justify-center grid text-center lg:text-start lg:flex px-8">
        <div className="font-semibold w-auto md:w-[500px] mb-7 lg:mb-0">
          <div className="gap-y-6 grid text-[45px] font-[Avenir-Next-Bold]">
            <h1 className="leading-[54px]">FAQs</h1>
            <p className="text-[18px] font-normal font-[Avenir-Next-Regular] leading-[27px]">
              Your Gateway to a Wide Spectrum of Customized Digital Solutions.
            </p>
          </div>
        </div>

        {/* Dropdown */}

        <div className="w-auto md:w-[549px] grid font-[Avenir-Next-Regular] font-normal">
          <div className="text-[18px] grid items-center">
            {/* first-Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />

            {/* Text and image  */}

            <div className="py-3 sm:py-5 grid sm:flex justify-center sm:justify-between cursor-pointer gap-0 sm:gap-3">
              <div className="">
                <p className="leading-[27px]">
                  What digital services does TechScylla offer?
                </p>
              </div>
              <div className="justify-center grid pt-0 sm:pt-2">
                <img src={dropdownarrow} alt="dropdownarrow" />
              </div>
            </div>

            {/* second-Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />

            {/* Text and image  */}

            <div className="py-3 sm:py-5 grid sm:flex justify-center sm:justify-between cursor-pointer gap-0 sm:gap-3">
              <div className="">
                <p className="leading-[27px]">
                  How does the project development process work at TechScylla?
                </p>
              </div>
              <div className="justify-center grid pt-0 sm:pt-2">
                <img src={dropdownarrow} alt="dropdownarrow" />
              </div>
            </div>

            {/* third-Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />

            {/* Text and image  */}

            <div className="py-3 sm:py-5 grid sm:flex justify-center sm:justify-between cursor-pointer gap-0 sm:gap-3">
              <div className="">
                <p className="leading-[27px]">
                  Can TechScylla provide solutions for startups and small
                  businesses?
                </p>
              </div>
              <div className="justify-center grid pt-0 sm:pt-2">
                <img src={dropdownarrow} alt="dropdownarrow" />
              </div>
            </div>

            {/* fourth-Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />

            {/* Text and image  */}

            <div className="py-3 sm:py-5 grid sm:flex justify-center sm:justify-between cursor-pointer gap-0 sm:gap-3">
              <div className="">
                <p className="leading-[27px]">
                  What is the typical timeframe for a project?
                </p>
              </div>
              <div className="justify-center grid pt-0 sm:pt-2">
                <img src={dropdownarrow} alt="dropdownarrow" />
              </div>
            </div>

            {/* fifth-Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />

            {/* Text and image  */}

            <div className="py-3 sm:py-5 grid sm:flex justify-center sm:justify-between cursor-pointer gap-0 sm:gap-3">
              <div className="">
                <p className="leading-[27px]">
                  How does TechScylla ensure the security of its digital
                  solutions?
                </p>
              </div>
              <div className="justify-center grid pt-0 sm:pt-2">
                <img src={dropdownarrow} alt="dropdownarrow" />
              </div>
            </div>

            {/* Divider */}

            <hr class="h-[1px] border-t-0 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
