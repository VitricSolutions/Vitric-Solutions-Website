import { useState, useEffect, useRef } from 'react';
import { BookOpen, Layers, Zap, CheckCircle2, TrendingUp, Package, Flag } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = {
    foundations: {
        title: "Foundations",
        subtitle: "Build a strong base",
        icon: <BookOpen className="w-6 h-6" />,
        illustration: <Package className="w-32 h-32 text-blue-200" />,
        color: "bg-blue-500",
        items: [
            "Supply Chain Fundamentals",
            "Demand & Supply Planning",
            "Kinaxis RapidResponse Overview"
        ]
    },
    core: {
        title: "Core Planning",
        subtitle: "Master the essentials",
        icon: <Layers className="w-6 h-6" />,
        illustration: <TrendingUp className="w-32 h-32 text-red-200" />,
        color: "bg-[#D32F0F]",
        items: [
            "Forecasting & Inventory Optimization",
            "Material Requirements Planning (MRP)",
            "Scenario & Constraints Management",
            "Order Management",
            "SAP – Kinaxis Integration",
            "Comprehensive Case Studies"
        ]
    },
    advanced: {
        title: "Advanced & Integration",
        subtitle: "Real-world application",
        icon: <Zap className="w-6 h-6" />,
        illustration: <Flag className="w-32 h-32 text-purple-200" />,
        color: "bg-purple-600",
        items: [
            "Real-world implementation scenarios",
            "Integration use cases",
            "Project-oriented learning"
        ]
    }
};

const CurriculumOverview = () => {
    const [activeStage, setActiveStage] = useState('foundations');
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        const key = Object.keys(content)[index];
                        setActiveStage(key);
                    }
                },
                { threshold: 0.6 } // Update when 60% visible
            );

            observer.observe(ref);
            observers.push(observer);
        });

        // Intro Animation
        const ctx = gsap.context(() => {
            gsap.from(".timeline-node", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top 70%"
                }
            });
        });

        return () => {
            observers.forEach(obs => obs.disconnect());
            ctx.revert();
        };
    }, []);

    const stages = Object.keys(content) as Array<keyof typeof content>;

    return (
        <section className="py-24 bg-white font-[Montserrat] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Curriculum <span className="text-[#D32F0F]">Roadmap</span>
                    </h2>
                    <p className="text-gray-600 font-[Lato] text-lg">
                        A structured path from concepts to expert-level execution.
                    </p>
                </div>

                <div className="timeline-container max-w-5xl mx-auto relative">

                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2"></div>
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-[#D32F0F] to-purple-600 transform md:-translate-x-1/2 opacity-20"></div>

                    {stages.map((key, index) => {
                        const isActive = activeStage === key;
                        const isEven = index % 2 === 0; // 0, 2 (Foundations, Advanced) -> Right card, Left Empty 
                        // Actually, layout logic below:
                        // isEven (0): md:flex-row-reverse -> Card on Left visually? No.
                        // flex-row-reverse means: [Right Item] [Center] [Left Item]

                        return (
                            <div
                                key={key}
                                ref={el => { sectionRefs.current[index] = el }}
                                className={`relative flex items-center gap-8 mb-20 md:mb-32 transition-opacity duration-500 ${isEven ? 'md:flex-row-reverse' : ''} ${isActive ? 'opacity-100' : 'opacity-70 blur-[1px]'}`}
                            >

                                {/* Content Card Side */}
                                <div className={`flex-1 md:text-${isEven ? 'left' : 'right'} pl-16 md:pl-0`}>
                                    <div className={`p-8 rounded-2xl border-2 transition-all duration-500 transform ${isActive ? 'bg-white border-[#D32F0F] shadow-2xl scale-105 translate-x-0' : 'bg-gray-50 border-transparent hover:border-gray-200'}`}>
                                        <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-[#D32F0F]' : 'text-gray-900'}`}>{content[key].title}</h3>
                                        <p className="text-sm text-gray-500 mb-6 font-bold uppercase tracking-wider">{content[key].subtitle}</p>

                                        <div className="space-y-3">
                                            {content[key].items.map((item, i) => (
                                                <div key={i} className={`flex items-start gap-3 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                                    {isEven && <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />}
                                                    <span className="text-gray-700 font-[Lato] font-medium text-base">{item}</span>
                                                    {!isEven && <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="timeline-node absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full border-4 border-white shadow-xl z-10 bg-white">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500 ${isActive ? content[key].color + ' scale-110' : 'bg-gray-300'}`}>
                                        {content[key].icon}
                                    </div>
                                </div>

                                {/* "Empty" Side - Now Filled with Visual */}
                                <div className="flex-1 hidden md:flex items-center justify-center opacity-100">
                                    {/* Rotating Abstract Visual to fill space */}
                                    <div className={`relative w-48 h-48 rounded-full border-2 border-dashed ${isActive ? 'border-[#D32F0F]/30 animate-[spin_10s_linear_infinite]' : 'border-gray-200'} flex items-center justify-center`}>
                                        <div className="absolute inset-4 rounded-full border border-gray-100"></div>
                                        <div className={`transform transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-90 grayscale'}`}>
                                            {content[key].illustration}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CurriculumOverview;
