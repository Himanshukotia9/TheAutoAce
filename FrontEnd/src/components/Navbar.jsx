import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-y border-white/15 bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-7 py-6 sm:px-12 lg:px-20">
        
        {/* Desktop links */}
        <ul className="hidden items-center justify-evenly w-full gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="absolute right-7 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors md:hidden sm:right-12 lg:right-20"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open
            ? 'max-h-96 opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-7 pb-4">
          {LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : '0ms',
              }}
              className={`transform transition-all duration-500 ${
                open
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
              }`}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}