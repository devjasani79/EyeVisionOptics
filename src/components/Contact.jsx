import { openingHours, socials, storeInfo } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power2.out',
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.04,
      duration: 0.6,
    }).from(
      '#contact .content > div',
      {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.3'
    );
  });

  return (
    <footer
      id="contact"
      className="relative flex flex-col justify-center items-center w-full text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/bg/bgvideo7.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="content relative z-20 text-center container mx-auto px-6 md:px-12 py-20 flex flex-col justify-between gap-10">
        <h2 className="text-4xl md:text-6xl font-modern-negra tracking-wide mb-6 drop-shadow-lg">
          {storeInfo.heading}
        </h2>

        {/* Studio Info */}
        <div>
          <h3 className="uppercase text-gray-300 font-semibold tracking-widest text-base mb-2">
            Visit Our Optical Studio
          </h3>
          <p className="text-lg md:text-xl">{storeInfo.address}</p>
          <p className="text-sm opacity-70 italic mt-1">
            Located in: {storeInfo.location}
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase text-gray-300 font-semibold tracking-widest text-base mb-2">
            Contact Us
          </h3>
          <p className="text-lg md:text-xl">{storeInfo.contact.phone}</p>
          <p className="text-lg md:text-xl">{storeInfo.contact.email}</p>
        </div>

        {/* Shop Hours */}
        <div>
          <h3 className="uppercase text-gray-300 font-semibold tracking-widest text-base mb-3">
            Shop Hours
          </h3>
          <div className="space-y-1">
            {openingHours.map((time) => (
              <p key={time.day} className="text-sm md:text-lg opacity-90">
                {time.day} : {time.time}
              </p>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="uppercase text-gray-300 font-semibold tracking-widest text-base mb-3">
            Connect With Us
          </h3>
          <div className="flex justify-center items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

    
    </footer>
  );
};

export default Contact;
