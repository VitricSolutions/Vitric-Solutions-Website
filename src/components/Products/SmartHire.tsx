import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, BarChart, Sparkles, Target, Shield } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";

gsap.registerPlugin(ScrollTrigger);

const SmartHire = () => {
    const { openDemo } = useDemo();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Radar Scan Rotation
            gsap.to(".radar-scan", {
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: "linear",
                svgOrigin: "150 150" // Precise rotation for SVG elements
            });

            // Data Polygon Growth (The "Match" Shape)
            gsap.fromTo(".radar-poly",
                { attr: { points: "150,150 150,150 150,150 150,150 150,150 150,150" }, opacity: 0 },
                {
                    attr: { points: "150,50 236,100 236,200 150,242 64,200 72,108" }, // Slight pull-back to visually represent 98%
                    opacity: 0.8,
                    duration: 1.5,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center"
                    }
                }
            );

            // Counter Animation
            gsap.to(".match-percent", {
                innerText: 98,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center"
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#fafafa] text-[#1D1D1D] font-[Montserrat] overflow-hidden relative border-t border-gray-100">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F0F]/10 text-[#D32F0F] rounded-full text-sm font-bold mb-6 border border-[#D32F0F]/20">
                        <Sparkles className="w-4 h-4" />
                        Vitric SmartHire
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-[#1D1D1D]">
                        The Hiring Funnel,<br />
                        <span className="text-[#D32F0F]">Perfected by AI.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-[Lato] mb-12 leading-relaxed">
                        Eliminate noise and bias. SmartHire acts as an intelligent filter, processing thousands of profiles to deliver only the most qualified, matched candidates.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4 items-start group">
                            <div className="p-3 bg-[#D32F0F]/10 rounded-xl shadow-sm border border-[#D32F0F]/20 text-[#D32F0F] transition-colors">
                                <Search className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[#1D1D1D]">Smart Screening</h4>
                                <p className="text-sm text-gray-500 font-[Lato]">Auto-matches resume to JD.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start group">
                            <div className="p-3 bg-purple-50 rounded-xl shadow-sm border border-purple-100 text-purple-600 transition-colors">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[#1D1D1D]">Unbiased Data</h4>
                                <p className="text-sm text-gray-500 font-[Lato]">Pure metrics, zero bias.</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={openDemo}
                        className="mt-10 px-8 py-3 bg-[#D32F0F] text-white rounded-lg text-sm font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20 cursor-pointer">
                        Request a Demo
                    </button>
                </div>

                {/* Visual: The Talent Radar */}
                <div className="relative h-[500px] flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8">

                    {/* Background Grid */}
                    <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative w-[350px] h-[350px]">
                        {/* Radar SVG */}
                        <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                            {/* Hexagon Grid Backgrounds */}
                            <polygon points="150,50 236,100 236,200 150,250 64,200 64,100" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                            <polygon points="150,80 207,113 207,186 150,220 92,186 92,113" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                            <polygon points="150,110 178,126 178,173 150,190 121,173 121,126" fill="none" stroke="#e5e7eb" strokeWidth="1" />

                            {/* Axes Lines */}
                            <line x1="150" y1="150" x2="150" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="150" y1="150" x2="236" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="150" y1="150" x2="236" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="150" y1="150" x2="150" y2="250" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="150" y1="150" x2="64" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="150" y1="150" x2="64" y2="100" stroke="#e5e7eb" strokeWidth="1" />

                            {/* The Data Shape (Animated) */}
                            <polygon className="radar-poly" points="150,150 150,150 150,150 150,150 150,150 150,150" fill="rgba(211, 47, 15, 0.2)" stroke="#D32F0F" strokeWidth="3" />

                            {/* Radar Scan Effect */}
                            <g className="radar-scan">
                                <line x1="150" y1="150" x2="150" y2="0" stroke="url(#scanGradient)" strokeWidth="2" />
                                <path d="M150,150 L150,0 A150,150 0 0,1 250,50 L150,150" fill="url(#scanFill)" opacity="0.1" />
                            </g>

                            {/* Defs for gradients */}
                            <defs>
                                <linearGradient id="scanGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="100%" stopColor="#D32F0F" />
                                </linearGradient>
                                <radialGradient id="scanFill" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#D32F0F" stopOpacity="0" />
                                    <stop offset="100%" stopColor="#D32F0F" stopOpacity="1" />
                                </radialGradient>
                            </defs>
                            {/* Labels (SVG Text for Perfect Alignment) */}
                            <text x="150" y="35" textAnchor="middle" className="text-[10px] font-bold fill-gray-500 uppercase">Experience</text>
                            <text x="250" y="90" textAnchor="start" className="text-[10px] font-bold fill-gray-500 uppercase">Tech</text>
                            <text x="250" y="210" textAnchor="start" className="text-[10px] font-bold fill-gray-500 uppercase">Leadership</text>
                            <text x="150" y="270" textAnchor="middle" className="text-[10px] font-bold fill-gray-500 uppercase">Culture</text>
                            <text x="50" y="210" textAnchor="end" className="text-[10px] font-bold fill-gray-500 uppercase">Prob. Solving</text>
                            <text x="50" y="90" textAnchor="end" className="text-[10px] font-bold fill-gray-500 uppercase">Comm.</text>
                        </svg>

                        {/* Center Score */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
                            <span className="text-3xl font-bold text-[#1D1D1D]"><span className="match-percent">0</span>%</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Match</span>
                        </div>
                    </div>

                    {/* Side Info Panel */}
                    <div className="absolute top-8 right-8 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#D32F0F]">
                            <Target className="w-4 h-4" /> High Precision
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <Shield className="w-4 h-4" /> Verified Data
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SmartHire;
