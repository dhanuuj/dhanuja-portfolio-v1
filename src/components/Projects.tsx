import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const Github = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  number: string;
  title: string;
  typeBadge: string;
  description: string;
  stack: string[];
  github?: string;
}

export function Projects() {
  const projectsData: Project[] = [
    {
      number: "01",
      title: "Health Matters CRM",
      typeBadge: "Team Project · Agile",
      description: "Built as Frontend Developer for a team Agile project (UCLan CO2007 module). Developed the UI architecture for a healthcare CRM using React and Redux Toolkit. Contributed to sprint planning and documentation.",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Clerk", "Redux Toolkit"]
    },
    {
      number: "02",
      title: "Sri Lankan Tax Calculator",
      typeBadge: "Python · CLI Tool",
      description: "A command-line tool that calculates income tax based on Sri Lanka's April 2025 tax reform brackets. Used functional programming — map(), filter(), zip(), lambdas — to process multiple taxpayer records and generate detailed tax reports.",
      stack: ["Python", "Functional Programming", "CLI"],
      github: "github.com/dhanuuj/tax-calculator"
    },
    {
      number: "03",
      title: "E-Commerce Landing Page",
      typeBadge: "Frontend · HTML/CSS",
      description: "A responsive e-commerce landing page applying modern UI principles. Built with a hero section, features grid, and testimonial components.",
      stack: ["HTML", "CSS", "Tailwind CSS"],
      github: "github.com/dhanuuj/ecommerce-landing-page"
    },
    {
      number: "04",
      title: "Restaurant Website",
      typeBadge: "Frontend · HTML/CSS",
      description: "A responsive restaurant website with menu, navigation, and service sections. Focused on intuitive navigation and clean page layout.",
      stack: ["HTML", "CSS", "Tailwind CSS"],
      github: "github.com/dhanuuj/restaurent-website"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const gridContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="projects" className="py-28 px-6 md:px-16 lg:px-24 bg-bg relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <SectionLabel text="// projects" />
          <h2 className="font-syne font-bold text-white text-[32px] md:text-[36px] tracking-tight leading-tight">
            Things I've shipped.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-surface border border-border rounded-2xl p-6 md:p-8 card-shadow transition-all duration-300 hover:border-accent hover:shadow-[0_0_0_1px_#f0a500,0_8px_32px_rgba(240,165,0,0.08)] flex flex-col justify-between"
            >

              {/* Overlapping project number */}
              <span className="absolute -top-8 right-6 font-syne font-extrabold text-[72px] md:text-[50px] text-accent/5 pointer-events-none select-none group-hover:text-accent/10 transition-colors duration-300">
                {project.number}
              </span>

              <div className="relative z-10">
                {/* Type Badge */}
                <span className="font-mono text-[11px] text-accent/80 uppercase tracking-widest block mb-2 font-medium">
                  {project.typeBadge}
                </span>

                {/* Title */}
                <h3 className="font-syne font-bold text-white text-[20px] md:text-[22px] tracking-tight mb-4 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-dmsans text-[14px] text-text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-[11px] bg-[#1a1a1a] border border-[#333] text-text-muted px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                {project.github ? (
                  <a
                    href={`https://${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent hover:underline"
                  >
                    <Github size={14} />
                    <span>{project.github}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                ) : (
                  <div className="h-5" /> /* Empty spacing to align footer heights */
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
