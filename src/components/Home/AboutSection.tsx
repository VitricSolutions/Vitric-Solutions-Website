import Mind from "../../assets/icon/Group 56.webp";
import code from "../../assets/icon/code.webp";
import collab from "../../assets/icon/collabrate.webp";
import global from "../../assets/icon/global.webp";
import { useState } from "react";

const data = [
  {
    icon: Mind,
    title: "Outcome-Focused Mindset",
    description:
      "We start with your business goals and design solutions that are measurable, scalable, and aligned with real operational needs.",
  },
  {
    icon: collab,
    title: "Collaborative Execution",
    description:
      "We work as an extension of your team—maintaining transparency, speed, and alignment across every stage of delivery.",
  },
  {
    icon: code,
    title: "Technology-Driven Approach",
    description:
      "Our decisions are driven by technical depth and practical experience, ensuring solutions are robust, secure, and future-ready.",
  },
  {
    icon: global,
    title: "Global Perspective",
    description:
      "With presence across India and Singapore, we bring regional insight combined with global delivery standards.",
  },
];

const AboutVITric = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-12 bg-white md:py-12 lg:py-16 px-4 md:px-8 lg:px-16  mt-10">
      <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 order-2 lg:order-1">
          {data.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={`rounded-2xl p-6 md:p-8 cursor-pointer
    transition-all duration-500 ease-out
    transform
     hover:-translate-y-2 
    ${isActive
                    ? "bg-linear-to-b from-[#FB1212] to-[#D32F0F] text-white shadow-2xl"
                    : "bg-white text-black  hover:shadow-xl"
                  }
  `}
              >
                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0
                      ${isActive ? "bg-white bg-opacity-20" : "bg-gray-100"}
                    `}
                  >
                    <img src={item.icon} alt={item.title}  loading="lazy" />
                  </div>
                </div>

                <h4 className="text-lg md:text-[17px] font-medium mb-3">
                  {item.title}
                </h4>

                <p
                  className={`text-[14px] font-medium leading-6 ${isActive ? "text-white" : "text-[#00000099]"
                    }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className=" lg:w-[35%] order-1 lg:order-2  flex flex-col items-center sm:items-start  sm:flex-none  ">
          <h2 className="lg:text-[18px]  mb-4  w-fit pr-2  text-[#000000CC] text-center sm:text-left border-b-2 border-[#D32F0F] ">
            <span>ABOUT </span>
            <span>VITRIC</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-[2.3rem] font-semibold mb-6 leading-10 sm:leading-10 lg:leading-12 text-center sm:text-left">
            <span>We Build </span>
            <span className="text-[#D32F0F]">Capability,</span>
            <h1> Not Just Solutions </h1>
          </h3>
          <p className=" text-[17px] text-[#00000099] mb-8  font-[lato] text-justify leading-7">
            Vitric is a trusted SCM and IT Consulting Services and Talent
            solutions partner, delivering agile, outcome-driven technology and
            recruitment solutions. With Global Delivery Footprint, Singapore HQ
            with active presence across APAC, MENA & North America with Local
            delivery teams in each region. We help organizations build
            high-impact teams and drive transformation through expertise, speed,
            and precision.
          </p>
          <a
            href="/about"
            className="button relative inline-block sm:left-0 px-10 py-3 font-medium text-black text-[14px] sm:text-[16px] hover:text-white cursor-pointer transition-all duration-300 ease-in transform"
          >
            <span className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#D32F0F]" />
            Read More
            <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#D32F0F]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutVITric;
