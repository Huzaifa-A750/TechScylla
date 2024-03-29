import UnderLine from "../../assets/images/UnderLine.svg";
import Heroimg from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <div className="pt-2 sm:pt-[149px] sm:pb-10 pb-2 px-5">
      <div className="text-[#1B1B1B] font-[Avenir-Next-Regular] font-semibold grid justify-center text-[28px] sm:text-[45px] leading-[40px] sm:leading-[54px]">
        <h1 className="w-auto md:w-[733px] text-center">
          Navigating the Digital Depths with Innovation and{" "}
          <span className="text-[#2678F2]">
            Expertise
            <div className="w-auto md:w-[680px] grid pt-[1px] justify-center md:justify-end">
              <img src={UnderLine} alt="UnderLine" />
            </div>
          </span>
        </h1>
      </div>
      <div className="grid justify-center pt-[90.95px] pb-10 sm:pb-15">
        <img src={Heroimg} alt="Hero" />
      </div>
    </div>
  );
}
