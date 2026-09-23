import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Laptop, Factory } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TalentIndustries = () => {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState("IT");

    const itFeatures = [
        "SAP Functional & Technical Consultants",
        "In-house Developers & SAP-Certified Consultants",
        "Full-stack, Cloud, Data, AI, and Digital Technologies",
        "Short-term, long-term, and project-based hiring"
    ];

    const nonItIndustries = ["Healthcare", "Pharma", "Chemical", "Life Sciences"];
    const nonItRoles = ["Executive & Corporate Roles", "Plant & Operations Roles", "Functional Specialists", "Leadership Positions"];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".ind-fade",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] relative">

            <div className="max-w-[85rem] mx-auto">
                <div className="text-center mb-16 ind-fade">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                        Industry <span className="text-[#D32F0F]">Specializations</span>
                    </h2>

                    {/* Toggle */}
                    <div className="inline-flex bg-gray-100 p-1 rounded-full relative">
                        <div className={`absolute top-1 bottom-1 w-[50%] bg-[#D32F0F] rounded-full transition-all duration-300 ${activeTab === "IT" ? "left-1" : "left-[49%]"}`}></div>
                        <button
                            onClick={() => setActiveTab("IT")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-40 ${activeTab === "IT" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            IT Solutions
                        </button>
                        <button
                            onClick={() => setActiveTab("Non-IT")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-40 ${activeTab === "Non-IT" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            Non-IT Solutions
                        </button>
                    </div>
                </div>

                <div className="min-h-[500px] ind-fade">
                    {/* IT Content */}
                    <div className={`transition-all duration-500 ${activeTab === "IT" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 hidden"}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-[#1D1D1D]">Tech Stack & <span className="text-[#D32F0F]">SAP Expertise</span></h3>
                                <p className="text-gray-600 font-[Lato] text-lg leading-relaxed">
                                    Vitric specializes in sourcing IT professionals across emerging and core technologies. Whether for short-term engagement or one-year assignments, we guarantee speed, quality, and reliability.
                                </p>
                                <ul className="space-y-4">
                                    {itFeatures.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F0F] mt-2.5"></span>
                                            <span className="text-lg text-gray-700 font-[Lato]">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">23+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">In-house Experts</div>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">10k+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Market Profiles</div>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">75+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Positions Served</div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual/Image Placeholder */}
                            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-[#1D1D1D] p-8 flex flex-col justify-between group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D32F0F] rounded-full blur-[80px] opacity-20"></div>

                                <div className="relative z-10">
                                    <div className="w-32 h-32 flex items-center justify-center mb-6">
                                        <Laptop className="w-24 h-24 text-blue-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">IT Workforce</h4>
                                    <p className="text-gray-400 font-[Lato]">Powering digital transformation.</p>
                                </div>
                                <div className="relative z-10 flex flex-wrap gap-4">
                                    {["SAP", "Cloud", "Data", "AI"].map((tag, i) => (
                                        <div key={i} className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-xl text-white text-sm font-bold border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 hover:border-[#D32F0F]/50 transition-all duration-300 cursor-default group/tag shadow-lg hover:shadow-[#D32F0F]/20 hover:-translate-y-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F0F] group-hover/tag:shadow-[0_0_8px_#D32F0F] transition-shadow duration-300"></div>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Non-IT Content */}
                    <div className={`transition-all duration-500 ${activeTab === "Non-IT" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 hidden"}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Visual/Image Placeholder (Left side for Non-IT) */}
                            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden bg-[#1D1D1D] p-8 flex flex-col justify-between group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[80px] opacity-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D32F0F] rounded-full blur-[80px] opacity-20"></div>

                                <div className="relative z-10">
                                    <div className="w-32 h-32 flex items-center justify-center mb-6">
                                        <Factory className="w-24 h-24 text-green-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Industrial & Corporate</h4>
                                    <p className="text-gray-400 font-[Lato]">Supporting core business operations.</p>
                                </div>
                                <div className="relative z-10 flex flex-wrap gap-4">
                                    {nonItIndustries.map((tag, i) => (
                                        <div key={i} className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-xl text-white text-sm font-bold border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 hover:border-[#D32F0F]/50 transition-all duration-300 cursor-default group/tag shadow-lg hover:shadow-[#D32F0F]/20 hover:-translate-y-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F0F] group-hover/tag:shadow-[0_0_8px_#D32F0F] transition-shadow duration-300"></div>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <h3 className="text-3xl font-bold text-[#1D1D1D]">Corporate & <span className="text-[#D32F0F]">Plant Operations</span></h3>
                                <p className="text-gray-600 font-[Lato] text-lg leading-relaxed">
                                    We deliver specialized workforce solutions across diverse non-IT industries, supporting both corporate and plant-level roles to meet regulatory and operational expectations.
                                </p>
                                <ul className="space-y-4">
                                    {nonItRoles.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F0F] mt-2.5"></span>
                                            <span className="text-lg text-gray-700 font-[Lato]">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">15+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Talent Acquisition Experts</div>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">25+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Domain Profiles</div>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="text-3xl font-bold text-[#D32F0F] mb-1">75+</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Positions Served</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TalentIndustries;
