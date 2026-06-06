import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Music, Film, Shield, Mountain } from 'lucide-react';
import SectionLabel from './SectionLabel';

interface BeyondCard {
  icon: ReactNode;
  title: string;
  detail: string;
}

export function BeyondCode() {
  const cardsData: BeyondCard[] = [
    {
      icon: <Music size={32} className="text-accent flex-shrink-0" />,
      title: "Drummer & Percussionist",
      detail: "Performed with Swarabhawani Music Institution in Chilaw from 2019 to 2023. Ensemble work. Developing a strong sense of rhythm, timing, and group discipline."
    },
    {
      icon: <Film size={32} className="text-accent flex-shrink-0" />,
      title: "Filmmaker & Video Editor",
      detail: "Cinematography and video editing are how I see the world. My visual eye for pacing, contrast, and layout directly shapes how I approach UI development and design."
    },
    {
      icon: <Shield size={32} className="text-accent flex-shrink-0" />,
      title: "Cadet Trainer · St. John Medical Service",
      detail: "Served as Commando Sergeant Major. Trained cadets in first aid, rescue operations, and field discipline. Led community medical service camps across Puttalam district (2022–2023)."
    },
    {
      icon: <Mountain size={32} className="text-accent flex-shrink-0" />,
      title: "Hiker · Nature Photographer",
      detail: "Exploring trails, remote green spaces, and the outdoors. Capturing wildlife and landscapes is the creative space I go to slow down and think clearly."
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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="beyond" className="py-28 px-6 md:px-16 lg:px-24 bg-bg relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <SectionLabel text="// beyond code" />
          <h2 className="font-syne font-bold text-white text-[32px] md:text-[36px] tracking-tight leading-tight">
            There's more to me than commits.
          </h2>
        </motion.div>

        {/* Personality Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="bg-surface border border-border border-l-2 border-l-accent rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-left transition-colors duration-300 hover:bg-[#151515] card-shadow"
            >
              <div className="flex items-center gap-4">
                {card.icon}
                <h3 className="font-syne font-bold text-white text-[18px] md:text-[20px] tracking-tight">
                  {card.title}
                </h3>
              </div>
              <p className="font-dmsans text-[14px] text-text-muted leading-relaxed">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default BeyondCode;
