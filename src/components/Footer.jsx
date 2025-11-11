import { openingHours, socials, storeInfo } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Footer = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#footer',
        start: 'top center',
      },
      ease: 'power2.out',
    });

    tl.from('#footer .footer-content > div', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
    });
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative w-full text-white overflow-hidden bg-gradient-to-b from-black/50 to-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 md:py-20 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-modern-negra text-white">
              Eye Vision Optics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Crafting perfect vision since 2010. Premium eyewear designed for your lifestyle.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#0078FF] transition-all duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Shop Hours</h4>
            <div className="space-y-2">
              {openingHours.map((time) => (
                <div key={time.day} className="flex justify-between text-sm">
                  <span className="text-white/70">{time.day}</span>
                  <span className="text-white/90 font-medium">{time.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#0078FF] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#lenses" className="text-white/70 hover:text-[#0078FF] transition-colors text-sm">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#0078FF] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#0078FF] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-white/70 mb-1">Address</p>
                <p className="text-white/90">{storeInfo.address}</p>
              </div>
              <div>
                <p className="text-white/70 mb-1">Phone</p>
                <a
                  href={`tel:${storeInfo.contact.phone}`}
                  className="text-white/90 hover:text-[#0078FF] transition-colors"
                >
                  {storeInfo.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-white/70 mb-1">Email</p>
                <a
                  href={`mailto:${storeInfo.contact.email}`}
                  className="text-white/90 hover:text-[#0078FF] transition-colors"
                >
                  {storeInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Eye Vision Optics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-[#0078FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#0078FF] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-[#0078FF] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
