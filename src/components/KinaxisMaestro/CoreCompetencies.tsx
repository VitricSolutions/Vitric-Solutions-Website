
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoreCompetencies = () => {
    const sectionRef = useRef(null);
    const listRef = useRef<HTMLDivElement>(null);

    const competencies = [
        {
            title: "Kinaxis Maestro Architecture & Planning Design",
            desc: "Expert design planning models for optimal performance."
        },
        {
            title: "Enterprise Supply Chain Transformation",
            desc: "End-to-end transformation strategies aligned with business goals."
        },
        {
            title: "Advanced Planning Models",
            desc: "Demand, Supply, S&OP, Inventory Optimization (MEIO), Dual Sourcing, Expiry based Planning."
        },
        {
            title: "Data Model & Authoring Governance",
            desc: "Robust data authoring, integrity checks, and governance frameworks."
        },
        {
            title: "ERP & Ecosystem Integrations",
            desc: "SAP centric landscapes and seamless data integration."
        },
        {
            title: "Business led Transformation & Roadmapping",
            desc: "Strategy-first approach to technology adoption."
        }
    ];

    useEffect(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
        );

        if (listRef.current) {
            gsap.fromTo(listRef.current.children,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3, scrollTrigger: { trigger: listRef.current, start: "top 80%" } }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-12 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] overflow-hidden">
            <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side: Strategic Context (Sticky) */}
                <div className="w-full lg:w-4/12">
                    <div className="sticky top-32">
                        <span className="inline-block py-1 px-3 border border-[#D32F0F] text-[#D32F0F] text-xs font-bold tracking-widest uppercase mb-6 rounded-full bg-white">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1D] mb-8 leading-tight">
                            Core Competencies
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-[Lato] mb-8">
                            Our strength lies in uniting business and technology to close the gap where most transformations fail. We bring specialized expertise across the entire supply chain value chain.
                        </p>

                        <div className="p-6 bg-[#F9FAFB] rounded-xl border border-gray-100 border-l-4 border-l-[#D32F0F]">
                            <p className="text-gray-800 italic font-[Lato] text-base leading-relaxed">
                                "Our consultants apply best practices without unnecessary customization, ensuring scalable, upgrade safe solutions."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Competencies List - Compact Two Column Grid */}
                <div className="w-full lg:w-8/12 pt-12" ref={listRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {competencies.map((item, index) => (
                            <div key={index} className="group flex items-start p-5 rounded-xl bg-white border border-gray-100 hover:border-[#D32F0F]/30 hover:shadow-lg hover:shadow-[#D32F0F]/5 transition-all duration-300 transform hover:-translate-y-1">

                                {/* Bullet Point Marker (Replacing Icon) */}
                                <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-[#D32F0F]/10 flex items-center justify-center group-hover:bg-[#D32F0F] transition-colors duration-300">
                                    <div className="w-2 h-2 bg-[#D32F0F] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-[#1D1D1D] mb-2 group-hover:text-[#D32F0F] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 font-[Lato] text-xs leading-relaxed">
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

export default CoreCompetencies;
