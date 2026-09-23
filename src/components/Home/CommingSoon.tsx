import Rocket from "../../assets/icon/rocket.webp";
import LeftArrow from "../../assets/icon/left.webp";
import ComingSoonBg from "../../assets/icon/comming_Soon.webp";
import Header from "../Header/Header";

export default function ComingSoon() {

  return (
    <>
      <style>{`
        body {
          font-family: "Krub", sans-serif;
        }
        .active-tab {
          color: #dc2626 !important;
          border-bottom: 3px solid #dc2626;
          border-radius: 2px;
        }
        .mobile-active-tab {
          color: #dc2626 !important;
          background-color: #fef2f2;
        }
        .nav-link {
          color: #000;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #dc2626;
        }
        .mobile-nav-link {
          color: #000;
          transition: all 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #dc2626;
          background-color: #fef2f2;
        }
        .text-custom {
          background: linear-gradient(90deg, #d32f0f, #fa5c18);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        .text-customized {
          background: linear-gradient(90deg, #950a0a, #fa5c18);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        .bg-customized {
          background: linear-gradient(180deg, #1e0b08, #000000);
        }
        .bg-customized:hover {
          border: #dc2626;
        }
        .bg-circle {
          background: radial-gradient(circle at center, #fb121261 #ffffff20);
          border-radius: 50%;
        }
        .background_Image {
          background-image: url(${ComingSoonBg});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
      <div className="min-h-screen background_Image flex flex-col justify-between">
       
        <Header/>

        {/* Main Content */}
        <main className="grow flex items-center justify-center px-4 py-2">
          <div className="max-w-2xl mx-auto text-center text-white flex items-center flex-col">
            {/* Logo/Brand placeholder */}
            <div className="mb-12">
              <div className="mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <img src={Rocket} className="w-40 h-40" alt=""  loading="lazy" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              We're Building<br />
              <span className="text-custom">Something Great</span>
            </h1>

            {/* Description */}
            <p className="text-xl font-semibold mb-10 max-w-3xl mx-auto leading-relaxed text-[#00000099]">
              We're working hard to bring you an exceptional digital experience.
              Check back soon to see what we've been crafting.
            </p>

            {/* CTA Button */}
            <a href="/" className="flex gap-4">
              <button className="flex items-center justify-center gap-4 mt-5 bg-[#CD2E0F] hover:bg-red-700 text-white px-8 py-3 rounded-2xl text-lg transition duration-300 transform shadow-[0_0_15px_3px_rgba(255,255,255,0.2)]">
                <img src={LeftArrow} className="w-7" alt=""  loading="lazy" />
                <span>Back to Home</span>
              </button>
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-[#240B00] font-semibold">
          <p>&copy; 2025 White. All rights reserved</p>
        </footer>
      </div>
    </>
  );
}