import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, BookOpen, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/clinic-exterior.png')] opacity-10 bg-cover bg-center mix-blend-multiply z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-4">About <span className="text-primary">Dr. Ravi Kumar</span></h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dedicated to providing exceptional dental care with a gentle touch and compassionate approach.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3 -z-10"></div>
                <img 
                  src="/images/dr-ravi.png" 
                  alt="Dr. Ravi Kumar" 
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover border-8 border-white"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-2">Dr. Ravi Kumar</h2>
              <p className="text-xl text-primary font-semibold mb-6">BDS, MDS — Senior Dental Surgeon</p>
              
              <div className="prose text-gray-600 mb-8 leading-relaxed max-w-none">
                <p>
                  With over 20 years of clinical experience, Dr. Ravi Kumar is a highly respected name in the field of dentistry in Noida and Delhi NCR. His journey began with a passion for helping people regain their confidence through healthy, beautiful smiles.
                </p>
                <p>
                  Dr. Kumar completed his BDS from a premier institute and went on to pursue his MDS, specializing in advanced dental procedures. He is known for his meticulous attention to detail and his ability to make even the most anxious patients feel completely at ease.
                </p>
                <p>
                  "My philosophy is simple: treat every patient like family. We use the latest technology not just for better results, but for a more comfortable and painless experience."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-secondary mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">20+ Years</h4>
                    <p className="text-sm text-gray-500">Clinical Experience</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <BookOpen className="w-8 h-8 text-secondary mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">MDS Certified</h4>
                    <p className="text-sm text-gray-500">Specialist Care</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-12 px-8">
                  Consult Dr. Ravi
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-4">Our Core <span className="text-primary">Values</span></h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-First Approach",
                desc: "We listen to your concerns, explain all treatment options clearly, and never push unnecessary procedures."
              },
              {
                title: "Absolute Hygiene",
                desc: "We follow strict international sterilization protocols. Your safety is non-negotiable."
              },
              {
                title: "Advanced Technology",
                desc: "From digital X-rays to painless injections, we invest in technology that makes your visit comfortable."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
