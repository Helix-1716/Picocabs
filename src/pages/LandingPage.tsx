import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight, ShieldCheck, Clock, MapPin, Plane, Briefcase, CalendarHeart, Phone, Mail, Map, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-primary/10 selection:text-primary font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-border z-50 px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
            <img src="/Pico Cabs- icon.png" alt="Pico Cabs Icon" className="w-5 h-5 object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary italic">Pico Cabs</span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold text-secondary">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#fleet" className="hover:text-primary transition-colors">Fleet</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="sm:hidden p-2 text-primary hover:bg-surface/50 rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40 sm:hidden border-b border-border flex flex-col p-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6 text-lg font-bold text-primary mt-4">
            <a href="#services" onClick={closeMobileMenu} className="hover:text-primary/70 transition-colors border-b border-border/50 pb-4">Services</a>
            <a href="#fleet" onClick={closeMobileMenu} className="hover:text-primary/70 transition-colors border-b border-border/50 pb-4">Fleet</a>
            <a href="#contact" onClick={closeMobileMenu} className="hover:text-primary/70 transition-colors border-b border-border/50 pb-4">Contact</a>
          </nav>
        </div>
      )}

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-surface/30" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-secondary mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              Operating in 15+ Cities
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-serif italic font-bold tracking-tighter text-primary">
              Elevating your <br/> everyday journey.
            </h1>
            
            <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed">
              Experience the pinnacle of urban mobility. Professional chauffeurs, pristine vehicles, and punctuality you can rely on.
            </p>
            

          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 sm:px-10 bg-white border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Offerings</h2>
              <h3 className="text-4xl font-serif italic font-bold text-primary">Premium Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Plane, title: 'Airport Transfers', desc: 'Seamless pick-ups and drop-offs at all major regional and international airports.' },
                { icon: Briefcase, title: 'Corporate Travel', desc: 'Dedicated account management and priority booking for business professionals.' },
                { icon: Clock, title: 'Hourly Charter', desc: 'Flexible as-directed service keeping a vehicle and chauffeur at your disposal.' },
                { icon: CalendarHeart, title: 'Special Events', desc: 'Elegant transportation for weddings, galas, and VIP occasions.' }
              ].map((service, i) => (
                <div key={i} className="bento-card bg-surface/20 border-transparent hover:border-border p-8 flex flex-col group transition-all">
                  <div className="w-12 h-12 bg-white border border-border shadow-sm flex items-center justify-center rounded-xl mb-6 text-primary group-hover:scale-110 transition-transform">
                    <service.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="py-24 px-6 sm:px-10 bg-surface/30 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Vehicles</h2>
              <h3 className="text-4xl font-serif italic font-bold text-primary">The Luxury Fleet</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Executive Sedan', models: 'Mercedes E-Class, BMW 5 Series', capacity: '3 Passengers', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop' },
                { name: 'Premium SUV', models: 'Cadillac Escalade, Range Rover', capacity: '6 Passengers', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop' },
                { name: 'First Class', models: 'Mercedes S-Class, BMW 7 Series', capacity: '3 Passengers', image: 'https://images.unsplash.com/photo-1503376760364-5a83a0050d24?q=80&w=600&auto=format&fit=crop' }
              ].map((vehicle, i) => (
                <div key={i} className="bento-card overflow-hidden group p-0 bg-white flex flex-col border-transparent hover:border-border">
                  <div className="h-48 overflow-hidden relative">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold">{vehicle.name}</h4>
                      <div className="flex items-center gap-1 text-xs font-bold text-white bg-primary px-2 py-1 rounded-full">
                        <Car size={12} /> {vehicle.capacity}
                      </div>
                    </div>
                    <p className="text-sm text-secondary font-medium">{vehicle.models}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 sm:px-10 bg-white border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-serif italic font-bold text-primary">Contact Pico Cabs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-surface/50 border border-border flex items-center justify-center rounded-xl text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Phone</h4>
                    <p className="text-secondary text-sm">24/7 Dispatch Center</p>
                    <a href="tel:+1234567890" className="text-primary font-bold mt-1 block hover:underline">+1 (555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-surface/50 border border-border flex items-center justify-center rounded-xl text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email</h4>
                    <p className="text-secondary text-sm">Corporate & General Inquiries</p>
                    <a href="mailto:contact@picocabs.com" className="text-primary font-bold mt-1 block hover:underline">contact@picocabs.com</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-surface/50 border border-border flex items-center justify-center rounded-xl text-primary shrink-0">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Headquarters</h4>
                    <p className="text-secondary text-sm leading-relaxed">
                      100 Executive Blvd, Suite 500<br />
                      Metropolis, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface/20 border border-border p-8 rounded-3xl">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Name</label>
                    <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Email</label>
                    <input type="email" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Message</label>
                    <textarea className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm min-h-[120px] resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Admin Link */}
      <footer className="bg-primary text-white py-12 px-6 sm:px-10 border-t border-primary/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-xl">
              <img src="/Pico Cabs- icon.png" alt="Pico Cabs Icon" className="w-5 h-5 object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight italic">Pico Cabs</span>
          </div>
          
          <div className="text-xs text-white/50 font-mono tracking-widest uppercase">
            © 2026 Pico Cabs Operations. All rights reserved.
          </div>
          
          <Link 
            to="/admin" 
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
          >
            Admin Portal <ArrowRight size={14} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
