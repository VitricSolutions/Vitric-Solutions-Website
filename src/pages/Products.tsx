import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsHero from "../components/Products/ProductsHero";
import FeedbackSystem from "../components/Products/FeedbackSystem";
import P2PSystem from "../components/Products/P2PSystem";
import VendorSystem from "../components/Products/VendorSystem";
import PayrollSystem from "../components/Products/PayrollSystem";
import SmartHire from "../components/Products/SmartHire";
import "../index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
    const { pathname, hash } = useLocation();

    // Scroll to top or hash on route change
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <ProductsHero />
                <section id="feedback">
                    <FeedbackSystem />
                </section>
                <section id="p2p">
                    <P2PSystem />
                </section>
                <section id="vendor">
                    <VendorSystem />
                </section>
                <section id="payroll">
                    <PayrollSystem />
                </section>
                <section id="smarthire">
                    <SmartHire />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
