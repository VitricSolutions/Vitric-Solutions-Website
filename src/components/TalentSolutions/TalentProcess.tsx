import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Scale, Briefcase, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TalentProcess = () => {
    const processRef = useRef(null);

    const principles = [
        {
            title: "Compliance & Integrity",
            desc: "Adhering to global labor laws and ethical standards.",
            icon: <ShieldCheck className="w-8 h-8 text-[#D32F0F]" />
        },
        {
            title: "Transparency",
            desc: "Clear communication at every stage of the hiring cycle.",
            icon: <Scale className="w-8 h-8 text-[#D32F0F]" />
        },
        {
            title: "Professionalism",
            desc: "Respecting client culture and candidate aspirations.",
            icon: <Briefcase className="w-8 h-8 text-[#D32F0F]" />
        },
        {
            title: "Long-term Value",
            desc: "Focusing on retention and sustainable growth.",
            icon: <TrendingUp className="w-8 h-8 text-[#D32F0F]" />
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".process-card",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: processRef.current, start: "top 70%" } }
            );

            gsap.fromTo(".connect-line",
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: "power2.out", delay: 0.5, scrollTrigger: { trigger: processRef.current, start: "top 60%" } }
            );
        }, processRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={processRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#0a0a0a] text-white font-[Montserrat] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-10"></div>

            <div className="max-w-[85rem] mx-auto relative z-20">

                <div className="text-center mb-20">
                    <span className="text-[#D32F0F] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Standard</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Engagement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-red-500">Principles</span></h2>
                    <p className="text-gray-400 font-[Lato] text-lg max-w-2xl mx-auto">
                        A rigorous, four-step framework ensuring compliance, quality, and seamless delivery.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10">
                        <div className="connect-line w-full h-full bg-gradient-to-r from-[#D32F0F]/50 via-[#D32F0F] to-[#D32F0F]/50 origin-left"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {principles.map((item, idx) => (
                            <div key={idx} className="process-card group relative">
                                {/* Step Number Badge */}
                                <div className="w-24 h-24 mx-auto bg-[#1D1D1D] rounded-full border-4 border-[#0a0a0a] flex items-center justify-center relative z-10 mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10 group-hover:border-[#D32F0F] transition-colors">
                                        <span className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">0{idx + 1}</span>
                                    </div>

                                </div>

                                {/* Content Card */}
                                <div className="bg-[#151515] rounded-2xl p-8 border border-white/5 hover:border-[#D32F0F]/30 hover:bg-[#1a1a1a] transition-all duration-300 h-full text-center group-hover:-translate-y-2">
                                    <div className="w-12 h-12 bg-[#D32F0F]/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#D32F0F] transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 font-[Lato] text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TalentProcess;
