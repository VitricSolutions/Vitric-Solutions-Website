import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import holistic_solutions from "../../assets/images/aboutUs/Holistic_Solutions.svg"
import expertise_growth from "../../assets/images/aboutUs/Expertise_Growth.svg"
import strategic_partnership from "../../assets/images/aboutUs/Strategic_Partnership.svg"

// Register ScrollTrigger if not already done globally
gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const features = [
        {
            title: "Holistic Solutions",
            text: "Vitric Business Solutions offers a wide range of software solutions and consulting services for several industries.",
            icon: holistic_solutions
        },
        {
            title: "Expertise & Growth",
            text: "We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project.",
            icon: expertise_growth
        },
        {
            title: "Strategic Partnership",
            text: "We partner with our clients to develop engaging business strategies, design high quality and scalable solutions and build rich brand experiences.",
            icon: strategic_partnership
        }
    ];

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // Animate Title
        gsap.fromTo(el.querySelector(".company-title"),
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );

        // Animate Cards Staggered
        gsap.fromTo(cardRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                }
            }
        );

    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };


    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#F9FAFB] font-[Montserrat] overflow-hidden relative">
            <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Side - Sticky Title Area */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit company-title">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-1 bg-[#D32F0F] rounded-full"></span>
                        <span className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm">Who We Are</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
                        Our <br /> <span className="text-[#D32F0F]">Company</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed font-[Lato] mb-8">
                        We combine technology, strategy, and design to build solutions that matter.
                    </p>

                    {/* <button className="text-[#D32F0F] font-bold border-b-2 border-[#D32F0F] pb-1 hover:text-[#b91d00] hover:border-[#b91d00] transition-colors">
                        Learn More About Us
                    </button> */}
                </div>

                {/* Right Side - Feature Cards */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="group bg-white p-8 md:p-10 rounded-2xl shadow-[0_5px_20px_-5px_rgba(0,0,0,0.03)] border-l-4 border-transparent hover:border-[#D32F0F] hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
                        >
                            {/* Hover Background Effect - Subtle Slide */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-red-50 text-[#D32F0F] group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_0_0_2px_#D32F0F] transition-all duration-300">
                                {/* Logic to handle Image Icons vs Text Icons */}
                                {typeof item.icon === 'string' && item.icon.length < 5 ? (
                                    <span>{item.icon}</span>
                                ) : (
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                                )}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-[#1D1D1D] mb-3 group-hover:text-[#D32F0F] transition-colors">{item.title}</h3>
                                <p className="text-gray-600 text-[16px] leading-relaxed font-[Lato]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CompanySection;
