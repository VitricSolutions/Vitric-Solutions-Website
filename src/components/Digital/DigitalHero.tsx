import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Cpu, Network, Layers, Code2 } from "lucide-react";

const DigitalHero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".hero-text",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            );

            gsap.fromTo(".cube-layer",
                { scale: 0, rotateY: 180 },
                { scale: 1, rotateY: -20, duration: 1.5, stagger: 0.2, ease: "back.out(1.2)", delay: 0.5 }
            );

            // Floating animation for cube elements
            gsap.to(".float-icon", {
                y: -15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.3
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative pt-16 pb-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden min-h-[85vh] flex items-center font-[Montserrat]">

            {/* Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#D32F0F]/5 to-transparent rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-[85rem] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="max-w-2xl">
                    <div className="hero-text inline-flex items-center gap-2 py-2 px-4 border border-[#D32F0F]/20 rounded-full bg-white mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#D32F0F] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-[#D32F0F] uppercase">Digital Excellence</span>
                    </div>

                    <h1 className="hero-text text-4xl md:text-5xl lg:text-7xl font-bold text-[#1D1D1D] leading-[1.1] mb-8">
                        Design, Build, & <br /> Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-orange-500">Modern Digital Platforms</span>
                    </h1>

                    <p className="hero-text text-lg text-gray-600 font-[Lato] leading-relaxed mb-10 border-l-4 border-[#D32F0F] pl-6">
                        At Vitric, we help organizations design, build, and scale modern digital platforms. Our services are engineered to create strong technology foundations, enable data-driven decisions, and unlock intelligent automation—with a clear focus on long-term capability building.
                    </p>

                    <div className="hero-text flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById("digital-services")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-4 bg-[#D32F0F] text-white rounded-full font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20">
                            Explore Services
                        </button>
                        {/* <button className="px-8 py-4 bg-white text-[#1D1D1D] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors">
                            Our Approach
                        </button> */}
                    </div>
                </div>

                {/* Right 3D Visual - Stacked Layers */}
                <div className="relative h-[600px] flex items-center justify-center perspective-[1200px] hidden lg:flex">
                    <div className="relative w-full h-full flex items-center justify-center transform-style-3d rotate-y-[-20deg] rotate-x-[10deg]">

                        {/* Base Layer - Foundation */}
                        <div className="cube-layer absolute text-white transform translate-y-[120px] translate-z-[-100px] w-80 h-40 bg-[#1D1D1D] rounded-2xl border border-gray-700 shadow-2xl flex items-center justify-center opacity-80 backdrop-blur-md">
                            <div className="flex flex-col items-center gap-2">
                                <Network className="w-10 h-10 text-gray-400" />
                                <span className="font-bold tracking-widest text-gray-500 uppercase text-xs">Infrastructure</span>
                            </div>
                        </div>

                        {/* Middle Layer - Data */}
                        <div className="cube-layer absolute text-white transform translate-y-[0px] w-72 h-40 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] flex items-center justify-center border border-white/20 backdrop-blur-md z-10">
                            <div className="flex flex-col items-center gap-2">
                                <Layers className="w-10 h-10 text-white" />
                                <span className="font-bold tracking-widest text-white/80 uppercase text-xs">Data Platform</span>
                            </div>
                            <div className="float-icon absolute -right-8 -top-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-600">
                                <span className="text-2xl font-bold">01</span>
                            </div>
                        </div>

                        {/* Top Layer - Digital/AI */}
                        <div className="cube-layer absolute text-white transform translate-y-[-140px] translate-z-[100px] w-64 h-32 bg-gradient-to-br from-[#D32F0F] to-orange-500 rounded-2xl shadow-[0_20px_50px_rgba(211,47,15,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-md z-20">
                            <div className="flex flex-col items-center gap-2">
                                <Cpu className="w-10 h-10 text-white" />
                                <span className="font-bold tracking-widest text-white/90 uppercase text-xs">AI & Automation</span>
                            </div>
                            <div className="float-icon absolute -left-6 -bottom-6 w-14 h-14 bg-[#1D1D1D] rounded-xl shadow-lg flex items-center justify-center text-[#D32F0F]">
                                <Code2 className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Connecting Lines */}
                        <div className="absolute w-[2px] h-[300px] bg-gradient-to-b from-[#D32F0F] via-blue-500 to-gray-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50"></div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default DigitalHero;
