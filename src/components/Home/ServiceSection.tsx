import { useState } from "react";
import Consulting from "../../assets/images/ServiceSection/Consulting.png"
import Products from "../../assets/images/ServiceSection/Product.png"
import Training from "../../assets/images/ServiceSection/Training.png"
import Talent from "../../assets/images/ServiceSection/TalentSolution.png"

export default function TechnologyServices() {
  const [active, setActive] = useState<number | null>(0);
  const services = [
    {
      title: "Consulting",
      desc: "Expert-led consulting to modernize systems and accelerate transformation.",
      points: ["Kinaxis Maestro", "SAP BTP, BTM and BDC", "Digital Transformation", "Data & AI"],
      image: Consulting,
      link: "/services/kinaxis-maestro"
    },
    {
      title: "Products",
      desc: "Enterprise-grade products to accelerate digital operations.",
      points: ["Feedback Management System (NPS)", "Procure to Pay ERP System", "Vendor Management System", "Payroll Management"],
      image: Products,
      link: "/products"
    },
    {
      title: "Training",
      desc: "Hands-on training for business and technical teams.",
      points: ["Kinaxis", "SAP", "Custom Workshops"],
      image: Training,
      link: "/training"
    },
    {
      title: "Talent Solutions",
      desc: "Hire certified consultants and domain experts on demand.",
      points: ["IT", "Non-IT", "Permanent Hiring", "Contract Staffing"],
      image: Talent,
      link: "/talent"
    },
  ];

  return (
    <section id="technology-services" className="max-w-350 mx-auto px-8 ">

      {/* Heading */}
      <div className="text-center mb-16 flex flex-col items-center">
        <p className="tracking-widest w-fit text-sm lg:text-[18px] mb-2 border-b-2 border-[#D32F0F]">SERVICES</p>
        <h2 className="text-4xl font-bold">
          Technology-Led <span className="text-[#D32F0F]">Services</span>
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center mb-16 lg:mb-0">

        {/* LEFT MENU */}
        <div className="col-span-3 space-y-8">
          {services.map((s, i) => (
            <div key={i}>
              <button
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 text-lg w-full text-left
                  ${active === i ? "text-[#D32F0F] font-semibold" : "text-black"}
                `}
              >
                {active === i && <span className="text-2xl">›</span>}
                {s.title}
              </button>
              <div className={`h-[1px] mt-6 ${active === i ? "bg-[#D32F0F]" : "bg-gray-300"}`} />
            </div>
          ))}
        </div>

        {/* IMAGE STACK */}
        <div className="col-span-5 relative h-[420px] flex justify-center">

          {services.map((s, i) => {
            const pos = i - (active ?? 0);

            return (
              <img
                key={i}
                src={s.image}
                alt=""
                className={`
                  absolute object-cover rounded-lg shadow-xl
                  transition-all duration-500 ease-in-out
                  ${pos === 0 && "z-30 translate-y-0 scale-100 opacity-100"}
                  ${pos === 1 && "z-20 translate-y-0 scale-100 opacity-100"}
                  ${pos === 2 && "z-10 translate-y-0 scale-100 opacity-100 "}
                  ${pos === 3 && "z-0 opacity-100"}
                `}
              />
            );
          })}

        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-4 space-y-5 -mt-35 sm:mt-0">

          <h3 className="text-xl font-semibold">
            {services[active ?? 0].title}
          </h3>

          <p className="text-gray-600">
            {services[active ?? 0].desc}
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            {services[active ?? 0].points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <p className="text-gray-600">
            We help organizations optimize operations and enable smarter, faster
            decision-making through strategic and technology-driven consulting.
          </p>

          <a
            href={services[active ?? 0].link}
            className="button relative inline-block px-10 py-3 text-sm font-medium text-black text-[16px] hover:text-white cursor-pointer transition-all duration-300 ease-in transform"
          >
            <span className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#D32F0F]" />
            Read More
            <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#D32F0F]" />
          </a>

        </div>

      </div>

      {/* Mobile FAQ/Accordion Layout */}
      <div className="lg:hidden space-y-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-lg border-b-2 border-b-zinc-100 overflow-hidden pb-2">
            {/* Accordion Header */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className={`w-full text-left p-6 pb-2 flex justify-between items-center transition-colors duration-200 ${active === i ? 'text-[#D32F0F]' : ' text-black '
                }`}
            >
              <h3 className={`text-[18px] font-medium ${active === i ? '' : ''}`}>
                {s.title}
              </h3>
              <span className={`text-2xl transition-transform duration-200 ${active === i ? 'rotate-90' : ''}`}>
                ›
              </span>
            </button>

            {/* Expanded Content */}
            {active === i && (
              <div className="pt-2 border-t  border-gray-200 animate-in slide-in-from-top-2 duration-300">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
                />
                <p className="text-gray-600 mb-4 text-base leading-relaxed">
                  {s.desc}
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  {s.points.map((p, j) => (
                    <li key={j} className="text-base">{p}</li>
                  ))}
                </ul>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  We help organizations optimize operations and enable smarter, faster
                  decision-making through strategic and technology-driven consulting.
                </p>
                <a
                  href={s.link}
                  className="button relative inline-block px-10 py-4 text-sm font-medium text-black text-[16px] hover:text-white cursor-pointer
                    transition-all duration-300 ease-in transform"
                >
                  <span className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#D32F0F]" />
                  Read More
                  <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#D32F0F]" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}