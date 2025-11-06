'use client';

import { allLenses } from '../../constants/index.js';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Utility to ensure fonts load before animation
const documentFontReady = async () => {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  } else {
    // fallback if browser doesn’t support document.fonts
    return new Promise((resolve) => setTimeout(resolve, 500));
  }
};

const Menu = () => {
  const contentRef = useRef();
  const [currentMain, setCurrentMain] = useState(0);
  const [currentSub, setCurrentSub] = useState(0);

  const currentLens = allLenses[currentMain] ?? allLenses[0];
  const currentVariant = currentLens.variants?.[currentSub] ?? currentLens.variants?.[0];

  // Reset sub on main change
  useEffect(() => {
    setCurrentSub(0);
  }, [currentMain]);

  // Font + animation handling
  useGSAP(async () => {
    await documentFontReady();

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 0.7 } });

    tl.fromTo(
      '#title',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        '.cocktail img',
        { opacity: 0, y: -10, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.95 },
        '<'
      )
      .fromTo('.details h2', { y: 28, opacity: 0 }, { y: 0, opacity: 1 }, '<0.15')
      .fromTo('.details p', { y: 18, opacity: 0 }, { y: 0, opacity: 1 }, '<0.15');
  }, [currentMain, currentSub]);

  return (
    <section id="menu" aria-labelledby="menu-heading" className="relative w-full py-20 md:mt-40 mt-0 px-6 radial-gradient">
      <img
        src="/images/optic-left-glow.png"
        alt="left-glow"
        id="m-left-leaf"
        className="object-contain absolute -bottom-20 left-0 md:w-fit w-1/3"
      />
      <img
        src="/images/optic-right-glow.png"
        alt="right-glow"
        id="m-right-leaf"
        className="object-contain absolute -top-40 right-0 md:w-fit w-1/4"
      />

      <h2 id="menu-heading" className="sr-only">
        Eyewear Collection
      </h2>

      {/* Main Frames */}
      <nav className="cocktail-tabs grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 mb-20 relative z-10 md:max-w-6xl md:mx-auto">
        {allLenses.map((lens, index) => {
          const isActive = index === currentMain;
          return (
            <button
              key={lens.id}
              className={`pb-2 text-xl md:text-3xl border-b transition-colors cursor-pointer font-semibold ${
                isActive
                  ? 'text-white border-white'
                  : 'text-white/50 border-white/50 hover:text-yellow-400 hover:border-yellow-400'
              }`}
              onClick={() => setCurrentMain(index)}
              aria-pressed={isActive}
            >
              {lens.name}
            </button>
          );
        })}
      </nav>

      <div className="content flex flex-col justify-between items-center container mx-auto relative">
        {/* Image */}
        <div className="cocktail flex justify-center">
          {currentVariant?.image && (
            <img
              src={currentVariant.image}
              alt={currentVariant.name || currentLens.name}
              className="object-contain max-h-[420px] rounded-2xl shadow-xl transition-all duration-700"
            />
          )}
        </div>

        {/* Info */}
        <div className="recipe text-center mt-10">
          <div ref={contentRef} className="info">
            <p className="text-yellow-400/80 font-semibold tracking-wide uppercase">
              Frame Type:
            </p>
            <p id="title" className="text-2xl md:text-3xl font-modern-negra text-white mt-1">
              {currentVariant?.name ?? currentLens.name}
            </p>
          </div>

          <div className="details mt-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">
              {currentVariant?.title ?? currentLens.title}
            </h2>
            <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
              {currentVariant?.description ?? currentLens.description}
            </p>
          </div>

          {/* Sub Variants */}
          <div className="sub-variants mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {currentLens.variants?.map((variant, index) => {
              const isActive = index === currentSub;
              return (
                <button
                  key={variant.name + index}
                  className={`px-4 py-2 border rounded-lg transition-all text-sm md:text-base font-medium ${
                    isActive
                      ? 'border-yellow-400 text-yellow-400 bg-white/10 shadow-md'
                      : 'border-white/30 text-white/60 hover:text-yellow-400 hover:border-yellow-400'
                  }`}
                  onClick={() => setCurrentSub(index)}
                  aria-pressed={isActive}
                >
                  {variant.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
