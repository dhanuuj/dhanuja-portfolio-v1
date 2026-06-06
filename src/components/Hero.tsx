import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const wordDhanuja = "DHANUJA".split("");
  const wordSenarathna = "SENARATHNA".split("");

  // Letter animations
  const charVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const nameContainer1 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      }
    }
  };

  const nameContainer2 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      }
    }
  };

  const scrollToSection = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start py-28 px-6 md:px-16 lg:px-24 bg-bg bg-grid overflow-hidden"
    >
      {/* Cinematic radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 10% 0%, rgba(240, 165, 0, 0.05) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-start text-left mt-8 md:mt-0">

        {/* Small Top Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0 }}
          className="font-mono text-[11px] md:text-[12px] text-text-muted tracking-[0.15em] uppercase mb-6"
        >
          UI/UX & Frontend Developer · Sri Lanka
        </motion.p>

        {/* Name Heading */}
        <div className="font-syne font-extrabold text-white text-[32px] md:text-[72px] leading-[0.95] tracking-tight mb-8 select-none">
          {/* DHANUJA */}
          <motion.div
            variants={nameContainer1}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap"
          >
            {wordDhanuja.map((char, index) => (
              <motion.span key={index} variants={charVariant}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* SENARATHNA */}
          <motion.div
            variants={nameContainer2}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap mt-1"
          >
            {wordSenarathna.map((char, index) => (
              <motion.span key={index} variants={charVariant}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
          className="font-dmsans font-medium text-[16px] md:text-[18px] text-text-muted mb-3"
        >
          Eat. Sleep. Code. Repeat.
        </motion.p>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.8 }}
          className="font-dmsans text-[14px] md:text-[15px] text-text-faint max-w-lg mb-10"
        >
          I build frontend interfaces and shoot the world between commits.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 1.0 }}
          className="flex flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={(e) => scrollToSection(e, 'currently')}
            className="cursor-pointer font-dmsans text-[14px] font-medium bg-accent hover:bg-accent/90 text-[#080808] px-6 py-3 rounded-full transition-all duration-300 transform active:scale-95 shadow-md"
          >
            View My Work
          </button>

          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="cursor-pointer font-dmsans text-[14px] text-text-muted hover:text-white border border-[#333] hover:border-accent px-6 py-3 rounded-full transition-all duration-300 transform active:scale-95 bg-transparent"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Bottom Left Decoration */}
        <div className="absolute -bottom-20 left-0 hidden md:flex flex-col items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-accent mb-1 animate-pulse" />
          <div className="w-[1.5px] h-14 bg-accent/40" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
