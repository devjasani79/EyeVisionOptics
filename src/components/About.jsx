import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 60%",
        scrub: false,
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
      })
      .from(
        ".about-para",
        { opacity: 0, y: 40, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .from(
        ".top-grid div, .bottom-grid div",
        { opacity: 0, y: 60, duration: 1.2, ease: "power3.out", stagger: 0.08 },
        "-=0.5"
      );
  }, []);

  return (
    <>
     <section id="about"  className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden px-3 py-1">

     <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[150px] z-0" />
    <div
      id="about"
      className="relative min-h-screen py-8 container mx-auto px-1 2xl:px-0 text-white"
    >
      {/* Soft overlay for consistency */}

      {/* Header */}
      <div className="mb-16 text-center relative z-10">
        <p className="badge inline-block rounded-full bg-[#0078FF] text-white px-5 py-2 text-sm font-medium mb-6">
          Why EyeVisionOptics
        </p>
        <h2 className="text-5xl md:text-6xl font-modern-negra leading-tight text-[#66a6ff] drop-shadow-lg">
          Your One-Stop Destination for Quality Eyewear
        </h2>
        <p className="about-para text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mt-6 leading-relaxed">
          We specialize in delivering high-quality prescription spectacles within
          just <span className="text-[#66a6ff] font-semibold">1 hour</span>.  
          Whether you need numbered sunglasses, coloured or powered contact lenses,
          we’ve got you covered with an extensive range of global brands.
        </p>
      </div>

      {/* Top Grid */}
      <div className="top-grid grid grid-cols-1 xl:grid-cols-12 gap-5 mb-10 md:px-0 px-5 relative z-10">
        <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
          <img
            src="/images/abt1.png"
            alt="Eye testing process"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
          <img
            src="/images/abt2.png"
            alt="Eyewear collection"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="content grid grid-cols-1 lg:grid-cols-12 gap-10 my-16 relative z-10">
        <div className="md:col-span-7 space-y-6">
          <h3 className="text-4xl md:text-5xl font-modern-negra text-white leading-snug">
            Precision. Comfort. Personalization.
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            EyeVisionOptics is built on the belief that great vision care should
            be approachable yet professional. From{" "}
            <span className="text-[#0078FF] font-medium">
              free digital eye testing
            </span>{" "}
            to{" "}
            <span className="text-[#0078FF] font-medium">
              personalized lens consultations
            </span>
            , every service we provide is designed around your lifestyle and
            comfort.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We proudly offer{" "}
            <span className="text-[#66a6ff] font-medium">
              Varilux Progressive Lenses
            </span>{" "}
            — engineered for seamless transition and guaranteed acclimation.
            Every frame, every fit, every finish is a reflection of the care
            we put into your experience.
          </p>
        </div>

        <div className="sub-content md:col-span-5 flex flex-col justify-center md:items-end items-center text-center md:text-right">
          <p className="text-6xl font-bold text-[#0078FF]">
            4.8<span className="text-white text-3xl font-light">/5</span>
          </p>
          <p className="text-gray-400 text-sm tracking-wide mt-2">
            Trusted by thousands of satisfied customers
          </p>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5 relative z-10">
        <div className="md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
          <img
            src="/images/abt3.png"
            alt="Lens fitting process"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
          <img
            src="/images/abt4.png"
            alt="Customer consultation"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
     </section>
      </>
  );
};

export default About;
