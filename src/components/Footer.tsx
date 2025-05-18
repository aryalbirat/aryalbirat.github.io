import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Birat Aryal</h3>
            <p className="text-secondary-100 mb-6">
              Building modern, responsive websites and applications with a focus on clean design and smooth user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/aryalbirat"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-100 hover:text-primary-400 hover:bg-secondary-700 transition-colors mobile-tap-target"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/birataryal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-100 hover:text-primary-400 hover:bg-secondary-700 transition-colors mobile-tap-target"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:contact@birataryal.com"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-100 hover:text-primary-400 hover:bg-secondary-700 transition-colors mobile-tap-target"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-secondary-100 hover:text-primary-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-secondary-100 hover:text-primary-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-secondary-100 hover:text-primary-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-secondary-100 hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-secondary-100">
                <a href="mailto:contact@birataryal.com" className="hover:text-primary-400 transition-colors">
                  contact@birataryal.com
                </a>
              </li>
              <li className="text-secondary-100">
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-100 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Birat Aryal. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors mobile-tap-target"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
