import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Mail, BookOpen } from 'lucide-react';
import SectionLabel from './SectionLabel';

export function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24 bg-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left Column - Text (60% width) */}
          <motion.div
            className="lg:col-span-3 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <SectionLabel text="// about me" />

            <h2 className="font-syne font-bold text-white text-[32px] md:text-[36px] tracking-tight mb-8 leading-tight">
              The person behind the code.
            </h2>

            <div className="font-dmsans text-[15px] md:text-[16px] text-text-muted space-y-6 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Dhanuja</span> — a frontend developer and software engineering student at UCLan, building on the web and filming the world between deadlines.
              </p>
              <p>
                My background in videography gave me an eye for how things should look, not just how they should work. I bring that visual aesthetic into every single user interface I design and code.
              </p>
              <p>
                I care deeply about the details — the subtle spacing, the fluid transitions, and the tiny micro-interactions that elevate a static screen to make it feel alive and engaging.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual & Info Card (40% width) */}
          <div className="lg:col-span-2 flex flex-col gap-8 w-full">

            {/* Visual Deck (Filmmaker's Viewfinder + Avatar) */}
            <motion.div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface card-shadow select-none group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={slideInRight}
            >
              {/* Main Image: Original Photo */}
              <img
                src="/original-photo.jpg"
                alt="Dhanuja Senarathne behind the scenes"
                className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />

              {/* Viewfinder Overlay Grid */}
              <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between font-mono text-[10px] text-text/80 z-20">
                {/* Top bar */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-blink" />
                    <span className="tracking-widest uppercase">REC</span>
                  </div>
                  <div className="bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span>4K 24fps</span>
                  </div>
                </div>

                {/* Center crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-30">
                  <div className="w-[1.5px] h-3 bg-white" />
                  <div className="w-3 h-[1.5px] bg-white absolute" />
                  <div className="border border-white w-4 h-4 rounded-full absolute" />
                </div>

                {/* Bottom bar */}
                <div className="flex justify-between items-center w-full">
                  <div className="bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span>ISO 400</span>
                  </div>
                  <div className="bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span>LUT: WARM_AMBER</span>
                  </div>
                </div>
              </div>

              {/* Viewfinder crop marks (Corner highlights) */}
              <div className="absolute inset-2 border border-white/10 pointer-events-none z-10" />

              {/* Floating Avatar Badge overlapping bottom right */}
              {/* <motion.div
                className="absolute bottom-4 right-4 z-30 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-accent overflow-hidden card-shadow bg-surface cursor-pointer"
                whileHover={{ rotate: 8, scale: 1.05, border: '3px solid var(--accent)' }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Dhanuja AI Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div> */}
            </motion.div>

            {/* Info Card */}
            <motion.div
              className="bg-surface border border-border rounded-2xl p-6 border-l-4 border-l-accent card-shadow flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={slideInRight}
            >
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                <span className="font-dmsans text-[14px]">Chilaw, Sri Lanka</span>
              </div>

              <div className="flex items-start gap-3 text-text-muted">
                <GraduationCap size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-dmsans text-[14px] leading-tight">
                  BSc Software Engineering — UCLan <span className="text-text-faint text-[12px] block md:inline font-mono">(Expected 2028)</span>
                </span>
              </div>

              <div className="flex items-center gap-3 text-text-muted">
                <Award size={16} className="text-accent flex-shrink-0" />
                <span className="font-dmsans text-[14px]">Foundation Year — Distinction</span>
              </div>

              <div className="flex items-start gap-3 text-text-muted">
                <BookOpen size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-dmsans text-[14px] leading-tight">
                  STEMLINK Software Engineering Programme
                </span>
              </div>

              <div className="flex items-center gap-3 text-text-muted">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:dhanujasenarathne@gmail.com"
                  className="font-dmsans text-[14px] hover:text-accent transition-colors duration-200"
                >
                  dhanujasenarathne@gmail.com
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
