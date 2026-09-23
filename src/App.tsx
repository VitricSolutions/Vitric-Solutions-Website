import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import KinaxisMaestro from './pages/KinaxisMaestro'
import ComingSoon from './components/Home/CommingSoon'
import ContactModal from './components/Home/ContactModal'
import AssessmentModal from './components/SapSolutions/AssessmentModal'
import DemoModal from './components/Products/DemoModal'
import PartnerModal from './components/TalentSolutions/PartnerModal'
import SapSolutions from './pages/SapSolutions'
import TalentSolutions from './pages/TalentSolutions'
import Training from './pages/Training'
import DigitalAi from './pages/DigitalAi'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <ContactModal />
      <AssessmentModal />
      <DemoModal />
      <PartnerModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/kinaxis-maestro" element={<KinaxisMaestro />} />
        <Route path="/services/sap-solutions" element={<SapSolutions />} />
        <Route path="/services/digital-ai" element={<DigitalAi />} />
        <Route path="/consulting" element={<ComingSoon />} />
        <Route path="/products" element={<Products />} />
        <Route path="/talent" element={<TalentSolutions />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<ComingSoon />} />
      </Routes>
    </Router>
  )
}

export default App