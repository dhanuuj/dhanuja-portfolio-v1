import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

export function Skills() {
  const frontendSkills = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Vite", "Tailwind CSS", "HTML", "CSS", "Framer Motion"
  ];

  const backendToolsSkills = [
    "Express.js", "PostgreSQL", "Prisma",
    "Zustand", "Clerk", "Firebase",
    "Git", "GitHub", "VS Code", "Vercel"
  ];

  const creativeSkills = [
    "Videography", "Video Editing",
    "Color Grading", "Nature Photography"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const tagVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="skills" className="py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] relative border-b border-[#111]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <SectionLabel text="// skills & tools" />
          <h2 className="font-syne font-bold text-white text-[32px] md:text-[36px] tracking-tight leading-tight">
            What I work with.
          </h2>
        </motion.div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-16">
          
          {/* Column 1 — Frontend */}
          <div className="flex flex-col gap-5">
            <h3 className="font-mono text-[11px] text-text-faint tracking-wider uppercase font-semibold border-b border-border pb-2">
              01 / Frontend
            </h3>
            <motion.div
              className="flex flex-wrap gap-2.5"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {frontendSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={tagVariant}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-default font-dmsans text-[13px] text-text-muted bg-[#111] border border-[#222] rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:border-accent hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Column 2 — Backend & Tools */}
          <div className="flex flex-col gap-5">
            <h3 className="font-mono text-[11px] text-text-faint tracking-wider uppercase font-semibold border-b border-border pb-2">
              02 / Backend & Tools
            </h3>
            <motion.div
              className="flex flex-wrap gap-2.5"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {backendToolsSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={tagVariant}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-default font-dmsans text-[13px] text-text-muted bg-[#111] border border-[#222] rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:border-accent hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Column 3 — Creative */}
          <div className="flex flex-col gap-5">
            <h3 className="font-mono text-[11px] text-text-faint tracking-wider uppercase font-semibold border-b border-border pb-2">
              03 / Creative
            </h3>
            <motion.div
              className="flex flex-wrap gap-2.5"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {creativeSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={tagVariant}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-default font-dmsans text-[13px] text-text-muted bg-[#111] border border-[#222] rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:border-accent hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Bottom Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="border-t border-border pt-8 text-left"
        >
          <p className="font-dmsans text-[13px] text-text-faint italic leading-relaxed">
            "Always learning. Currently deepening: PostgreSQL · System Design · DSA"
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
