import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globe from "../../assets/images/sap/Global.svg";

gsap.registerPlugin(ScrollTrigger);

const WhyVitricSap = () => {
    const sectionRef = useRef(null);

    const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 30).toFixed(2);
        const rotateY = ((centerX - x) / 30).toFixed(2);

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
            gsap.fromTo(".why-item",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl -z-10 opacity-40"></div>

            <div className="max-w-[85rem] mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 why-item">
                    <div className="inline-block py-1 px-3 border border-[#D32F0F]/20 rounded-full bg-white mb-6">
                        <span className="text-xs font-bold tracking-widest text-[#D32F0F] uppercase">The Vitric Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                        Why Partner with <span className="text-[#D32F0F]">Vitric</span>?
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-[Lato] leading-relaxed">
                        We combine specialized SAP expertise with a massive global talent network to deliver outcomes, not just resources.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Global Reach (Large Feature) */}
                    <div className="lg:col-span-7 why-item">
                        <div
                            onMouseMove={handleTilt}
                            onMouseLeave={handleTiltReset}
                            className="h-full bg-[#1D1D1D] rounded-3xl p-10 md:p-12 relative overflow-hidden text-white group cursor-default transform-style-3d will-change-transform"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Abstract BG */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F0F] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                            <div className="relative transform translate-z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                                        <img className="w-8 h-8 brightness-0 invert" src={globe} alt="Global" />
                                    </span>
                                    <h3 className="text-2xl font-bold">Global Talent Ecosystem</h3>
                                </div>
                                <div className="mb-8">
                                    <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                        10,000+
                                    </span>
                                    <p className="text-gray-400 mt-2 font-[Lato] text-lg">Market profiles across the full SAP technology stack.</p>
                                </div>
                                <p className="text-gray-300 font-[Lato] leading-relaxed max-w-lg">
                                    Access a pre-vetted, high-caliber network of SAP professionals. From niche technical architects to functional domain experts, we scale your capabilities instantly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stacked Features */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* Top: Expertise */}
                        <div
                            onMouseMove={handleTilt}
                            onMouseLeave={handleTiltReset}
                            className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100 hover:border-[#D32F0F]/20 hover:shadow-lg transition-all duration-300 why-item group transform-style-3d will-change-transform flex-1"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="relative transform translate-z-10">
                                <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">Certified Expertise</h3>
                                <div className="flex items-end gap-3 mb-4">
                                    <span className="text-5xl font-bold text-[#D32F0F]">23+</span>
                                    <span className="text-gray-500 font-[Lato] mb-2 font-medium">In-House Experts</span>
                                </div>
                                <p className="text-gray-600 font-[Lato] text-sm leading-relaxed">
                                    Dedicated developers and SAP-certified consultants ensuring quality delivery and technical oversight.
                                </p>
                            </div>
                        </div>

                        {/* Bottom: Engagement Models */}
                        <div
                            onMouseMove={handleTilt}
                            onMouseLeave={handleTiltReset}
                            className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#D32F0F]/20 hover:shadow-lg transition-all duration-300 why-item group transform-style-3d will-change-transform flex-1"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="relative transform translate-z-10">
                                <h3 className="text-xl font-bold text-[#1D1D1D] mb-6">Flexible Engagement</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Advisory", "Implementation", "Managed Services", "Staffing"].map((model, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium border border-gray-100 group-hover:bg-[#D32F0F] group-hover:text-white group-hover:border-[#D32F0F] transition-colors duration-300">
                                            {model}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyVitricSap;
