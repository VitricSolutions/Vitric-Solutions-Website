
import { useEffect, useRef } from "react";
import { useContact } from "../../Context/Context";
import gsap from "gsap";


// Imports for orbiting elements
import { Globe, Truck, Package, LineChart, Zap, Award } from "lucide-react";

const KinaxisHero = () => {
    const { openContact } = useContact();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="relative w-full pt-12 pb-12 lg:pt-16 lg:pb-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden font-[Montserrat]">
            {/* Minimalist Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl to-white"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#D32F0F]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D32F0F]/20 to-transparent"></div>
            </div>

            <div ref={contentRef} className="max-w-[85rem] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">

                <div className="w-full md:w-3/5">
                    <div className="mb-8 inline-flex flex-col relative group">
                        {/* Decorative glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D32F0F] to-[#ff4e2a] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
                        
                        <div className="relative inline-flex items-center gap-3 py-2 px-5 border border-[#D32F0F]/30 bg-white/90 backdrop-blur-sm shadow-xl shadow-red-500/10 rounded-full transform transition hover:scale-[1.02]">
                            <div className="bg-gradient-to-br from-[#D32F0F] to-[#8f1e09] p-2 rounded-full shadow-inner">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col pr-2">
                                <span className="text-[#D32F0F] text-xs md:text-sm font-extrabold tracking-widest uppercase font-[Montserrat]">
                                    Official Partner
                                </span>
                                <span className="text-gray-600 text-[10px] md:text-xs font-bold tracking-wider uppercase font-[Lato]">
                                    Kinaxis SI • APAC Region
                                </span>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-[#1D1D1D]">
                        Empowering <span className="text-[#D32F0F]">Intelligent,</span> <br /> Resilient Supply Chains
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl font-[Lato] mb-10 border-l-4 border-[#D32F0F] pl-6 bg-gray-50/50 py-2 rounded-r-lg">
                        Vitric is a boutique digital consulting firm specializing in Kinaxis Maestro (RapidResponse)–led supply chain transformations. We align business strategy, planning intelligence, and execution.
                    </p>

                    <div className="mb-8">
                        <button
                            onClick={openContact}
                            className="px-10 py-4 bg-[#D32F0F] text-white font-medium text-sm md:text-base tracking-wide rounded-sm hover:bg-[#b02206] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Let's Connect
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-8 text-gray-700 text-sm font-[Lato] font-medium">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="w-2 h-2 bg-[#D32F0F] rounded-full"></span>
                            <span>Presence in Singapore & India</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="w-2 h-2 bg-[#D32F0F] rounded-full"></span>
                            <span>Global Delivery Reach</span>
                        </div>
                    </div>
                </div>

                {/* Right Abstract Visual */}
                <div className="w-full md:w-2/5 relative h-[400px] hidden md:flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Outer Orbit Ring (Counter-Clockwise) */}
                        <div className="absolute w-[450px] h-[450px] border border-dashed border-[#D32F0F]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]">
                            {/* Orbiting Elements */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-100">
                                <Globe className="w-6 h-6 text-[#D32F0F]" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-100">
                                <Truck className="w-6 h-6 text-gray-600" />
                            </div>
                        </div>

                        {/* Mid Orbit Ring (Clockwise) */}
                        <div className="absolute w-[350px] h-[350px] border border-[#D32F0F]/10 rounded-full animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-100">
                                <Package className="w-6 h-6 text-[#D32F0F]" />
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-100">
                                <LineChart className="w-6 h-6 text-gray-600" />
                            </div>
                        </div>

                        {/* Inner Orbit Ring (Counter-Clockwise) */}
                        <div className="absolute w-[250px] h-[250px] border border-[#D32F0F]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-4 right-8 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                                <Zap className="w-5 h-5 text-[#D32F0F]" />
                            </div>
                        </div>

                        {/* Core Glow */}
                        <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-[#D32F0F] to-[#b02206] rounded-full shadow-2xl opacity-10 blur-2xl animate-pulse"></div>

                        {/* Center Circle */}
                        <div className="absolute w-[180px] h-[180px] bg-white rounded-full shadow-[0_20px_50px_-10px_rgba(211,47,15,0.15)] flex flex-col items-center justify-center border border-gray-50 z-10 relative overflow-hidden">

                            {/* Inner shine */}
                            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-80"></div>

                            {/* <img src={supplyChainIcon} className="w-10 h-10 mb-2 object-contain opacity-80" alt=""  loading="lazy" /> */}
                            <span className="text-[#1D1D1D] font-bold text-lg leading-tight text-center relative z-10">
                                Supply Chain <br /> <span className="text-[#D32F0F]">Evolution</span>
                            </span>
                        </div>

                        {/* Floating Stat Pills (Static, non-rotating) */}
                        <div className="absolute top-10 right-10 animate-bounce delay-700 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-xs font-bold text-gray-500">
                            100% Visibility
                        </div>
                        <div className="absolute bottom-20 left-0 animate-bounce delay-1000 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-xs font-bold text-gray-500">
                            Rapid Response
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default KinaxisHero;
