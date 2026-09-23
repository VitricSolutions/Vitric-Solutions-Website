import earthMap from "../../assets/icon/earth.png"; // Using earth image from index.css reference if available

// If earth.png is a background image class .earth, I can usage that class or import it.
// I'll try to import it, assuming it's in assets/icon/ based on CSS.

const GlobalPresence = () => {
    const regions = ["India", "USA", "Europe", "Middle East"];
    const industries = ["Manufacturing", "Retail", "Logistics", "Energy", "Technology"];

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1D]">
                        Global Reach, <br />
                        <span className="text-[#D32F0F]">Multi-Industry Experience</span>
                    </h2>

                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#D32F0F]"></span> Global Presence
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {regions.map((region, idx) => (
                                <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-[#D32F0F] hover:text-white transition-colors duration-300 cursor-default">
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#D32F0F]"></span> Industries Served
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {industries.map((ind, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                    {/* Simple icon placeholder */}
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#D32F0F]">
                                        This is a placeholder icon
                                        {/* <img src={globalIcon} className="w-4" alt="" /> */}
                                    </div>
                                    {ind}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Map Side - Visual */}
                <div className="w-full lg:w-1/2 relative h-64 md:h-96 flex items-center justify-center">
                    {/* Creating a map representation or using image */}
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center opacity-80" style={{ backgroundImage: `url(${earthMap})` }}></div>

                    {/* Decorative markers (simulated) */}
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#D32F0F] rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#D32F0F] rounded-full animate-ping delay-75"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#D32F0F] rounded-full animate-ping delay-150"></div>
                </div>

            </div>
        </section>
    );
};

export default GlobalPresence;
