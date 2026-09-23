
const DeliveryPhilosophy = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white border-t border-gray-200 font-[Montserrat]">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Red Accent Line */}
                <div className="w-32 h-1.5 bg-[#D32F0F] mb-10"></div>

                <h2 className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm mb-6">Our Delivery Philosophy</h2>

                <blockquote className="text-xl md:text-3xl font-medium text-gray-800 leading-relaxed max-w-5xl font-[Georgia,serif] italic">
                    "Small, specialized, and outcome-driven — not capacity-based billing. <br className="hidden md:block" />
                    We focus on value delivery, execution quality, and <span className="text-[#D32F0F] font-bold not-italic font-sans">measurable outcomes</span>, ensuring every engagement drives meaningful business impact."
                </blockquote>
            </div>
        </section>
    );
};

export default DeliveryPhilosophy;
