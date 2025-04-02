"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenuAndScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 py-4 md:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="glass-card mx-auto max-w-7xl rounded-full px-4 py-3 border-slate-800">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-white font-poppins font-bold text-xl flex items-center"
            onClick={(e) => {
              e.preventDefault();
              closeMobileMenuAndScroll("hero");
            }}
          >
            <span className="text-accent mr-2">&lt;</span>
            Akhil<span className="text-accent">/&gt;</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenuAndScroll(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden glass-card mt-2 rounded-lg bg-dark-300/90 border-slate-800 p-4 mx-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-3">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="text-slate-300 hover:text-white transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenuAndScroll(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
