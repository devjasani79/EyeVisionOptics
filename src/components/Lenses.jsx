import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { lensLists, frameLists } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Lenses = () => {
  useGSAP(() => {
    // 🎥 Background transition timing
    const bgTransition = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top center",
        end: "top top",
        scrub: 1,
      },
    });

    // Add a white overlay that fades in as we scroll to the lenses section
    bgTransition.to(".bg-overlay", {
      opacity: 0.95,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to("#lenses-bg", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#lenses",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🍃 Parallax Leaves
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top 85%",
        end: "bottom top",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#l-left-leaf", { x: -100, y: 120, opacity: 0, ease: "power1.out" })
      .from("#l-right-leaf", { x: 100, y: 120, opacity: 0, ease: "power1.out" }, "<");

    // 🔠 Enhanced Titles and List items reveal
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top center",
        end: "+=300",
        scrub: 1,
      }
    });

    gsap.utils.toArray("#lenses h2").forEach((title, i) => {
      titleTl.from(title, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }, i * 0.2);
    });

    // Enhanced list item animations with stagger and scale
    const listTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".list",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Popular list items animation
    gsap.utils.toArray(".popular li").forEach((item, i) => {
      listTl.from(item, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out"
      }, i * 0.1);
    });

    // Loved list items animation with slight delay
    gsap.utils.toArray(".loved li").forEach((item, i) => {
      listTl.from(item, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out"
      }, i * 0.1 + 0.4); // Slight delay after popular items
    });
  }, []);

  return (
    <section
      id="lenses"
      className="relative min-h-screen w-full overflow-hidden text-[#0E0E0E] flex flex-col justify-center"
    >
      {/* Gradient Overlay for Lenses Section */}
      <div className="bg-overlay absolute inset-0 z-0">
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)] mix-blend-overlay pointer-events-none blur-xl" />
      </div>

      {/* 🍃 Decorative Elements */}
      {/* <img
        src="/images/without bg/cocktail-right-glass.png"
        alt="left-leaf"
        id="l-left-leaf"
        className="pointer-events-none opacity-70 absolute left-0 md:bottom-0 -top-20 md:w-fit w-1/3"
      />
      <img
        src="/images/without bg/cocktail-left-glass.png"
        alt="right-leaf"
        id="l-right-leaf"
        className="pointer-events-none opacity-70 absolute right-0 md:bottom-0 -top-20 md:w-fit w-1/3"
      /> */}

      {/* 🔍 Lists */}
     <div className="popular space-y-8 w-full md:w-fit glass-card p-8">
  <h2 className="text-2xl font-serif text-gray-800">Most Popular Lenses:</h2>
  <ul className="space-y-6">
    {lensLists.map(({ name, country, detail, price }) => (
      <li
        key={name}
        className="flex justify-between items-start hover:translate-x-2 transition-transform duration-300"
      >
        <div className="md:me-28">
          <h3 className="font-modern-negra text-2xl text-[#0078FF] hover:text-[#004EA1] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-700">{country} | {detail}</p>
        </div>
        <span className="text-xl font-semibold text-[#0E0E0E]">
          - {price}
        </span>
      </li>
    ))}
  </ul>
</div>

    </section>
  );
};

export default Lenses;
