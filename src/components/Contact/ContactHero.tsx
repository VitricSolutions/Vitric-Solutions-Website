import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";

const ContactHero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="pt-24 pb-20 px-4 md:px-8 lg:px-16 bg-[#fafafa] font-[Montserrat] text-center relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent"></div>

            <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-400/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-[10%] w-96 h-96 bg-[#D32F0F]/5 rounded-full blur-[100px] -z-10"></div>

            {/* Floating Abstract Shapes */}
            <div className="absolute top-1/3 left-[5%] w-16 h-16 border-4 border-[#D32F0F]/10 rounded-full animate-[bounce_4s_infinite]"></div>
            <div className="absolute bottom-1/3 right-[5%] w-24 h-24 border-8 border-blue-500/5 rounded-xl rotate-45 animate-[spin_10s_linear_infinite]"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="contact-title inline-flex items-center gap-2 py-2 px-5 bg-white border border-gray-100 shadow-sm text-[#D32F0F] rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                    <MessageCircle className="w-4 h-4" />
                    Let's Connect
                </div>
                <h1 className="contact-title text-5xl md:text-7xl font-bold text-[#1D1D1D] mb-8 leading-[1.1]">
                    Have a project in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-orange-600">mind?</span>
                </h1>
                <p className="contact-title text-gray-600 text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed">
                    Let’s talk about your requirements and explore how we can build the right solution together.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
