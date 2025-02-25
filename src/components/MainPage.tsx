import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Code2, Palette, PenTool } from 'lucide-react';
import myImage from './assets/birat.jpg';
import bgImage from './assets/bg.avif';


const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

      <div className="container mx-auto px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6"
            >
              Birat Aryal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-200 mb-8"
            >
              Building Future-Ready Web Experiences with a Creative Touch
            </motion.p>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-xl text-blue-300 mb-12">
              <Code2 className="w-6 h-6" />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Web Designer', 'Graphic Designer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
              <Palette className="w-6 h-6" />
              <PenTool className="w-6 h-6" />
            </div>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="hidden lg:block"
>
  <div className="relative flex justify-center items-center">
    {/* Animated Frame */}
    {/* <motion.div
      className="absolute inset-0 w-80 h-80 rounded-3xl border-4 border-blue-500 shadow-xl bg-gradient-to-br from-blue-700 to-gray-900"
      initial={{ scale: 0.9, rotate: 0 }}
      animate={{ scale: [0.9, 1, 0.9], rotate: [0, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
    ></motion.div> */}

   
 
<motion.div
  className="relative w-96 h-96 rounded-3xl border-4 border-blue-500 shadow-xl bg-gradient-to-br from-blue-700 to-gray-900">
  <motion.img
    src={myImage}
    alt="Birat Aryal"
    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
    style={{ objectPosition: "center top" }}  
  />
</motion.div>


  </div>
</motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-blue-300 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-blue-300 rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;