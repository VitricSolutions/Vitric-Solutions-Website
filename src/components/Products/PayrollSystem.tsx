import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CreditCard, PieChart, Lock, UserCheck, IndianRupee, Layers, CheckCircle2 } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";

gsap.registerPlugin(ScrollTrigger);

const PayrollSystem = () => {
    const { openDemo } = useDemo();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    toggleActions: "play none none reverse"
                },
                repeat: -1,
                repeatDelay: 4
            });

            // 1. Initial State: Hidden text, Laser at top
            tl.set(".slip-reveal", { opacity: 0, filter: "blur(5px)" });
            tl.set(".laser-line", { top: "-5%", opacity: 1 });
            tl.set(".verified-badge", { scale: 1.5, opacity: 0 });

            // 2. Laser Scan Down
            tl.to(".laser-line", {
                top: "105%",
                duration: 3,
                ease: "power1.inOut"
            });

            // 3. Text Reveal (Staggered as laser passes)
            tl.to(".row-1", { opacity: 1, filter: "blur(0px)", duration: 0.2 }, 0.5);
            tl.to(".row-2", { opacity: 1, filter: "blur(0px)", duration: 0.2 }, 0.8);
            tl.to(".row-3", { opacity: 1, filter: "blur(0px)", duration: 0.2 }, 1.1);
            tl.to(".row-4", { opacity: 1, filter: "blur(0px)", duration: 0.2 }, 1.4);
            tl.to(".row-5", { opacity: 1, filter: "blur(0px)", duration: 0.2 }, 1.7);
            tl.to(".row-total", { opacity: 1, filter: "blur(0px)", duration: 0.3 }, 2.0);

            // 4. Laser fades out
            tl.to(".laser-line", { opacity: 0, duration: 0.3 }, "-=0.3");

            // 5. Stamp Impact
            tl.to(".verified-badge", {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat] overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">

                {/* Content Side */}
                <div className="flex-1 z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F0F]/10 text-[#D32F0F] rounded-full text-sm font-bold mb-6">
                        <CreditCard className="w-4 h-4" />
                        Payroll Management
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">Automated Compliance.<br /> Zero Errors.</h2>
                    <p className="text-xl text-gray-500 font-[Lato] mb-12 leading-relaxed">
                        Vitric Payroll automates complex calculations and statutory compliance, ensuring 100% accuracy and transparency for your workforce.
                    </p>

                    <ul className="space-y-6">
                        {[
                            { icon: <PieChart className="w-5 h-5" />, title: "Automated Processing", desc: "One-click salary calculations.", text: "text-[#D32F0F]", bg: "bg-[#D32F0F]/10" },
                            { icon: <Lock className="w-5 h-5" />, title: "Tax Management", desc: "Statutory adherence built-in.", text: "text-purple-600", bg: "bg-purple-50" },
                            { icon: <UserCheck className="w-5 h-5" />, title: "Employee Portals", desc: "Self-service payslips & tax proofs.", text: "text-green-600", bg: "bg-green-50" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 group">
                                <div className={`p-3 rounded-xl shadow-sm border border-gray-100 transition-colors ${item.bg} ${item.text}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1D1D1D] text-lg">{item.title}</h4>
                                    <p className="text-gray-500 font-[Lato]">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={openDemo}
                        className="mt-10 px-8 py-3 bg-[#D32F0F] text-white rounded-lg text-sm font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20 cursor-pointer">
                        Request a Demo
                    </button>
                </div>

                {/* Visual: The High-Fidelity Holographic Slip */}
                <div className="flex-1 w-full h-[600px] flex items-center justify-center relative perspective-[1500px]">

                    {/* Background Glow */}
                    {/* Background Glow */}
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(211,47,15,0.05) 0%, transparent 70%)' }}></div>

                    {/* 3D Tilted Card */}
                    <div className="relative w-[400px] bg-white/60 backdrop-blur-xl border border-white/80 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.05)] transform rotate-x-12 rotate-y-[-10deg] transition-transform hover:rotate-0 duration-700 overflow-hidden group">

                        {/* The Laser Scanner */}
                        <div className="laser-line absolute left-[-20%] right-[-20%] h-[2px] bg-[#D32F0F] shadow-[0_0_20px_#D32F0F,0_0_10px_#D32F0F] z-50"></div>

                        {/* Payslip Header */}
                        <div className="bg-[#1D1D1D] p-5 text-white flex justify-between items-start relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Layers className="w-5 h-5 text-[#D32F0F]" />
                                    <span className="font-bold tracking-widest text-lg">VITRIC</span>
                                </div>
                                <div className="text-[10px] text-gray-400">Payroll Solutions Pvt Ltd.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold">PAYSLIP</div>
                                <div className="text-[10px] text-gray-400 font-mono">JAN 2026</div>
                            </div>
                        </div>

                        {/* Employee Info Bar */}
                        <div className="bg-gray-50 p-3 border-b border-gray-200 flex justify-between text-[10px] font-mono text-gray-500 slip-reveal row-1 relative z-10">
                            <div>
                                <span className="block font-bold text-[#1D1D1D]">Alex Dobson</span>
                                <span>Sr. Developer</span>
                            </div>
                            <div className="text-right">
                                <span className="block">EMP-ID: 8821</span>
                                <span>Dept: Engineering</span>
                            </div>
                        </div>

                        {/* Body: Earnings vs Deductions */}
                        <div className="p-5 grid grid-cols-2 gap-6 text-xs relative z-10">
                            {/* Earnings */}
                            <div className="space-y-3">
                                <div className="font-bold text-[#1D1D1D] border-b border-gray-200 pb-1 mb-2 slip-reveal row-2">EARNINGS</div>
                                <div className="flex justify-between slip-reveal row-3">
                                    <span className="text-gray-500">Basic</span>
                                    <span className="font-mono font-medium">₹65,000</span>
                                </div>
                                <div className="flex justify-between slip-reveal row-4">
                                    <span className="text-gray-500">HRA</span>
                                    <span className="font-mono font-medium">₹32,500</span>
                                </div>
                                <div className="flex justify-between slip-reveal row-5">
                                    <span className="text-gray-500">Special All.</span>
                                    <span className="font-mono font-medium">₹25,000</span>
                                </div>
                            </div>

                            {/* Deductions */}
                            <div className="space-y-3">
                                <div className="font-bold text-[#D32F0F] border-b border-gray-200 pb-1 mb-2 slip-reveal row-2">DEDUCTIONS</div>
                                <div className="flex justify-between slip-reveal row-3">
                                    <span className="text-gray-500">PF</span>
                                    <span className="font-mono font-medium">₹7,800</span>
                                </div>
                                <div className="flex justify-between slip-reveal row-4">
                                    <span className="text-gray-500">Prof. Tax</span>
                                    <span className="font-mono font-medium">₹200</span>
                                </div>
                                <div className="flex justify-between slip-reveal row-5">
                                    <span className="text-gray-500">TDS</span>
                                    <span className="font-mono font-medium">₹12,450</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer: Net Pay */}
                        <div className="bg-gray-900 p-4 flex items-center justify-between text-white relative z-10 slip-reveal row-total mt-4">
                            <div>
                                <div className="text-[10px] text-gray-400">NET PAYABLE</div>
                                <div className="font-bold text-xl flex items-center">
                                    <IndianRupee className="w-4 h-4 mr-1" /> 1,02,050
                                </div>
                            </div>
                            <div className="text-right text-[10px] text-gray-500">
                                <div>Bank Transfer</div>
                                <div className="font-mono">HDFC **** 9912</div>
                            </div>
                        </div>

                        {/* Verified Badge Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 verified-badge z-40 pointer-events-none">
                            <div className="w-24 h-24 border-4 border-green-600 rounded-full flex items-center justify-center opacity-40 rotate-[-15deg]">
                                <div className="w-20 h-20 border border-green-600 rounded-full flex flex-col items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
                                    <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">Audited</span>
                                </div>
                            </div>
                        </div>

                        {/* Glossy Overlay/Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none z-50"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PayrollSystem;
