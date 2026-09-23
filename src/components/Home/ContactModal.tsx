import { X } from "lucide-react";
import { useContact } from "../../Context/Context";
import { useState } from "react";
import { sendEmail } from "../../services/api";
import toast from "react-hot-toast";

const ContactModal = () => {
  const { isOpen, closeContact } = useContact();
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      to_email: "sales@vitric.in",
      form_type: "General Inquiry",
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      message: formData.get("message"),
    };

    try {
      await sendEmail(payload);
      toast.success("Message sent successfully!");
      setStatus("idle");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        closeContact();
      }, 1000);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 overflow-y-auto py-10"
          onClick={closeContact}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white px-6 md:px-10 py-8 shadow-xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeContact}
              aria-label="Close modal"
              className="absolute right-6 top-6 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D32F0F]">
              Ready to Transform your Business?
            </h2>
            <p className="mt-2 text-center text-[#1D1D1D]">
              Contact our team for a free consultation.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#1D1D1D]">First Name</label>
                  <input type="text" name="firstName" required className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1D1D1D]">Last Name</label>
                  <input type="text" name="lastName" required className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1D1D1D]">Email</label>
                  <input type="email" name="email" required className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1D1D1D]">Mobile No.</label>
                  <input type="tel" name="mobile" required className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#1D1D1D]">Message</label>
                <textarea name="message" rows={3} className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent pb-2 outline-none focus:border-[#1D1D1D]"></textarea>
              </div>
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="button relative px-8 py-3 text-sm font-medium text-black hover:text-white cursor-pointer transition-all duration-300 ease-in transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#D32F0F]" />
                  {status === "loading" ? "Sending..." : "Connect with Vitric"}
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

export default ContactModal;
