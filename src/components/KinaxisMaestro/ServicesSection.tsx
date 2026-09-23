
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import phase1 from "../../assets/images/kinaxisMaestro/icons/Phase 01.svg";
import phase2 from "../../assets/images/kinaxisMaestro/icons/Phase 02.svg";
import phase3 from "../../assets/images/kinaxisMaestro/icons/Phase 03.svg";
import phase4 from "../../assets/images/kinaxisMaestro/icons/Phase 04.svg";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const containerRef = useRef(null);

    const services = [
        {
            id: "01",
            title: "Implementation & Transformation",
            points: [
                "Business requirement definition and blueprinting",
                "Model design, configuration, and validation",
                "Integration with ERP and planning systems",
                "End user training and enablement",
                "Go live support and continuous tuning"
            ],
            icon: phase1
        },
        {
            id: "02",
            title: "Audit & Health Assessment",
            points: [
                "Kinaxis environment assessment for optimization",
                "Data model health checks",
                "Authoring conflict and logic reviews",
                "Actionable improvement roadmap"
            ],
            icon: phase2
        },
        {
            id: "03",
            title: "Continuous Innovation & Support",
            points: [
                "Functional and technical support",
                "Release management and upgrades",
                "Process enhancement and user enablement",
                "Integration services leveraging SAP BTP"
            ],
            icon: phase3
        },
        {
            id: "04",
            title: "Talent & Capability Enablement",
            points: [
                "Kinaxis staffing and staff augmentation",
                "Corporate training and capability building",
                "Knowledge transfer aligned to goals"
            ],
            icon: phase4
        }
    ];

    useEffect(() => {
        const cards = gsap.utils.toArray(".service-row") as HTMLElement[];

        cards.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden relative font-[Montserrat]">
            {/* Background Decorative Line - Perfectly Centered relative to viewport/section */}
            <div className="absolute top-[330px] left-8 md:left-1/2 w-0.5 h-[calc(100%-450px)] bg-[linear-gradient(to_bottom,transparent_0px,rgba(211,47,15,0.3)_80px,rgba(211,47,15,0.3)_calc(100%-80px),transparent_100%)] -translate-x-1/2 z-0 hidden md:block"></div>
            <div className="max-w-[85rem] mx-auto relative z-10">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1D] mb-4">Kinaxis <span className="text-[#D32F0F]">Services</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-[Lato]">
                        End-to-end suite of services designed to help enterprises plan smarter, respond faster, and operate with confidence.
                    </p>
                </div>

                <div className="flex flex-col gap-12 md:gap-0">
                    {services.map((service, index) => (
                        <div key={index} className={`service-row flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full relative`}>

                            {/* Central Connector Dot - Moved to Parent for Perfect Alignment */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#D32F0F] shadow-sm z-30"></div>

                            {/* Icon/Visual Side */}
                            <div className={`w-full md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'} relative py-12`}>

                                {/* Horizontal Connector Line */}
                                {index % 2 === 0 ? (
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 hidden md:block w-16 h-[2px] bg-[#D32F0F]"></div>
                                ) : (
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 hidden md:block w-16 h-[2px] bg-[#D32F0F]"></div>
                                )}

                                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 z-10">
                                    {/* Subtle Red Gradient Top */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D32F0F] to-red-400"></div>

                                    <div className="w-16 h-16 mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={service.icon} alt="" className="w-full h-full object-contain"  loading="lazy" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1D1D1D] group-hover:text-[#D32F0F] transition-colors mb-2 relative z-10">{service.title}</h3>
                                    <span className="text-8xl font-bold text-gray-50 absolute -bottom-2 -right-2 z-0 select-none pointer-events-none leading-none">{service.id}</span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`w-full md:w-1/2 text-left ${index % 2 !== 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} py-12`}>
                                <div className={`inline-block px-3 py-1 bg-[#D32F0F]/10 text-[#D32F0F] font-bold text-sm rounded-full mb-4 ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
                                    Phase {service.id}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-6">{service.title}</h3>

                                <ul className={`space-y-3 ${index % 2 !== 0 ? 'flex flex-col items-end' : ''}`}>
                                    {service.points.map((point, i) => (
                                        <li key={i} className={`flex items-start gap-3 text-gray-600 font-[Lato] text-[16px] ${index % 2 !== 0 ? 'flex-row-reverse text-right' : ''}`}>
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#D32F0F] rounded-full flex-shrink-0"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
