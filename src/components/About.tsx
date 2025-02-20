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
    { icon: <Code2 className="w-6 h-6" />, name: 'Frontend Development', level: 80 },
    { icon: <Database className="w-6 h-6" />, name: 'Backend Development', level: 75 },
    { icon: <Layout className="w-6 h-6" />, name: 'Web Design', level: 80 },
    { icon: <ImageIcon className="w-6 h-6" />, name: 'Graphic Design', level: 90 },
    { icon: <Figma className="w-6 h-6" />, name: 'UI/UX Design', level: 80 },
    { icon: <Chrome className="w-6 h-6" />, name: 'Python Development', level: 70 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-blue-200 leading-relaxed">
          Passionate about design, driven by code. As an experienced graphic designer and enthusiastic web developer, I love crafting visually stunning experiences that are functional as well as beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-blue-200 leading-relaxed">
              Starting as a Graphics Designer at Rotaract Club of Balaju, 
              I immersed myself in social media branding, crafting engaging visuals
               that told compelling stories. Over time, my passion for technology led 
               me to web development, specializing in the MERN stack to build dynamic and user-friendly digital experiences
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-blue-200 leading-relaxed">
              I strive to create web experiences that are not just visually stunning but also highly functional and efficient. 
              Every project is a chance to blend creativity with technology, pushing the limits of innovation in design and development
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-blue-200">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-blue-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-blue-500 h-2.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;