
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          duration: 0.3
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate header entrance
    if (headerRef.current && logoRef.current && navRef.current) {
      gsap.fromTo([logoRef.current, navRef.current], 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
      );
    }
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0, y: -20, scale: 0.95, duration: 0.2, ease: "power2.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const navItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              🍎 Apple AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform group"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -2,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`} />
                <span className={`bg-current block h-0.5 w-6 rounded-sm mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`bg-current block h-0.5 w-6 rounded-sm mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-xl rounded-lg mt-2 border border-white/10">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
