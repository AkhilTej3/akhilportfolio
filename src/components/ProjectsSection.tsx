"use client"
import { useRef } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { projects } from "@/data/projectsData";
import { Github, ArrowRight } from "lucide-react";
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver({
    elementRef: sectionRef,
    threshold: 0.1,
  });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="pt-24 px-4 md:px-8 min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`font-poppins font-bold text-3xl md:text-4xl mb-8 text-white transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 duration-700`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(50px)',
                opacity: isIntersecting ? 1 : 0
              }}
            >
              <div className="h-48 overflow-hidden">
                <div
                  className={`w-full h-full flex items-center justify-center transition-transform duration-500 relative
                    ${project.id === 1 ? 'bg-gradient-to-br from-orange-600/20 to-amber-800/40' : ''}
                    ${project.id === 2 ? 'bg-gradient-to-br from-red-600/20 to-purple-800/40' : ''}
                    ${project.id === 3 ? 'bg-gradient-to-br from-cyan-600/20 to-blue-800/40' : ''}
                    ${project.id === 4 ? 'bg-gradient-to-br from-green-600/20 to-teal-800/40' : ''}
                    ${project.id === 5 ? 'bg-gradient-to-br from-indigo-600/20 to-violet-800/40' : ''}
                  `}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.imagePath}
                      alt={project.imageFallback}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority={index < 3}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/fallback-project.jpg';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-70"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-dark-100/50 text-slate-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.projectUrl} 
                    className="text-primary hover:text-primary/80 flex items-center text-sm font-medium"
                  >
                    Contact for Demo <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  {/* <a 
                    href={project.githubUrl} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-dark-200 hover:bg-dark-100 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
