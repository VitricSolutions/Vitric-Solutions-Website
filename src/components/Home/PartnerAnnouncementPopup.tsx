import { useState, useEffect } from "react";
import { X, ArrowRight, Zap, Target, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vitric from "../../assets/icon/Vitric_logo.png";
import kinaxisLogo from "../../assets/Kinaxis_Logo_Single_Red.png";

const PartnerAnnouncementPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Reduced delay to show quicker
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem("hasSeenPartnerPopup");
            if (!hasSeenPopup) {
                setIsVisible(true);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let autoCloseTimer: ReturnType<typeof setTimeout>;
        if (isVisible && !isClosing) {
            autoCloseTimer = setTimeout(() => {
                closePopup();
            }, 100000); // Automatically close after 10 seconds
        }
        return () => clearTimeout(autoCloseTimer);
    }, [isVisible, isClosing]);

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("hasSeenPartnerPopup", "true");
        }, 400); // match transition duration
    };

    const handleExplore = () => {
        closePopup();
        navigate("/services/kinaxis-maestro");
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#0a0a0a]/80 backdrop-blur-md transition-opacity duration-400 ${isClosing ? "opacity-0" : "opacity-100"}`}>
            <div className={`relative w-full max-w-[900px] max-h-[100dvh] md:max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden transform transition-all duration-400 ${isClosing ? "scale-95 opacity-0 translate-y-8" : "scale-100 opacity-100 translate-y-0"} flex flex-col md:flex-row border border-gray-100`}>

                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 bg-gray-100/50 hover:bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900 transition-colors z-50 shadow-sm backdrop-blur-sm"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side: Visual/Logos (Dark Theme) */}
                <div className="w-full md:w-[45%] bg-[#0f1115] p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden group shrink-0">
                    {/* Background effects */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F0F]/20 rounded-full blur-[80px] -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-125"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D32F0F]/10 rounded-full blur-[80px] -ml-20 -mb-20 transition-transform duration-1000 group-hover:scale-125"></div>

                    {/* Partnership Graphic Container */}
                    <div className="relative z-10 flex flex-col items-center w-full">

                        {/* Vitric Logo Plate */}
                        <div className="bg-white p-2.5 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.3)] w-3/4 flex justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <img src={vitric} alt="Vitric" className="h-10 object-contain drop-shadow-lg" />
                        </div>

                        {/* Connecting Element */}
                        <div className="flex items-center justify-center relative my-3">
                            <div className="bg-[#D32F0F] rounded-full p-2 shadow-[0_0_15px_rgba(211,47,15,0.7)] z-10 relative ring-4 ring-[#0f1115]">
                                <X className="w-3 h-3 text-white transform rotate-45" />
                            </div>
                        </div>

                        {/* Kinaxis Logo Plate */}
                        <div className="bg-white p-2.5 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.3)] w-3/4 flex justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <img src={kinaxisLogo} alt="Kinaxis" className="h-14 sm:h-20 object-contain" />
                        </div>

                    </div>

                    <div className="mt-8 md:mt-14 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D32F0F]/40 bg-[#D32F0F]/10 backdrop-blur-md rounded-full mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#D32F0F] animate-pulse"></span>
                            <span className="text-red-100 text-[11px] font-bold tracking-widest uppercase">Official Partnership</span>
                        </div>
                        <h2 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight font-[Montserrat] leading-snug">
                            System Integrator <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#D32F0F]">APAC Region</span>
                        </h2>
                    </div>
                </div>

                {/* Right Side: Infographic Content */}
                <div className="w-full md:w-[55%] bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center shrink-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1D1D1D] mb-2 sm:mb-3 font-[Montserrat] leading-tight">
                        Elevating Supply Chain <br />
                        <span className="text-[#D32F0F]">Intelligence</span>
                    </h3>
                    <p className="text-gray-500 mb-6 sm:mb-8 font-[Lato] text-sm lg:text-base leading-relaxed max-w-md">
                        Vitric integrates its world-class consulting expertise with Kinaxis Maestro™ to deliver unmatched supply chain agility.
                    </p>

                    {/* Vertical Infographic Timeline */}
                    <div className="space-y-4 sm:space-y-6 relative mb-6 sm:mb-10">
                        {/* Timeline Track */}
                        <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-gradient-to-b from-[#D32F0F]/30 via-[#D32F0F]/10 to-transparent z-0 hidden sm:block"></div>
                        <div className="absolute left-[19px] top-[20px] bottom-[20px] w-0.5 bg-gradient-to-b from-[#D32F0F]/30 via-[#D32F0F]/10 to-transparent z-0 sm:hidden"></div>

                        {[
                            { icon: Zap, title: "Accelerated Deployments", desc: "Rapid time-to-value with proven Maestro methodologies.", color: "text-[#D32F0F]", bg: "bg-red-50", border: "border-red-100" },
                            { icon: Target, title: "Tailored Regional Solutions", desc: "Deep understanding of APAC supply chain nuances.", color: "text-[#1D1D1D]", bg: "bg-gray-100", border: "border-gray-200" },
                            { icon: Globe2, title: "End-to-End Orchestration", desc: "Seamless integration across your entire network.", color: "text-[#D32F0F]", bg: "bg-red-50", border: "border-red-100" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex items-start gap-4 sm:gap-5 z-10 group">
                                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-sm ${item.bg} shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10`}>
                                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                                </div>
                                <div className="pt-0.5 sm:pt-1.5 flex-1">
                                    <h4 className="font-bold text-gray-800 text-sm lg:text-base font-[Montserrat] group-hover:text-[#D32F0F] transition-colors">{item.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-500 font-[Lato] leading-relaxed mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto pb-4 md:pb-0">
                        <button
                            onClick={handleExplore}
                            className="flex-1 py-3 sm:py-4 bg-[#D32F0F] hover:bg-[#b02206] text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 font-[Montserrat] text-sm uppercase tracking-wider"
                        >
                            <span>Explore Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PartnerAnnouncementPopup;
