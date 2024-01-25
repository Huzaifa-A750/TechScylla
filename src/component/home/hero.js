import UnderLine from "../../assets/images/UnderLine.svg";
import Heroimg from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <div className="py-20 px-10">
      <div className="text-[#1B1B1B] font-[Avenir-Next-Regular] font-semibold grid justify-center text-[45px] leading-[54px]">
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
      <div className="grid justify-center py-20">
        <img src={Heroimg} alt="Hero" />
      </div>
    </div>
  );
}
