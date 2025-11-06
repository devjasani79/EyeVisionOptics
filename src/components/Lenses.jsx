import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { collections, services } from "../../constants/index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lenses = () => {
  useGSAP(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#expertise-title h1", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      "#expertise-title p",
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section
      id="lenses"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden px-8 py-24"
    >
      {/* Subtle gradient overlay for visibility */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[2px] z-0" /> */}

      {/* Optional: background video (comment out if not needed) */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/videos/vision_bg.mp4"
      /> */}

      {/* Title */}
      <div
        id="expertise-title"
        className="relative z-10 text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="font-modern-negra text-4xl md:text-6xl text-[#66a6ff] mb-4 drop-shadow-lg">
          Our Expertise in Vision
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light">
          Crafted to perfection — from precise eye exams to flawless frame
          fitting, we blend technology with trust.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Services */}
        <div className="glass-card bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md p-10 hover:border-[#0078FF]/60 hover:shadow-[0_0_40px_rgba(0,120,255,0.2)] transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#66a6ff] mb-6">
            Professional Services
          </h2>
          <ul className="space-y-6">
            {services.map(({ name, detail, price }) => (
              <li
                key={name}
                className="expertise-card border-b border-white/10 pb-4 hover:translate-x-2 hover:text-[#0078FF] transition-all duration-300"
              >
                <h3 className="font-modern-negra text-xl mb-1">{name}</h3>
                <p className="text-gray-300 text-sm mb-1">{detail}</p>
                <span className="text-sm text-[#66a6ff] font-medium">
                  {price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div className="glass-card bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md p-10 hover:border-[#0078FF]/60 hover:shadow-[0_0_40px_rgba(0,120,255,0.2)] transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#66a6ff] mb-6">
            Lens & Frame Collections
          </h2>
          <ul className="space-y-6">
            {collections.map(({ name, detail }) => (
              <li
                key={name}
                className="expertise-card border-b border-white/10 pb-4 hover:translate-x-2 hover:text-[#0078FF] transition-all duration-300"
              >
                <h3 className="font-modern-negra text-xl mb-1">{name}</h3>
                <p className="text-gray-300 text-sm">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lenses;