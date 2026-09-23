import vitric from "../../assets/icon/vitric.png";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white pt-16 border-t-4 border-[#D32F0F]">

      <div className="w-full px-6 md:px-12 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6 col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="block">
              <img src={vitric} className="w-32 brightness-0 invert" alt="Vitric Solutions" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering enterprises with intelligent digital strategy, robust SAP solutions, and next-gen AI implementation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://www.linkedin.com/company/vitric-business-solutions" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F0F] rounded-full"></span> Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Contact Us</Link></li>
              <li><Link to="/career" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Careers</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F0F] rounded-full"></span> Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services/sap-solutions" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> SAP Solutions</Link></li>
              <li><Link to="/services/kinaxis-maestro" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Kinaxis Maestro</Link></li>
              <li><Link to="/services/digital-ai" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Digital & AI</Link></li>
            </ul>
          </div>

          {/* Products (Anchored) */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F0F] rounded-full"></span> Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products#feedback" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Feedback System (NPS)</Link></li>
              <li><Link to="/products#p2p" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Procure to Pay (P2P)</Link></li>
              <li><Link to="/products#vendor" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Vendor Management</Link></li>
              <li><Link to="/products#payroll" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Payroll Management</Link></li>
              <li><Link to="/products#smarthire" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> SmartHire (ATS)</Link></li>
            </ul>
          </div>

          {/* Training & Talent */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F0F] rounded-full"></span> Growth
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li><Link to="/training" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Corporate Training</Link></li>
              <li><Link to="/talent" className="hover:text-[#D32F0F] hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Talent Solutions</Link></li>
            </ul>

            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F0F] rounded-full"></span> Reach Us
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="mailto:info@vitricsolutions.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#D32F0F]" /> info@vitricsolutions.com
              </a>
              <a href="tel:+919209589970" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#D32F0F]" /> +91 92095 89970
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Vitric Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#D32F0F] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D32F0F] transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-[#D32F0F] transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;