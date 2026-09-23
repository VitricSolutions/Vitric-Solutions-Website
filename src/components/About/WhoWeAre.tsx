
import img1 from "../../assets/images/aboutUs/Who_we_are.jpg";

const WhoWeAre = () => {

    const stats = [
        { value: "25+", label: "Active Enterprise Clients" },
        { value: "10k+", label: "Global Talent Network" },
        { value: "23+", label: "Developers & Technical Leads" },
        { value: "10+", label: " Certified SAP BTP Consultants" },
        { value: "10+", label: "Solution Architects & Consultants for Kinaxis" }
    ];

    return (
        <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-50 font-[Montserrat]">
            <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-1 bg-[#D32F0F] rounded-full"></span>
                        <h2 className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm">Who We Are</h2>
                    </div>

                    {/* <h3 className="text-3xl md:text-5xl font-bold mb-8 text-[#1D1D1D] leading-tight">
                        Building Capability, <br /> Not Just Solutions
                    </h3> */}

                    <div className="space-y-5 md:space-y-6 text-base md:text-[17px] text-gray-600 leading-7 md:leading-relaxed text-justify font-[Lato]">
                        <p>
                            Vitric was built with a simple belief: real transformation happens when organizations gain capability—not dependency. Since our founding in 2016, we’ve partnered with global enterprises to strengthen how they build, plan, and execute across technology, talent, and supply chain operations.
                        </p>
                        <p>
                            We operate as an extension of our clients’ teams, combining deep domain expertise with an agile, outcome-driven delivery model. Whether it’s IT services, specialized recruitment, or supply chain transformation, our focus remains the same—enable faster decisions, stronger execution, and sustainable growth.
                        </p>
                        <p>
                            At the core of Vitric is a strong in-house expert network comprising seasoned Supply Chain SMEs, Technical Leads, AI Engineers, and Product & Platform specialists. This multidisciplinary team brings deep experience across enterprise platforms, data engineering, automation, and advanced analytics—ensuring solutions are not only implemented effectively but designed for longevity, adaptability, and business impact.
                        </p>
                        <p>
                            Our impact spans 25+ active clients across multiple industries, supported by a powerful talent ecosystem of over 10,000 professionals. This reach is complemented by a focused in-house core—23+ skilled developers, 10 certified SAP BTP consultants,10 + Solution Architects and Consultants for Kinaxis and 10+ certified recruiters—ensuring precision, continuity, and accountability in every engagement.
                        </p>
                        <p className="border-l-4 border-[#D32F0F] pl-4 italic text-gray-500 mt-8 mb-2 bg-gray-50 py-3 rounded-r-lg">
                            "What sets Vitric apart is our ability to operate at scale while delivering with intent. This balance of reach, specialization, and execution discipline allows us to move quickly, deliver reliably, and create measurable business outcomes for our clients."
                        </p>
                    </div>
                </div>

                {/* Right: Visual Redesign - Professional Image with Overlay */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative group mt-10 lg:mt-0">
                    {/* Main Image Container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px] w-full">
                        <img
                            src={img1}
                            alt="Who We Are"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Dark Gradient Overlay for text readability on image if needed, or just style */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Floating Stats Card - Overlapping Position */}
                    <div className="relative z-20 bg-white p-4 md:p-5 rounded-xl shadow-xl border-t-8 border-[#D32F0F] w-[95%] md:w-[90%] mx-auto lg:mx-0 -mt-16 lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 overflow-x-auto no-scrollbar">
                        <div className="flex flex-nowrap justify-start md:justify-between gap-8 md:gap-4 min-w-max md:min-w-0">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center w-auto flex-1 flex flex-col items-center justify-start min-w-[140px] md:min-w-[auto]">
                                    <span className="block text-2xl md:text-3xl font-bold text-[#D32F0F] mb-1">{stat.value}</span>
                                    <span className="text-[10px] md:text-[11px] uppercase text-gray-500 font-bold tracking-wider leading-tight block max-w-[150px]">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative element behind */}
                    <div className="absolute -top-5 -right-5 w-32 h-32 border-4 border-[#D32F0F]/20 rounded-xl -z-10 hidden lg:block"></div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeAre;
