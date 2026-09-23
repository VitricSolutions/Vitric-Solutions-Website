import { MapPin, Globe, UserCheck, Briefcase } from 'lucide-react';

const TrainingLogistics = () => {
    return (
        <section className="py-24 bg-white relative font-[Montserrat]">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Audience & <span className="text-[#D32F0F]">Delivery</span>
                    </h2>
                    <p className="text-gray-500 font-[Lato]">
                        Designed for professionals across the globe.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Who Should Attend (Cards) */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <UserCheck className="text-[#D32F0F]" /> Who Should Attend
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Supply Chain", sub: "Professionals" },
                                { title: "ERP / SAP", sub: "Consultants" },
                                { title: "Planning", sub: "Managers" },
                                { title: "Freshers", sub: "Aspiring SCM" }
                            ].map((role, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#D32F0F] hover:shadow-lg transition-all group">
                                    <Briefcase className="w-8 h-8 text-gray-300 mb-4 group-hover:text-[#D32F0F] transition-colors" />
                                    <h4 className="font-bold text-gray-900">{role.title}</h4>
                                    <p className="text-sm text-gray-500">{role.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Locations (Map Visualizationish) */}
                    <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden min-h-[400px] flex flex-col justify-center">

                        {/* Map Background */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#D32F0F]/20 flex items-center justify-center border border-[#D32F0F]">
                                    <MapPin className="text-[#D32F0F]" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl">India Centers</div>
                                    <div className="text-gray-400">Pune & Nagpur</div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gray-700"></div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500">
                                    <Globe className="text-blue-500" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl">Global Virtual</div>
                                    <div className="text-gray-400">Online Interactive Sessions</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrainingLogistics;
