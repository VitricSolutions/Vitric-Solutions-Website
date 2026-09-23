import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useContact } from "../../Context/Context";

gsap.registerPlugin(ScrollTrigger);

const DigitalWhyVitric = () => {
    const { openContact } = useContact();
    const sectionRef = useRef(null);

    const benefits = [
        {
            title: "Engineering-led, cloud-first approach",
            desc: "We prioritize technical excellence and scalability from day one."
        },
        {
            title: "Clear separation of data foundations and AI intelligence",
            desc: "Building structured, clean data layers before applying advanced AI models."
        },
        {
            title: "Agile, outcome-driven delivery",
            desc: "Focusing on tangible business value with rapid iteration cycles."
        },
        {
            title: "Cost-effective global delivery with enterprise-grade quality",
            desc: "Leveraging global talent without compromising on standards."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".benefit-item",
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#111] text-white font-[Montserrat] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D32F0F]/10 rounded-full blur-[100px]"></div>

            <div className="max-w-[85rem] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <span className="text-[#D32F0F] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Why Partner With Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Why <span className="text-white">Vitric?</span>
                    </h2>

                    <div className="space-y-8">
                        {benefits.map((item, idx) => (
                            <div key={idx} className="benefit-item flex gap-4 group">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#D32F0F]/20 flex items-center justify-center border border-[#D32F0F]/50 group-hover:bg-[#D32F0F] transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-[#D32F0F] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#D32F0F] transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 font-[Lato] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={openContact}
                        className="mt-12 px-8 py-4 bg-white text-[#1D1D1D] rounded-full font-bold hover:bg-[#D32F0F] hover:text-white transition-all duration-300 flex items-center gap-2 group">
                        Start Your Transformation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Right Visual - Grid/Code Abstract */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 hidden lg:flex flex-col justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D32F0F]/20 to-transparent opacity-30"></div>

                    <div className="space-y-4 font-mono text-sm text-green-400 opacity-80">
                        <div className="flex gap-4 border-b border-white/5 pb-2">
                            <span className="text-red-400">01</span>
                            <span>INITIALIZING_CORE_SYSTEMS... [OK]</span>
                        </div>
                        <div className="flex gap-4 border-b border-white/5 pb-2">
                            <span className="text-red-400">02</span>
                            <span>CONNECTING_DATA_PIPELINES... [OK]</span>
                        </div>
                        <div className="flex gap-4 border-b border-white/5 pb-2">
                            <span className="text-red-400">03</span>
                            <span>DEPLOYING_AI_MODELS... [OK]</span>
                        </div>
                        <div className="flex gap-4 border-b border-white/5 pb-2">
                            <span className="text-red-400">04</span>
                            <span>OPTIMIZING_CLOUD_RESOURCES... [OK]</span>
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-xl bg-black/40 border border-white/10">
                        <h4 className="text-lg font-bold text-white mb-2">Build modern platforms.</h4>
                        <h4 className="text-lg font-bold text-white mb-2">Enable intelligent decisions.</h4>
                        <h4 className="text-lg font-bold text-[#D32F0F]">Scale with confidence.</h4>
                    </div>

                    {/* Animated Pulse */}
                    <div className="absolute bottom-10 right-10 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                </div>

            </div>
        </section>
    );
};

export default DigitalWhyVitric;
