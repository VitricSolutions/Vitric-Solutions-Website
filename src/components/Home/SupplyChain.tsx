import Arrow from "../../assets/icon/whiteArrow.png"
import { useContact } from "../../Context/Context"

const SupplyChainBanner = () => {
  const { openContact } = useContact();
  return (
    <section className="SupplyChain relative overflow-hidden bg-white rounded-lg border border-blue-200 md:rounded-xl lg:rounded-2xl mx-4 md:mx-8 lg:mx-auto max-w-[85rem] xl:max-w-[80rem] my-8 md:my-12 shadow-sm">

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  mb-2 leading-tight">
          Transform Supply Chain Planning
        </h2>

        {/* Subtitle */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  mb-2 leading-tight">
          with Our <span className='text-[#D32F0F]'>Kinaxis Practice</span>
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg  text-[#00000099] mb-8 leading-relaxed font-[lato]">
          We combine technology, talent, and transformation to help global organizations unlock the full potential of Kinaxis <br /> Maestro—delivering faster decisions, resilient supply chains, and measurable ROI.
        </p>

        {/* Button */}
        <button
          onClick={openContact}
          className="bg-[#D32F0F] cursor-pointer text-white font-semibold px-6 py-3   text-base  transition-colors duration-200 inline-flex items-center justify-center">
          Get in Touch  <span className="ml-2"><img src={Arrow} className='w-7' alt="" /></span>
        </button>
      </div>
    </section>
  );
};

export default SupplyChainBanner;