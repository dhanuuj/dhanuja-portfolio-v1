import { useState, useEffect, type MouseEvent } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle navbar background opacity change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scrollspy
  useEffect(() => {
    const sections = ['hero', 'about', 'currently', 'projects', 'skills', 'beyond', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Map sub-sections to the primary nav links
  const isAboutActive = ['about', 'skills', 'beyond'].includes(activeSection);
  const isWorkActive = ['currently', 'projects'].includes(activeSection);
  const isContactActive = activeSection === 'contact';

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-[#080808]/95 border-[#222]/80 shadow-md py-4'
          : 'bg-[#080808]/85 border-transparent py-5'
        } backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="font-mono text-[15px] font-bold text-accent tracking-tight select-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          &lt;dhanuu_j&gt;
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-dmsans text-[14px]">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={`relative py-1 cursor-pointer transition-colors duration-300 ${isAboutActive ? 'text-accent' : 'text-text-muted hover:text-accent'
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent after:transition-transform after:duration-300 ${isAboutActive ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
              }`}
          >
            About
          </a>
          <a
            href="#currently"
            onClick={(e) => scrollToSection(e, 'currently')}
            className={`relative py-1 cursor-pointer transition-colors duration-300 ${isWorkActive ? 'text-accent' : 'text-text-muted hover:text-accent'
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent after:transition-transform after:duration-300 ${isWorkActive ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
              }`}
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`relative py-1 cursor-pointer transition-colors duration-300 ${isContactActive ? 'text-accent' : 'text-text-muted hover:text-accent'
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent after:transition-transform after:duration-300 ${isContactActive ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
              }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
