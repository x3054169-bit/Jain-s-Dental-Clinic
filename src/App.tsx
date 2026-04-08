import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 py-4 md:py-6",
      isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-500",
        isScrolled ? "glass shadow-xl shadow-primary/5" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="font-display font-bold text-lg md:text-xl">J</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-display font-bold tracking-tight text-primary leading-none">JAIN'S DENTAL</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-secondary font-semibold mt-0.5 md:mt-1">Excellence in Care</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="h-6 w-px bg-primary/10 mx-2" />
          <a 
            href="tel:+919926620626"
            className="bg-primary text-white px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-muted p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-primary py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919926620626"
            className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold"
          >
            Call Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[40%] h-[40%] bg-accent/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:group-6">
            <Star size={12} fill="currentColor" />
            <span>Top Rated Clinic in Indore</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-primary leading-[1.1] mb-4 md:mb-6 text-balance">
            Premium Dental Care <br />
            <span className="text-secondary italic font-light">You Can Trust</span>
          </h1>
          
          <p className="text-base md:text-lg text-secondary max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
            Personalized, painless, and modern dental treatments in Indore. Experience the future of dentistry with Dr. Pramod Jain & Dr. Gaurav Jain.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="tel:+919926620626"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
            >
              <Phone size={18} />
              Book Appointment
            </a>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-bold text-primary">70+ Happy Patients</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="aspect-[4/3] md:aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop" 
              alt="Jain's Dental Clinic" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass p-4 md:p-6 rounded-2xl md:rounded-3xl"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">Modern Equipment</h4>
                  <p className="text-[10px] md:text-xs text-secondary">Painless & Precise Treatments</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop" alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop" alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop" alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop" alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8 leading-tight">
              Excellence in Dentistry <br />
              <span className="text-secondary font-light italic">Since Decades</span>
            </h2>
            <p className="text-base md:text-lg text-secondary mb-6 md:mb-8 leading-relaxed">
              Jain’s Dental Clinic provides high-quality dental care using modern equipment and experienced professionals. We believe in a patient-centric approach where comfort meets clinical excellence.
            </p>
            
            <div className="space-y-4 md:space-y-6 text-left max-w-md mx-auto lg:mx-0">
              {[
                { title: 'Experienced Doctors', desc: 'Led by Dr. Pramod & Dr. Gaurav Jain with years of expertise.' },
                { title: 'Comfortable Treatments', desc: 'Minimally invasive techniques for a painless experience.' },
                { title: 'Transparent Pricing', desc: 'No hidden costs. Clear communication at every step.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 md:gap-4">
                  <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base mb-0.5 md:mb-1">{item.title}</h4>
                    <p className="text-[12px] md:text-sm text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Pramod Jain",
      role: "Senior Consultant",
      bio: "25+ years of experience in restorative dentistry.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop"
    },
    {
      name: "Dr. Gaurav Jain",
      role: "Cosmetic Dentist",
      bio: "Expert in modern implants and aesthetic smile design.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop"
    }
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Meet Our Experts</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">The Hands Behind Your Smile</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-row md:flex-col"
            >
              <div className="w-1/3 md:w-full aspect-square md:aspect-[4/5] overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-2/3 md:w-full p-4 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg md:text-2xl font-bold text-primary mb-0.5 md:mb-1">{doc.name}</h3>
                <p className="text-accent font-semibold text-[10px] md:text-sm mb-2 md:mb-4 uppercase tracking-wider">{doc.role}</p>
                <p className="text-[12px] md:text-base text-secondary leading-relaxed line-clamp-2 md:line-clamp-none">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Root Canal", desc: "Painless RCT to save your natural teeth.", icon: "🦷" },
    { title: "Implants", desc: "Natural-looking tooth replacements.", icon: "💎" },
    { title: "Cleaning", desc: "Professional scaling and polishing.", icon: "✨" },
    { title: "Cosmetic", desc: "Smile makeovers and whitening.", icon: "🎨" },
    { title: "Extraction", desc: "Safe removal of damaged teeth.", icon: "🛠️" },
    { title: "Orthodontics", desc: "Braces and clear aligners.", icon: "📏" }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-4 md:gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">Comprehensive Care</h2>
          </div>
          <a href="tel:+919926620626" className="text-primary font-bold text-sm flex items-center gap-2 group">
            View All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 md:p-10 rounded-[24px] md:rounded-[40px] border border-muted bg-muted/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-4 md:group-6">{service.icon}</div>
              <h3 className="text-base md:text-xl font-bold text-primary mb-2 md:mb-3">{service.title}</h3>
              <p className="text-[11px] md:text-base text-secondary leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "Doctors explain every step clearly and make treatment comfortable. Best experience in Indore.", rating: 5 },
    { name: "Priya Verma", text: "Very hygienic clinic with professional service. Dr. Gaurav is excellent with implants.", rating: 5 },
    { name: "Amit Gupta", text: "Excellent experience with RCT treatment. Completely painless and very professional staff.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Our Patients</h2>
          <p className="text-white/60">5.0 Rating based on 70+ Google reviews</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[32px]"
            >
              <p className="text-lg italic mb-6 text-white/90">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{rev.name}</h4>
                  <p className="text-xs text-white/40">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop",
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Our Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">A Glimpse of Our Clinic</h2>
        </div>
        
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group rounded-2xl md:rounded-[32px] overflow-hidden shadow-md"
            >
              <img 
                src={src} 
                alt="Clinic Gallery" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="text-center lg:text-left">
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8">Visit Our Clinic</h2>
            
            <div className="space-y-6 md:space-y-8 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-muted flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-0.5 md:mb-1">Call Us</h4>
                  <a href="tel:+919926620626" className="text-sm md:text-base text-secondary hover:text-accent transition-colors">+91 99266 20626</a>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-muted flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-0.5 md:mb-1">Our Location</h4>
                  <p className="text-sm md:text-base text-secondary leading-relaxed">
                    Mangalshree Apartment, Near Bengali Square, <br />
                    Sector A, Tilak Nagar, Indore, MP 452018
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-muted flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-0.5 md:mb-1">Working Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-0.5 md:gap-y-1 text-xs md:text-base text-secondary">
                    <span>Mon – Sat</span>
                    <span>10 AM – 9 PM</span>
                    <span>Sunday</span>
                    <span>11 AM – 5:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 md:mt-12 p-6 md:p-8 rounded-2xl md:rounded-[32px] bg-accent/5 border border-accent/10">
              <h4 className="font-bold text-primary mb-3 md:mb-4 flex items-center justify-center lg:justify-start gap-2">
                <MessageCircle size={18} md:size={20} className="text-accent" />
                Quick Appointment
              </h4>
              <p className="text-[12px] md:text-sm text-secondary mb-6">Need urgent care? Call us directly or message on WhatsApp for instant booking.</p>
              <div className="flex gap-3 md:gap-4">
                <a href="tel:+919926620626" className="flex-1 bg-primary text-white text-center py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm">Call Now</a>
                <a href="https://wa.me/919926620626?text=Hello! I would like to book an appointment at Jain's Dental Clinic." className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm">WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] md:h-[600px] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-muted">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.252886759556!2d75.8755624!3d22.7258914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3f45229447d%3A0xa826351aab22dd3a!2sJain&#39;s%20dental%20clinic!5e0!3m2!1sen!2sin!4v1775644320778!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-muted pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-display font-bold tracking-tight text-primary">JAIN'S DENTAL</span>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-medium">Premium Care Clinic</span>
            </div>
            <p className="text-secondary max-w-sm mb-8 leading-relaxed">
              Providing modern, painless, and high-quality dental treatments in the heart of Indore. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-accent transition-colors">Our Doctors</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span>Tilak Nagar, Indore, MP</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>+91 99266 20626</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span>Mon-Sat: 10AM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary">
          <p>© {new Date().getFullYear()} Jain's Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919926620626?text=Hello! I would like to book an appointment at Jain's Dental Clinic." 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} md:size={32} />
  </a>
);

// --- Main App ---

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        
        {/* Why Choose Us - Inline Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: "Expert Doctors", desc: "Highly skilled professionals." },
                { title: "Modern Clinic", desc: "State-of-the-art hygiene." },
                { title: "Transparent", desc: "No hidden costs." },
                { title: "Painless Care", desc: "Stress-free treatments." }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 md:p-8 glass rounded-2xl md:rounded-3xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 md:mb-6">
                    <CheckCircle2 size={20} md:size={24} />
                  </div>
                  <h4 className="font-bold text-primary text-sm md:text-base mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-[10px] md:text-sm text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
