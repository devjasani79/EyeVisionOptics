import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef(null);
  const video2Ref = useRef(null);
  const heroContentRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    document.fonts.ready.then(() => {
      // --- Initial video setup ---
      gsap.set(videoRef.current, { opacity: 1, scale: 1 });
      gsap.set(video2Ref.current, { opacity: 0, scale: 1.03 });

      // --- Split animations ---
      const heroSplit = new SplitText(".hero-title", { type: "chars, words" });
      const subSplit = new SplitText(".hero-subtitle", { type: "lines" });

      gsap.set(heroSplit.chars, { yPercent: 120, opacity: 0 });
      gsap.set(subSplit.lines, { yPercent: 100, opacity: 0 });
      gsap.set(".hero-cta", { y: 40, opacity: 0 });

      const intro = gsap.timeline();
      intro
        .to(heroSplit.chars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.6,
          ease: "expo.out",
          stagger: 0.05,
        })
        .to(
          subSplit.lines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.4,
            ease: "expo.out",
            stagger: 0.08,
          },
          "-=1.0"
        )
        .to(
          ".hero-cta",
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
          "-=0.5"
        );

      // --- Video crossfade scroll animation ---
    const videoXfade = gsap.timeline({
  scrollTrigger: {
    trigger: "#lenses",
    start: "top 90%",
    end: "top 10%",
    scrub: true,
  },
});

// Initial states
gsap.set(videoRef.current, { opacity: 1, scale: 1 });
gsap.set(video2Ref.current, { opacity: 0, scale: 1.05 });

// Smooth minimal transition
videoXfade
  .to(videoRef.current, {
    opacity: 0,
    scale: 1.03,
    ease: "none",
  }, 0)
  .to(video2Ref.current, {
    opacity: 1,
    scale: 1,
    ease: "none",
  }, 0);


      // --- Scroll fade hero content ---
      gsap.to(heroContentRef.current, {
        yPercent: -100,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#lenses",
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((s) => s.kill());
        heroSplit.revert();
        subSplit.revert();
      };
    });
  }, []);

  return (
    <>
      {/* === BACKGROUND VIDEOS === */}
      <div
        id="background-container"
        className="fixed inset-0 w-full h-full opacity-65 z-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/bg/bgvideo2.mp4"
        />
        <video
          ref={video2Ref}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/bg/bgvideo4.mp4"
        />
        <div
          id="hero-glow"
          className="absolute inset-0 mix-blend-overlay pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* === HERO CONTENT === */}
      <div id="content" className="relative w-full z-10">
        <section
          id="hero"
          className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden text-white"
        >
          <div
            ref={heroContentRef}
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-10"
          >
            {/* LEFT SECTION */}
            <div className="space-y-7 text-center lg:text-left w-full lg:w-1/2">
              <p className="text-xs uppercase tracking-wider hover:text-[#0078FF] transition-all text-gray-400 mt-6">
                Sharp. Clear. Visionary.
              </p>

              <p className="hero-title font-modern-negra text-[17vw] sm:text-[8vw] md:text-[8vw] leading-none mt-4 text-white/90">
                Where{" "}
                <span className="text-[#0078FF]/80">Vision</span> Meets{" "}
                <span className="text-[#0078FF]/80">Virtue</span>
              </p>


              <p className="hero-subtitle hover:text-[#0078FF] transition-all font-serif text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed hidden md:block">
                See Beyond Ordinary
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="hero-cta w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <p className="text-white/90 text-md sm:text-base md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                Curating an unparalleled vision experience through precision and uncompromising refinement.
              </p>

              <a
                href="#lenses"
                className="group inline-flex items-center gap-2 font-semibold text-[#0078FF] transition-colors duration-300 mt-2"
              >
                Explore Lenses
              </a>

              <img
                src="/images/arrow.png"
                alt="scroll down"
                className="w-4 h-12 opacity-80 group-hover:translate-y-1 animate-bounce transition-transform duration-300 mx-auto lg:mx-0"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
