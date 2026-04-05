import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('https://suriyacoir.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="w-full bg-stone-100 relative overflow-hidden mt-10">
      {/* Large green watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[14rem] md:text-[20rem] font-black font-headline text-green-950/[0.08] leading-none tracking-tighter select-none pointer-events-none translate-x-12">
        SURIYA
      </div>

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary/20"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <p className="font-black text-emerald-900 font-headline text-2xl tracking-tighter mb-3">
              Suriya Coir
            </p>
            <p className="text-emerald-800/50 text-sm leading-relaxed mb-6 max-w-xs">
              Curating organic excellence from the heart of coastal tradition.
              Sustainable fibers for a better world.
            </p>
            <div className="flex gap-3">
              <a
                href="https://suriyacoir.com"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors group"
              >
                <span className="material-symbols-outlined text-lg text-emerald-800/60 group-hover:text-emerald-900 transition-colors">
                  public
                </span>
              </a>
              <a
                href="/contact"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors group"
              >
                <span className="material-symbols-outlined text-lg text-emerald-800/60 group-hover:text-emerald-900 transition-colors">
                  mail
                </span>
              </a>
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors group cursor-pointer"
                aria-label="Share website link"
              >
                <span className="material-symbols-outlined text-lg text-emerald-800/60 group-hover:text-emerald-900 transition-colors">
                  {copied ? 'check' : 'share'}
                </span>
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="font-bold text-emerald-900 text-xs uppercase tracking-[0.15em] mb-5">
              Company
            </p>
            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm"
              >
                Contact
              </Link>
              <a
                href="#"
                className="block text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="font-bold text-emerald-900 text-xs uppercase tracking-[0.15em] mb-5">
              Legal
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Developer */}
          <div className="md:col-span-4">
            <p className="font-bold text-emerald-900 text-xs uppercase tracking-[0.15em] mb-5">
              Developed and managed by
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-stone-100 flex items-center justify-center border border-emerald-900/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] shrink-0">
                  <span className="font-headline font-black text-emerald-950 text-lg">NS</span>
                </div>
                <div>
                  <p className="font-headline text-emerald-950 font-bold mb-0.5 tracking-tight text-base">Nithees SJ</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/nithees-sj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 rounded-full bg-emerald-900/5 px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-emerald-900/60 transition-all duration-300 hover:bg-emerald-900/10 hover:text-emerald-950 backdrop-blur-sm"
                >
                  LinkedIn
                  <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">arrow_outward</span>
                </a>
                <a
                  href="https://nitheessj.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 rounded-full bg-emerald-900/5 px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-emerald-900/60 transition-all duration-300 hover:bg-emerald-900/10 hover:text-emerald-950 backdrop-blur-sm"
                >
                  Portfolio
                  <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
