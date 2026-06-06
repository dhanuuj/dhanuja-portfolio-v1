export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-dmsans text-[13px] text-text-faint">
        <div>
          <span>Dhanuja Senarathna</span>
        </div>
        <div>
          <span>Built with React + Framer Motion · Deployed on Vercel</span>
        </div>
        <div>
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
