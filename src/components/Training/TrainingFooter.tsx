import {Mail, Phone, MapPin } from "lucide-react";
// import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import { sendEmail } from "../../services/api";
// import toast from "react-hot-toast";

const TrainingFooter = () => {
    // const [status, setStatus] = useState<"idle" | "loading">("idle");

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setStatus("loading");

    //     const formData = new FormData(e.currentTarget);
    //     const payload = {
    //         to_email: "support@vitric.in",
    //         form_type: "Training Enrollment",
    //         name: formData.get("name"),
    //         phone: formData.get("phone"),
    //         email: formData.get("email"),
    //         interest: formData.get("interest"),
    //     };

    //     try {
    //         await sendEmail(payload);
    //         toast.success("Enrollment request sent successfully!");
    //         setStatus("idle");
    //         (e.target as HTMLFormElement).reset();
    //     } catch (error) {
    //         console.error("Submission error:", error);
    //         toast.error("Failed to send enrollment request. Please try again.");
    //         setStatus("idle");
    //     }
    // };

    return (
        <section id="training-footer" className="py-14 px-4 bg-[#111] relative overflow-hidden font-[Montserrat] scroll-mt-24">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D32F0F]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-6 lg:flex gap-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#D32F0F]" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-gray-400 text-sm font-[Lato]">
                                        Call for enquiries
                                    </p>
                                    <p className="text-white text-base sm:text-lg font-bold mt-1 break-words">
                                        +91 93731 11524
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D32F0F]" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-gray-400 text-sm font-[Lato]">
                                        Email us at
                                    </p>
                                    <p className="text-white text-base sm:text-lg font-bold mt-1 break-all">
                                        support@vitric.in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Centers */}
                    <div className="space-y-8 md:border-l border-gray-800 pl-0 md:pl-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                            Our Centers
                        </h3>

                        <div className="space-y-6 lg:flex gap-6">
                            {/* Nagpur */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D32F0F]" />
                                </div>

                                <div>
                                    <p className="text-white font-bold text-base sm:text-lg">
                                        Nagpur, India
                                    </p>
                                </div>
                            </div>

                            {/* Pune */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D32F0F]" />
                                </div>

                                <div>
                                    <p className="text-white font-bold text-base sm:text-lg">
                                        Pune, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Journey</h2>
                    <p className="text-gray-400 mb-8 text-lg font-[Lato]">
                        Ready to transform your career? Fill out the form below and our training experts will guide you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" name="name" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D32F0F] transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                <input type="tel" name="phone" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D32F0F] transition-colors" placeholder="+91..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" name="email" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D32F0F] transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">I'm Interested In</label>
                            <select name="interest" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D32F0F] transition-colors cursor-pointer">
                                <option value="" disabled selected>Select a course path</option>
                                <option value="SAP">SAP Logistics & BTP</option>
                                <option value="Kinaxis">Kinaxis Maestro</option>
                                <option value="WebDev">Full Stack Development</option>
                                <option value="CorpTraining">Corporate Training</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="group w-full py-4 bg-white hover:bg-[#D32F0F] hover:text-white text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Submitting..." : <>Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                        </button>
                    </form>
                </div>

                <div className="space-y-12 lg:pl-12 border-l border-gray-800">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-[#D32F0F]" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-[Lato]">Call for enquiries</p>
                                    <p className="text-white text-lg font-bold mt-1">+91 93731 11524</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-[#D32F0F]" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-[Lato]">Email us at</p>
                                    <p className="text-white text-lg font-bold mt-1">support@vitric.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Our Centers</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-[#D32F0F]" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">Nagpur, India</p>

                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#D32F0F]/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-[#D32F0F]" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">Pune, India</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



        </section>
    );
};

export default TrainingFooter;
