
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import KinaxisHero from "../components/KinaxisMaestro/KinaxisHero";
import CoreCompetencies from "../components/KinaxisMaestro/CoreCompetencies";
import ServicesSection from "../components/KinaxisMaestro/ServicesSection";
import TeamStrength from "../components/KinaxisMaestro/TeamStrength";
import CTASection from "../components/About/CTASection"; // Reusing CTA
import PartnerHighlightRibbon from "../components/KinaxisMaestro/PartnerHighlightRibbon";

const KinaxisMaestro = () => {
    return (
        <div className="w-full bg-white relative">
            <Header />
            <KinaxisHero />
            <PartnerHighlightRibbon />
            <CoreCompetencies />
            <ServicesSection />
            <TeamStrength />
            <CTASection />
            <Footer />
        </div>
    );
};

export default KinaxisMaestro;
