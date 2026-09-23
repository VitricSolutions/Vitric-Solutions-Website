import DigitalHero from "../components/Digital/DigitalHero";
import DigitalServices from "../components/Digital/DigitalServices";
import DigitalWhyVitric from "../components/Digital/DigitalWhyVitric";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../index.css";

const DigitalAi = () => {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <DigitalHero />
                <DigitalServices />
                <DigitalWhyVitric />
            </main>
            <Footer />
        </div>
    );
};

export default DigitalAi;
