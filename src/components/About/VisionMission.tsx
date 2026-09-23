import vision from "../../assets/images/aboutUs/Vision.svg";
import mission from "../../assets/images/aboutUs/Mission.svg";

const VisionMission = () => {
    return (
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-white font-[Montserrat]">
            <div className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                {/* --- Mission Card (White Theme) --- */}
                <div className="w-full bg-white p-10 lg:p-16 rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    {/* Decorative background watermark */}
                    <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply opacity-60 blur-3xl group-hover:bg-[#D32F0F]/5 transition-colors duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                                <img src={mission} alt="Mission" className="w-8 h-8"  loading="lazy" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#1D1D1D]">Our Mission</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed font-[Lato] font-medium border-l-4 border-[#D32F0F] pl-6">
                                "Our mission at Vitric Business Solutions Pvt. Ltd. is to deliver innovative technology solutions that drive business success."
                            </p>
                            <p className="text-gray-600 text-[16px] leading-relaxed font-[Lato] text-justify">
                                We strive to provide exceptional services that empower our clients to achieve their goals, faster growth, and maximize efficiency. Through a commitment to excellence, integrity, and customer satisfaction, we aim to build lasting partnerships and create value for our clients.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Vision Card (Red Theme) --- */}
                <div className="w-full bg-[#D32F0F] p-10 lg:p-16 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden text-white hover:shadow-2xl transition-shadow duration-300">
                    {/* Decorative Pattern / Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.05] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <img src={vision} alt="Vision" className="w-8 h-8 brightness-0 invert"  loading="lazy" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-white/90 text-[16px] leading-relaxed font-[Lato] text-justify">
                                To help companies looking to start with digital transformation avoid the pitfalls, we've mapped out the building blocks businesses need to consider when creating their plan for transforming their businesses.
                            </p>
                            <p className="text-white text-lg leading-relaxed font-[Lato] font-medium border-l-4 border-white/30 pl-6">
                                "Our vision is to proudly architect, design, and develop solutions to help clients achieve the epitome of customer satisfaction and excel in their businesses."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
