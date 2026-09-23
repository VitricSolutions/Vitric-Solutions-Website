import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCheck, Handshake, Zap, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TalentExpertise = () => {
    const sectionRef = useRef(null);

    const expertise = [
        {
            title: "Executive Search",
            desc: "Expertise matters because results count.",
            items: [
                "Senior & Leadership Hiring",
                "Confidential & Strategic Searches",
                "Industry-specific Executive Talent",
                "High-impact, hard-to-find profiles"
            ],
            icon: <UserCheck className="w-8 h-8 text-white" />,
            color: "from-gray-700 to-black"
        },
        {
            title: "Recruitment Services",
            desc: "Permanent hiring for long-term success.",
            items: [
                "Deep role & culture alignment",
                "Success-only (contingent) model",
                "Curated high-quality shortlist",
                "Time-efficient delivery"
            ],
            icon: <Handshake className="w-8 h-8 text-white" />,
            color: "from-[#D32F0F] to-red-600"
        },
        {
            title: "Contract Staffing",
            desc: "Flexible, skilled resources for dynamic needs.",
            items: [
                "Qualified candidates aligned to phases",
                "Swift turnaround & skill mapping",
                "End-to-end contractor management",
                "Compliance & payroll processing"
            ],
            icon: <Zap className="w-8 h-8 text-white" />,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "Contract-to-Hire",
            desc: "Evaluate talent before committing.",
            items: [
                "Real-world performance evaluation",
                "Reduced hiring risk & attrition",
                "Seamless transition to permanent",
                "Regular onsite support"
            ],
            icon: <RefreshCw className="w-8 h-8 text-white" />,
            color: "from-emerald-500 to-teal-600"
        }
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
        const ctx = gsap.context(() => {
            gsap.fromTo(".expert-card",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="talent-expertise" ref={sectionRef} className="scroll-mt-24 py-24 px-4 md:px-8 lg:px-16 bg-[#F9FAFB] font-[Montserrat] relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto">

                <div className="text-center mb-20">
                    <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block">Service Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                        Our Talent <span className="text-[#D32F0F]">Expertise</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#D32F0F] mx-auto rounded-full opacity-80"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleTilt}
                            onMouseLeave={handleTiltReset}
                            className="expert-card group relative bg-white rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl cursor-default transition-all duration-300 transform-style-3d will-change-transform"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Abstract Color Blob */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                            <div className="relative transform translate-z-10 group-hover:translate-z-20 transition-transform duration-300">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1D1D1D] mb-3 leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-500 font-[Lato] mb-6 min-h-[40px]">{item.desc}</p>

                                <ul className="space-y-3">
                                    {item.items.map((sub, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-[Lato]">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}></span>
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D32F0F]/10 pointer-events-none transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TalentExpertise;
