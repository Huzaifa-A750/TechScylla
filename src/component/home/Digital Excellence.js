import DigitalExcellence from "../../assets/images/Digital-Excellence.svg";

export default function Digital() {
  return (
    <div className="container mx-auto">
      <div className="px-10 pb-8 md:pb-20 sm:pb-[151px] grid lg:flex justify-center md:justify-evenly items-center">
        <div className="justify-center grid">
          <img src={DigitalExcellence} alt="Digital-Excelence" />
        </div>

        {/* Divider */}

        <div class="justify-center lg:flex hidden px-12">
          <div class="h-[664px] w-[1px] bg-black grid items-center">
            <div class="h-[62px] w-[13px] bg-[#2678F2] -ml-[6px]"></div>
          </div>
        </div>

        <div className="w-auto justify-center sm:w-[544px] grid lg:text-start text-center">
          <h2 className="text-[#1B1B1B] text-2xl sm:text-[40px] font-[Avenir-Next-Regular] font-semibold sm:leading-[48px] leading-7 mb-[13px]">
            Digital Excellence for Your Business
          </h2>
          <p className="text-[#1B1B1B] text-base font-[Avenir-Next-Regular] font-normal leading-6">
            TechScylla is where ambition, innovation, and experience converge to
            create impactful digital solutions. As a full-service software
            development firm, we specialize in crafting tools that not only meet
            your immediate needs but also drive your business forward.
            <br />
            <br />
            Our approach combines strategic insight with cutting-edge
            technology, ensuring every solution is a step towards your success.
            With TechScylla, elevate your business in the digital world.
            <div className="pt-8 lg:pt-[54px] grid justify-center">
              <button className="px-8 py-3 sm:px-[60px] sm:py-5 bg-[rgb(38,120,242)] rounded-full text-white tracking-[0.32px] leading-6 font-[Avenir-Next-Regular] text-base font-semibold">
                Read more
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
