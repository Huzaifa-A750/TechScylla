import UnderLine from "../../assets/images/UnderLine.svg";
import Union from "../../assets/images/Union.svg";
import Radar from "../../assets/images/Radar.png";
import Cube from "../../assets/images/Cube.png";
import HalfCube from "../../assets/images/Half-Cube.svg";
import Maps from "../../assets/images/Maps.png";
import Facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Youtube from "../../assets/images/Youtube.svg";

export default function Engineering() {
  return (
    <div className="container mx-auto mt-10 md:mt-0 grid xl:flex justify-center lg:pb-32 pb-10">
      <div className="px-8 md:px-4 xl:px-16">
        <div className="justify-center grid xl:justify-start">
        <div className="w-auto sm:w-[448px]">
          <h2 className="text-[#1B1B1B] text-center sm:text-start text-2xl sm:text-[40px] font-[Avenir-Next-Regular] font-semibold leading-7 sm:leading-[48px] mb-0.5">
            Engineering Digital Excellence in Four Steps
          </h2>
          <div className="justify-center sm:justify-end grid sm:w-[480px]">
            <img src={UnderLine} alt="UnderLine" />
          </div>
        </div>
        </div>

        {/* Services */}

        <div className="mt-10 md:mt-20">
          {/* Row-1 */}

          <div className="grid justify-center md:justify-normal md:flex gap-x-16 mb-10 md:mb-[113px]">
            <div className="text-center md:text-start">
              <div className="grid justify-center md:justify-start">
                <img src={HalfCube} alt="HalfCube" className="mb-[14.85px]" />
              </div>

              <h3 className="text-2xl tracking-[0.48px] leading-[50px] font-[Avenir-Next-Regular] font-semibold text-black mb-[8px]">
                Discovery & Consultation
              </h3>
              <p className="sm:w-[312px] text-black text-base font-[Avenir-Next-Regular] font-normal leading-6">
                <span className="italic">“Understanding Your Vision”</span>
                <br />
                Our journey begins with understanding your business, goals, and
                challenges. This phase involves discussions, requirement
                gathering, and setting clear objectives for your project.
              </p>
            </div>
            <div className="mt-10 md:mt-0 text-center md:text-start">
              <div className="grid justify-center md:justify-start">
                <img src={Cube} alt="Cube" className="mb-[22px]" />
              </div>

              <h3 className="text-2xl tracking-[0.48px] leading-[50px] font-[Avenir-Next-Regular] font-semibold text-black mb-[8px]">
                Strategy & Planning
              </h3>
              <p className="sm:w-[282px] text-black text-base font-[Avenir-Next-Regular] font-normal leading-6">
                <span className="italic">“Crafting a Tailored Approach”</span>
                <br />
                With the insights from the discovery phase, we develop a
                strategic plan. This includes outlining the project scope,
                timelines, and choosing the right technologies to meet your
                specific needs.
              </p>
            </div>
          </div>

          {/* Row-2 */}

          <div className="grid justify-center md:justify-normal md:flex gap-x-16">
            <div className="text-center md:text-start">
              <div className="grid justify-center md:justify-start">
                {" "}
                <img src={Union} alt="Union" className="mb-[22px]" />
              </div>

              <h3 className="text-2xl tracking-[0.48px] leading-[50px] font-[Avenir-Next-Regular] font-semibold text-black mb-[18px]">
                Execution & Development
              </h3>
              <p className="sm:w-[320px] text-black text-base font-[Avenir-Next-Regular] font-normal leading-6">
                <span className="italic">“Bringing Ideas to Life”.</span>
                <br />
                Our skilled team gets to work, turning the strategy into
                reality. Whether it's building a website, developing an app, or
                implementing a digital solution, we ensure high-quality
                execution with regular progress updates.
              </p>
            </div>

            <div className="mt-10 md:mt-0 text-center md:text-start">
              <div className="grid justify-center md:justify-start">
                <img src={Radar} alt="Radar" className="mb-[22px]" />
              </div>

              <h3 className="text-2xl tracking-[0.48px] leading-[50px] font-[Avenir-Next-Regular] font-semibold text-black mt-[4px] mb-[18px]">
                Testing & Deployment
              </h3>
              <p className="sm:w-[284px] text-black text-base font-[Avenir-Next-Regular] font-normal leading-6">
                <span className="italic">“Understanding Your Vision”</span>
                <br />
                Our journey begins with understanding your business, goals, and
                challenges. This phase involves discussions, requirement
                gathering, and setting clear objectives for your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us Form */}

      <div className="grid items-center justify-center mt-12 xl:mt-0">
        <div className="bg-[#303030] pb-[70px] rounded-[30px] px-6 pt-[41px] grid justify-center min-h-[280px] w-auto sm:w-[500px] md:w-[700px] xl:w-[390px] text-center">
          <h3 className="text-white text-[40px] font-medium font-[Avenir-Next-Regular] leading-normal">
            Contact <span className="text-[#2678F2]">us</span>
          </h3>
          <p className="text-base text-white leading-normal font-[Avenir-Next-Regular] font-normal">
            Let's get in touch!
          </p>
          <div className="mt-5">
            <form className="gap-y-5 grid max-w-[500px] xl:max-w-0">
              {/* Email */}
              <label className="hidden focus:grid text-xs text-white justify-start">
                Email
              </label>
              <input
                type="text"
                placeholder="Email*"
                className="font-[Poppins] font-light bg-inherit border-b-[1px] border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none focus:border-b-[1px] focus:border-solid"
              />
              {/* Name */}
              <label className="hidden focus:grid text-xs text-white justify-start">
                Name
              </label>
              <input
                type="text"
                placeholder="Name*"
                className="font-[Poppins] font-light bg-inherit border-b-[1px] h-11 border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none"
              />
              {/* Phone-Number */}
              <label className="hidden focus:grid text-xs text-white justify-start">
                Name
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="font-[Poppins] font-light bg-inherit border-b-[1px] h-11 border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none"
              />
              {/* Text-Area */}
              <textarea
                name="Content"
                placeholder="Message*"
                cols="30"
                className="font-[Poppins] mt-[10px] font-light bg-inherit border-b-[1px] border-solid sm:w-[340px] placeholder:text-white px-2 text-white h-[140px] resize-none focus:outline-none"
              ></textarea>
              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox-secondary accent-white bg-[#303030] focus:outline-none h-4 w-4 mr-2"
                />
                <label
                  for="checkbox"
                  className="text-xs font-[Avenir-Next-Regular] font-normal leading-normal text-white"
                >
                  I would like to receive the newsletter.
                </label>
              </div>
            </form>
          </div>
          <button className="mt-[37px] mb-[33px] text-[18px] font-medium leading-normal font-[Avenir-Next-Regular] text-white bg-[#2678F2] duration-150 rounded-md h-[37px]">
            Submit
          </button>
          <div className="relative mb-[34px]">
            <img src={Maps} alt="Maps" className="forms3" />
            <div className="text-start absolute top-[9px] right-[9px] mb-[34px] bg-white w-[113px] h-[63px] font-[Poppins] rounded-[10px] px-[6px] py-[5px] gap-y-[2px]">
              <p className="text-[#DE6E4B] text-xs leading-normal font-semibold">
                Company name
              </p>
              <p className="text-black text-[11px] leading-normal font-normal">
                315 W 36th St.
              </p>
              <p className="text-black text-[11px] leading-normal font-normal">
                NY 10018
              </p>
            </div>
          </div>
          <div className="flex gap-x-[15px] justify-center ">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:-mt-1 duration-150"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="hover:-mt-1 duration-150"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:-mt-1 duration-150"><img src={Facebook} alt="Facebook" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:-mt-1 duration-150"><img src={Youtube} alt="Youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
