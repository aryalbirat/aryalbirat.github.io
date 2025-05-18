import { motion } from 'framer-motion';
import {
  Code2,
  Figma,
  Chrome,
  Database,
  Layout,
  Image as ImageIcon
} from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Frontend Development', level: 80 },
    { icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Backend Development', level: 75 },
    { icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Web Design', level: 80 },
    { icon: <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Graphic Design', level: 90 },
    { icon: <Figma className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'UI/UX Design', level: 80 },
    { icon: <Chrome className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Python Development', level: 70 }
  ];
  return (
    <section id="about" className="py-10 sm:py-16 bg-secondary-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle leading-relaxed">
            Passionate about design, driven by code. As an experienced graphic designer and enthusiastic web developer, I love crafting visually stunning experiences that are functional as well as beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              className="card hover:border-primary-500/30"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-secondary-100 leading-relaxed">
                Starting as a Graphics Designer at Rotaract Club of Balaju, 
                I immersed myself in social media branding, crafting engaging visuals
                that told compelling stories. Over time, my passion for technology led 
                me to web development, specializing in the MERN stack to build dynamic and user-friendly digital experiences.
              </p>
            </motion.div>

            <motion.div 
              className="card hover:border-primary-500/30"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Layout className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-secondary-100 leading-relaxed">
                I strive to create web experiences that are not just visually stunning but also highly functional and efficient. 
                Every project is a chance to blend creativity with technology, pushing the limits of innovation in design and development.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card hover:border-primary-500/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-primary-300">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-600 to-primary-400 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card text-center hover:border-primary-500/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-secondary-100">
                Creating responsive, modern websites with React, Vue.js, Next.js, and other cutting-edge frameworks.
              </p>
            </div>

            <div className="card text-center hover:border-primary-500/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Figma className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-secondary-100">
                Designing intuitive user interfaces and seamless user experiences for web and mobile applications.
              </p>
            </div>

            <div className="card text-center hover:border-primary-500/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Graphic Design</h3>
              <p className="text-secondary-100">
                Creating visually compelling graphics, brand identities, and marketing materials that capture attention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;