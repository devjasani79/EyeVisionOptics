import { openingHours, socials, storeInfo } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.03,
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.03,
      })
      .to('#f-right-leaf', {
        y: '-30',
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(
        '#f-left-leaf',
        {
          y: '-30',
          duration: 1,
          ease: 'power2.inOut',
        },
        '<'
      );
  });

  return (
    <footer id="contact" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="public/images/bg/bgvideo7.mp4"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/80 to-black/90 backdrop-blur-sm z-0"></div>

      <img src="/images/footer-right-glow.png" alt="optic-glow-right" id="f-right-leaf" className="z-1" />
      <img src="/images/footer-left-glow.png" alt="optic-glow-left" id="f-left-leaf" className="z-1" />

      <div className="content relative z-2">
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Visit Our Optical Studio</h3>
          <p>{storeInfo.address}</p>
          <p className="text-sm opacity-70 italic">
            Located in: {storeInfo.location}
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>Shop Hours</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Connect With Us</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
