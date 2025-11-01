import { useEffect, useState, useRef } from "react";
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
    // Scroll blur animation
    gsap.to("nav", {
      backgroundColor: "#00000090",
      backdropFilter: "blur(10px)",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      ease: "power1.inOut",
    });

    // Entrance animations on load
    const tl = gsap.timeline({ delay: 0.3, ease: "power3.out" });
    tl.fromTo(
      logoRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        nameRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        navLinksRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.6"
      );
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full py-2 md:py-3 transition-all duration-500">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Logo + Text */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            ref={logoRef}
            src="/images/eyevisionlogo.png"
            width={50}
            alt="logo"
            className="opacity-0 transition-transform duration-300 group-hover:scale-110"
          />
          <p
            ref={nameRef}
            className="font-modern-negra text-2xl md:text-3xl text-gradient hover:text-[#0078FF] transition-all opacity-0"
          >
            EyeVisionOptics
          </p>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-sm md:text-base font-medium tracking-wide">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              ref={(el) => (navLinksRef.current[i] = el)}
              className="opacity-0"
            >
              <a
                href={`#${link.id}`}
                className="nav-link hover:text-[#0078FF] transition-all duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#0078FF15] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#0078FF] transition-all duration-300"
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
