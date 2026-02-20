"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cuprum } from "next/font/google";

const cuprum = Cuprum({
  subsets: ["latin"],
  // Cuprum supports weights 400, 500, 600, 700 and italics
  weight: ["400", "700"], 
  style: ["normal", "italic"],
});

const groupedQuestions = [
  [
    "Struggling with constant financial strain?",
    "Facing monthly financial insecurity?",
    "Missing valuable financial opportunities?",
  ],
  [
    "Is your business growth feeling stuck?",
    "Watching your reputation slowly decline?",
    "Feeling intense pressure from competitors?",
  ],
  [
    "Losing confidence in your strategy?",
    "Sitting on inventory that won’t sell?",
    "Emotionally drained from slow sales?",
  ],
];

// ✅ Properly typed variants
// const letterVariants: Variants = {
//   hidden: {
//     y: "100%",
//     opacity: 0,
//   },
//   visible: (i: number) => ({
//     y: "0%",
//     opacity: 1,
//     transition: {
//       delay: i * 0.025,
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// };

export default function StruggleSection() {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % groupedQuestions.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full 
                 min-h-screen 
                 md:min-h-screen
                 max-md:min-h-0
                 max-md:py-24
                 flex items-center 
                 justify-center md:justify-end
                 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hereforyou.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/75" />

      {/* Content */}
      <div
        className={`relative z-10 
          w-full flex
          flex-col
          text-white 
          h-screen justify-between
          `}
      >
          <div className="mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.8,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:mt-5 
            text-1xl sm:text-1xl md:text-3xl 
            leading-tight tracking-wide font-bold bg-white/30 backdrop-blur-sm py-2 px-4 rounded-full border-2 border-white/50"
            >
            We've Got Solutions for Your Business Struggles
            </motion.p>
            </div>
      <div
        className={`
        w-full md:w-2/3
        ms-auto
        
        px-6 md:px-16 
        text-center md:text-left 
        ${cuprum.className}`}
      >
        <div className="space-y-8">
          {groupedQuestions[groupIndex].map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={line}
                  initial="hidden"
                  animate="visible"
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: lineIndex * 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-4xl sm:text-4xl md:text-5xl 
                             leading-[1.1] tracking-wide"
                >
                  {line}
                </motion.h2>
              </AnimatePresence>
            </div>
          ))}
          </div>
          
          
          </div>
        <div className="mx-auto px-9 md:px-0 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.8,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="md:mb-14 
          text-3xl sm:text-4xl md:text-5xl 
          leading-tight tracking-wide"
          >
          We understand, and we're here to help free you from all of that.
          </motion.p>
          </div>
        
      </div>
    </section>
  );
}