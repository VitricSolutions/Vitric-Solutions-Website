import { X } from "lucide-react";
import { useAssessment } from "../../Context/AssessmentContext";
import { useState } from "react";
import { sendEmail } from "../../services/api";
import toast from "react-hot-toast";

const AssessmentModal = () => {
    const { isAssessmentOpen, closeAssessment } = useAssessment();
    const [status, setStatus] = useState<"idle" | "loading">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const payload = {
            to_email: "sales@vitric.in",
            form_type: "Assessment Request",
            full_name: formData.get("fullName"),
            email: formData.get("email"),
            company_name: formData.get("companyName"),
            job_title: formData.get("jobTitle"),
            phone: formData.get("phone"),
            meeting_type: formData.get("meetingType"),
            sap_environment: formData.get("sapEnvironment"),
            btp_status: formData.get("btpStatus"),
            btp_areas: formData.get("btpAreas"),
            timeline: formData.get("timeline"),
            description: formData.get("description"),
        };

        try {
            await sendEmail(payload);
            toast.success("Request submitted successfully!");
            setStatus("idle");
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                closeAssessment();
            }, 1000);
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit request.");
            setStatus("idle");
        }
    };

    return (
        <>
            {isAssessmentOpen && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 overflow-y-auto py-10"
                    onClick={closeAssessment}
                >
                    <div
                        className="relative w-full max-w-2xl rounded-2xl bg-white px-6 md:px-10 py-8 shadow-xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeAssessment}
                            aria-label="Close modal"
                            className="absolute right-6 top-6 text-gray-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>

                        {/* Heading */}
                        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D32F0F]">
                            Schedule a Consultation
                        </h2>
                        <p className="mt-2 text-center text-[#1D1D1D]">
                            Let us know your requirements and we'll get back to you.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Full Name */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Full Name*</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"
                                    />
                                </div>

                                {/* Business Email */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Business Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"
                                    />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Company Name*</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"
                                    />
                                </div>

                                {/* Job Title / Role */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Job Title / Role</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"
                                    />
                                </div>
                                {/* Preferred Meeting Type */}
                                <div>
                                    <label className="text-sm font-medium text-[#1D1D1D]">Preferred Meeting Type</label>
                                    <select name="meetingType" className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]">
                                        <option value="">Select...</option>
                                        <option value="Video Call">Video Call</option>
                                        <option value="Phone Call">Phone Call</option>
                                    </select>
                                </div>
                            </div>

                            {/* Current SAP Environment */}
                            <div>
                                <label className="text-sm font-medium text-[#1D1D1D]">Current SAP Environment</label>
                                <select name="sapEnvironment" className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]">
                                    <option value="">Select...</option>
                                    <option value="SAP ECC">SAP ECC</option>
                                    <option value="SAP S/4HANA On-Prem">SAP S/4HANA On-Prem</option>
                                    <option value="SAP S/4HANA Cloud">SAP S/4HANA Cloud</option>
                                    <option value="SAP SuccessFactors">SAP SuccessFactors</option>
                                    <option value="SAP Ariba">SAP Ariba</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                            </div>

                            {/* SAP BTP Usage Status - Radio */}
                            <div>
                                <label className="text-sm font-medium text-[#1D1D1D] block mb-2">SAP BTP Usage Status</label>
                                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="btpStatus" value="Already using BTP" className="text-[#D32F0F] focus:ring-[#D32F0F]" />
                                        <span className="ml-2 text-sm">Already using BTP</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="btpStatus" value="Planning to use BTP" className="text-[#D32F0F] focus:ring-[#D32F0F]" />
                                        <span className="ml-2 text-sm">Planning to use BTP</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="btpStatus" value="Evaluating BTP" className="text-[#D32F0F] focus:ring-[#D32F0F]" />
                                        <span className="ml-2 text-sm">Evaluating BTP</span>
                                    </label>
                                </div>
                            </div>

                            {/* Areas to Assess in SAP BTP */}
                            <div>
                                <label className="text-sm font-medium text-[#1D1D1D]">Areas to Assess in SAP BTP</label>
                                <select name="btpAreas" className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]">
                                    <option value="">Select...</option>
                                    <option value="Application Development (CAP / RAP)">Application Development (CAP / RAP)</option>
                                    <option value="Integration Suite">Integration Suite</option>
                                    <option value="Workflow & Business Rules">Workflow & Business Rules</option>
                                    <option value="SAP Fiori / UX">SAP Fiori / UX</option>
                                    <option value="Security & Identity (IAS / IPS)">Security & Identity (IAS / IPS)</option>
                                    <option value="Not sure – need guidance">Not sure – need guidance</option>
                                </select>
                            </div>

                            {/* Expected Start Timeline */}
                            <div>
                                <label className="text-sm font-medium text-[#1D1D1D]">Expected Start Timeline</label>
                                <select name="timeline" className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]">
                                    <option value="">Select...</option>
                                    <option value="Immediately">Immediately</option>
                                    <option value="1–3 Months">1–3 Months</option>
                                    <option value="3–6 Months">3–6 Months</option>
                                    <option value="Exploring">Exploring</option>
                                </select>
                            </div>


                            {/* Brief Description */}
                            <div>
                                <label className="text-sm font-medium text-[#1D1D1D]">Brief Description of Requirement</label>
                                <textarea
                                    name="description"
                                    rows={3}
                                    placeholder="Describe your requirement..."
                                    className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent pb-2 outline-none placeholder:text-gray-400 focus:border-[#1D1D1D]"
                                />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="button relative px-8 py-3 text-sm font-medium text-black hover:text-white cursor-pointer transition-all duration-300 ease-in transform disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#D32F0F]" />
                                    {status === "loading" ? "Submitting..." : "Submit Request"}
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

export default AssessmentModal;
