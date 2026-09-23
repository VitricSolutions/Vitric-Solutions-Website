import HeroSection from "../components/Home/HeroSection"
import AboutVITric from "../components/Home/AboutSection"
import Header from "../components/Header/Header"
import TechnologyServices from "../components/Home/ServiceSection"
import SupplyChainBanner from "../components/Home/SupplyChain"
import StatsSection from "../components/Home/StatsSection"
import BrandsSection from "../components/Home/BrandsSection"
import BusinessSection from "../components/Home/BusinessSection"
import OurPresence from "../components/Home/Our Presence"
import Footer from "../components/Footer/Footer"
import PartnerAnnouncementPopup from "../components/Home/PartnerAnnouncementPopup"
const home = () => {
  return (
    <>
      <PartnerAnnouncementPopup />
      <Header />
      <HeroSection />
      <AboutVITric />
      <TechnologyServices />
      <SupplyChainBanner />
      <StatsSection />
      <BrandsSection />
      <BusinessSection />
      <OurPresence />
      <Footer />
    </>
  )
}

export default home