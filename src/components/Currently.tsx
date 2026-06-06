import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

export function Currently() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const careQTags = ["React", "TypeScript", "Socket.io", "Firebase", "TanStack Query", "Zustand", "Tailwind CSS"];
  const codeCriticTags = ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "Shadcn/UI", "Zustand"];

  return (
    <section id="currently" className="py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] relative border-y border-[#111]">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-12"
        >
          <SectionLabel text="// currently building" />
          <h2 className="font-syne font-bold text-white text-[32px] md:text-[36px] tracking-tight leading-tight">
            Active on the workbench.
          </h2>
        </motion.div>

        {/* Workbench Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          
          {/* Card 1 — CareQ */}
          <motion.div
            variants={cardAnimation}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-surface-2 border border-border rounded-2xl p-6 md:p-8 card-shadow transition-all duration-300 hover:border-accent hover:shadow-[0_0_0_1px_#f0a500,0_8px_32px_rgba(240,165,0,0.08)] flex flex-col justify-between"
          >
            {/* Role Badge (Top-Right) */}
            <span className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-[10px] text-accent border border-accent-dim bg-accent-glow px-2.5 py-1 rounded-full uppercase tracking-wider font-medium">
              Frontend Lead
            </span>

            <div>
              {/* Status Badge */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse flex-shrink-0" />
                <span className="uppercase font-medium">LIVE BUILD</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-syne font-bold text-white text-[22px] md:text-[24px] tracking-tight mb-1">
                CareQ
              </h3>
              <p className="font-dmsans text-[14px] text-accent mb-4 font-medium tracking-tight">
                Hospital OPD Smart Queue Management System
              </p>

              {/* Description */}
              <p className="font-dmsans text-[14px] text-text-muted mb-8 leading-relaxed">
                Co-building a real-time hospital queue management system. I own the full frontend architecture — implementing Firebase Auth, Socket.io for live queue updates, TanStack Query for server state cache management, and Zustand for atomic global state store.
              </p>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {careQTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] bg-[#111] border border-border text-text-muted px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — CodeCritic */}
          <motion.div
            variants={cardAnimation}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-surface-2 border border-border rounded-2xl p-6 md:p-8 card-shadow transition-all duration-300 hover:border-accent hover:shadow-[0_0_0_1px_#f0a500,0_8px_32px_rgba(240,165,0,0.08)] flex flex-col justify-between"
          >
            {/* Role Badge (Top-Right) */}
            <span className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-[10px] text-accent border border-accent-dim bg-accent-glow px-2.5 py-1 rounded-full uppercase tracking-wider font-medium">
              Full Stack
            </span>

            <div>
              {/* Status Badge */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#f0a500] animate-pulse flex-shrink-0" />
                <span className="uppercase font-medium">IN PROGRESS</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-syne font-bold text-white text-[22px] md:text-[24px] tracking-tight mb-1">
                CodeCritic
              </h3>
              <p className="font-dmsans text-[14px] text-accent mb-4 font-medium tracking-tight">
                Developer Social Platform — UCLan Coursework
              </p>

              {/* Description */}
              <p className="font-dmsans text-[14px] text-text-muted mb-8 leading-relaxed">
                A community platform for developers to share, review, and collaborate on code snippets. Built with Next.js App Router for server-rendered routes, Clerk for secure user auth, and PostgreSQL with Prisma ORM for relational schema design and query execution.
              </p>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {codeCriticTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] bg-[#111] border border-border text-text-muted px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Currently;
