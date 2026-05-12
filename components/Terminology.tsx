'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import originalTerminologyData from '@/data/terminology.json';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export default function Terminology({ onBack }: { onBack: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const terminologyData = useMemo(() => {
    const shuffled = [...originalTerminologyData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const termCount = terminologyData.length;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = termCount - 1;
      if (next >= termCount) next = 0;
      return next;
    });
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        filter: 'blur(10px)'
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1000 : 1000,
        opacity: 0,
        scale: 1.1,
        filter: 'blur(10px)'
      };
    }
  };

  const currentTerm = terminologyData[currentIndex];

  return (
    <motion.div 
      key="terminology"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl px-4 md:px-8 relative z-10 flex flex-col min-h-[100dvh] justify-center py-10"
    >
      <div className="flex justify-between items-center mb-8 w-full">
        <button
          onClick={onBack}
          className="group relative px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase bg-transparent border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all overflow-hidden flex items-center gap-2"
        >
          <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500 relative z-10" /> 
          <span className="relative z-10">Về Trạm Chính</span>
        </button>
        <div className="text-right">
          <p className="text-xs md:text-sm font-medium text-cyan-200/60 tracking-widest uppercase">
            Thuật ngữ <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {termCount}
          </p>
        </div>
      </div>

      <div className="relative w-full h-[60vh] flex items-center justify-center perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              filter: { duration: 0.4 }
            }}
            className="absolute w-full h-full flex flex-col items-center justify-center p-8 md:p-12 backdrop-blur-2xl bg-[#0b1120]/80 border-t border-l border-white/10 border-b border-r border-[#0a0a1a] rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-amber-900/10 pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 drop-shadow-md">
              {currentTerm.term}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-8 text-center tracking-wide">
              {currentTerm.vietnamese}
            </h3>
            
            <div className="w-full max-w-3xl space-y-6 overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-800/50 shadow-inner">
                <p className="text-lg md:text-xl text-cyan-50 leading-relaxed font-medium">
                  {currentTerm.definition}
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/30 shadow-inner">
                <p className="text-base md:text-lg text-amber-100/90 leading-relaxed">
                  <span className="font-bold text-amber-400 mr-2">Ví dụ / Giải thích:</span>
                  {currentTerm.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 md:-left-12 z-20 p-4 rounded-full bg-blue-950/50 text-cyan-400 hover:text-white hover:bg-cyan-600/50 border border-cyan-800/50 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transform -translate-y-1/2 top-1/2 group"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        
        <button
          className="absolute right-0 md:-right-12 z-20 p-4 rounded-full bg-blue-950/50 text-amber-400 hover:text-white hover:bg-amber-600/50 border border-amber-800/50 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transform -translate-y-1/2 top-1/2 group"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Cinematic effect bars */}
      <div className="fixed top-0 left-0 w-full h-[5vh] bg-black z-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-[5vh] bg-black z-50 pointer-events-none" />
    </motion.div>
  );
}
