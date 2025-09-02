import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Code2, Palette, PenTool } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-hero-gradient from-primary-900 via-secondary-900 to-secondary-950">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/bg.avif')"}}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-900/50 to-secondary-950" />

      <div className="section-container relative z-10">        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-6"
            >
              Full Stack Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="gradient-text">Birat Aryal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-secondary-100 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Building Future-Ready Web Experiences with a Creative Touch
            </motion.p>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-base sm:text-lg md:text-xl text-primary-300 mb-12">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <Typewriter
                options={{
                 strings: ['Software Engineering Student','Web Developer', 'AI/ML Learner ', 'Enthusiastic Web & Graphic Designer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
              <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
              <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-button"
              >
                <span>View My Work</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="outline-button"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center order-first sm:order-last"
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-600/20 to-primary-400/20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
                <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary-500/30 shadow-2xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
              
                  src= "/BiratAryal.jpg"
                  alt="Birat Aryal"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                  initial={{ scale: 1.1 }}
                  animate={{ 
                    scale: [1.02, 1, 1.02],
                    transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
                {/* <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-primary-500/30 backdrop-blur-md"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />   */}
              
              {/* <motion.div 
                className="absolute -bottom-1 -left-9 w-20 h-20 rounded-full bg-primary-600/20 backdrop-blur-md"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -1, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              /> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-400/50 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-primary-400 rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;