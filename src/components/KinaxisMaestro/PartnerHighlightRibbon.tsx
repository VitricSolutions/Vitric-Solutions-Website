import vitric from "../../assets/icon/Vitric_logo.webp";
import Handshake from "../../assets/icon/partnership-handshake.svg";

const PartnerHighlightRibbon = () => {
    return (
        <div className="w-full bg-[#0f1115] py-10 border-y border-white/5 relative overflow-hidden">
            {/* Background glowing elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D32F0F]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D32F0F]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

                    {/* Left side: Text/Announcement */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D32F0F]/10 border border-[#D32F0F]/30 rounded-full mb-4 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[#D32F0F] animate-pulse"></span>
                            <span className="text-red-100 text-xs font-bold tracking-widest uppercase">Strategic Alliance</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-[Montserrat] leading-tight tracking-tight">
                            Official Kinaxis SI Partner <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#D32F0F]">APAC Region</span>
                        </h2>
                        <p className="text-gray-400 font-[Lato] mt-4 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
                            Combining Vitric's specialized supply chain consulting expertise with the power of Kinaxis Maestro™ to deliver rapid, resilient, and intelligent planning solutions.
                        </p>
                    </div>

                    {/* Right side: Connected Logos */}
                    <div className="flex items-center gap-6 md:gap-10 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full md:w-auto justify-center">
                        {/* Vitric */}
                        <div className="flex flex-col items-center gap-2 bg-white p-3 pb-1 rounded-xl">
                            <img src={vitric} alt="Vitric" className="h-8 md:h-10 object-contain drop-shadow-lg scale-90"  loading="lazy" />
                        </div>

                        {/* Connection */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#D32F0F] to-transparent"></div>

                            <img src={Handshake} alt="Handshake" className="w-9 h-9 text-[#D32F0F] my-2 drop-shadow-[0_0_10px_rgba(211,47,15,0.8)]"  loading="lazy" />
                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#D32F0F] to-transparent"></div>

                        </div>

                        {/* Kinaxis */}
                        <div className="flex flex-col items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-inner">
                            <img src="https://www.kinaxis.com/themes/custom/ka/src/images/logo.svg" alt="Kinaxis" className="w-20 h-6 md:h-8 object-contain scale-110 md:scale-125"  loading="lazy" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PartnerHighlightRibbon;
