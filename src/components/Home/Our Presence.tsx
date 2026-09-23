import world from "../../assets/icon/world.webp";
import India from "../../assets/icon/india.webp";
import Singapur from "../../assets/icon/singapur.webp";
const OurPresence = () => {
  return (
    <>
      <section className="relative  w-full  mt-10 py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-10 overflow-hidden">
        {/* Subtle background gradient or pattern if needed; here using solid black */}
        <div className="absolute w-full top-0 h-30  text-2xl lg:text-4xl  font-semibold inset-0 opacity-100 flex items-center justify-center gap-2 ">
          Our<span className="text-[#D32F0F]"> Presence</span>
        </div>
        <hr className="mt-10 sm:mt-10 lg:mt-5 text-[#00000066]" />
        <div className="w-full flex items-center justify-between flex-wrap lg:flex-nowrap  ">
          <div className="w-full  flex items-center justify-start flex-wrap sm:flex-nowrap lg:flex-wrap mt-5 px-2">
            <div className="upper w-full sm:w-[48%] lg:w-[70%]  lg:ml-10    sm:h-50 font-medium mt-5 mx-10 lg:m-0">
              <div className="w-full flex items-center justify-start gap-2 ">
                <img src={Singapur} className="w-10" alt=""  loading="lazy" />
                <span className="uppercase text-xl">Singapore</span>
              </div>
              {/* <h1 className="text-[#3B3A3A] mt-6 font-semibold">VITRIC SOLUTIONS PTE. LTD</h1> */}
              <h1 className="text-[#00000099] mt-4 ">246 MACPHERSON ROAD, #03-01, BETIME BUILDING, SINGAPORE 348578</h1>

            </div>
            <div className="lower w-full sm:w-[48%]  lg:w-[70%]  lg:ml-10 sm:h-50 font-medium mx-10 mt-5 lg:m-0 ">
              <div className="w-full flex items-center justify-start gap-2 ">
                <img src={India} className="w-10" alt=""  loading="lazy" />
                <span className="uppercase text-xl">India</span>
              </div>
              <h1 className="text-[#00000099] mt-4 ">5th Floor, 99 West, Pratap Nagar Main Rd, above Aromas Cafe, Pratap Nagar, Nagpur, Maharashtra 440022</h1>
              {/* <h1 className="text-[#3B3A3A] mt-6 font-semibold uppercase">Vitric Business Solutions Pvt. Ltd</h1> */}
              <h1 className="text-[#000000] mt-4 ">Office Location : <span className="text-[#00000099]"> Nagpur,  Pune</span> </h1>
              <h1 className="text-[#000000] mt-4 ">Email : <span className="text-[#1565C0]"> <a href="sales@vitric.in"> sales@vitric.in</a> </span></h1>

            </div>

          </div>
          <div className="w-[140%] flex items-center justify-center lg:mr-10  ">
            <img src={world} className="w-full h-full object-contain" alt=""  loading="lazy" />
          </div>

        </div>
      </section>
    </>
  );
};

export default OurPresence;
