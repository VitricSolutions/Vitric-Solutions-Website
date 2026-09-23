import dedicated from "../../assets/images/aboutUs/Dedicated.webp";
import flexible from "../../assets/images/aboutUs/Flexible.webp";
import niche from "../../assets/images/aboutUs/Niche.webp";
import rapid from "../../assets/images/aboutUs/Rapid.webp";

import sap from "../../assets/images/aboutUs/Sap Solution.svg";
import kinaxis from "../../assets/images/aboutUs/Kinaxis.svg";
import dataSci from "../../assets/images/aboutUs/Data sci.svg";

import custom from "../../assets/images/aboutUs/Custom.svg";
import CRM from "../../assets/images/aboutUs/CRM.svg";
import { usePartner } from "../../Context/PartnerContext";

const ServicePortfolio = () => {
    const { openPartner } = usePartner();
    // 1. Technology & Digital Services Data
    const techServices = [
        { title: "SAP Solutions", desc: "SAP S/4HANA and SAP BTP implementations including Integration Suite, Fiori, CAP, BDC, and enterprise extensions.", icon: sap },
        { title: "Kinaxis RapidResponse", desc: "Advanced Demand Planning, Supply Planning, S&OP, and end-to-end supply chain optimization.", icon: kinaxis },
        { title: "Data Science & AI / ML", desc: "Predictive analytics, data engineering, and Generative AI-driven business applications.", icon: dataSci },
        { title: "CRM & Cloud Platforms", desc: "Salesforce and Microsoft Dynamics 365 implementations, integrations, and optimization.", icon: CRM },
        // { title: "ServiceNow Solutions", desc: "ITSM, ITOM, and workflow automation to improve operational efficiency.", icon: service },
        { title: "Custom App Development", desc: "End-to-end application development, modernization, and system integration services.", icon: custom }
    ];

    // 2. Recruitment & Workforce Solutions Data
    const recruitmentStrengths = [
        {
            title: "Rapid Sourcing",
            desc: "Rapid sourcing from a 10,000+ pre-vetted talent pool.",
            icon: rapid
        },
        {
            title: "Niche Expertise",
            desc: "Deep expertise in niche and high-demand technologies.",
            icon: niche
        },
        {
            title: "Flexible Models",
            desc: "Tailored engagement and delivery models.",
            icon: flexible
        },
        {
            title: "Dedicated Mgmt",
            desc: "Dedicated account management ensuring speed.",
            icon: dedicated
        }
    ];

    return (
        <>
            {/* --- Section 1: Technology & Digital Services (White Background) --- */}
            <section className="py-20 bg-white font-[Montserrat]">
                <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-16">

                    {/* Main Section Header */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-[#1D1D1D]">
                        Our Service <span className="text-[#D32F0F]">Portfolio</span>
                    </h2>

                    <div className="mb-24">
                        <div className="mb-12 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-4 flex items-center md:justify-start justify-center gap-3">
                                <span className="w-2 h-8 bg-[#D32F0F] rounded-full"></span>
                                Technology & Digital Services
                            </h3>
                            <p className="text-gray-600 text-lg max-w-3xl md:ml-5 text-center md:text-left font-[Lato]">
                                We deliver technology-led transformation services designed to modernize enterprise platforms, optimize operations, and enable data-driven decision-making.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {techServices.map((service, index) => (
                                <div key={index} className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D32F0F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                            <img src={service.icon} alt={service.title}  loading="lazy" />
                                        </div>
                                        <h4 className="text-xl font-bold text-[#1D1D1D] mb-3 group-hover:text-[#D32F0F] transition-colors">{service.title}</h4>
                                        <p className="text-gray-600 text-[15px] leading-relaxed font-[Lato]">
                                            {service.desc}
                                        </p>
                                    </div>
                                    {/* Decorative bottom line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D32F0F] group-hover:w-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Recruitment & Workforce Solutions (Red Theme Background) --- */}
            <section className="py-24 bg-gradient-to-br from-[#D32F0F] to-[#b91d00] font-[Montserrat] text-white relative overflow-hidden">

                {/* Decorative Circles/Patterns for Professional feel */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] transform -skew-x-12"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black opacity-[0.1] rounded-full blur-3xl"></div>

                <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            {/* Icon container */}
                            {/* <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <span className="text-2xl">👥</span>
                            </div> */}
                            <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Talent Solutions</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Recruitment & <br /> Workforce Solutions
                        </h3>

                        <p className="text-white/90 text-lg leading-relaxed mb-10 font-[Lato] font-light">
                            We deliver specialized IT and Non-IT hiring solutions across both permanent and contractual engagements, helping organizations build high-performing teams quickly and efficiently.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={openPartner}
                                className="px-8 py-4 bg-white text-[#D32F0F] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Find Talent
                            </button>
                            {/* <button className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                Join Our Network
                            </button> */}
                        </div>
                    </div>

                    {/* Right Cards Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recruitmentStrengths.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-[#D32F0F]/10 transition-colors">
                                        <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain"  loading="lazy" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-[#1D1D1D] mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-[Lato]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePortfolio;
