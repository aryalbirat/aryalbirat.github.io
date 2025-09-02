import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    title: 'Professional Portrait',
    description: 'Studio portrait showcasing a professional appearance'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    title: 'Casual Work Environment',
    description: 'Captured in a modern office setting'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    title: 'Creative Workspace',
    description: 'Working on creative projects in a modern setting'
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % photos.length
      : (currentIndex - 1 + photos.length) % photos.length;
    
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };
  return (
    <section id="gallery" className="py-10 sm:py-16 bg-secondary-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            A glimpse into my professional journey and creative process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(photo, index)}
            >
              <div className="h-80 overflow-hidden rounded-lg -mx-6 -mt-6 mb-4">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                    <p className="text-secondary-100">{photo.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-secondary-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-secondary-800 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.title}
                    className="w-full object-contain max-h-[80vh]"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                    <p className="text-secondary-100">{selectedPhoto.description}</p>
                  </div>
                  
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();//e.stopPropagation() prevents the click event from bubbling up to the parent elements
                      navigatePhoto('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-secondary-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigatePhoto('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-secondary-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;