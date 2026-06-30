import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Teeth Whitening",
      desc: "Professional laser teeth whitening to remove deep stains and discoloration in a single visit.",
      img: "/images/service-whitening.png"
    },
    {
      title: "Dental Implants",
      desc: "Permanent titanium replacements for missing teeth that look, feel, and function like natural teeth.",
      img: "/images/service-implant.png"
    },
    {
      title: "Braces & Aligners",
      desc: "Orthodontic treatments including traditional braces and modern clear aligners for a perfectly straight smile.",
      img: "/images/service-braces.png"
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless RCT procedures to save infected or severely decayed teeth using rotary endodontics.",
      img: "/images/service-whitening.png" // Reusing due to limited images
    },
    {
      title: "Dental Crowns & Bridges",
      desc: "Custom-made ceramic or zirconia caps to restore the shape, size, and strength of damaged teeth.",
      img: "/images/service-implant.png"
    },
    {
      title: "Smile Makeover",
      desc: "Comprehensive cosmetic dentistry tailored to transform your smile using veneers, contouring, and more.",
      img: "/images/service-braces.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-4">Our <span className="text-primary">Services</span></h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive dental care for your entire family under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <Link href="/contact" className="text-white font-semibold flex items-center hover:text-accent">
                        Book this service <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Block */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-6">Not Sure What You Need?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every smile is unique. If you're experiencing pain, discomfort, or simply want to improve the aesthetics of your smile, our expert team will provide a thorough examination and recommend the best treatment plan.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-800"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Comprehensive Consultation</li>
                  <li className="flex items-center text-gray-800"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Transparent Pricing Estimates</li>
                  <li className="flex items-center text-gray-800"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> No Pressure Approach</li>
                </ul>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img src="/images/hero-bg.png" alt="Clinic Interior" className="rounded-xl shadow-md w-full object-cover h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
