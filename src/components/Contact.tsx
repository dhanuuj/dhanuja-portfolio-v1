import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

const Linkedin = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Simulation mode if keys are not defined
      console.warn("EmailJS credentials missing from environment. Simulating send.");
      console.log("Contact submission data:", { name, email, message });
      
      setTimeout(() => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset button to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
      to_name: "Dhanuja Senarathna"
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("EmailJS Sent Success:", result.text);
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset button back to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus('error');
        
        // Reset button back to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-t border-[#111] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Message & Social Links (2 columns on desktop) */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-start text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <SectionLabel text="// let's connect" />
            
            <h2 className="font-syne font-bold text-white text-[36px] md:text-[48px] tracking-tight leading-[1.05] mb-6">
              Let's build something.
            </h2>
            
            <p className="font-dmsans text-[14px] md:text-[15px] text-accent mb-8 font-medium leading-snug">
              Open to internships, freelance work, and interesting problems.
            </p>
            
            <p className="font-dmsans text-[14px] md:text-[15px] text-text-muted mb-10 leading-relaxed max-w-sm">
              Whether you have a project in mind, a position to fill, or just want to talk frontend — my inbox is always open.
            </p>

            {/* Social Links List */}
            <div className="flex flex-col gap-5 font-mono text-[13px] text-text-muted">
              
              <a
                href="https://github.com/dhanuuj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 hover:text-accent transition-colors duration-200"
              >
                <Github size={18} className="text-text-muted group-hover:text-accent" />
                <span>github.com/dhanuuj</span>
              </a>

              <a
                href="https://linkedin.com/in/dhanuja-senarathne-801659395"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 hover:text-accent transition-colors duration-200"
              >
                <Linkedin size={18} className="text-text-muted group-hover:text-accent" />
                <span>linkedin.com/in/dhanuja-senarathne-801659395</span>
              </a>

              <a
                href="mailto:dhanujasenarathne@gmail.com"
                className="flex items-center gap-3.5 hover:text-accent transition-colors duration-200"
              >
                <Mail size={18} className="text-text-muted group-hover:text-accent" />
                <span>dhanujasenarathne@gmail.com</span>
              </a>

            </div>
          </motion.div>

          {/* Right Column - Contact Form (3 columns on desktop) */}
          <motion.div
            className="lg:col-span-3 w-full bg-surface border border-border rounded-2xl p-6 md:p-8 card-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Name field */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="form-name" className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-medium">
                  Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  disabled={status === 'loading'}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#111] border border-[#222] text-[#f2f2f2] placeholder-[#444] px-4 py-3 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200 font-dmsans text-[14px]"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="form-email" className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-medium">
                  Email
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  disabled={status === 'loading'}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111] border border-[#222] text-[#f2f2f2] placeholder-[#444] px-4 py-3 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200 font-dmsans text-[14px]"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="form-message" className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-medium">
                  Message
                </label>
                <textarea
                  id="form-message"
                  required
                  disabled={status === 'loading'}
                  rows={4}
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#111] border border-[#222] text-[#f2f2f2] placeholder-[#444] px-4 py-3 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200 font-dmsans text-[14px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3.5 px-6 rounded-full font-dmsans text-[14px] font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                  status === 'idle'
                    ? 'bg-accent text-[#080808] hover:bg-accent/90'
                    : status === 'loading'
                    ? 'bg-[#222] text-text-muted cursor-not-allowed border border-[#333]'
                    : status === 'success'
                    ? 'bg-[#22c55e] text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {status === 'idle' && (
                  <span>Send Message</span>
                )}
                {status === 'loading' && (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check size={16} />
                    <span>Sent! I'll get back to you soon.</span>
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={16} />
                    <span>Something went wrong. Email me directly.</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
