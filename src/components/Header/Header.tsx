import vitric from "../../assets/icon/Vitric_logo.png";
import arrow from "../../assets/icon/whiteArrow.png";
import cross from "../../assets/icon/cross.png";
import down from "../../assets/icon/down.png";
import { useContact } from "../../Context/Context"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultingOpen, setConsultingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check active state
  // exact: true for home, false for active subsections if needed
  const isActive = (path: string, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div
        className={`sticky top-0 z-[100] w-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-8
        ${scrolled
            ? "h-20 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100/50"
            : "h-24 bg-white border-b border-transparent"}`}
      >
        <div className="w-[15%] lg:w-[15%] h-full flex items-center justify-start lg:justify-center">
          <Link to="/">
            <img src={vitric} className={`transition-all duration-300 ${scrolled ? "w-28" : "w-32"}`} alt="Vitric Solutions" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:w-[70%] h-full items-center justify-center gap-8 xl:gap-12 font-[Lato] text-[15px] font-medium text-[#1D1D1D]">

          <Link to="/about" className="relative group py-2">
            <span className={`transition-colors duration-300 ${isActive("/about") ? "text-[#D32F0F] font-bold" : "group-hover:text-[#D32F0F]"}`}>
              About Us
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          {/* Consulting Services Dropdown */}
          <div className="group relative h-full flex items-center cursor-pointer">
            <div className={`flex items-center gap-1 py-2 transition-colors duration-300 ${isActive("/services") ? "text-[#D32F0F]" : "group-hover:text-[#D32F0F]"}`}>
              <span className={isActive("/services") ? "font-bold" : ""}>Consulting Services</span>
              <img src={down} className={`w-3 opacity-60 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100 ${isActive("/services") ? "opacity-100" : ""}`} alt="" />
            </div>
            {/* Active Indicator Line for Dropdown Parent */}
            <span className={`absolute bottom-6 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/services") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>

            {/* Dropdown Menu */}
            <div className="absolute top-[80%] left-0 w-72 bg-white shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-[#D32F0F]"></div>
              <ul className="py-2">
                {[
                  { path: "/services/kinaxis-maestro", label: "Kinaxis Maestro" },
                  { path: "/services/sap-solutions", label: "SAP BTP, BTM and BDC" },
                  { path: "/services/digital-ai", label: "Digital & AI Services" }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-6 py-3.5 text-sm transition-all duration-200 border-l-2 border-transparent hover:bg-red-50/50 hover:border-[#D32F0F] hover:pl-8 hover:text-[#D32F0F]
                            ${isActive(item.path) ? "bg-red-50 text-[#D32F0F] border-[#D32F0F] font-bold" : "text-gray-600"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/products" className="relative group py-2">
            <span className={`transition-colors duration-300 ${isActive("/products") ? "text-[#D32F0F] font-bold" : "group-hover:text-[#D32F0F]"}`}>
              Products
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/products") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          <Link to="/talent" className="relative group py-2">
            <span className={`transition-colors duration-300 ${isActive("/talent") ? "text-[#D32F0F] font-bold" : "group-hover:text-[#D32F0F]"}`}>
              Talent Solutions
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/talent") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          <Link to="/training" className="relative group py-2">
            <span className={`transition-colors duration-300 ${isActive("/training") ? "text-[#D32F0F] font-bold" : "group-hover:text-[#D32F0F]"}`}>
              Training
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/training") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          <Link to="/contact" className="relative group py-2">
            <span className={`transition-colors duration-300 ${isActive("/contact") ? "text-[#D32F0F] font-bold" : "group-hover:text-[#D32F0F]"}`}>
              Contact Us
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F0F] transform origin-left transition-transform duration-300 ${isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:w-[15%] justify-end">
          <button
            onClick={openContact}
            className="group relative px-6 py-3 bg-[#D32F0F] text-white text-sm font-medium rounded overflow-hidden shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span className="relative z-10">Let's Connect</span>
            <img src={arrow} className="relative z-10 w-4 transition-transform duration-300 group-hover:translate-x-1" alt="" />

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        {!menuOpen && (
          <button className="lg:hidden text-2xl text-[#1D1D1D]" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        )}
        {menuOpen && (
          <button className="lg:hidden text-2xl text-[#1D1D1D]" onClick={() => setMenuOpen(false)}>
            <img src={cross} className="w-6" alt="" />
          </button>
        )}
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 z-[1000] w-full bg-white shadow-xl font-[Lato] flex flex-col items-start px-6 gap-2 py-6 h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-100">

          <Link to="/about" onClick={() => setMenuOpen(false)} className={`w-full py-3 text-lg font-medium border-b border-gray-50 ${isActive("/about") ? "text-[#D32F0F]" : "text-gray-700"}`}>
            About Us
          </Link>

          <div className="w-full py-3 border-b border-gray-50">
            <div className="flex items-center justify-between w-full" onClick={() => setConsultingOpen(!consultingOpen)}>
              <h1 className={`text-lg font-medium ${isActive("/services") ? "text-[#D32F0F]" : "text-gray-700"}`}>Consulting Services</h1>
              <img src={down} className={`w-4 transition-transform duration-300 opacity-60 ${consultingOpen ? 'rotate-180' : ''}`} alt="" />
            </div>

            {/* Mobile Dropdown Items */}
            <div className={`flex flex-col gap-2 mt-2 pl-4 border-l-2 border-gray-100 transition-all duration-300 ${consultingOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden mt-0'}`}>
              {[
                { path: "/services/kinaxis-maestro", label: "Kinaxis Maestro" },
                { path: "/services/sap-solutions", label: "SAP BTP, BTM and BDC" },
                { path: "/services/digital-ai", label: "Digital & AI Services" }
              ].map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base py-2 ${isActive(item.path) ? "text-[#D32F0F] font-medium" : "text-gray-500"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/products" onClick={() => setMenuOpen(false)} className={`w-full py-3 text-lg font-medium border-b border-gray-50 ${isActive("/products") ? "text-[#D32F0F]" : "text-gray-700"}`}>
            Products
          </Link>

          <Link to="/talent" onClick={() => setMenuOpen(false)} className={`w-full py-3 text-lg font-medium border-b border-gray-50 ${isActive("/talent") ? "text-[#D32F0F]" : "text-gray-700"}`}>
            Talent Solutions
          </Link>

          <Link to="/training" onClick={() => setMenuOpen(false)} className={`w-full py-3 text-lg font-medium border-b border-gray-50 ${isActive("/training") ? "text-[#D32F0F]" : "text-gray-700"}`}>
            Training
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`w-full py-3 text-lg font-medium border-b border-gray-50 ${isActive("/contact") ? "text-[#D32F0F]" : "text-gray-700"}`}>
            Contact Us
          </Link>

          {/* MOBILE CTA */}
          <div className="w-full mt-6">
            <button
              onClick={openContact}
              className="w-full text-base text-white py-4 flex items-center justify-center gap-3 bg-[#D32F0F] rounded shadow-lg shadow-red-100 active:scale-95 transition-transform"
            >
              <h1>Let's Connect</h1>
              <img src={arrow} className="w-4" alt="" />
            </button>
          </div>
        </div>
      )}

    </>

  );
};

export default Header;
