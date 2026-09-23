import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2, TrendingUp, Globe, Award } from "lucide-react";

const TrainingHero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Animations
            gsap.fromTo(".hero-text",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            );

            // 3D Visual Entrance
            gsap.fromTo(".hero-visual-card",
                { rotationY: 45, rotationX: 15, opacity: 0, scale: 0.8 },
                { rotationY: -15, rotationX: 10, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
            );

            // Floating Effect
            gsap.to(".floating-badge", {
                y: -15,
                duration: 2.5,
                stagger: {
                    each: 0.3,
                    yoyo: true,
                    repeat: -1
                },
                ease: "sine.inOut"
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    const scrollToEnroll = () => {
        const element = document.getElementById('training-footer');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} className="relative w-full pt-18 pb-24 lg:pt-24 lg:pb-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden font-[Montserrat]">

            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-[#D32F0F]/5 skew-x-12 -z-10 rounded-bl-[100px]"></div>

            <div className="max-w-[85rem] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <div className="hero-text inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#D32F0F] animate-pulse"></span>
                        <span className="text-[#D32F0F] text-xs font-bold uppercase tracking-widest">Training & Capability</span>
                    </div>

                    <h1 className="hero-text text-4xl md:text-5xl lg:text-7xl font-bold text-[#1D1D1D] mb-6 leading-tight">
                        Master the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-red-600">
                            Supply Chain
                        </span>
                    </h1>

                    <p className="hero-text text-gray-600 text-lg leading-relaxed mb-8 font-[Lato] border-l-4 border-[#D32F0F] pl-6 max-w-lg">
                        Accelerate your career with our industry-aligned Kinaxis RapidResponse training. Practical, hands-on, and certification-focused.
                    </p>

                    <div className="hero-text flex flex-wrap gap-4 mb-12">
                        <button
                            onClick={scrollToEnroll}
                            className="px-8 py-4 bg-[#D32F0F] text-white rounded-full font-bold hover:bg-[#b01e00] transition-all shadow-lg shadow-[#D32F0F]/30 hover:-translate-y-1 flex items-center gap-2"
                        >
                            Enroll Now <ArrowRight className="w-5 h-5" />
                        </button>
                        {/* <button className="px-8 py-4 bg-white text-[#1D1D1D] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all hover:-translate-y-1">
                            Get Syllabus
                        </button> */}
                    </div>

                    {/* Integrated Stats Row */}
                    <div className="hero-text flex items-center gap-8 pt-8 border-t border-gray-200 w-full max-w-md">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-red-50 rounded-full text-[#D32F0F]">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#1D1D1D]">80%+</p>
                                <p className="text-xs text-gray-500 font-bold uppercase">Average Hike</p>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#1D1D1D]">Global</p>
                                <p className="text-xs text-gray-500 font-bold uppercase">Opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual: 3D Roadmap Card */}
                <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center perspective-[1500px]">
                    <div className="hero-visual-card relative w-[340px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col p-8 transform-style-3d hover:rotate-y-[-5deg] transition-transform duration-500">

                        {/* Header of Card */}
                        <div className="flex items-center justify-between mb-8 transform translate-z-[20px]">
                            <div className="w-12 h-12 bg-[#D32F0F] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Award className="w-6 h-6" />
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-400 uppercase font-bold">Pathway</div>
                                <div className="text-gray-900 font-bold">Consultant</div>
                            </div>
                        </div>

                        {/* Steps Infographic */}
                        <div className="flex-1 space-y-8 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-100 -z-10"></div>

                            {[
                                { title: "Foundations", desc: "Core Concepts", color: "bg-blue-500" },
                                { title: "Hands-on Labs", desc: "Kinaxis System", color: "bg-[#D32F0F]" },
                                { title: "Certification", desc: "Exam Ready", color: "bg-green-500" }
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 transform translate-z-[10px] hover:translate-x-2 transition-transform">
                                    <div className={`w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center ${step.color} text-white z-10`}>
                                        <span className="text-sm font-bold">{i + 1}</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl w-full border border-gray-100">
                                        <h4 className="font-bold text-gray-900 text-sm">{step.title}</h4>
                                        <p className="text-xs text-gray-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Badges (Outside the card) */}
                        <div className="floating-badge absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 transform translate-z-[60px] animate-bounce">
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-xs font-bold text-gray-400 uppercase">Status</span>
                            </div>
                            <div className="font-bold text-gray-900">Placement Support</div>
                        </div>

                        <div className="floating-badge absolute -left-8 bottom-32 bg-[#1D1D1D] text-white p-4 rounded-xl shadow-xl transform translate-z-[80px]" style={{ animationDelay: '1s' }}>
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-xs text-gray-400">Practical</div>
                        </div>

                    </div>

                    {/* Shadow Blob */}
                    <div className="absolute bottom-[-40px] w-[300px] h-[40px] bg-black/10 rounded-[100%] blur-xl transform rotate-x-[60deg]"></div>
                </div>

            </div>
        </section>
    );
};

export default TrainingHero;
