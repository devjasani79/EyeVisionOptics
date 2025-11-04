import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Clock, Shield, Award, Phone, MapPin, Mail, Star } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";
import store4 from "@/assets/store-4.jpg";
import store5 from "@/assets/store-5.jpg";
import store6 from "@/assets/store-6.jpg";
import store7 from "@/assets/store-7.jpg";

const Index = () => {
  const [state, handleSubmit] = useForm("mkgplypp");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! We'll get back to you soon.");
    }
  }, [state.succeeded]);

  const services = [
    {
      icon: Eye,
      title: "Free Digital Eye Testing",
      description: "Comprehensive computerized vision testing and prescription consultation.",
      price: "Free",
      image: store1,
    },
    {
      icon: Clock,
      title: "1-Hour Spectacles",
      description: "High-quality prescription spectacles delivered within just 1 hour.",
      price: "Fast Service",
      image: store2,
    },
    {
      icon: Shield,
      title: "Varilux Progressive Lenses",
      description: "Authorized seller with seamless transition & complete acclimation assurance.",
      price: "Premium",
      image: store3,
    },
    {
      icon: Award,
      title: "Designer Frames",
      description: "Vast collection of branded sunglasses & designer frames to match your style.",
      price: "Curated",
      image: store4,
    },
  ];

  const testimonials = [
    {
      name: "Hrushikesh Raiker",
      rating: 5,
      text: "Exceptional service! Got my prescription glasses in just 1 hour. The staff was incredibly helpful in choosing the perfect frame.",
      
    },
    {
      name: "Sujay Swaar",
      rating: 5,
      text: "Best place for Varilux lenses in Pune. Professional eye testing and the frame collection is outstanding.",
      
    },
    {
      name: "Aman Sharma",
      rating: 5,
      text: "Free eye testing was thorough and accurate. The team helped me find the perfect contact lenses with proper training.",
      
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Parallax Video */}
      <section
        ref={heroRef}
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="public/6009721_4k_Video_Attractive_3840x2160.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </motion.div>

        <FloatingParticles />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-playfair">
            <span className=" animate-shimmer bg-[length:200%_auto]">
              Sharp. Clear. Visionary.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-inter">
            Where Vision Meets Virtue
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Curating an unparalleled vision experience through precision and uncompromising refinement.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover More
            <motion.span
              className="ml-2 inline-block"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </Button>
        </motion.div>
      </section>

      {/* About Section with Store Images */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
          <img src={store1} alt="" className="w-full h-full object-cover rounded-3xl rotate-12" />
        </div>
        <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10">
          <img src={store2} alt="" className="w-full h-full object-cover rounded-3xl -rotate-12" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
              Your One-Stop Destination for Quality Eyewear
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We specialize in delivering high-quality prescription spectacles within just 1 hour.
              Looking for numbered sunglasses, coloured contact lenses, power contact lenses?
              We've got you covered with a wide range of brand options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-center mb-8 text-foreground/90">
              Proud to be an authorized seller of{" "}
              <strong className="text-primary font-semibold">Varilux Progressive Lenses</strong>,
              offering seamless transition & complete acclimation assurance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair group-hover:text-primary transition-colors">
                    What Sets Us Apart
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Free Digital Eye Testing</span>
                    </li>
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Personalized Eye Care Assistance</span>
                    </li>
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Expert lens selection for vision & budget</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair group-hover:text-primary transition-colors">
                    Comprehensive Care
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Contact Lens Training for new users</span>
                    </li>
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Proper usage guidelines & support</span>
                    </li>
                    <li className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">✓</span>
                      <span>Expert guidance tailored just for you</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-playfair">
              Professional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive eye care solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow group-hover:text-foreground transition-colors">
                      {service.description}
                    </p>
                    <span className="text-primary font-semibold text-lg">{service.price}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-playfair">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by thousands across Pune and nearby areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                  
                      <div>
                        <h4 className="font-semibold text-foreground font-playfair group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </h4>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "4.8★", label: "Average Rating" },
              { number: "500+", label: "Frame Styles" },
              { number: "1 Hour", label: "Quick Service" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-playfair">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-playfair">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert guidance & solutions tailored just for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground font-playfair">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="bg-background border-input focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Name" field="user_name" errors={state.errors} />
                    </div>
                    <div>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-background border-input focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="user_phone"
                        placeholder="Phone Number"
                        className="bg-background border-input focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Phone" field="user_phone" errors={state.errors} />
                    </div>
                    <div>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="bg-background border-input resize-none focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all group"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Address
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Shop No 3, Samadhan Building, 759/35, Bhandarkar Rd,
                          <br />
                          near Oak-wood Hotel, Deccan Gymkhana,
                          <br />
                          Pune, Maharashtra 411004
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Phone
                        </p>
                        <a
                          href="tel:+919372224060"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 93722 24060
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Hours
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Open: Mon-Sat, 10 AM - 9 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px] group"
            >
              <div className="relative h-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25497.531165597265!2d73.80451891083986!3d18.517584499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf87e5f2b983%3A0x5b615b197a5dca4c!2sEye%20Vision%20Optics!5e1!3m2!1sen!2sin!4v1762264055668!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground">
            © 2025 EYEVISIONOPTICS. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Crafted with precision for those who see beyond ordinary
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
