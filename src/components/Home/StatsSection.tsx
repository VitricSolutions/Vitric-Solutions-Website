import ray from "../../assets/icon/ray.webp";
import circle from "../../assets/icon/circle.webp";
import handshake from "../../assets/icon/handshake.webp";
import spray from "../../assets/icon/spray.webp";
import earth from "../../assets/icon/earth (1).webp";
import value from "../../assets/icon/value.webp";
import industry from "../../assets/icon/industry.webp";
import speed from "../../assets/icon/speed.webp";
import StatsGlobe from "../../assets/images/StatsGlobe.gif";
import CounterNumber from "../common/CounterNumber";

const display = [
  {
    title: "Proven Global Experience",
    desc: "Delivered large-scale, multi-region SCM Platform Solutions rollouts across industries",
    img: circle,
    hoverimg: earth,
  },
  {
    title: "Industry Expertise",
    desc: "Deep domain knowledge in Life Sciences, FMCG, Automotive, and Hi-Tech sectors, Semiconductors and Equipment Manufacturing ",
    img: handshake,
    hoverimg: industry,
  },
  {
    title: "Speed & Agility",
    desc: "Rapid mobilization of expert teams with minimal lead time",
    img: ray,
    hoverimg: speed,
  },
  {
    title: "Value Focused",
    desc: "Our delivery is ROI-driven, ensuring measurable business outcomes",
    img: spray,
    hoverimg: value,
  },
];
const StatsSection = () => {

  return (
    <>
      <section className="relative bg-[#0E1215] w-full h-auto text-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
        {/* Subtle background gradient or pattern if needed; here using solid black */}
        <div className="absolute w-full top-0 h-[120px] text-center pb-2 text-[20px] sm:text-[30px] lg:text-[36px] font-medium inset-0 opacity-100 flex items-center justify-center">
          We Turn Ideas into Visual Masterpieces
        </div>
        <div className="rounded-2xl w-full h-full  bg-[#27282A] mt-20 lg:mt-5 flex items-center justify-evenly gap-3 flex-wrap py-6 ">
          <div className="lg:w-[18%] h-[460px] flex items-center justify-between flex-col gap-y-5">
            <div className="w-[97%] h-[50%] bg-[#000000] rounded-2xl flex items-start justify-start flex-col p-8 gap-4">
              <h1 className="text-[32px]">
                <CounterNumber end={100} duration={1000} />
              </h1>
              <h1 className="text-[#FFFFFF99] leading-7text-[87%] sm:text-[65%] xl:text-[87%] sm:text-[65%] xl:text-[87%] ">
                years of combined experience in SCM Platform Solutions
              </h1>
            </div>
            <div className="w-[97%] h-[50%] bg-[#000000] rounded-2xl flex items-start justify-start flex-col p-8 gap-4">
              <h1 className="text-4xl lg:text-[32px]">
                <CounterNumber end={35} duration={1000} />
              </h1>
              <h1 className="text-[#FFFFFF99] leading-7 text-[87%] sm:text-[65%] xl:text-[87%] ">
                Client relationships
              </h1>
            </div>
          </div>

            <div className="lg:w-[25%] h-[460px]  bg-black mt-2 order-1 sm:order-0    rounded-2xl">
              <img
                src={StatsGlobe}
                alt=""
                className="w-full h-full object-contain"
               loading="lazy" />
            </div>
         

          <div className="lg:w-[50%]  rounded-xl flex items-center justify-center flex-wrap gap-5 p-4 lg:p-0 ">
            <div className="sm:w-[100%] h-[150px]  bg-[#000000] rounded-2xl flex items-start justify-center flex-col px-6 md:px-0 md:pl-8 pr-3 py-28 md:py-2 gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[32px] ">
                <CounterNumber end={25} duration={1000} />
              </h1>
              <h1 className="text-[#FFFFFF99] leading-7 text-[87%] sm:text-[65%] xl:text-[87%]  ">
                In-house developers and 10+certified SAP BTP consultants, <br />
                10+Experienced & Certified recruiters
              </h1>
            </div>

            <div className="w-full sm:h-[289px] rounded-xl flex  items-center justify-between flex-col sm:flex-row gap-2    md:gap-2">
              <div className="w-full sm:w-[50%] h-[100%] bg-[#000000] rounded-2xl flex  items-start justify-start flex-col p-8 gap-4">
                <h1 className="text-2xl sm:text-4xl lg:text-[32px]">
                  <CounterNumber end={10000} duration={1000} />
                </h1>
                <h1 className="text-[#FFFFFF99] leading-7 text-[87%] sm:text-[65%] xl:text-[87%] ">
                  Professionals in our talent network
                </h1>
              </div>
              <div className=" earth w-full sm:w-[50%] h-[100%] bg-[#000000] rounded-xl flex items-start justify-start flex-col p-8 py-10 md:py-8 lg:py-8 gap-4">
                <h1 className="text-2xl sm:text-4xl lg:text[32px]">Location</h1>
                <h1 className=" text-[#FFFFFF99] leading-7 text-[87%] sm:text-[65%] xl:text-[87%] ">
                  Offices in{" "}
                  <span className="font-medium text-white">
                    Nagpur, <br /> Pune
                  </span>{" "}
                  and <br className="hidden md:block" />
                  <span className="font-medium text-white">Singapore</span>
                </h1>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <section className="relative bg-[#0E1215] w-full h-auto text-white py-12 md:py-16 lg:py-10 px-2 md:px-6 lg:px-8 overflow-hidden">

        <div className="absolute w-full top-0 h-[90px] text-2xl lg:text-4xl font-medium inset-0 opacity-100 flex items-center justify-center">
          Why Choose Vitric
        </div>
        <div className="w-full rounded-2xl mt-7 flex items-center justify-center gap-10  flex-wrap py-10 text-[lato]">
          {display.map((item) => (
            <div
              className="w-[90%] sm:w-[40%] xl:w-[20%]  h-[450px] bg-[#27282A] relative overflow-hidden rounded-xl
                flex flex-col items-start justify-start p-5 gap-3 py-7
                transition-all duration-300 group cursor-pointer"
            >
              {/* Hover Background Image (Bottom → Top) */}
              <img
                src={item.hoverimg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover
               translate-y-full opacity-0
               transition-all duration-500 ease-out
               group-hover:translate-y-0 group-hover:opacity-100"
               loading="lazy" />

              {/* Content */}
              <h1 className="text-2xl lg:text-[24px] text-white font-light relative z-10">
                {item.title}
              </h1>

              <h1 className="text-[#FFFFFFCC] lg:text-[14px] font-light tracking-wide text-sm leading-7 relative z-10">
                {item.desc}
              </h1>

              {/* Default Image */}
              <div
                className="w-full h-[300px] flex items-center justify-center relative z-10
                  transition-all duration-300
                  group-hover:opacity-0 group-hover:translate-y-6"
              >
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src={item.img}
                  alt=""
                 loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;
