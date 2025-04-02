'use client'
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Code2, 
  Terminal, 
  Atom, 
  Cpu, 
  Database, 
  Cloud
} from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver({
    elementRef: sectionRef,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="pt-24 px-4 md:px-8 min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8">
            <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">Discover</span> My Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I&apos;m a <span className="text-primary font-semibold">problem solver at heart</span> who thrives on transforming complex challenges into elegant, user-friendly solutions. My journey in tech is driven by curiosity and a passion for building tools that make a meaningful impact.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                With expertise spanning the entire development stack, I orchestrate <span className="text-primary font-semibold">seamless experiences</span> from database architecture to responsive interfaces. I bring ideas to life through code, combining technical precision with creative thinking to deliver solutions that exceed expectations.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Beyond coding, I&apos;m dedicated to continuous learning and growth. A proud graduate with a <span className="text-primary font-semibold">B.Tech in Computer Science</span> from Gayatri Vidya Parishad College of Engineering (2020-2024), I blend academic foundations with hands-on experience to push the boundaries of what&apos;s possible in web development.
              </p>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-white hover:text-primary transition-colors" aria-label="GitHub">
                  <i className="ri-github-fill text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/akhil-dharmana/" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                  <i className="ri-linkedin-fill text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
                  <i className="ri-twitter-fill text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Email">
                  <i className="ri-mail-fill text-2xl"></i>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
                {/* 3D Cube */}
                <div className="absolute inset-0 cube-container animate-rotate-slow">
                  <div className="cube">
                    <div className="cube-face cube-face-front bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-primary" />
                    </div>
                    <div className="cube-face cube-face-back bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/30 backdrop-blur-sm flex items-center justify-center">
                      <Terminal className="w-12 h-12 text-secondary" />
                    </div>
                    <div className="cube-face cube-face-right bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
                      <Atom className="w-12 h-12 text-accent" />
                    </div>
                    <div className="cube-face cube-face-left bg-gradient-to-br from-green-500/30 to-green-500/10 border border-green-500/30 backdrop-blur-sm flex items-center justify-center">
                      <Cpu className="w-12 h-12 text-green-500" />
                    </div>
                    <div className="cube-face cube-face-top bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                      <Database className="w-12 h-12 text-purple-500" />
                    </div>
                    <div className="cube-face cube-face-bottom bg-gradient-to-br from-teal-500/30 to-teal-500/10 border border-teal-500/30 backdrop-blur-sm flex items-center justify-center">
                      <Cloud className="w-12 h-12 text-teal-500" />
                    </div>
                  </div>
                </div>
                
                {/* Floating orbit elements */}
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full orbit-container">
                  <div className="orbit orbit-1">
                    <div className="orbit-dot bg-dark-300 border border-slate-800 rounded-full p-2 flex items-center justify-center">
                      <i className="ri-javascript-fill text-xl text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full orbit-container">
                  <div className="orbit orbit-2">
                    <div className="orbit-dot bg-dark-300 border border-slate-800 rounded-full p-2 flex items-center justify-center">
                      <i className="ri-html5-fill text-xl text-orange-500"></i>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full orbit-container">
                  <div className="orbit orbit-3">
                    <div className="orbit-dot bg-dark-300 border border-slate-800 rounded-full p-2 flex items-center justify-center">
                      <i className="ri-css3-fill text-xl text-blue-500"></i>
                    </div>
                  </div>
                </div>
                
                {/* Glowing base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
