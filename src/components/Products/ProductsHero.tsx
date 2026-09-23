import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight, Box, Layers, Zap, Hexagon, Database, Cloud } from "lucide-react";

const ProductsHero = () => {
    const heroRef = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".p-hero-fade",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            );

            // Floating Ecosystem Animation
            gsap.to(".eco-float", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.5,
                    from: "random"
                }
            });

            // Orbit Rotation
            gsap.to(".eco-orbit", {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "linear"
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="min-h-[90vh] pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#fafafa] font-[Montserrat] relative overflow-hidden flex flex-col justify-center">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40" style={{
                backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>

            {/* Soft Gradients (Red Tint) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <div className="p-hero-fade inline-flex items-center gap-2 py-2 px-5 bg-white border border-gray-100 rounded-full text-sm font-bold tracking-widest uppercase mb-8 text-[#D32F0F] shadow-sm">
                        <Zap className="w-4 h-4" />
                        Next-Gen Enterprise Suite
                    </div>

                    <h1 className="p-hero-fade text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-[#1D1D1D]">
                        Smart Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-[#1D1D1D]">Modern Enterprises</span>
                    </h1>

                    <p className="p-hero-fade text-gray-500 text-xl font-[Lato] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed border-l-4 border-[#D32F0F] pl-6 bg-white/50 backdrop-blur-sm py-2 rounded-r-xl">
                        Vitric combines deep domain expertise with practical execution across technology, talent, and capability building.
                    </p>

                    <div className="p-hero-fade">
                        <button onClick={() => document.getElementById('feedback-system')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-[#D32F0F] hover:bg-[#b01e00] text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-[#D32F0F]/20 flex items-center justify-center lg:justify-start gap-2 mx-auto lg:mx-0 group">
                            Discover Ecosystem
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* 3D Glassmorphism Infographic */}
                <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center perspective-[1000px]">

                    {/* Central Hub */}
                    <div className="w-32 h-32 bg-white/80 backdrop-blur-md rounded-3xl rotate-45 flex items-center justify-center shadow-[0_20px_50px_rgba(211,47,15,0.15)] z-20 relative eco-float border border-white/50">
                        <Box className="w-12 h-12 text-[#D32F0F] -rotate-45" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                    </div>

                    {/* Orbit Ring 1 */}
                    <div className="absolute w-[350px] h-[350px] border border-gray-200 rounded-full eco-orbit flex items-center justify-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white shadow-xl shadow-red-100 rounded-2xl flex items-center justify-center eco-float" style={{ animationDelay: '0.5s' }}>
                            <Database className="w-6 h-6 text-[#D32F0F]" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white shadow-xl shadow-gray-200 rounded-2xl flex items-center justify-center eco-float" style={{ animationDelay: '1s' }}>
                            <Cloud className="w-6 h-6 text-[#1D1D1D]" />
                        </div>
                    </div>

                    {/* Orbit Ring 2 */}
                    <div className="absolute w-[500px] h-[500px] border border-gray-100 rounded-full eco-orbit flex items-center justify-center" style={{ animationDirection: 'reverse', animationDuration: '80s' }}>
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center eco-float" style={{ animationDelay: '1.5s' }}>
                            <Layers className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center eco-float" style={{ animationDelay: '2s' }}>
                            <Hexagon className="w-5 h-5 text-[#D32F0F]" />
                        </div>
                    </div>

                    {/* Connecting Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#D32F0F" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#1D1D1D" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#1D1D1D" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#D32F0F" strokeDasharray="5,5" />
                    </svg>
                </div>

            </div>
        </section>
    );
};

export default ProductsHero;
