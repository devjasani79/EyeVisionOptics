import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { lensLists, frameLists } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Lenses = () => {
  useGSAP(() => {
    // 🎥 Enhanced background transition with depth
    const bgTransition = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top center",
        end: "top top",
        scrub: 1,
        toggleClass: { targets: "#lenses", className: "active" },
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

    // Enhanced content reveal animations
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lenses",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    // Animate section header
    contentTl
      .from(".section-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".glass-card", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".feature-card", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

    // Product items stagger animation
    const productsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".glass-card",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Animate product items with stagger
    [".popular li", ".loved li"].forEach((selector) => {
      productsTimeline.from(selector, {
        y: 20,
        opacity: 0,
        scale: 0.98,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out"
      }, "<0.1");
    });
  }, []);

  return (
    <section
      id="lenses"
      className="relative min-h-screen w-full overflow-hidden text-[#0E0E0E] flex flex-col justify-center items-center py-16"
    >
      {/* Enhanced Gradient Overlay */}
      <div className="bg-overlay absolute inset-0 z-0">
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000 bg-gradient-to-b from-white/90 to-white/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,120,255,0.05)_0%,transparent_70%)] mix-blend-overlay pointer-events-none blur-xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-modern-negra text-[#0078FF] mb-4">Premium Eye Care Solutions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our curated collection of high-quality lenses and frames, designed for optimal vision and style.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Premium Lenses Section */}
          <div className="popular space-y-8 glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <span className="p-2 bg-[#0078FF] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </span>
              <h2 className="text-2xl font-serif text-gray-800">Premium Lenses</h2>
            </div>
            <ul className="space-y-6">
              {lensLists.map(({ name, country, detail, price }) => (
                <li
                  key={name}
                  className="group flex justify-between items-start p-4 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="md:me-28">
                    <h3 className="font-modern-negra text-2xl text-[#0078FF] group-hover:text-[#004EA1] transition-colors">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{country} | {detail}</p>
                  </div>
                  <span className="text-xl font-semibold text-[#0E0E0E] group-hover:text-[#0078FF] transition-colors">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Designer Frames Section */}
          <div className="loved space-y-8 glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <span className="p-2 bg-[#0078FF] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
              <h2 className="text-2xl font-serif text-gray-800">Designer Frames</h2>
            </div>
            <ul className="space-y-6">
              {frameLists.map(({ name, country, detail, price }) => (
                <li
                  key={name}
                  className="group flex justify-between items-start p-4 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="md:me-28">
                    <h3 className="font-modern-negra text-2xl text-[#0078FF] group-hover:text-[#004EA1] transition-colors">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{country} | {detail}</p>
                  </div>
                  <span className="text-xl font-semibold text-[#0E0E0E] group-hover:text-[#0078FF] transition-colors">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <div className="feature-card p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-[#0078FF] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
          <p className="text-gray-600">Premium materials and craftsmanship for lasting clarity and comfort.</p>
        </div>
        
        <div className="feature-card p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-[#0078FF] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Fitting</h3>
          <p className="text-gray-600">Professional fitting service for optimal comfort and vision.</p>
        </div>
        
        <div className="feature-card p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-[#0078FF] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
          <p className="text-gray-600">Fast processing and delivery without compromising quality.</p>
        </div>
      </div>

    </section>
  );
};

export default Lenses;
