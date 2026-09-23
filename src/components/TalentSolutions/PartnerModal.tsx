import { X } from "lucide-react";
import { usePartner } from "../../Context/PartnerContext";
import { useState } from "react";
import { sendEmail } from "../../services/api";

const PartnerModal = () => {
    const { isPartnerOpen, closePartner } = usePartner();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const payload = {
            to_email: "hr@vitric.in",
            form_type: "Talent Partner Request",
            company_name: formData.get("companyName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            domain: formData.get("domain"),
            requirement_type: formData.get("requirementType"),
        };

        try {
            await sendEmail(payload);
            setStatus("success");
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                setStatus("idle");
                closePartner();
            }, 2000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <>
            {isPartnerOpen && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 overflow-y-auto py-10"
                    onClick={closePartner}
                >
                    <div
                        className="relative w-full max-w-lg rounded-2xl bg-white px-6 md:px-10 py-8 shadow-xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePartner}
                            aria-label="Close modal"
                            className="absolute right-6 top-6 text-gray-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>

                        {/* Heading */}
                        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D32F0F]">
                            Partner With Us
                        </h2>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                            Let's build a successful partnership.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                            {/* Company Name */}
                            <div className="group relative">
                                <input
                                    type="text"
                                    name="companyName"
                                    id="partner-companyName"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="partner-companyName"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Company Name *
                                </label>
                            </div>

                            {/* Contact Details (Email) */}
                            <div className="group relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="partner-email"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="partner-email"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Email Address *
                                </label>
                            </div>

                            {/* Contact Details (Phone) */}
                            <div className="group relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="partner-phone"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="partner-phone"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Phone Number *
                                </label>
                            </div>

                            {/* Domain */}
                            <div className="group relative">
                                <input
                                    type="text"
                                    name="domain"
                                    id="partner-domain"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="partner-domain"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Domain *
                                </label>
                            </div>

                            {/* Requirement Type */}
                            <div className="group relative">
                                <select
                                    name="requirementType"
                                    id="requirementType"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                >
                                    <option value="" disabled selected>Select Requirement Type</option>
                                    <option value="contract">Contract Staffing</option>
                                    <option value="permanent">Permanent Hiring</option>
                                    <option value="project">Project Based</option>
                                    <option value="other">Other</option>
                                </select>
                                <label
                                    htmlFor="requirementType"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Requirement Type *
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className={`button relative px-8 py-3 text-sm font-medium text-black hover:text-white cursor-pointer transition-all duration-300 ease-in transform ${status === "success" ? "bg-green-100 text-green-700" :
                                            status === "error" ? "bg-red-100 text-red-700" : ""
                                        }`}
                                >
                                    <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#D32F0F]" />
                                    {status === "loading" ? "Sending..." :
                                        status === "success" ? "Request Sent!" :
                                            status === "error" ? "Retry" :
                                                "Submit Request"}
                                    <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#D32F0F]" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PartnerModal;
