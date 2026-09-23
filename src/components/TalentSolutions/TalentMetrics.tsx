import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePartner } from "../../Context/PartnerContext";

gsap.registerPlugin(ScrollTrigger);

const TalentMetrics = () => {
    const { openPartner } = usePartner();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".metric-fade",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] relative overflow-hidden">
            {/* Background Light Mesh */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-50 to-transparent rounded-full -z-10 blur-3xl"></div>

            <div className="max-w-[85rem] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="metric-fade">
                        <span className="text-[#D32F0F] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Advantage</span>
                        <h2 className="text-4xl font-bold text-[#1D1D1D] mb-8">Why Choose <span className="text-[#D32F0F]">Vitric</span>?</h2>
                        <ul className="space-y-6">
                            {[
                                "9+ years of global recruitment expertise",
                                "Strong talent networks across IT & Non-IT domains",
                                "Limited, high-quality candidate submissions",
                                "Speed, precision, and reliability",
                                "Client-centric and relationship-driven approach"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg font-[Lato] text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F0F]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={openPartner}
                            className="mt-10 px-8 py-4 bg-[#1D1D1D] text-white rounded-full font-bold hover:bg-[#D32F0F] transition-colors shadow-lg hover:shadow-xl cursor-pointer">
                            Partner With Us
                        </button>
                    </div>
                    <div className="relative metric-fade">
                        {/* Graphic representing connection/speed - Light Mode */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl text-center group hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-[#D32F0F] mb-1">75+</div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Key Roles Filled</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl text-center translate-y-8 group hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-[#D32F0F] mb-1">98%</div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Retention Rate</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl text-center group hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-[#D32F0F] mb-1">48h</div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Turnaround</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl text-center translate-y-8 group hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-[#D32F0F] mb-1">Global</div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Network</div>
                            </div>
                        </div>

                        {/* Decorative Blob behind elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full -z-10 blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentMetrics;
