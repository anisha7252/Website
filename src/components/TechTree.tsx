import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CreditCard, Car, Landmark, Briefcase, 
  Wallet, Plane, Printer, GraduationCap, 
  Network, ChevronDown 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'printing',
    title: 'Digital PVC & Smart Card Printing',
    icon: CreditCard,
    items: ['Voter ID Card (EPIC / e-EPIC)', 'Aadhaar Card', 'PAN Card', 'e-Ration Card / cKYC', 'Ayushman Bharat (PM-JAY)', 'ABHA Digital Health ID', 'Driving Licence', 'Vehicle RC (Blue Book)', 'Farmer / Kisan ID', 'Shramik / e-Shram Card', 'School & Office IDs', 'Instant Printing', 'Wholesale Bulk Orders']
  },
  {
    id: 'insurance',
    title: 'Vehicle Insurance Services',
    icon: Car,
    items: ['Two-Wheelers (Bikes, Scooters)', 'Four-Wheelers (Private Cars, Cabs)', 'Auto-Rickshaws & Totos', 'Mini Trucks & Pickup Vans', 'Commercial Lorries & Dumpers', 'Agricultural Tractors', 'Buses & Minibuses', 'Tempo Travellers']
  },
  {
    id: 'gov',
    title: 'Government & Citizen Utility',
    icon: Landmark,
    items: ['Aadhaar Updates', 'PAN Card (New & Update)', 'Voter ID (New, Correction, Link)', 'Passport Assistance', 'Driving Licence Services', 'Govt Scheme Registrations', 'Land Records (Bhumi Tathya)', 'Traffic Challan Payments']
  },
  {
    id: 'business',
    title: 'Business & Taxation Services',
    icon: Briefcase,
    items: ['Udyam / MSME Registration', 'GST Registration & Filing', 'Trade Licence (New & Renewal)']
  },
  {
    id: 'banking',
    title: 'Banking & Bill Payment',
    icon: Wallet,
    items: ['Domestic Money Transfer (DMT)', 'Electricity Bill Payments', 'EMI & Loan Repayments', 'Insurance Premium Payments']
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality Bookings',
    icon: Plane,
    items: ['Railway Ticket Booking (IRCTC)', 'Flight Tickets (Dom. & Int.)', 'Hotel & Accommodation']
  },
  {
    id: 'docs',
    title: 'Printing, Scanning & Docs',
    icon: Printer,
    items: ['High-Speed Xerox / Photocopy', 'Colour Printing', 'Document Scanning & Emailing', 'Document Lamination', 'Passport-Size Photos']
  },
  {
    id: 'edu',
    title: 'Career & Educational',
    icon: GraduationCap,
    items: ['Online Job Application Assist', 'Professional Resume / CV', 'General Online Form Fill-Up']
  }
];

