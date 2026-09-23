import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Settings, Database, Award, User, Briefcase, TrendingUp, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const objectives = [
    { icon: <Target className="w-6 h-6" />, text: "Practical supply chain planning scenarios" },
    { icon: <Settings className="w-6 h-6" />, text: "Kinaxis system configuration & usage" },
    { icon: <Database className="w-6 h-6" />, text: "Integration concepts with SAP" },
    { icon: <Award className="w-6 h-6" />, text: "Certification-focused learning outcomes" }
];

const audience = [
    { role: "Supply Chain Professionals", icon: <TrendingUp /> },
    { role: "ERP / SAP Consultants", icon: <Briefcase /> },
    { role: "Planning Managers", icon: <Users /> },
    { role: "Freshers (SCM)", icon: <User /> }
];

const ProgramObjectives = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Content Stagger
            gsap.fromTo(".obj-item",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%" // Trigger a bit earlier to ensure visibility
                    }
                }
            );

            // 3D Visual Entrance
            gsap.fromTo(".audience-card",
                { y: 50, opacity: 0, rotateX: -15 }, // Reduced rotation for smoother entry
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%"
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-br from-white to-gray-50 text-gray-900 relative overflow-hidden font-[Montserrat]">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D32F0F]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">

                {/* LEFT: Program Objectives */}
                <div className="lg:w-1/2 relative z-10">
                    <span className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm mb-4 block">
                        Core Value
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1D1D1D]">
                        Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-red-500">Objectives</span>
                    </h2>
                    <p className="text-gray-600 mb-10 font-[Lato] text-lg leading-relaxed border-l-2 border-[#D32F0F] pl-6">
                        Our training is designed to bridge the gap between theory and real-world consulting.
                    </p>

                    <div className="space-y-4">
                        {objectives.map((obj, i) => (
                            <div key={i} className="obj-item flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D32F0F]/30 transition-all cursor-default group">
                                <div className="p-3 bg-gradient-to-br from-[#D32F0F] to-red-600 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform">
                                    {obj.icon}
                                </div>
                                <span className="font-bold text-gray-800 text-lg">{obj.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Who Should Attend (3D Visual) */}
                <div className="lg:w-1/2 w-full flex flex-col items-center justify-center relative perspective-[1200px]">

                    {/* Floating Title */}
                    <div className="mb-8 text-center">
                        <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-bold uppercase tracking-wider text-gray-500">
                            Who Should Attend?
                        </div>
                    </div>

                    {/* 3D Stack/Cards */}
                    <div className="relative w-full max-w-md transform-style-3d grid gap-4">

                        {audience.map((item, i) => (
                            <div key={i} className="audience-card relative group">
                                {/* Back Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#D32F0F] to-orange-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                {/* Card Body */}
                                <div className="relative p-6 bg-white rounded-xl border border-gray-100 flex items-center gap-4 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-z-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#D32F0F] transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">{item.role}</h4>
                                        <p className="text-xs text-gray-400 font-[Lato] uppercase tracking-wide">Eligible Profile</p>
                                    </div>

                                    {/* Abstract Connector Line */}
                                    <div className="absolute right-0 top-1/2 w-8 h-[2px] bg-gray-200 -mr-4 opacity-0 lg:opacity-100"></div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Connecting Vertical Line visual */}
                    <div className="absolute right-[-20px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-[#D32F0F] to-transparent opacity-20 hidden lg:block"></div>

                </div>

            </div>
        </section>
    );
};

export default ProgramObjectives;
