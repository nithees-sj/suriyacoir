import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-white backdrop-blur-xl shadow-[0_20px_40px_rgba(21,66,18,0.06)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-950 tracking-tighter font-headline"
        >
          Suriya Coir
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-all duration-300 font-body tracking-tight ${
                  isActive
                    ? 'text-emerald-900 font-bold border-b-2 border-emerald-900/30 pb-1'
                    : 'text-emerald-800/70 hover:text-emerald-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-primary hover:bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold transition-transform hover:scale-95 active:scale-90"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-950"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20 px-8 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-body font-bold text-lg transition-all duration-300 ${
                  isActive ? 'text-emerald-900' : 'text-emerald-800/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm mt-4"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
