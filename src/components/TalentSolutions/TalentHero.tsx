import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Laptop, Factory, Globe } from "lucide-react";
import { usePartner } from "../../Context/PartnerContext";

const TalentHero = () => {
    const heroRef = useRef(null);
    const { openPartner } = usePartner();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".hero-text",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            );

            gsap.fromTo(".hero-visual",
                { scale: 0.8, opacity: 0, rotateY: 15 },
                { scale: 1, opacity: 1, rotateY: -10, duration: 1.5, ease: "power3.out", delay: 0.2 }
            );

            // Floating animation for cards
            gsap.to(".float-card", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const scrollToExpertise = () => {
        const element = document.getElementById('talent-expertise');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} className="relative pt-18 pb-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden min-h-[90vh] flex items-center font-[Montserrat]">

            {/* Background Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#D32F0F]/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-[85rem] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="max-w-2xl">
                    <div className="hero-text inline-flex items-center gap-2 py-2 px-4 border border-[#D32F0F]/20 rounded-full bg-white mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#D32F0F] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-[#D32F0F] uppercase">Talent Solutions</span>
                    </div>

                    <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] leading-[1.1] mb-8">
                        Talent Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] via-red-500 to-orange-500">
                            IT & Non-IT Industries
                        </span>
                    </h1>

                    <h2 className="hero-text text-xl md:text-2xl text-gray-800 font-bold mb-6">
                        Empowering Businesses with Expert Workforce Solutions
                    </h2>

                    <p className="hero-text text-lg text-gray-600 font-[Lato] leading-relaxed mb-10 border-l-4 border-[#D32F0F] pl-6">
                        Vitric delivers end-to-end talent solutions across IT and Non-IT industries, helping organizations build high-performing teams that drive innovation, efficiency, and growth. With over 9 years of expertise in the global talent ecosystem, we partner with clients to deliver the right talent—at the right time—with precision and confidence.
                    </p>

                    <div className="hero-text flex flex-wrap gap-4">
                        <button
                            onClick={openPartner}
                            className="px-8 py-4 bg-[#D32F0F] text-white rounded-full font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20"
                        >
                            Find Talent
                        </button>
                        <button
                            onClick={scrollToExpertise}
                            className="px-8 py-4 bg-white text-[#1D1D1D] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors"
                        >
                            View Expertise
                        </button>
                    </div>
                </div>

                {/* 3D Visual Infographic */}
                <div className="relative h-[600px] flex items-center justify-center perspective-[1000px] hidden lg:flex">
                    <div className="hero-visual relative w-full h-full transform-style-3d">

                        {/* Central Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border border-white/50 backdrop-blur-sm">
                            <div className="absolute inset-0 rounded-full border border-[#D32F0F]/10 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border border-dashed border-gray-200 animate-[spin_20s_linear_infinite_reverse]"></div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-[#D32F0F] mb-1">9+</div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years of<br />Excellence</div>
                            </div>
                        </div>

                        {/* Floating Cards (Orbiting) */}

                        {/* Card 1: IT */}
                        <div className="float-card absolute top-[10%] left-[10%] p-5 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 w-64 transform -rotate-6 z-20">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                                <Laptop className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">IT Solutions</div>
                                <div className="text-xs text-gray-500">SAP, Cloud, AI, Data</div>
                            </div>
                        </div>

                        {/* Card 2: Non-IT */}
                        <div className="float-card absolute bottom-[20%] right-[0%] p-5 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 w-64 transform rotate-3 z-20" style={{ animationDelay: '-1s' }}>
                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                                <Factory className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Non-IT Industries</div>
                                <div className="text-xs text-gray-500">Healthcare, Pharma</div>
                            </div>
                        </div>

                        {/* Card 3: Global */}
                        <div className="float-card absolute top-[20%] right-[5%] p-4 bg-[#1D1D1D] text-white rounded-2xl shadow-xl flex items-center gap-3 w-56 transform rotate-6 z-0">
                            <div className="w-10 h-10 rounded-lg bg-[#D32F0F] flex items-center justify-center">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold">Global Reach</div>
                                <div className="text-xs text-gray-400">Targeted hiring</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TalentHero;
