import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, FileText, Shield, DollarSign, Archive, Check } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";

gsap.registerPlugin(ScrollTrigger);

const P2PSystem = () => {
    const { openDemo } = useDemo();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".metro-stop",
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    }
                }
            );

            gsap.to(".metro-line-fill", {
                height: "100%",
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        { icon: <ShoppingCart className="w-5 h-5" />, title: "Requisition", desc: "Digital enquiries & approvals", color: "bg-[#D32F0F]" },
        { icon: <FileText className="w-5 h-5" />, title: "Vendor Quote", desc: "Transparent evaluation", color: "bg-[#1D1D1D]" },
        { icon: <Archive className="w-5 h-5" />, title: "Inventory", desc: "GRN & Stock Control", color: "bg-purple-600" },
        { icon: <DollarSign className="w-5 h-5" />, title: "Payment", desc: "Tracking & Closure", color: "bg-green-600" }
    ];

    return (
        <section ref={sectionRef} className="py-28 px-4 md:px-8 lg:px-16 bg-gray-50 font-[Montserrat] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F0F]/10 text-[#D32F0F] rounded-full text-sm font-bold mb-6">
                        <ShoppingCart className="w-4 h-4" />
                        P2P ERP
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">The Digital Process Chain.</h2>
                    <p className="text-xl text-gray-500 font-[Lato] leading-relaxed mb-10">
                        Digitize and streamline the complete procurement lifecycle. From requisition to payment, our "Metro Map" process ensures no step is missed.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Shield className="w-8 h-8 text-[#D32F0F] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Governance</h4>
                            <p className="text-gray-500 text-sm font-[Lato]">Role-based automation & audit trails.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Check className="w-8 h-8 text-green-600 mb-4" />
                            <h4 className="font-bold text-lg mb-2">Cost Control</h4>
                            <p className="text-gray-500 text-sm font-[Lato]">Transparent comparisons & updates.</p>
                        </div>
                    </div>

                    <button
                        onClick={openDemo}
                        className="mt-10 px-8 py-3 bg-[#D32F0F] text-white rounded-lg text-sm font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20 cursor-pointer">
                        Request a Demo
                    </button>
                </div>

                {/* Right: The Metro Map Visualization */}
                <div className="relative h-[600px] flex justify-center py-10">
                    {/* The Line */}
                    <div className="absolute left-[40px] top-0 bottom-0 w-2 bg-gray-200 rounded-full"></div>
                    <div className="absolute left-[40px] top-0 w-2 bg-gradient-to-b from-[#D32F0F] via-purple-600 to-green-600 rounded-full metro-line-fill h-0"></div>

                    <div className="flex flex-col justify-between h-full relative z-10 pl-[80px] w-full">
                        {steps.map((step, idx) => (
                            <div key={idx} className="metro-stop relative flex items-center group">
                                {/* Node on Line */}
                                <div className={`absolute -left-[54px] w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white ${step.color} transition-transform group-hover:scale-125`}>
                                    {step.icon}
                                </div>

                                {/* Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full hover:shadow-lg transition-all hover:translate-x-2 group-hover:border-[#D32F0F]/20">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-xl font-bold text-[#1D1D1D]">{step.title}</h3>
                                        <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                                    </div>
                                    <p className="text-gray-500 font-[Lato]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default P2PSystem;
