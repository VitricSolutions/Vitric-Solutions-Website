import { X } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";
import { useState } from "react";
import { sendEmail } from "../../services/api";
import toast from "react-hot-toast";

const DemoModal = () => {
    const { isDemoOpen, closeDemo } = useDemo();
    const [status, setStatus] = useState<"idle" | "loading">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const payload = {
            to_email: "sales@vitric.in",
            form_type: "Product Demo",
            full_name: formData.get("fullName"),
            company_name: formData.get("companyName"),
            requirement: formData.get("requirement"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        };

        try {
            await sendEmail(payload);
            toast.success("Request sent successfully!");
            setStatus("idle");
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                closeDemo();
            }, 1000);
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit request.");
            setStatus("idle");
        }
    };

    return (
        <>
            {isDemoOpen && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 overflow-y-auto py-10"
                    onClick={closeDemo}
                >
                    <div
                        className="relative w-full max-w-lg rounded-2xl bg-white px-6 md:px-10 py-8 shadow-xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeDemo}
                            aria-label="Close modal"
                            className="absolute right-6 top-6 text-gray-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>

                        {/* Heading */}
                        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D32F0F]">
                            Request a Demo
                        </h2>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                            See our products in action. Fill out the form below.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                            {/* Full Name */}
                            <div className="group relative">
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="fullName"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Full Name *
                                </label>
                            </div>

                            {/* Company Name */}
                            <div className="group relative">
                                <input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="companyName"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Company Name *
                                </label>
                            </div>

                            {/* Requirement */}
                            <div className="group relative">
                                <textarea
                                    name="requirement"
                                    id="requirement"
                                    required
                                    rows={3}
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none resize-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="requirement"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Requirement *
                                </label>
                            </div>

                            {/* Contact Details represented as Email & Phone */}
                            <div className="group relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Email Address *
                                </label>
                            </div>

                            <div className="group relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    className="peer w-full border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:border-[#D32F0F] focus:outline-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute top-0 left-0 -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#D32F0F]"
                                >
                                    Phone Number *
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="button relative px-8 py-3 text-sm font-medium text-black hover:text-white cursor-pointer transition-all duration-300 ease-in transform disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#D32F0F]" />
                                    {status === "loading" ? "Sending..." : "Request Demo"}
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

export default DemoModal;
