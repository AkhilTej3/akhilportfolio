"use client";
import { useState, useEffect } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import ThreeCanvas from "@/components/ThreeCanvas";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing 3D environment...");

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setLoadingText("Starting experience...");
        
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
      
      setLoadingProgress(progress);
      
      if (progress < 30) {
        setLoadingText("Loading 3D assets...");
      } else if (progress < 60) {
        setLoadingText("Initializing scene...");
      } else if (progress < 90) {
        setLoadingText("Configuring environment...");
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* {isLoading && (
        <LoadingOverlay progress={loadingProgress} text={loadingText} />
      )} */}
      <ThreeCanvas />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
