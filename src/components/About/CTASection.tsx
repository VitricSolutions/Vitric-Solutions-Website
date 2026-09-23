
import { useContact } from "../../Context/Context";

const CTASection = () => {
    const { openContact } = useContact();
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1D1D1D] relative overflow-hidden text-center">
            {/* Background decorative - maybe a gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D] via-[#2A2A2A] to-[#1D1D1D] opacity-50 z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Partner with Vitric to build scalable technology and talent solutions tailored to your growth goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        onClick={openContact}
                        className="mainbutton px-10 py-4 text-white font-bold tracking-wide hover:from-[#fb1212] hover:to-[#d32f0f] transition-all bg-[#D32F0F] rounded-sm">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
