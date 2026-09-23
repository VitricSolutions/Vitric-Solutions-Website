import Arrow from "../../assets/icon/arrow.webp";
import Network from "../../assets/icon/network.svg";
import HeroImage from "../../assets/icon/hero-image.webp";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useContact } from "../../Context/Context"; // Import hook
const HeroSection = () => {
  const { openContact } = useContact(); // Get hook function
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const h1s = containerRef.current.querySelectorAll("h1");
    let index = 0;

    gsap.set(h1s, { top: "100%" });
    gsap.set(h1s[0], { top: "0%" });

    const interval = setInterval(() => {
      const current = h1s[index];
      const next = h1s[(index + 1) % h1s.length];

      gsap.to(current, {
        top: "-100%",
        duration: 1,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(current, { top: "100%" });
        },
      });

      gsap.to(next, {
        top: "0%",
        duration: 1,
        ease: "expo.inOut",
      });

      index = (index + 1) % h1s.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full lg:h-[90vh] mb-10  flex items-center justify-center flex-wrap lg:flex-nowrap">
      <div className="mb-10 lg:mb-0 w-full lg:w-[50%] h-auto  flex items-center justify-center flex-col flex-wrap gap-10">
        <div className="w-[90%] lg:w-[80%] flex flex-col items-start justify-center gap-2 sm:gap-5  ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium  items-center">
            Your Partner for
          </h1>
          <div
            className="w-full h-13   sm:h-14 lg:h-17.5  relative overflow-hidden"
            ref={containerRef}
          >
            <h1 className="absolute left-0 top-0 font-medium text-3xl md:text-5xl gap-2">
              <span className="font-bold text-[#D32F0F]">Kinaxis </span>
              Excellence
            </h1>

            <h1 className="absolute left-0 top-0 font-medium text-3xl md:text-5xl gap-2">
              <span className="font-bold text-[#D32F0F]">SAP </span>
              Transformation
            </h1>

            <h1 className="absolute left-0 top-0 font-medium text-3xl md:text-5xl gap-2">
              <span className="font-bold text-[#D32F0F]">Talent </span>
              Acquisition
            </h1>

            <h1 className="absolute left-0 top-0 font-medium text-3xl md:text-5xl gap-2">
              <span className="font-bold text-[#D32F0F]">IT </span>
              Innovation
            </h1>
          </div>

          <h2 className="text-[#00000099] text-[14px] lg:text-[18px]">
            Driving digital transformation, operational excellence, and
            high-impact talent solutions for growing and enterprise
            organizations.
          </h2>
          <div className="w-full flex items-start justify-start lg:justify-start flex-wrap gap-5 mt-5 font-medium ">
            <button
              type="submit"
              className="button  relative px-8 py-3 text-sm font-medium  text-black text-[14px] sm:text-[16px] hover:text-white cursor-pointer
    transition-all duration-300 ease-in
    transform"
              onClick={openContact}
            >
              <span className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#D32F0F]" />
              Let's Connect
              <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#D32F0F]" />
            </button>
            <button
              className="border text-[14px] sm:text-[16px] p-3 flex items-center justify-between gap-3 cursor-pointer border-[#1D1D1DCC]"
              onClick={() =>
                document
                  .getElementById("technology-services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Services
              <span className="flex items-center justify-center mt-1">
                <img src={Arrow} alt="" className="w-6"  loading="lazy" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%]  lg:h-full  relative bg-red-400">
        <img
          src={HeroImage}
          className="w-full h-full"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <img
          src={Network}
          className="w-[60%] left-1/2 -translate-x-1/2 lg:left-20  absolute bottom-5 sm:bottom-10 sm:right-40 lg:bottom-5 lg:right-110"
          alt=""
         loading="lazy" />
      </div>
    </section>
  );
};

export default HeroSection;
