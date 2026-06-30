import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/hero-bg.png", alt: "Clinic Interior", category: "Clinic" },
    { src: "/images/service-whitening.png", alt: "Teeth Whitening", category: "Treatments" },
    { src: "/images/dr-ravi.png", alt: "Dr Ravi at work", category: "Team" },
    { src: "/images/service-implant.png", alt: "Implants", category: "Treatments" },
    { src: "/images/service-braces.png", alt: "Braces", category: "Treatments" },
    { src: "/images/clinic-exterior.png", alt: "Clinic Exterior", category: "Clinic" }
  ];

  return (
    <div className="bg-white">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-4">Smile <span className="text-primary">Gallery</span></h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Take a tour of our state-of-the-art facility and see the beautiful smiles we've created.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-md h-72 cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider mb-1">{img.category}</span>
                  <h3 className="text-white text-xl font-heading font-bold">{img.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
