import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useContact } from "../../Context/Context";

const SapHero = () => {
    const { openContact } = useContact();
    const heroRef = useRef<HTMLDivElement>(null);
    const floatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Entrance Animation
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2 }
        ).fromTo(".hero-text-anim",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
            "-=0.5"
        );

        // Floating Animation for 3D Elements
        if (floatRef.current) {
            gsap.to(floatRef.current.children, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-5, 5)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 1,
                    from: "random"
                }
            });
        }
    }, []);

    return (
        <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white font-[Montserrat]">

            {/* Background 3D Elements - Adjusted for Light Theme */}
            <div ref={floatRef} className="absolute inset-0 pointer-events-none z-0">
                {/* Large Red Orb */}
                <div className="absolute top-1/4 right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-[#D32F0F] to-[#ff5b5b] opacity-10 blur-3xl"></div>
                {/* Small Gray/Red Orb */}
                <div className="absolute bottom-1/3 left-[10%] w-64 h-64 rounded-full bg-gray-100 opacity-60 blur-3xl"></div>
                {/* Geometric Shape 1 */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-[#D32F0F]/10 rounded-3xl transform rotate-12 bg-white shadow-lg"></div>
                {/* Geometric Shape 2 */}
                <div className="absolute bottom-40 right-40 w-48 h-48 border border-gray-100 rounded-full transform -rotate-12 bg-gray-50/50 backdrop-blur-sm"></div>
            </div>

            {/* Grid Overlay - Darker for visibility on white */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

            <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="hero-text-anim inline-block mb-6 px-4 py-1.5 rounded-full border border-[#D32F0F]/20 bg-[#D32F0F]/5">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#D32F0F] uppercase">
                        Enterprise Excellence
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="hero-text-anim text-5xl md:text-7xl lg:text-8xl font-bold text-[#1D1D1D] mb-8 tracking-tight leading-none">
                    SAP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-[#ff5b5b]">Transformation</span> <br />
                    <span className="font-light opacity-80 text-gray-500">Redefined.</span>
                </h1>

                {/* Description */}
                <p className="hero-text-anim text-lg md:text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed font-[Lato] font-light">
                    Unlock the full potential of your SAP landscape with Vitric's specialized services in <span className="text-[#D32F0F] font-bold">BTP</span>, <span className="text-[#D32F0F] font-bold">BTM</span>, and <span className="text-[#D32F0F] font-bold">BDC</span>. We bridge the gap between strategy, data, and intelligent execution.
                </p>

                {/* CTA Buttons */}
                <div className="hero-text-anim flex flex-col sm:flex-row items-center gap-6">
                    <button
                        onClick={openContact}
                        className="px-10 py-4 bg-[#D32F0F] text-white font-bold tracking-wide rounded-full hover:bg-[#b02206] transition-all shadow-[0_10px_30px_-10px_rgba(211,47,15,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(211,47,15,0.6)] transform hover:-translate-y-1"
                    >
                        Start Transformation
                    </button>
                    {/* <button className="px-10 py-4 border border-gray-200 text-[#1D1D1D] font-medium tracking-wide rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
                        Explore Capabilities
                    </button> */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <div className="w-6 h-10 border-2 border-[#1D1D1D] rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-[#1D1D1D] rounded-full"></div>
                </div>
            </div>

        </section>
    );
};

export default SapHero;
