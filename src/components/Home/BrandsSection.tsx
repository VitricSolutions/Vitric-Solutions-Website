import Deloitte from "../../assets/icon/1.webp";
import q from "../../assets/icon/2.webp";
import w from "../../assets/icon/3.webp";
import e from "../../assets/icon/4.webp";
import r from "../../assets/icon/5.webp";
import t from "../../assets/icon/6.webp";
import y from "../../assets/icon/7.webp";
import u from "../../assets/icon/8.webp";
import i from "../../assets/icon/9.webp";
import o from "../../assets/icon/10.webp";
import p from "../../assets/icon/11.webp";
import a from "../../assets/icon/12.webp";
import s from "../../assets/icon/13.webp";
import d from "../../assets/icon/14.webp";
import f from "../../assets/icon/15.webp";
import g from "../../assets/icon/16.webp";
import h from "../../assets/icon/17.webp";
import j from "../../assets/icon/18.webp";
import k from "../../assets/icon/19.webp";
import z from "../../assets/icon/20.webp";
import x from "../../assets/icon/21.webp";
import c from "../../assets/icon/22.webp";
import v from "../../assets/icon/23.webp";
import b from "../../assets/icon/24.webp";
import n from "../../assets/icon/25.webp";

const brand = [
  Deloitte,
  q,
  w,
  e,
  r,
  t,
  y,
  u,
  i,
  o,
  p,
  a,
  s,
  d,
  f,
  g,
  h,
  j,
  k,
  z,
  x,
  c,
  v,
  b,
  n,
];

const BrandsSection = () => {
  // Duplicate the brand array for seamless marquee loop

  const duplicatedBrands = [...brand, ...brand];


  return (
    <>
     <style>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1000%);
    }
  }

  .brands-container {
    animation: marquee 30s linear infinite;
  }
`}</style>

      <section className="w-full py-12 md:py-16 lg:py-20 px-2 md:px-6 lg:px-8 overflow-hidden">
        {/* Heading */}
        <div className="w-full mt-10 md:h-auto text-3xl text-center lg:text-4xl font-semibold inset-0 opacity-100 md:mt-0 flex items-center justify-center mb-8 md:mb-12">
          <h1>
            {" "}
            Empowered by
            <span className="text-[#D32F0F]">
              {" "}
              <br className="block md:hidden" />
              Trusted Clients
            </span>
          </h1>
        </div>

        {/* Mobile Marquee (Scrollable in loop) */}
        <div className="lg:hidden">
  <div className="rounded-2xl overflow-hidden py-10">
    <div className="flex brands-container whitespace-nowrap gap-x-8">
      {duplicatedBrands.map((item, index) => (
        <div
          key={index}
          className="h-20 w-40 shrink-0 flex items-center justify-center"
        >
          <img
            src={item}
            className="max-w-full max-h-full object-contain"
            alt=""
           loading="lazy" />
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Desktop Static Layout */}
        <div className="hidden lg:flex w-full rounded-2xl items-center justify-center gap-x-25 gap-y-5 flex-wrap ">
          {brand.map((item, index) => (
            <div key={index} className="w-40 h-20 flex items-center justify-center">
              <img src={item} className="w-full h-full object-cover" alt=""  loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BrandsSection;