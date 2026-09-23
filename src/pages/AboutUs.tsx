import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/About/HeroSection";
import WhoWeAre from "../components/About/WhoWeAre";
import ServicePortfolio from "../components/About/ServicePortfolio";
import CompanySection from "../components/About/CompanySection";
import VisionMission from "../components/About/VisionMission";
import LeadershipTeam from "../components/About/LeadershipTeam";
import DeliveryPhilosophy from "../components/About/DeliveryPhilosophy";
import CTASection from "../components/About/CTASection";
import { useEffect } from "react";

const AboutUs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
            <WhoWeAre />
            <VisionMission />
            <ServicePortfolio />
            <CompanySection />
            <LeadershipTeam />
            <DeliveryPhilosophy />
            {/* Keeping CTA at the end for conversion */}
            <CTASection />
            <Footer />
        </>
    );
};

export default AboutUs;
