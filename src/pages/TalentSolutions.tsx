import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TalentHero from "../components/TalentSolutions/TalentHero";
import TalentExpertise from "../components/TalentSolutions/TalentExpertise";
import TalentIndustries from "../components/TalentSolutions/TalentIndustries";
import TalentProcess from "../components/TalentSolutions/TalentProcess";
import CTASection from "../components/About/CTASection";
import TalentMetrics from "../components/TalentSolutions/TalentMetrics";
import PartnerModal from "../components/TalentSolutions/PartnerModal";

const TalentSolutions = () => {
    return (
        <div className="w-full relative bg-white">
            <Header />

            <main>
                <TalentHero />
                <TalentExpertise />
                <TalentIndustries />
                <TalentProcess />
                <TalentMetrics />
            </main>

            <CTASection />
            <PartnerModal />
            <Footer />
        </div>
    );
};

export default TalentSolutions;
