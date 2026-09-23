import { useRef, useEffect } from "react";
import { CheckCircle, Globe, Award, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "Master Concepts",
        desc: "Master end-to-end supply chain planning concepts.",
        color: "from-blue-500 to-blue-700"
    },
    {
        icon: <Briefcase className="w-8 h-8 text-white" />,
        title: "Hands-on Experience",
        desc: "Gain hands-on experience on Kinaxis RapidResponse.",
        color: "from-[#D32F0F] to-red-600"
    },
    {
        icon: <Award className="w-8 h-8 text-white" />,
        title: "Certification Ready",
        desc: "Prepare for Kinaxis Supply Chain Level 1 & Integration Level 1 Certifications.",
        color: "from-amber-500 to-orange-600"
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-white" />,
        title: "Industry Ready",
        desc: "Become industry-ready for global client engagements.",
        color: "from-green-500 to-emerald-700"
    },
];

const WhyTraining = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".why-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%", // Trigger earlier
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden text-white font-[Montserrat]">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D32F0F]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 border border-white/10 rounded-full bg-white/5 text-gray-400 text-xs tracking-[0.2em] uppercase mb-4">
                        Value Proposition
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Kinaxis Training with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-red-500">Vitric?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-[Lato]">
                        The demand for Kinaxis RapidResponse professionals is rapidly growing.
                        Our structured, industry-aligned training prepares you for success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="why-card group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-[#D32F0F] hover:to-orange-500 transition-all duration-500"
                        >
                            <div className="bg-[#111] h-full rounded-xl p-8 relative overflow-hidden transition-all group-hover:bg-[#151515]">

                                {/* Hover Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 font-[Lato] text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTraining;
