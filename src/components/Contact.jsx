import { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { storeInfo } from '../../constants/index.js';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgplypp");
  const formRef = useRef();

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
    })
      .from(
        '#contact .form-section',
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
        },
        '-=0.3'
      )
      .from(
        '#contact .info-section',
        {
          opacity: 0,
          x: 50,
          duration: 0.8,
        },
        '-=0.8'
      );
  });

  return (
    <section
      id="contact"
      className="relative w-full text-white overflow-hidden py-20 md:py-28"
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
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-modern-negra tracking-wide mb-12 md:mb-16 text-center drop-shadow-lg">
          {storeInfo.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="form-section flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
              Get in Touch
            </h3>

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-xl border border-green-500/50 backdrop-blur-sm">
                <div className="text-6xl mb-4">✓</div>
                <h4 className="text-2xl font-semibold text-green-400 mb-2">
                  Thank You!
                </h4>
                <p className="text-white/80 text-center">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#0078FF] transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#0078FF] transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#0078FF] transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#0078FF] transition-all duration-300 backdrop-blur-sm resize-none"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 md:py-4 bg-[#0078FF] text-white font-semibold rounded-lg hover:bg-[#0056cc] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="info-section flex flex-col justify-center space-y-8">
            {/* Studio Info */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h4 className="text-[#0078FF] font-semibold tracking-wide uppercase text-sm mb-3">
                 Visit Us
              </h4>
              <p className="text-lg md:text-xl font-medium mb-2">{storeInfo.address}</p>
              <p className="text-sm opacity-70 italic">
                Located in: {storeInfo.location}
              </p>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h4 className="text-[#0078FF] font-semibold tracking-wide uppercase text-sm mb-3">
                 Contact
              </h4>
              <p className="text-lg md:text-xl font-medium mb-2">
                <a
                  href={`tel:${storeInfo.contact.phone}`}
                  className="hover:text-[#0078FF] transition-colors"
                >
                  {storeInfo.contact.phone}
                </a>
              </p>
              <p className="text-lg md:text-xl font-medium">
                <a
                  href={`mailto:${storeInfo.contact.email}`}
                  className="hover:text-[#0078FF] transition-colors"
                >
                  {storeInfo.contact.email}
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${storeInfo.contact.phone}`}
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0078FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
