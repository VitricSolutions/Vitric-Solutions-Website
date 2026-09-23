import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, LineChart, Zap } from "lucide-react";
import { useAssessment } from "../../Context/AssessmentContext";

gsap.registerPlugin(ScrollTrigger);

const BdcSection = () => {
    const { openAssessment } = useAssessment();
    const sectionRef = useRef(null);

    const competencies = [
        {
            title: "Data Architecture & Strategy",
            items: [
                "Robust data modeling & architecture design",
                "SAP BDC strategy implementation",
                "Data harmonization and governance"
            ],
            icon: <Database className="w-8 h-8 text-white" />,
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "SAP Analytics Cloud",
            items: [
                "Advanced reporting & planning solutions",
                "Interactive dashboards and visualization",
                "Predictive analytics and forecasting"
            ],
            icon: <LineChart className="w-8 h-8 text-white" />,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Integration & Insights",
            items: [
                "Seamless integration across SAP & non-SAP",
                "Supply Chain & Finance control towers",
                "Real-time business insights"
            ],
            icon: <Zap className="w-8 h-8 text-white" />,
            color: "from-red-500 to-rose-600"
        }
    ];

    const strengths = [
        "Strong domain expertise across Supply Chain, Finance, and Operations",
        "Experience with analytics, planning, and control tower solutions",
        "Ability to translate business questions into actionable insights",
        "Global delivery model with quality-focused execution",
        "Deep knowledge of SAP data ecosystem"
    ];

    const services = [
        "SAP BDC strategy and implementation",
        "Enterprise analytics and dashboard development",
        "Data integration and harmonization",
        "Advanced planning and forecasting analytics",
        "Ongoing analytics support and enhancement"
    ];

    const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20).toFixed(2);
        const rotateY = ((centerX - x) / 20).toFixed(2);

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleTiltReset = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });
    };

    useEffect(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#F9FAFB] font-[Montserrat] relative overflow-hidden perspective-[2000px]">

            {/* Background Mesh Gradient */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D32F0F]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl"></div>

            <div className="max-w-[85rem] mx-auto relative z-10">

                {/* 1. Header Section - Centered */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block py-1 px-3 border border-[#D32F0F]/20 rounded-full bg-[#D32F0F]/5 mb-6">
                        <span className="text-xs font-bold tracking-widest text-[#D32F0F] uppercase">Business Data</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                        SAP Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-[#ff5b5b]">Data Cloud</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-[Lato]">
                        We enable data-driven decision-making by designing and delivering modern data platforms that provide real-time insights, advanced analytics, and seamless data integration.
                    </p>
                </div>

                {/* 2. Competencies - 3D Interactive Design */}
                <div className="mb-24">
                    <div className="flex flex-col items-center text-center mb-20 relative">
                        <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">Core Expertise</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6 relative z-10">
                            Data <span className="text-[#D32F0F]">Competencies</span>
                        </h3>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D32F0F] to-transparent rounded-full opacity-80"></div>

                        {/* Background Watermark/Depth Element */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-bold text-gray-100 opacity-40 select-none pointer-events-none whitespace-nowrap -z-10">
                            DATA CLOUD
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competencies.map((comp, idx) => (
                            <div
                                key={idx}
                                onMouseMove={handleTilt}
                                onMouseLeave={handleTiltReset}
                                className="group relative bg-white rounded-3xl p-8 border border-white/40 shadow-xl backdrop-blur-sm cursor-default transform-style-3d will-change-transform"
                                style={{ transformStyle: 'preserve-3d' }}>
                                {/* 3D Floating Elements */}
                                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${comp.color} opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>

                                {/* Header with Icon */}
                                <div className="relative transform translate-z-10 group-hover:translate-z-20 transition-transform duration-300 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-3xl shadow-lg mb-4 text-white`}>
                                        {comp.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1D1D1D] leading-tight">{comp.title}</h4>
                                </div>

                                {/* Divider */}
                                <div className="w-12 h-1 bg-gray-100 mb-6 rounded-full group-hover:w-full group-hover:bg-[#D32F0F]/20 transition-all duration-500"></div>

                                {/* Bullet Points */}
                                <ul className="space-y-3 relative transform translate-z-5 group-hover:translate-z-10 transition-transform duration-300">
                                    {comp.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-[Lato]">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${comp.color}`}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D32F0F]/10 pointer-events-none transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Strengths & Services - Split Feature Block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#D32F0F] via-orange-400 to-[#D32F0F]"></div>

                    {/* Strengths */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#1D1D1D] mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-[#D32F0F]"></span>
                            Key Strengths
                        </h3>
                        <ul className="space-y-4">
                            {strengths.map((str, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D32F0F]"></div>
                                    <p className="text-gray-600 font-[Lato] text-sm">{str}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-[#1D1D1D] mb-6">Services</h3>
                        <ul className="space-y-4">
                            {services.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#D32F0F] mt-0.5">★</span>
                                    <span className="text-gray-700 font-medium font-[Lato] text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={openAssessment}
                            className="mt-8 px-6 py-3 bg-[#1D1D1D] text-white rounded-lg text-sm font-bold hover:bg-[#D32F0F] transition-colors w-full sm:w-auto">
                            Schedule a Discovery Call
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BdcSection;
