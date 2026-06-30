import React from "react";
import { Link, useLocation } from "wouter";
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Calendar, Menu, X, ArrowRight, Star, Heart, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Emergency: +91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Sector 18, Noida, UP</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Youtube className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Patient Stories", path: "/stories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-heading text-primary leading-tight">Dr. Ravi Kumar</h1>
            <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Dental Solutions</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium transition-colors ${
                location === link.path ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md shadow-accent/20">
            <Calendar className="w-4 h-4 mr-2" /> Book Appointment
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 px-4 rounded-md transition-colors ${
                    location === link.path ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold mt-4">
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-white/10 p-2 rounded-lg">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-white leading-tight">Dr. Ravi Kumar</h2>
              <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">Dental Solutions</p>
            </div>
          </div>
          <p className="mb-6 leading-relaxed">
            Providing world-class dental care with a gentle touch. Your smile is our passion, and your comfort is our priority.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6 font-heading">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Services</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Smile Gallery</Link></li>
            <li><Link href="/stories" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Patient Stories</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6 font-heading">Our Services</h3>
          <ul className="space-y-3">
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Dental Implants</li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Teeth Whitening</li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Braces & Aligners</li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Root Canal Treatment</li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Smile Makeover</li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Pediatric Dentistry</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6 font-heading">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
              <span>Sector 18, Noida,<br />Uttar Pradesh 201301</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-primary" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-primary" />
              <span>drravikumar@dentalcare.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Ravi Kumar Dental Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.031 0C5.385 0 0 5.386 0 12.034c0 2.124.553 4.195 1.604 6.015L.32 24l6.113-1.603a11.968 11.968 0 005.598 1.368h.005c6.643 0 12.03-5.385 12.03-12.035C24 5.384 18.625 0 12.031 0zm0 21.765c-1.802 0-3.565-.483-5.115-1.4l-.366-.217-3.8.995.98-3.71-.24-.38a9.98 9.98 0 01-1.523-5.378c0-5.503 4.478-9.982 9.982-9.982 5.505 0 9.983 4.48 9.983 9.983 0 5.503-4.478 9.98-9.983 9.98z"/>
        <path d="M17.484 14.542c-.3-.15-1.776-.877-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.226-.65.076-2.126-1.066-3.57-2.29-4.32-3.834-.175-.35.172-.32.463-.9.15-.3.075-.563-.05-.85-.125-.288-.675-1.625-.925-2.225-.245-.588-.493-.508-.675-.518-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.1 3.2 5.075 4.488 2.046.883 2.87.75 3.325.625.47-.13.13-1.05-.18-1.56-.31-.51-.62-.64-.92-.79z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
