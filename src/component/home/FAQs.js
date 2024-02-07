import dropdownarrow from "../../assets/images/Icon.svg";
import { useState } from "react";

export default function FAQs() {
  const [opened, setOpened] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = (i) => {
    if (opened === i) {
      return setOpened(false);
    }

    setOpened(i);
  };

  const down = (i) => {
    if (open === i) {
      return setOpen(false);
    }

    setOpen(i);
  };

  const faq1 = [
    {
      title: "What industries does your company cater to?",
      content:
        "We offer a comprehensive range of services including web and mobile app development, UX/UI design, and digital marketing solutions.",
    },
    {
      title: "Tell me more about your UX/UI design services.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can digital marketing services benefit my business?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "What is the typical timeline for completing a web or mobile app development project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "Is ongoing support and maintenance provided after the completion of a project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
  ];

  const faq2 = [
    {
      title: "What services does your tech company provide?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can I contact your team for inquiries?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "What sets your web and mobile development services apart?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "Do you provide custom solutions or use pre-built templates for websites and apps?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can I request a quote for my project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
  ];

  return (
    <div className="container mx-auto mt-16 lg:mt-[220px] pb-[65px]">
      <div className="text-black gap-x-10 xl:gap-x-20 justify-center grid text-center lg:text-start lg:flex px-8">
        <div className="font-semibold w-auto md:w-[500px]">
          <div className="gap-y-6 grid text-[45px] font-[Avenir-Next-Bold] text-start sm:text-center px-0 sm:px-8 mb-[60px]">
            <h1 className="leading-9 sm:leading-[54px]">FAQs</h1>
            <p className="text-[18px] font-normal font-[Avenir-Next-Regular] leading-[27px]">
              Your Gateway to a Wide Spectrum of Customized Digital Solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Dropdown */}

      <div className="text-black w-full gap-x-10 xl:gap-x-6 justify-center grid text-center lg:text-start lg:flex px-8">
        <div className="gap-x-10 grid font-[Avenir-Next-Regular] font-normal">
          <div className="">
            {faq1.map((items, index) => (
              <div className="">
                <div
                  key={index} //
                  className={`flex w-auto xl:w-[549px] py-5 linear-gradient justify-between cursor-pointer pb-10 ${
                    (opened === index ? "" : "",
                    index === faq2.length - 1
                      ? "lg:border-b-[1px] border-t-[1px] border-solid border-black"
                      : "border-t-[1px] border-solid border-black")
                  }`}
                  onClick={() => toggle(index)}
                >
                  <div className="grid w-auto sm:w-[400px] md:w-[600px] lg:w-[420px]">
                    <div
                      className={`font-[Avenir-Next-Regular] text-start sm:text-[18px] leading-[27px] grid items-center justify-between text-black text-base tracking-[0.38px] ${
                        opened === index ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {items.title}
                    </div>
                    {opened === index && (
                      <div className="text-black font-[Avenir-Next-Regular] text-sm py-6 md:text-base grid font-normal leading-6">
                        {items.content}
                      </div>
                    )}
                  </div>
                  <div
                    className={`items-center grid ${
                      opened === index ? "" : "items-center"
                    }`}
                  >
                    <img
                      src={dropdownarrow}
                      alt="dropdownarrow"
                      className={`duration-300 ${
                        opened === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faq-2 */}

        <div className="w-auto grid font-[Avenir-Next-Regular] font-normal">
          <div className="">
            {faq2.map((items, index) => (
              <div className="">
                <div
                  key={index} //
                  className={`flex w-auto xl:w-[549px] py-5 justify-between linear-gradient cursor-pointer pb-10 ${
                    (open === index ? "" : "",
                    index === faq2.length - 1
                      ? "border-b-[1px] border-t-[1px] border-solid border-black"
                      : "border-t-[1px] border-solid border-black")
                  }`}
                  onClick={() => down(index)}
                >
                  <div className="grid w-auto sm:w-[400px] md:w-[600px] lg:w-[420px]">
                    <div
                      className={`font-[Avenir-Next-Regular] text-start sm:text-[18px] leading-[27px] grid items-center justify-between text-black text-base tracking-[0.38px] ${
                        open === index ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {items.title}
                    </div>
                    {open === index && (
                      <div className="text-black font-[Avenir-Next-Regular] text-sm py-6 md:text-base grid font-normal leading-6">
                        {items.content}
                      </div>
                    )}
                  </div>
                  <div
                    className={`items-center grid ${
                      open === index ? "" : "items-center"
                    }`}
                  >
                    <img
                      src={dropdownarrow}
                      alt="dropdownarrow"
                      className={`duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
