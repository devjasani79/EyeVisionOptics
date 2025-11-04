import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../../constants/index.js";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const navLinksRef = useRef([]);

  useGSAP(() => {
    // 🔷 Subtle scroll background blur (lighter for performance)
    gsap.to("nav", {
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      backdropFilter: "blur(4px)",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      duration: 0.5,
      ease: "power2.out",
    });

    // ✨ Entry animation (minimal + clean)
    const tl = gsap.timeline({ delay: 0.2, ease: "power3.out" });

    tl.fromTo(
      logoRef.current,
      { y: -15, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 }
    )
      .fromTo(
        nameRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        navLinksRef.current,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.3"
      );
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full py-0.5 md:py-1 transition-all duration-500">
      <div className="flex justify-between items-center container mx-auto px-3 md:px-6">
        {/* 🔹 Logo + Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            ref={logoRef}
            src="/images/eyevisionlogo.png"
            width={38}
            height={38}
            alt="EyeVisionOptics logo"
            className="opacity-0 transition-transform duration-300 group-hover:scale-105"
          />
          <p
            ref={nameRef}
            className="font-modern-negra text-lg md:text-xl text-white hover:text-[#0078FF] transition-all opacity-0 tracking-wide"
          >
            Eye<span className="text-[#0078FF]">Vision</span>Optics
          </p>
        </a>

        {/* 🔹 Desktop Nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium tracking-wide">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              ref={(el) => (navLinksRef.current[i] = el)}
              className="opacity-0 relative group"
            >
              <a
                href={`#${link.id}`}
                className="hover:text-[#0078FF] transition-colors duration-300"
              >
                {link.title}
              </a>
              <span className="absolute bottom-[-3px] left-0 w-0 h-[1.5px] bg-[#0078FF] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Toggle */}
        <button
          className="md:hidden p-1.5 rounded-md hover:bg-[#0078FF15] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#0078FF] transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
