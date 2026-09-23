import { useRef, useEffect } from "react";
import gsap from "gsap";
import Network from "../../assets/images/aboutUs/redBag.jpeg";
import { useContact } from "../../Context/Context";
import HeroImage from "../../assets/images/aboutUs/About_hero.jpg"; // Using existing hero image or placeholder

const HeroSection = () => {
    const { openContact } = useContact();
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        if (textRef.current && imageRef.current) {
            tl.fromTo(textRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            )
                .fromTo(imageRef.current,
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                );
        }
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden min-h-[85vh] flex items-center font-[Montserrat]">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-2/3 h-full z-0 opacity-[0.03] pointer-events-none">
                <img src={Network} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[85rem] mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 pt-20 lg:pt-0">
                {/* Left Content */}
                <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1D] mb-4 tracking-tight leading-[1.1]">
                        About <span className="text-[#D32F0F]">Vitric</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-8 border-l-4 border-[#D32F0F] pl-4 font-[Lato]">
                        Building Capability, Not Just Solutions
                    </h2>

                    <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light max-w-xl font-[Lato]">
                        Vitric is a new-age transformation partner helping organizations move faster, plan smarter, and scale sustainably. Founded in 2016, we work at the intersection of technology, talent, and supply chain—delivering agile IT services, recruitment, and SCM solutions that don’t just solve today’s problems but build tomorrow’s capabilities. We believe in hands-on execution, lean teams, and outcomes that matter.
                    </p>

                    <button onClick={openContact} className="px-10 py-4 bg-[#D32F0F] text-white font-medium text-sm md:text-base tracking-wide rounded-sm hover:bg-[#b02206] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Let’s Connect
                    </button>
                </div>

                {/* Right Image */}
                <div ref={imageRef} className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative">
                    <div className="absolute inset-0 bg-gray-100 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
                        {/* Abstract / Architectural image placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent mix-blend-multiply"></div>
                            <img src={HeroImage} alt="Enterprise Architecture" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D32F0F] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
