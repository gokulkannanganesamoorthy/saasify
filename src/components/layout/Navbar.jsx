import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export function Navbar({ onOpenModal }) {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'sticky top-4 inset-x-0 mx-auto z-50 border border-white/[0.2] rounded-full bg-black/50 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center flex justify-between space-x-4',
          'w-[95%] md:max-w-2xl', // Responsive width
          'pl-4 pr-2 py-2 md:pl-8'
        )}
      >
        <div className="flex items-center space-x-4">
          <span className="font-bold text-white md:pr-4">SaaSify</span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
                )}
              >
                <span className="block text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Button
            onClick={onOpenModal}
            className="rounded-full bg-white text-black px-4 md:px-6 text-sm font-medium hover:bg-zinc-200 h-8 md:h-10"
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Dropdown (Relative to Island) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2 mt-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-3 rounded-xl hover:bg-white/10 text-center font-medium"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}
