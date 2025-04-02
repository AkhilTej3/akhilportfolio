"use client";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { skills, expertise } from "@/data/skillsData";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function SkillsSection() {
  const sectionRef = useRef<Element>(null);
  const isIntersecting = useIntersectionObserver({
    elementRef: sectionRef,
    threshold: 0.1,
  });
  
  // Group skills by category
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    language: skills.filter(skill => skill.category === 'language'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
  };

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as LucideIcon;
    return Icon ? <Icon className="text-3xl text-primary mb-3" /> : null;
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="pt-24 px-4 md:px-8 min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-nano font-bold text-3xl md:text-4xl mb-8 text-white">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-nano font-medium text-white mb-6">Technical Skills</h3>
              
              {/* Frontend */}
              <div className="mb-8">
                <h4 className="text-white font-medium mb-4 border-b border-dark-100 pb-2">Frontend Development</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categories.frontend.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center bg-dark-200/30 rounded-lg p-4 transition-all hover:bg-dark-200/60"
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isIntersecting ? 1 : 0
                      }}
                    >
                      {getIcon(skill.icon)}
                      <span className="text-slate-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-8">
                <h4 className="text-white font-medium mb-4 border-b border-dark-100 pb-2">Backend Development</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categories.backend.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center bg-dark-200/30 rounded-lg p-4 transition-all hover:bg-dark-200/60"
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isIntersecting ? 1 : 0
                      }}
                    >
                      {getIcon(skill.icon)}
                      <span className="text-slate-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h4 className="text-white font-medium mb-4 border-b border-dark-100 pb-2">Programming Languages</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categories.language.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center bg-dark-200/30 rounded-lg p-4 transition-all hover:bg-dark-200/60"
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isIntersecting ? 1 : 0
                      }}
                    >
                      {getIcon(skill.icon)}
                      <span className="text-slate-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database & Tools (combined into one row) */}
              <div>
                <h4 className="text-white font-medium mb-4 border-b border-dark-100 pb-2">Database & DevOps Tools</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[...categories.database, ...categories.tools].map((skill, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center bg-dark-200/30 rounded-lg p-4 transition-all hover:bg-dark-200/60"
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isIntersecting ? 1 : 0
                      }}
                    >
                      {getIcon(skill.icon)}
                      <span className="text-slate-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-nano font-medium text-white mb-6">Areas of Expertise</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-dark-200/50 border border-dark-100/20 rounded-xl p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isIntersecting ? 1 : 0
                    }}
                  >
                    {getIcon(item.icon)}
                    <h4 className="text-white font-medium text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
