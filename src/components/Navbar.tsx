import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary-900/95 backdrop-blur-sm py-3 shadow-lg shadow-primary-900/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl sm:text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Birat Aryal</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-6">
            {navItems.map((item, index) => (              <motion.a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-secondary-100 hover:text-white relative group transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              className="gradient-button hidden lg:inline-block ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.3 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white rounded-lg hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-secondary-100 hover:text-white hover:bg-secondary-800/80 backdrop-blur-sm rounded-lg transition-colors duration-300"
                whileHover={{ x: 5 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="block mt-4 mx-4"
              whileHover={{ x: 5 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="gradient-button w-full text-center">
                <span>Contact Me</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;