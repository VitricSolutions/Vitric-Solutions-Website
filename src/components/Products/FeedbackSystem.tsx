import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, QrCode, Globe, ShieldCheck, BarChart2, CheckCircle2, ListChecks } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";

gsap.registerPlugin(ScrollTrigger);

const FeedbackSystem = () => {
    const { openDemo } = useDemo();
    const sectionRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { icon: <QrCode className="w-5 h-5" />, title: "Easy Collection", desc: "QR, Web, Emoji scores", color: "text-[#D32F0F] bg-[#D32F0F]/10" },
        { icon: <Globe className="w-5 h-5" />, title: "Multilingual", desc: "Inclusive & Accessible", color: "text-green-600 bg-green-50" },
        { icon: <ShieldCheck className="w-5 h-5" />, title: "Role-Based", desc: "Controlled Access", color: "text-purple-600 bg-purple-50" },
        { icon: <BarChart2 className="w-5 h-5" />, title: "Deep Insights", desc: "Trends & Performance", color: "text-orange-600 bg-orange-50" },
        { icon: <ListChecks className="w-5 h-5" />, title: "Instant Action", desc: "Workflows & Alerts", color: "text-[#1D1D1D] bg-gray-100" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".nps-path", {
                strokeDashoffset: 0,
                duration: 3,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                }
            });

            gsap.fromTo(".nps-node",
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="feedback-system" ref={sectionRef} className="min-h-screen py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: The Infinite Loop Visualization */}
                <div className="relative h-[600px] flex items-center justify-center order-2 lg:order-1">
                    <svg className="absolute w-full h-full" viewBox="0 0 600 600">
                        <defs>
                            <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1D1D1D" />
                                <stop offset="100%" stopColor="#D32F0F" />
                            </linearGradient>
                        </defs>
                        <circle cx="300" cy="300" r="200" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                        <circle className="nps-path" cx="300" cy="300" r="200" fill="none" stroke="url(#loopGradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="1260" strokeDashoffset="1260" />
                    </svg>

                    <div className="absolute z-20 w-48 h-48 bg-white rounded-full shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center p-6 nps-node border border-gray-100">
                        <MessageSquare className="w-10 h-10 text-[#D32F0F] mb-2" />
                        <h3 className="text-xl font-bold text-[#1D1D1D]">Continuous Feedback</h3>
                    </div>

                    {/* Nodes with Vibrant Colors */}
                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 nps-node transform -translate-y-1/2">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-[#D32F0F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
                                <QrCode className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm text-sm border border-gray-100">LISTEN</span>
                        </div>
                    </div>

                    <div className="absolute bottom-[140px] right-[50px] nps-node">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                                <BarChart2 className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm text-sm border border-gray-100">ANALYZE</span>
                        </div>
                    </div>

                    <div className="absolute bottom-[140px] left-[50px] nps-node">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                                <ListChecks className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm text-sm border border-gray-100">ACT</span>
                        </div>
                    </div>
                </div>

                {/* Right: Content Breakdown */}
                <div className="space-y-12 order-1 lg:order-2">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F0F]/10 text-[#D32F0F] rounded-full text-sm font-bold mb-6">
                            Feedback Management System
                        </div>
                        <h2 className="text-5xl font-bold text-[#1D1D1D] mb-6 leading-tight">Listen. Analyze. Optimize.</h2>
                        <p className="text-xl text-gray-500 font-[Lato] leading-relaxed">
                            A smart digital platform designed to collect, analyze, and act on customer feedback in real time. Identity gaps and improve experience instantly.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-6 p-4 rounded-xl transition-all duration-500 border cursor-pointer
                                    ${activeFeature === idx
                                        ? 'bg-gray-50 border-gray-200 scale-105 shadow-md'
                                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                                    }`}
                                onClick={() => setActiveFeature(idx)}
                            >
                                <div className={`p-3 rounded-lg transition-colors ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold transition-colors ${activeFeature === idx ? 'text-[#1D1D1D]' : 'text-gray-600'}`}>{item.title}</h4>
                                    <p className="text-sm text-gray-500 font-[Lato]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="nps-content-item pt-4">
                        <div className="p-6 bg-[#1D1D1D] text-white rounded-xl flex items-center gap-6 shadow-2xl">
                            <div className="shrink-0 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-[#D32F0F]" />
                            </div>
                            <div>
                                <h5 className="font-bold text-lg mb-1">Why Vitric?</h5>
                                <p className="text-sm text-gray-400 font-[Lato]">Designed for continuous improvement and actionable insights.</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={openDemo}
                        className="px-8 py-3 bg-[#D32F0F] text-white rounded-lg text-sm font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20 cursor-pointer">
                        Request a Demo
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FeedbackSystem;
