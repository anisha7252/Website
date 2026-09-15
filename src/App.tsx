import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  FileText, 
  Printer, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone,
  CreditCard,
  Car,
  Landmark,
  Briefcase,
  Wallet,
  Plane,
  GraduationCap
} from 'lucide-react';
import { ScrollAnimationBackground } from './components/ScrollAnimationBackground';
import { ScrambleText } from './components/ScrambleText';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TechTree } from './components/TechTree';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tracingLineRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Services staggered fade & slide up
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    // Tracing line animation
    if (whyUsRef.current && tracingLineRef.current) {
      gsap.fromTo(tracingLineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent text-slate-50 relative overflow-hidden font-sans selection:bg-[#00F3FF]/30 selection:text-white">
      <ScrollAnimationBackground />
      <FloatingWhatsApp />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0F172A]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight text-white drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
              S & A Digital Hub
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-[#00F3FF] transition-colors drop-shadow-[0_0_8px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">About</a>
            <a href="#services" className="hover:text-[#00F3FF] transition-colors drop-shadow-[0_0_8px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">Services</a>
            <a href="#why-us" className="hover:text-[#00F3FF] transition-colors drop-shadow-[0_0_8px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">Why Us</a>
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-[#FF003C] hover:bg-[#ff003c]/90 text-white text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(255,0,60,0.4)] hover:shadow-[0_0_25px_rgba(255,0,60,0.8)]"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-[#00F3FF]/30 text-[#00F3FF] text-sm font-semibold tracking-wider mb-6 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
              BASINA'S PREMIER DIGITAL AGENCY
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Simplifying Your Digital & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F3FF] to-[#FF003C] drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                <ScrambleText text="Design Needs" duration={2000} />
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            From essential government and municipal services to professional printing and custom graphic design, we are your trusted local partner for fast and accurate solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#00F3FF] text-[#00F3FF] font-bold rounded-full transition-all hover:bg-[#00F3FF] hover:text-[#0F172A] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] text-center"
            >
              View Our Services
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 px-6 border-y border-white/10 relative z-10 bg-[#0F172A]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted Local Expertise in <span className="text-[#00F3FF] drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">Basina</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              At S & A Digital Hub, we believe that accessing essential services should be hassle-free. Based right here in Basina, West Bengal, we've built our reputation on a foundation of trust, speed, and accuracy.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether you need to update your Aadhaar, pay land taxes, or design a stunning new logo for your business, our dedicated team ensures every detail is handled with absolute professional care.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#FF003C] drop-shadow-[0_0_10px_rgba(255,0,60,0.5)]">100%</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Accuracy</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#00F3FF] drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">Fast</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Turnaround</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative shadow-[0_0_30px_rgba(0,243,255,0.1)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl">
                  <p className="text-[#00F3FF] font-semibold mb-1">Our Commitment</p>
                  <p className="text-white">Delivering seamless digital and municipal solutions for our community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechTree />

      {/* Why Choose Us */}
      <section ref={whyUsRef} id="why-us" className="py-24 border-y border-white/10 px-6 relative z-10 bg-[#0F172A]/80 backdrop-blur-md">
        {/* Glow Line Tracker */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/5 hidden md:block">
          <div ref={tracingLineRef} className="w-full bg-[#00F3FF] glow-line origin-top h-0"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-[#00F3FF] drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">S & A Digital Hub</span></h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">We streamline the complex, making digital and municipal services accessible, fast, and precise.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-center text-center hover:border-[#00F3FF]/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300 group">
              <Clock className="w-12 h-12 text-[#FF003C] mb-6 drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-300">We respect your time. Our streamlined processes ensure rapid turnarounds without compromising on quality.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-center text-center hover:border-[#00F3FF]/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300 group mt-0 md:mt-12">
              <ShieldCheck className="w-12 h-12 text-[#FF003C] mb-6 drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Utmost Precision</h3>
              <p className="text-slate-300">Errors in legal and government docs are costly. We guarantee meticulous attention to detail in every application.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-center text-center hover:border-[#00F3FF]/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300 group mt-0 md:mt-24">
              <CheckCircle2 className="w-12 h-12 text-[#FF003C] mb-6 drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">One-Stop-Shop</h3>
              <p className="text-slate-300">From Aadhaar updates to logo design and PVC printing, find all your essential digital services under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0F172A] pt-20 pb-10 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl tracking-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">S & A Digital Hub</span>
              <span className="text-[#00F3FF] font-medium text-sm drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">Parent Company: S & A Group</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Welcome to S & A Digital Hub. We are a comprehensive digital service and design agency dedicated to simplifying essential online tasks for our community in Basina, West Bengal. We offer a wide spectrum of services under one roof, including high-quality smart card printing, all types of private and commercial vehicle insurance, municipal and legal documentation, and business registrations like GST and Trade Licenses. Committed to speed, precision, and customer trust, we pride ourselves on being your reliable local partner for everyday digital solutions, printing, and professional design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 group">
                <MapPin className="w-5 h-5 text-[#FF003C] shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)] group-hover:animate-bounce" />
                <span>Basina, Rajarhat<br/>West Bengal, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 group">
                <Phone className="w-5 h-5 text-[#FF003C] shrink-0 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)] group-hover:animate-pulse" />
                <a href="tel:+917439375724" className="hover:text-[#00F3FF] transition-colors drop-shadow-[0_0_5px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">+91 74393 75724</a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 group">
                <Mail className="w-5 h-5 text-[#FF003C] shrink-0 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)] group-hover:animate-pulse" />
                <a href="mailto:anisha@sagrp.in" className="hover:text-[#00F3FF] transition-colors drop-shadow-[0_0_5px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">anisha@sagrp.in</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Business Hours</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                <span className="whitespace-nowrap">Mon - Thu</span>
                <span className="text-[#00F3FF] text-right drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">9:00 AM - 1:30 PM<br/>5:30 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                <span className="whitespace-nowrap">Friday</span>
                <span className="text-[#00F3FF] text-right drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">9:00 AM - 11:30 AM<br/>5:30 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-start pb-2 gap-4">
                <span className="whitespace-nowrap">Sat - Sun</span>
                <span className="text-[#00F3FF] text-right drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">9:00 AM - 1:30 PM<br/>5:30 PM - 10:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} S & A Digital Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00F3FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00F3FF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
