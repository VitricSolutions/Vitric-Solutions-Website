
const WhyChooseVitric = () => {
    const reasons = [
        {
            title: "Outcome-Driven Results",
            desc: "We don't just deliver outputs; we deliver business outcomes that matter.",
            icon: "🎯"
        },
        {
            title: "Hybrid Delivery Model",
            desc: "Best of both worlds: Expert consulting guidance + scalable staffing power.",
            icon: "🤝"
        },
        {
            title: "Certified Expertise",
            desc: "A team of certified professionals in SAP, Kinaxis, and Cloud platforms.",
            icon: "🏆"
        },
        {
            title: "Speed & Scalability",
            desc: "Rapid turnaround times with the ability to scale teams on demand.",
            icon: "⚡"
        },
        {
            title: "Partnership Mindset",
            desc: "We build long-term relationships, not just transactional engagements.",
            icon: "♾️"
        },
    ];

    return (
        <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-[#1D1D1D] text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D32F0F] rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D32F0F] rounded-full blur-[120px] opacity-10"></div>
            </div>

            <div className="max-w-[85rem] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm mb-4 block">The Vitric Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Why Organizations <br /> Choose <span className="text-white border-b-4 border-[#D32F0F]">Vitric</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-[#D32F0F] hover:to-[#ff5c39] transition-all duration-500">
                            <div className="h-full bg-[#262626] rounded-xl p-8 transition-all duration-500 group-hover:bg-[#1D1D1D]">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-[#D32F0F]/20 transition-all duration-500 text-white">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D32F0F] transition-colors">{reason.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{reason.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Last Card / CTA Card replacement or fit */}
                    <div className="group relative p-1 rounded-2xl overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D32F0F] to-[#8a1c07] opacity-20 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative z-10 p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                            <p className="text-gray-300 mb-6 text-sm">Experience the Vitric difference today.</p>
                            <button className="px-6 py-3 bg-white text-[#D32F0F] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                                Let's Talk
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseVitric;
