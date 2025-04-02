"use client";
import { useState, useEffect } from "react";

interface LoadingOverlayProps {
  progress: number;
  text: string;
}

export default function LoadingOverlay({ progress, text }: LoadingOverlayProps) {
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setOpacity(0);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-dark-400 flex justify-center items-center z-50"
      style={{ 
        transition: "opacity 0.5s ease-out",
        opacity: opacity
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-poppins font-bold mb-6 text-white">Loading Experience</h2>
        <div className="w-[200px] h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-width duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-3 text-slate-400 font-code">{text}</p>
      </div>
    </div>
  );
}
