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
    // 🔷 Scroll background blur (subtle)
    gsap.to("nav", {
      backgroundColor: "#00000070",
      backdropFilter: "blur(6px)",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      ease: "power2.out",
    });

    // ✨ Entry animation (smooth and spaced)
    const tl = gsap.timeline({ delay: 0.2, ease: "power3.out" });

    tl.fromTo(
      logoRef.current,
      { x: -40, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        nameRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        navLinksRef.current,
        { y: -15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full py-2 md:py-2.5 transition-all duration-500">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Logo + Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            ref={logoRef}
            src="/images/eyevisionlogo.png"
            width={42}
            height={42}
            alt="logo"
            className="opacity-0 transition-transform duration-300 group-hover:scale-105"
          />
          <p
            ref={nameRef}
            className="font-modern-negra text-xl md:text-2xl text-white hover:text-[#0078FF] transition-all opacity-0 tracking-wide"
          >
            EyeVisionOptics
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium tracking-wide">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              ref={(el) => (navLinksRef.current[i] = el)}
              className="opacity-0"
            >
              <a
                href={`#${link.id}`}
                className="hover:text-[#0078FF] transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#0078FF15] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/85 backdrop-blur-md border-t border-white/10 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#0078FF] transition-colors duration-300"
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
