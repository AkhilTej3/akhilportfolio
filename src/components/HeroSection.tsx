"use client";
export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
          Crafting <span className="text-primary">Digital</span> Excellence <br />Through Code
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Hi, I&apos;m <span className="text-primary font-semibold">Akhil Krishna</span> — a passionate full stack developer who transforms complex ideas into elegant digital solutions. Let&apos;s build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="border border-slate-600 hover:border-white text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <i className="ri-arrow-down-line text-3xl text-white/70"></i>
        </div>
      </div>
    </section>
  );
}
