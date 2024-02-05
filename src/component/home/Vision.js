import Rocket from "../../assets/images/rocket.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";
import Excellence from "../../assets/images/Excellence.svg";
import Happy from "../../assets/images/happy.svg";
import User from "../../assets/images/user.svg";
import { useState } from "react";
// import { useState } from "react";

export default function Vision() {
  const dropdowndata = [
    {
      image: <img src={Rocket} alt="Rocket" />,
      title: "Innovation at the Heart",
      content:
        "We believe in constantly challenging the status quo. Our team is dedicated to exploring new horizons, thinking outside the box, and bringing groundbreaking ideas to life.",
    },
    {
      image: <img src={Excellence} alt="Excellence" />,
      title: "Excellence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      image: <img src={Happy} alt="Happy" />,
      title: "Collaborative Growth",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      image: <img src={User} alt="User" />,
      title: "Adaptability and Agility",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
  ];

  const [selected, setSelected] = useState(false);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(false);
    }

    setSelected(i);
  };

  return (
    <div className="bg-[#D0E1FA] flex justify-center bg-opacity-[34%]">
      <div className="container px-8 sm:px-20 justify-center grid lg:flex items-center py-12">
        <div className="justify-center grid xl:justify-start">
          <div className="w-auto sm:w-[512px] text-center xl:text-start">
            <h2 className="text-black font-[Avenir-Next-Regular] text-2xl sm:text-[32px] font-semibold leading-[41.6px] pb-1">
              Our Vision at TechScylla
            </h2>
            <p className="text-black leading-6 font-[Avenir-Next-Regular] text-base px-4 pt-4 md:px-0 md:pt-0">
              We strive to empower businesses and startups by harnessing the
              power of technology, delivering digital services that redefine the
              boundaries of creativity and efficiency.{" "}
            </p>
          </div>

          {/* Divider-Start */}

          <div className="justify-center grid md:justify-normal">
            <hr class="my-10 xl:my-11 h-[1px] w-auto md:w-full xl:w-[476px] border-t-0 bg-[#54505066]" />
          </div>

          {/* Divider-End */}

          <div className="grid justify-center text-center sm:text-start sm:justify-normal sm:flex gap-x-[40px]">
            <div className="w-[159px] gap-y-[10px] grid">
              <p className="text-4xl text-[#302C33] leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                2x
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal">
                <strong>Lower</strong> cost compared to in-house rates
              </p>
            </div>
            <div className="w-[126px] gap-y-[10px] grid">
              <p className="text-4xl text-[#302C33] leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                30+
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal -mt-6">
                <strong>Industries</strong> served
              </p>
            </div>
            <div className="w-[152px] gap-y-[10px] grid">
              <p className="text-4xl text-[#302C33] leading-[50px] font-bold font-[Avenir-Next-bold] tracking-[0.72px]">
                400+
              </p>
              <p className="text-black font-[Avenir-Next-Regular] leading-6 font-normal">
                <strong>Projects</strong> successfully completed
              </p>
            </div>
          </div>
        </div>

        {/* Vertical-Divider-Start */}

        <div class="hidden lg:grid">
          <div class="inline-block h-[620px] w-[1px] bg-[#54505066] mx-8 xl:mx-[56px] opacity-40"></div>
        </div>

        {/* col-1 */}

        <div className="grid gap-y-2">
          {dropdowndata.map((items, index) => (
            <div className="">
              <div
                key={index} //
                className={`flex border-[4px] w-auto sm:w-auto lg:w-[594px] xl:w-auto py-5 linear-gradient border-[#ECF3FD] border-solid rounded-[18px] bg-[#F4F4F4] shadow-xl px-4 cursor-pointer ${
                  selected === index
                    ? "bg-[#ECF3FD] transition-all duration-100 ease-in-out"
                    : "shadow-none bg-inherit border-none rounded-none" // Apply a different background color when selected
                }`}
              >
                <div className="pt-2 sm:items-start grid">{items.image}</div>
                <div className="grid w-auto sm:w-[400px] md:w-[420px] mx-6">
                  <div
                    className="font-[Avenir-Next-Regular] justify-between text-black font-semibold leading-7 sm:leading-[50px] text-base tracking-[0.38px]"
                    onClick={() => toggle(index)}
                  >
                    {items.title}
                  </div>
                  {selected === index && (
                    <div className="text-black font-[Avenir-Next-Regular] text-sm md:text-base hidden sm:grid font-normal leading-6">
                      {items.content}
                    </div>
                  )}
                </div>
                <div
                  className={`items-center grid ${
                    selected === index ? "" : "items-center"
                  }`}
                >
                  <img
                    src={ArrowDown}
                    alt="ArrowDown"
                    className={`hover:-mt-1 duration-100 ${
                      selected === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div className={` ${selected === index ? "hidden" : "grid"}`}>
                <hr class="h-[1px] w-auto sm:w-[532px] md:w-auto lg:w-[420px] xl:w-[466px] border-t-0 bg-[#54505066]" />
              </div>
            </div>
          ))}

          {/* <div className="border-[4px] justify-between w-auto sm:w-auto lg:w-[594px] py-2 flex linear-gradient pt-6 border-[#ECF3FD] border-solid rounded-[18px] bg-[#6387A1] shadow-xl px-4">
            <div className="pt-2 sm:items-start grid items-center ">
              <img src={Rocket} alt="" />
            </div>
            <div className="w-auto sm:w-[400px] md:w-[420px] mx-6">
              <p className="font-[Avenir-Next-Regular] justify-between text-black font-semibold leading-7 sm:leading-[50px] text-base tracking-[0.38px]">
                Innovation at the Heart
              </p>
              <p className="text-black font-[Avenir-Next-Regular] text-sm md:text-base hidden sm:grid font-normal leading-6">
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
          </div> */}

          {/* col-2 */}

          {/* <div className="grid w-auto sm:w-[560px] gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={Excellence} alt="Excellence" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-[50px] text-base tracking-[0.38px]">
                  Excellence
                </p>
              </div>
              <div className="grid items-center -mr-6">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-auto sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div> */}

          {/* col-3 */}

          {/* <div className="grid w-auto sm:w-[560px] gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={Happy} alt="Happy" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-5 sm:leading-[50px] text-base tracking-[0.38px]">
                  Collaborative Growth
                </p>
              </div>
              <div className="grid items-center -mr-6">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-auto sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div> */}

          {/* col-4 */}

          {/* <div className="grid w-auto sm:w-[560px] gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 sm:gap-x-6">
                <img src={User} alt="User" />
                <p className="font-[Avenir-Next-Regular] text-black font-semibold leading-5 sm:leading-[50px] text-base tracking-[0.38px]">
                  Adaptability and Agility
                </p>
              </div>
              <div className="grid items-center -mr-6">
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="cursor-pointer duration-150 hover:-mt-2"
                />
              </div>
            </div>
            <div className="">
              <hr class="h-[1px] w-auto sm:w-[532px] md:w-auto lg:w-[420px] xl:w-auto border-t-0 bg-[#54505066]" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
