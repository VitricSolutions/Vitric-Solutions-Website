import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactSplit from "../components/Contact/ContactSplit";
import "../index.css";

const ContactUs = () => {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <ContactHero />
                <ContactSplit />
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
