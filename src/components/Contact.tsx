import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contact" className="py-10 sm:py-16 bg-secondary-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary-100 mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-secondary-100 mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-secondary-100 mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="gradient-button w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <ExternalLink className="w-5 h-5" />
                </span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="card mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:contact@birataryal.com" className="text-secondary-100 hover:text-primary-400 transition-colors">
                      contact@birataryal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                    <a href="https://linkedin.com/in/birataryal" target="_blank" rel="noopener noreferrer" className="text-secondary-100 hover:text-primary-400 transition-colors">
                      linkedin.com/in/birataryal
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">GitHub</h4>
                    <a href="https://github.com/aryalbirat" target="_blank" rel="noopener noreferrer" className="text-secondary-100 hover:text-primary-400 transition-colors">
                      github.com/aryalbirat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-secondary-100 mb-6">
                I'm always interested in new projects and collaborations. Feel free to reach out if you have any questions or want to work together.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/birataryal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/aryalbirat"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:contact@birataryal.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