export const TechTree = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#tech-tree',
          start: 'top 70%',
        }
      });

      // Power up root
      tl.fromTo('.tree-root',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }
      )
      // Main trunk energy flow down
      .to('.tree-trunk', { height: '100%', duration: 1.5, ease: 'power2.inOut' }, "-=0.2")
      // Branches fan out
      .to('.tree-branch', { width: '100%', duration: 0.4, stagger: 0.1 }, "-=1.2")
      // Nodes power on
      .fromTo('.tree-node', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' }, 
        "-=1.3"
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleNode = (id: string) => {
    setActiveNode(activeNode === id ? null : id);
  };

  return (
    <section id="services" className="py-24 px-6 relative z-10 w-full overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core <span className="text-[#FF003C] drop-shadow-[0_0_10px_rgba(255,0,60,0.5)]">Services</span></h2>
        <p className="text-slate-300 text-lg">A comprehensive suite of digital solutions designed to save you time and provide peace of mind.</p>
      </div>

      <div id="tech-tree" className="relative w-full max-w-5xl mx-auto pb-10">
        
        {/* Continuous Trunk Line (Background/Track) */}
        <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-white/10 rounded-full z-0">
          {/* Animated Trunk Line (Foreground energy) */}
          <div className="tree-trunk w-full h-0 bg-[#00F3FF] glow-line rounded-full"></div>
        </div>

        {/* Root Node */}
        <div className="relative z-10 flex flex-col items-center mb-16 tree-root">
          <div className="w-20 h-20 bg-[#0F172A] rounded-full border-2 border-[#00F3FF] shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center justify-center relative z-20">
             <Network className="w-10 h-10 text-[#00F3FF]" />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-white drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] text-center">S & A Digital Hub</h2>
          <p className="text-[#00F3FF] tracking-widest text-xs md:text-sm uppercase font-semibold mt-1">Core Services Network</p>
        </div>

        {/* Nodes Container */}
        <div className="flex flex-col gap-6 md:gap-10 relative z-10">
          {servicesData.map((svc, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeNode === svc.id;
            const Icon = svc.icon;

            return (
              <div key={svc.id} className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative tree-row z-10`}>
                 
                 {/* Card Wrapper taking 50% width on desktop */}
                 <div className={`relative w-full md:w-1/2 pl-[55px] md:pl-0 ${isLeft ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'}`}>
                    
                    {/* Mobile Branch */}
                    <div className="md:hidden absolute left-[24px] top-[42px] w-[31px] h-[2px] bg-white/10 branch-mobile overflow-hidden z-0">
                       <div className="tree-branch w-0 h-full bg-[#00F3FF] glow-line origin-left"></div>
                    </div>

                    {/* Desktop Branch */}
                    <div className={`hidden md:block absolute top-[42px] w-8 lg:w-16 h-[2px] bg-white/10 branch-desktop overflow-hidden z-0 ${isLeft ? 'right-0' : 'left-0'}`}>
                       <div className={`tree-branch w-0 h-full bg-[#00F3FF] glow-line ${isLeft ? 'origin-right' : 'origin-left'}`}></div>
                    </div>

                    {/* Node Card (Glassmorphism) */}
                    <div 
                      className={`tree-node relative z-10 w-full bg-white/5 backdrop-blur-xl border-2 ${isActive ? 'border-[#FF003C] shadow-[0_0_25px_rgba(255,0,60,0.3)]' : 'border-white/10 hover:border-[#00F3FF]/50 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'} p-5 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 group`}
                      onClick={() => toggleNode(svc.id)}
                    >
                      {/* Node Header */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${isActive ? 'bg-[#FF003C]/20 border-[#FF003C]/50' : 'bg-white/10 border-white/10 group-hover:border-[#00F3FF]/30 group-hover:bg-[#00F3FF]/10'}`}>
                            <Icon className={`w-6 h-6 ${isActive ? 'text-[#FF003C]' : 'text-[#00F3FF]'}`} />
                          </div>
                          <h3 className={`text-base md:text-lg font-bold leading-snug transition-colors ${isActive ? 'text-[#FF003C] drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]' : 'text-white group-hover:text-[#00F3FF]'}`}>
                            {svc.title}
                          </h3>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isActive ? 'border-[#FF003C] bg-[#FF003C]/10 rotate-180' : 'border-white/20 group-hover:border-[#00F3FF]/50'}`}>
                           <ChevronDown className={`w-4 h-4 ${isActive ? 'text-[#FF003C]' : 'text-white/70 group-hover:text-[#00F3FF]'}`} />
                        </div>
                      </div>

                      {/* Expanding Leaves (Sub-items) */}
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                         <div className="overflow-hidden">
                           <ul className="space-y-3 text-sm text-slate-300 border-t border-white/10 pt-4">
                             {svc.items.map((item, i) => (
                               <li key={i} className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF003C] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,0,60,0.8)]"></div>
                                 <span className="leading-tight">{item}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                      </div>
                    </div>

                 </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
