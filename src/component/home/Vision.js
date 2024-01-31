import Rocket from "../../assets/images/rocket.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";
import Excellence from "../../assets/images/Excellence.svg";
import Happy from "../../assets/images/happy.svg";
import User from "../../assets/images/user.svg";

export default function Vision() {
  return (
    <div className="bg-[#D0E1FA57]">
      <div className="container px-20 justify-center grid lg:flex items-center py-12">
        <div className="justify-center grid xl:justify-start">
          <div className="w-[280px] sm:w-[512px] text-center xl:text-start">
            <h2 className="text-black font-[Avenir-Next-Regular] text-[32px] font-semibold leading-[41px]">
              Our Vision at TechScylla
            </h2>
            <p className="text-black font-[Avenir-Next-Regular] text-base px-4 pt-4 md:px-0 md:pt-0">
              We strive to empower businesses and startups by harnessing the
              power of technology, delivering digital services that redefine the
              boundaries of creativity and efficiency.{" "}
            </p>
          </div>

          {/* Divider-Start */}

          <div className="justify-center grid md:justify-normal">
            <hr class="my-10 xl:my-11 h-[1px] w-[200px] md:w-full xl:w-[476px] border-t-0 bg-[#54505066]" />
          </div>

          {/* Divider-End */}

          <div className="grid justify-center text-center sm:text-start sm:justify-normal sm:flex gap-x-[60px]">
            <div className="w-[135px] gap-y-[10px] grid">
              <p className="text-4xl text-black leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                200+
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal">
                Experts in Eastern Europe
              </p>
            </div>
            <div className="w-[135px] md:w-[115px] gap-y-[10px] grid">
              <p className="text-4xl text-black leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                10
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal">
                Years operating on the market
              </p>
            </div>
            <div className="w-[135px] md:w-[151px] gap-y-[10px] grid">
              <p className="text-4xl text-black leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                200+
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal">
                Projects successfully completed
              </p>
            </div>
          </div>
        </div>

        {/* Vertical-Divider-Start */}

        <div class="hidden lg:grid">
          <div class="inline-block h-[550px] w-[1px] bg-[#54505066] mx-8 xl:mx-[56px] opacity-40"></div>
        </div>

        {/* col-1 */}

        <div className="grid gap-y-[30px] mt-10 xl:mt-0">
          <div className="border-[4px] w-[280px] sm:w-[450px] md:w-auto lg:w-[420px] xl:w-auto py-2 flex linear-gradient pt-6 border-[#ECF3FD] border-solid rounded-[18px] bg-[#6387A100] shadow-xl px-4">
            <div className="pt-2 sm:items-start grid items-center ">
              <img src={Rocket} alt="" />
            </div>
            <div className="w-[280px] sm:w-[400px] md:w-[420px] mx-6">
              <p className="font-[Avenir-Next-Regular] justify-between text-black font-semibold leading-[50px] text-base tracking-[0.38px]">
                Innovation at the Heart
              </p>
              <p className="text-black font-[Avenir-Next-Regular] text-sm md:text-base font-normal leading-6">
                We believe in constantly challenging the status quo. Our team is
                dedicated to exploring new horizons, thinking outside the box,
                and bringing groundbreaking ideas to life.
              </p>
            </div>
            <div className="grid items-center">
              <img
                src={ArrowDown}
                alt=""
                className="cursor-pointer duration-150 hover:-mt-2"
              />
            </div>
          </div>

          {/* col-2 */}

          <div className="grid w-[200px] sm:w-[560px] md:w-auto lg:w-[420px] xl:w-auto gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={Excellence} alt="Excellence" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-[50px] text-base tracking-[0.38px]">
                  Excellence
                </p>
              </div>
              <div className="">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-[280px] sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div>

          {/* col-3 */}

          <div className="grid w-[200px] sm:w-[560px] md:w-auto lg:w-[420px] xl:w-auto gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={Happy} alt="Happy" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-[50px] text-base tracking-[0.38px]">
                  Collaborative Growth
                </p>
              </div>
              <div className="">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-[280px] sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div>

          {/* col-4 */}

          <div className="grid w-[200px] sm:w-[560px] md:w-auto lg:w-[420px] xl:w-auto gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={User} alt="User" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-[50px] text-base tracking-[0.38px]">
                  Adaptability and Agility
                </p>
              </div>
              <div className="">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-[280px] sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
