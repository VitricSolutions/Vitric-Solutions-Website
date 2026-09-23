import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Copy, Cloud, Database, Cpu, Share2, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DigitalServices = () => {
    const sectionRef = useRef(null);

    const services = [
        {
            title: "Full-Stack Application Engineering",
            desc: "We build robust, scalable, and user-centric applications across the entire technology stack.",
            items: [
                "Frontend, backend, and API development",
                "Modern UI/UX with secure, scalable architectures",
                "Microservices, event-driven systems, and API-first design",
                "Enterprise-grade web and application platforms"
            ],
            icon: <Copy className="w-8 h-8 text-white" />,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "Cloud & Platform Transformation",
            desc: "We help enterprises adopt cloud with confidence—designed for scale, security, and performance.",
            items: [
                "Cloud-native application development and migration",
                "Hybrid and multi-cloud architecture (AWS, Azure, GCP)",
                "DevOps, CI/CD pipelines, and platform automation",
                "Cloud optimization, reliability, and cost management"
            ],
            icon: <Cloud className="w-8 h-8 text-white" />,
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "Data Platforms & Analytics",
            desc: "We design data foundations that turn information into insight and action.",
            items: [
                "Enterprise data architecture and modern data platforms",
                "Data engineering, ETL/ELT pipelines, and governance",
                "Business intelligence, dashboards, and reporting",
                "Real-time and advanced analytics"
            ],
            icon: <Database className="w-8 h-8 text-white" />,
            color: "from-purple-600 to-pink-600"
        },
        {
            title: "AI & Intelligent Automation",
            desc: "We apply AI where it matters—embedded into real business workflows.",
            items: [
                "AI/ML solutions for automation and decision support",
                "GenAI applications for productivity and knowledge management",
                "Predictive and prescriptive intelligence",
                "Responsible, scalable AI implementations"
            ],
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: "from-[#D32F0F] to-orange-600"
        },
        {
            title: "Enterprise Integration & Modernization",
            desc: "We modernize legacy environments and connect systems into a unified digital ecosystem.",
            items: [
                "Application modernization and re-platforming",
                "API management, middleware, and event streaming",
                "Secure enterprise integrations",
                "Scalable, future-ready digital landscapes"
            ],
            icon: <Share2 className="w-8 h-8 text-white" />,
            color: "from-emerald-500 to-teal-700"
        },
        {
            title: "Talent & Capability Building",
            desc: "We focus on enabling people—not just delivering projects.",
            items: [
                "In-house full-stack engineers, cloud architects, data engineers, and AI specialists",
                "Co-building and hands-on enablement with client teams",
                "Structured knowledge transfer and capability development",
                "Sustainable delivery models beyond go-live"
            ],
            icon: <Users className="w-8 h-8 text-white" />,
            color: "from-rose-500 to-red-600"
        }
    ];

    const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 25).toFixed(2);
        const rotateY = ((centerX - x) / 25).toFixed(2);

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
            gsap.fromTo(".service-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="digital-services" ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50 font-[Montserrat] overflow-hidden">
            <div className="max-w-[85rem] mx-auto">
                <div className="text-center mb-20">
                    <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block">Our Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                        End-to-End <span className="text-[#D32F0F]">Digital Services</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#D32F0F] mx-auto rounded-full opacity-80"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleTilt}
                            onMouseLeave={handleTiltReset}
                            className="service-card group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl cursor-default transition-all duration-300 transform-style-3d will-change-transform h-full flex flex-col"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Floating Header */}
                            <div className="relative transform translate-z-10 group-hover:translate-z-20 transition-transform duration-300 mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1D1D1D] mb-3 leading-tight min-h-[56px] flex items-center">{item.title}</h3>
                            </div>

                            {/* Content */}
                            <div className="transform translate-z-5 group-hover:translate-z-10 transition-transform duration-300 flex-grow">
                                <p className="text-sm text-gray-600 font-[Lato] mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                <ul className="space-y-3 pt-4 border-t border-gray-100">
                                    {item.items.map((sub, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-[Lato]">
                                            <span className={`mt-1.5 min-w-[6px] h-1.5 rounded-full bg-gradient-to-r ${item.color}`}></span>
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D32F0F]/5 pointer-events-none transition-colors duration-300"></div>
                            <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalServices;
