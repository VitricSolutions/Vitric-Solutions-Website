import send from "../../assets/icon/fluent_send-28-filled.webp";
const BusinessSection = () => {
  return (
    <>

      <section className="w-full pr-0  overflow-hidden flex items-center justify-between  gap-y-4 lg:gap-y-2 flex-wrap">
        <div className="bg w-full lg:w-[30%] 2xl:w-100  h-112.5 lg:h-150 flex items-center justify-center p-10 md:px-10  flex-col">
          <div className="  w-full text-[26px]  lg:text-3xl font-semibold inset-0 opacity-100 md:mt-0 flex items-center justify-start mb-8">
            <h1 className="text-white ">
              {" "}
              What we
              <span className="text-white">
                {" "}
                Deliver
              </span>
            </h1>
          </div>
          <h1 className="text-[17px]   text-[#FFFFFFE3] font-light">
            A unique blend of deep expertise, practical solutions, and measurable
            business impact.
          </h1>
        </div>

        <div className="Consulting relative w-full lg:w-[23%] h-112.5 font-[lato] flex flex-col items-start justify-start mx-4 lg:mx-0 p-5 gap-2 py-7 ">
          <h1 className="text-2xl lg:text-[20px] text-[#ffff] font-semibold mb-4">
            Consulting Services
          </h1>
          <h1 className="font-[lato] text-[#FFFFFFCC]  font-medium tracking-wide text-[15px] leading-6 pr-4">
            Driving transformation through strategy, technology, and execution
          </h1>

          <div className=" w-full flex items-center justify-start gap-x-2 mt-5 leading-0 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>SCM Platform Solution Advisory</h1>
          </div>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2  lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>Kinaxis Maestro - Health Check</h1>
          </div>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>SAP BTP - Integration</h1>
          </div>

          <a
            href="/services/kinaxis-maestro"
            className="w-[80%] absolute left-1/2 -translate-x-1/2 bottom-0 mt-28 py-3 px-2 border font-semibold border-[#ffff] text-white mb-10 flex items-center justify-center hover:bg-[#D32F0F] hover:text-white cursor-pointer transition-all duration-300 ease-in transform hover:border-none"
          >
            Explore Consulting Services
          </a>
        </div>

        <div className="SCM relative w-full lg:w-[23%] h-112.5 font-[lato] flex flex-col items-start justify-start mx-4 lg:mx-0 p-5 gap-2 py-7 ">
          <h1 className="text-2xl lg:text-[20px] text-[#ffff] font-semibold mb-4">Training</h1>

          <h1 className="font-[lato] text-[#FFFFFFCC]  font-medium tracking-wide text-[15px] leading-6 pr-4">
            Training delivered by certified consultants with active project
            experience — bridging theory and practical execution.
          </h1>
          <div className="font-[lato]  w-full  flex items-center justify-start gap-x-2 mt-5 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>SAP BTP Trainings</h1>
          </div>
          <div className=" font-[lato] w-full  flex items-center justify-start gap-x-2 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>Kinaxis Maestro Trainings</h1>
          </div>

          <a
            href="/training"
            className="w-[80%] absolute left-1/2 -translate-x-1/2 bottom-0  mt-20 py-3 px-2 border font-semibold border-[#ffff] text-white mb-10 flex items-center justify-center hover:bg-[#D32F0F] hover:text-white cursor-pointer
    transition-all duration-300 ease-in  
    transform  hover:border-none"
          >
            Explore Trainings
          </a>
        </div>

        <div className="relative Talent  w-full lg:w-[23%] font-[lato] h-112.5  flex flex-col items-start justify-start pl-5  py-7 mx-4 lg:mx-0 ">
          <h1 className="text-2xl lg:text-[20px] text-[#ffff] mb-4 font-semibold">
            Talent Solutions
          </h1>
          <h1 className="font-[lato] text-[#FFFFFFCC]  font-medium tracking-wide text-[15px] leading-6 pr-4">
            Vitric’s team has focused exclusively on the global talent ecosystem
            for past 10 years. Market Profiles Across Tech Stack 10,000+
          </h1>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2 mt-5 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1>Subject Matter Experts - SCM</h1>
          </div>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2 lg:text-[95%] font-normal  text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1 className="leading-8">Solution Architects</h1>
          </div>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1 className="leading-8"> Integration Architects</h1>
          </div>
          <div className="font-[lato] w-full  flex items-center justify-start gap-x-2 lg:text-[95%] font-normal text-white">
            <img src={send} className="w-4 h-4" alt=""  loading="lazy" />
            <h1 className="leading-8">Implementation Consultants</h1>
          </div>
          <a
            href="/talent-solutions"
            className="w-[80%] absolute left-1/2 -translate-x-1/2 bottom-10 mt-5  py-3 px-2 border font-semibold border-[#ffff] text-white flex items-center justify-center hover:bg-[#D32F0F] hover:text-white cursor-pointer
    transition-all duration-300 ease-in 
    transform hover:border-none"
          >
            Explore Talent Solutions
          </a>
        </div>
      </section>
    </>
  );
};

export default BusinessSection;
