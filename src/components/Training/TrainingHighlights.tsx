import { Video, Users, Laptop, Award, Trophy } from 'lucide-react';

const TrainingHighlights = () => {
    return (
        <section className="py-24 bg-[#111] text-white relative overflow-hidden font-[Montserrat]">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D32F0F]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Highlights Grid */}
                    <div className="lg:w-1/2">
                        <span className="text-[#D32F0F] font-bold tracking-widest uppercase text-sm mb-2 block">
                            Why Join?
                        </span>
                        <h2 className="text-4xl font-bold mb-10">
                            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F0F] to-red-500">Highlights</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Video />, title: "Live Sessions", desc: "Interactive instructor-led training." },
                                { icon: <Users />, title: "Expert Mentors", desc: "Learn from Solution Architects." },
                                { icon: <Laptop />, title: "Hands-on Labs", desc: "Real project use cases." },
                                { icon: <Award />, title: "Certification", desc: "Guided path to success." },
                            ].map((item, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D32F0F]/50 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#D32F0F]/20 rounded-lg flex items-center justify-center text-[#D32F0F] mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Certification Focus Card */}
                    <div className="lg:w-1/2 relative">
                        {/* Decorative border gradient */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D32F0F] to-orange-600 rounded-3xl blur opacity-30 animate-pulse"></div>

                        <div className="relative h-full bg-[#1A1A1A] border border-gray-800 p-8 md:p-12 rounded-3xl overflow-hidden flex flex-col justify-center">

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-yellow-500/20 rounded-full">
                                        <Trophy className="w-8 h-8 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Certification Focus</h3>
                                        <p className="text-gray-400 text-sm">Targeted Exam Preparation</p>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="font-medium text-gray-200">Kinaxis Supply Chain Level 1</span>
                                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="font-medium text-gray-200">Kinaxis Integration Level 1</span>
                                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex items-end gap-2 text-[#D32F0F]">
                                    <span className="text-6xl font-black leading-none">90%</span>
                                    <span className="text-lg font-bold mb-2 text-gray-400">Success Rate</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper component for checklist
function CheckCircle2(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
    )
}

export default TrainingHighlights;
