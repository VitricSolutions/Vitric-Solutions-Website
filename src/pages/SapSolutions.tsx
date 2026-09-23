import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SapHero from "../components/SapSolutions/SapHero";
import BtmSection from "../components/SapSolutions/BtmSection";
import BdcSection from "../components/SapSolutions/BdcSection";
import BtpSection from "../components/SapSolutions/BtpSection";
import WhyVitricSap from "../components/SapSolutions/WhyVitricSap";
import CTASection from "../components/About/CTASection";

const SapSolutions = () => {
    const [activeTab, setActiveTab] = useState("BTP");
    const [isNavVisible, setIsNavVisible] = useState(true);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky header/nav
            const offset = 140;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px", // Active when element takes up middle 60% of viewport
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === "why-vitric") {
                        setIsNavVisible(false);
                    } else {
                        // If we are scrolling back up and hit a section, show nav
                        // But we also need to check if 'why-vitric' is NOT intersecting.
                        // Actually, separate logic might be cleaner.
                        // Let's use this observer just for active tab highlighting.
                        if (["BTP", "BTM", "BDC"].includes(entry.target.id)) {
                            setActiveTab(entry.target.id);
                        }
                    }
                }
            });
        }, observerOptions);

        const sections = ["BTP", "BTM", "BDC", "why-vitric"];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Separate observer for hiding nav visibility specifically
        // Triggers when 'why-vitric' enters the viewport from bottom or top
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If WhyVitric is visible, Hide Nav
                setIsNavVisible(!entry.isIntersecting);
            });
        }, {
            root: null,
            threshold: 0.1, // Trigger as soon as 10% is visible
            rootMargin: "0px 0px -100px 0px" // Trigger slightly before it hits bottom
        });

        const whyVitricEl = document.getElementById("why-vitric");
        if (whyVitricEl) navObserver.observe(whyVitricEl);

        return () => {
            observer.disconnect();
            navObserver.disconnect();
        };
    }, []);

    return (
        <div className="w-full relative bg-white">
            <Header />
            <SapHero />

            {/* Tagline Section */}
            <div className="bg-white pt-8 pb-4 text-center px-4">
                <p className="text-lg md:text-xl text-gray-500 font-[Lato] tracking-wide">
                    Comprehensive SAP Solutions for <span className="text-[#D32F0F] font-semibold">Digital Transformation</span>
                </p>
            </div>

            {/* Sticky Navigation Bar */}
            <div className={`sticky top-[70px] z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-500 ease-in-out ${isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-16 flex justify-center">
                    <div className="flex items-center gap-1 md:gap-4 overflow-x-auto py-4 hide-scrollbar">
                        {["BTP", "BTM", "BDC"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => scrollToSection(tab)}
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#D32F0F] text-white shadow-lg shadow-[#D32F0F]/30 transform scale-105"
                                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                    }`}
                            >
                                SAP {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stacked Config */}
            <div className="flex flex-col">
                <div id="BTP">
                    <BtpSection />
                </div>
                <div id="BTM">
                    <BtmSection />
                </div>
                <div id="BDC">
                    <BdcSection />
                </div>
            </div>

            <div id="why-vitric">
                <WhyVitricSap />
            </div>

            <CTASection />
            <Footer />
        </div>
    );
};

export default SapSolutions;
