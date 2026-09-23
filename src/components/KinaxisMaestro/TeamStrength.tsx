
import { useRef, useEffect } from "react";
import gsap from "gsap";

const TeamStrength = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#F9FAFB] text-[#1D1D1D] font-[Montserrat] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D32F0F] opacity-[0.02] skew-x-12 translate-x-20"></div>

            <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm mb-4">Why Vitric</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        Team Strength
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-[Lato] mb-8">
                        Vitric is powered by a Kinaxis specialized, outcome-driven team with over two decades of collective supply chain consulting experience.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Senior Kinaxis Architects and Practitioners",
                            "Certified SAP BTP & Integration experts",
                            "Cross-industry experience (Pharma, CPG, Manufacturing, Hi-Tech, Retail)",
                            "Small, high-impact teams focused on results—not capacity-based billing"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#D32F0F]/30 transition-colors">
                                <span className="text-[#D32F0F] text-xl font-bold">✓</span>
                                <span className="text-gray-700 font-[Lato]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-full perspective-1000">
                    {/* Main Card - Modern 3D Glass Effect */}
                    <div className="h-full bg-gradient-to-br from-[#D32F0F] to-[#8a1c00] p-10 lg:p-14 rounded-3xl relative overflow-hidden flex flex-col justify-center transform hover:scale-[1.02] transition-transform duration-500 ease-out shadow-[0_30px_60px_-15px_rgba(211,47,15,0.5)] border border-white/20">

                        {/* Glossy Overlay for 3D Feel */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>

                        {/* Background Decoration */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ff5b5b] opacity-20 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black opacity-30 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Large Quote Icon - Modernized */}
                        <div className="absolute top-10 right-10 text-white/5 font-serif text-[10rem] leading-none pointer-events-none translate-x-4 -translate-y-8 layer-blur">
                            "
                        </div>

                        {/* Content Layer */}
                        <div className="relative z-10 flex flex-col gap-10">
                            <p className="text-xl md:text-2xl font-light text-white leading-relaxed font-[Lato] tracking-wide drop-shadow-md">
                                "Our leadership and advisory teams bring deep global experience, ensuring strategic alignment, disciplined execution, and predictable outcomes across every engagement."
                            </p>

                            {/* Modern Separator */}
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-white/40"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
                                <div className="h-[1px] w-full bg-white/10"></div>
                            </div>

                            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed font-[Montserrat] tracking-tight drop-shadow-sm">
                                Vitric goes beyond implementation. We align strategy with execution to deliver sustainable, measurable supply chain transformation.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamStrength;
