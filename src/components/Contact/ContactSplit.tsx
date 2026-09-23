import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Mail, MapPin, Phone, ArrowRight, Building2, Globe2 } from "lucide-react";
import { sendEmail } from "../../services/api";
import toast from "react-hot-toast";

const ContactSplit = () => {
    const sectionRef = useRef(null);
    const [status, setStatus] = useState<"idle" | "loading">("idle");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-info-item",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.5 }
            );
            gsap.fromTo(".contact-form",
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const payload = {
            to_email: "sales@vitric.in",
            form_type: "Contact Us Inquiry",
            first_name: formData.get("firstName"),
            last_name: formData.get("lastName"),
            email: formData.get("email"),
            mobile: formData.get("mobile"),
            service: formData.get("service"),
            budget: formData.get("budget"),
            message: formData.get("message"),
        };

        try {
            await sendEmail(payload);
            toast.success("Message sent successfully!");
            setStatus("idle");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send message. Please try again.");
            setStatus("idle");
        }
    };

    return (
        <section ref={sectionRef} className="pb-24 px-4 md:px-8 lg:px-16 font-[Montserrat] bg-[#fafafa] relative overflow-hidden">

            {/* Extended Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>

            <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

                {/* Left Column: Contact Info */}
                <div className="space-y-12 pt-8">

                    {/* Intro */}
                    <div className="contact-info-item">
                        <h3 className="text-2xl font-bold text-[#1D1D1D] mb-4">Looking to collaborate?</h3>
                        <div className="flex items-center gap-3 text-lg text-gray-600 font-[Lato] group">
                            <span className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-5 h-5 text-[#D32F0F]" />
                            </span>
                            <a href="mailto:sales@vitric.in" className="hover:text-[#D32F0F] transition-colors font-medium">sales@vitric.in</a>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 contact-info-item"></div>

                    {/* Locations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* India */}
                        <div className="contact-info-item space-y-4 group">
                            <div className="flex items-center gap-2 text-[#D32F0F] font-bold">
                                <Building2 className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                                Visit Us – India
                            </div>
                            {/* <p className="font-bold text-[#1D1D1D] text-lg">Vitric Business Solutions Pvt. Ltd</p> */}
                            <div className="text-gray-600 font-[Lato] space-y-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <p className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 mt-1 text-gray-400 shrink-0" />
                                    <span>Office Location: <br />Nagpur, Pune</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    sales@vitric.in
                                </p>
                            </div>
                        </div>

                        {/* Singapore */}
                        <div className="contact-info-item space-y-4 group">
                            <div className="flex items-center gap-2 text-[#D32F0F] font-bold">
                                <Globe2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                Visit Us – Singapore
                            </div>
                            {/* <p className="font-bold text-[#1D1D1D] text-lg">Vitric Solutions Pte. Ltd</p> */}
                            <div className="text-gray-600 font-[Lato] space-y-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <p className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 mt-1 text-gray-400 shrink-0" />
                                    <span>246 MacPherson Road, <br />#03-01, Betime Building,<br />Singapore – 348578</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 contact-info-item"></div>

                    {/* Phone */}
                    <div className="contact-info-item">
                        <h4 className="text-base font-bold text-[#1D1D1D] mb-2">Call Us</h4>
                        <a href="tel:+919270153230" className="flex items-center gap-3 text-lg font-bold text-gray-800 hover:text-[#D32F0F] transition-colors bg-white p-3 rounded-xl border border-gray-100 shadow-sm inline-flex hover:shadow-md">
                            <span className="p-2 bg-[#D32F0F]/10 rounded-full text-[#D32F0F]">
                                <Phone className="w-5 h-5" />
                            </span>
                            +91 92095 89970
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="contact-form bg-white rounded-[2rem] p-8 md:p-12 border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative">
                    {/* Decorative Blob */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#D32F0F]/10 to-orange-100 rounded-full blur-3xl -z-10"></div>

                    <h3 className="text-3xl font-bold text-[#1D1D1D] mb-2">Get in Touch</h3>
                    <p className="text-gray-500 font-[Lato] mb-8">Fill in your details and our team will connect with you shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                                <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all font-medium" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                                <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all font-medium" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all font-medium" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile Number</label>
                                <input type="tel" name="mobile" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all font-medium" placeholder="+91 ..." />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Service</label>
                                <div className="relative">
                                    <select name="service" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all appearance-none cursor-pointer font-medium">
                                        <option value="" disabled selected>Choose a service</option>
                                        <option value="Kinaxis">Kinaxis Maestro</option>
                                        <option value="SAP">SAP Solutions</option>
                                        <option value="Digital">Digital & AI Services</option>
                                        <option value="Talent">Talent Solutions</option>
                                        <option value="Product">Product Solutions</option>
                                        <option value="Training">Training</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estimated Budget</label>
                                <div className="relative">
                                    <select name="budget" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all appearance-none cursor-pointer font-medium">
                                        <option value="" disabled selected>Select range</option>
                                        <option value="<10k">&lt; $10,000</option>
                                        <option value="10k-50k">$10,000 - $50,000</option>
                                        <option value="50k-100k">$50,000 - $100,000</option>
                                        <option value="100k+">$100,000+</option>
                                    </select>
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                            <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#D32F0F] focus:ring-4 focus:ring-[#D32F0F]/5 outline-none transition-all resize-none font-medium" placeholder="Briefly describe your project requirements or goals..."></textarea>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 bg-[#D32F0F] hover:bg-[#b01e00] text-white font-bold rounded-xl shadow-lg shadow-[#D32F0F]/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? "Sending..." : <>Get a Free Consultation <ArrowRight className="w-5 h-5" /></>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSplit;
