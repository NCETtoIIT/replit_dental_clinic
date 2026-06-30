import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Star, Users, CheckCircle, Clock, ArrowRight, Phone, Shield, HeartPulse, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10"></div>
          <img 
            src="/images/hero-bg.png" 
            alt="Modern Dental Clinic" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
              Welcome to Dr. Ravi Kumar Dental Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-heading text-gray-900 leading-tight mb-6">
              Experience the Joy of a <span className="text-primary">Perfect Smile</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
              Expert dental care with over 20 years of experience. We combine advanced technology with a gentle, compassionate approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg rounded-md shadow-lg shadow-accent/20 w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-primary text-primary hover:bg-primary/5 rounded-md bg-white w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> +91 98765 43210
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Star className="w-8 h-8" />, count: "20+", label: "Years Experience" },
              { icon: <Users className="w-8 h-8" />, count: "15,000+", label: "Happy Patients" },
              { icon: <CheckCircle className="w-8 h-8" />, count: "50,000+", label: "Treatments Done" },
              { icon: <Clock className="w-8 h-8" />, count: "24/7", label: "Emergency Care" },
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex flex-col items-center"
              >
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-extrabold font-heading mb-1">{stat.count}</h3>
                <p className="text-sm md:text-base font-medium opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <img 
                src="/images/dr-ravi.png" 
                alt="Dr. Ravi Kumar" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover max-h-[600px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border-l-4 border-accent">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Top Rated Dentist</h4>
                    <p className="text-sm text-gray-500">In Noida & Delhi NCR</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">About The Clinic</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6 leading-tight">
                Your Smile is Our <br/><span className="text-primary">Greatest Passion</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to Dr. Ravi Kumar Dental Solutions, where we believe that a healthy smile is the foundation of a confident life. Led by Dr. Ravi Kumar (BDS, MDS), a senior dental surgeon with over two decades of clinical excellence.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our state-of-the-art clinic is designed to provide you with the most comfortable, pain-free dental experience. We combine advanced technology, stringent sterilization protocols, and a warm approach to ensure you receive world-class care.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Advanced diagnostic technology', 'Strict sterilization & hygiene', 'Painless treatment approach', 'Transparent pricing'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-800 font-medium">
                    <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-md">
                  Know More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">What We Do</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6">
              Our <span className="text-primary">Dental Services</span>
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              We offer a comprehensive range of specialized dental treatments under one roof, personalized to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Teeth Whitening", 
                desc: "Achieve a dazzling, bright smile with our advanced, safe, and effective laser teeth whitening treatments.",
                img: "/images/service-whitening.png"
              },
              { 
                title: "Dental Implants", 
                desc: "Permanent, natural-looking replacement for missing teeth using premium titanium implants.",
                img: "/images/service-implant.png"
              },
              { 
                title: "Braces & Aligners", 
                desc: "Straighten your teeth invisibly with our modern clear aligners and traditional orthodontic solutions.",
                img: "/images/service-braces.png"
              }
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full cursor-pointer rounded-xl">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <Link href="/services" className="text-accent font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 px-8 rounded-md transition-all">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Differentiator</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6">
                Why Choose <span className="text-primary">Our Clinic?</span>
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>
              
              <div className="space-y-6">
                {[
                  { title: "Safety & Sterilization", desc: "We adhere strictly to international protocols of hygiene and infection control.", icon: <Shield className="w-6 h-6" /> },
                  { title: "Painless Procedures", desc: "Utilizing modern techniques and anesthetics to ensure a completely pain-free experience.", icon: <HeartPulse className="w-6 h-6" /> },
                  { title: "Advanced Equipment", desc: "Our clinic is equipped with the latest dental technologies and diagnostic tools.", icon: <Activity className="w-6 h-6" /> }
                ].map((item, i) => (
                  <div key={i} className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/service-whitening.png" alt="Dental Care" className="rounded-xl shadow-md w-full h-48 object-cover" />
                <img src="/images/dr-ravi.png" alt="Doctor" className="rounded-xl shadow-md w-full h-48 object-cover mt-8" />
                <img src="/images/clinic-exterior.png" alt="Clinic" className="rounded-xl shadow-md w-full h-48 object-cover" />
                <img src="/images/service-implant.png" alt="Technology" className="rounded-xl shadow-md w-full h-48 object-cover mt-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment CTA Break */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-3">Suffering from a Toothache?</h2>
              <p className="text-lg opacity-90 max-w-xl">We offer priority emergency appointments. Don't wait, get relief today.</p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 text-lg rounded-md shadow-xl whitespace-nowrap">
                Call Emergency Helpline
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Patient Stories</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6">
              What Our <span className="text-primary">Patients Say</span>
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "I was extremely nervous about getting a root canal, but Dr. Ravi and his team made the process completely painless. Very professional clinic.",
                author: "Anjali Sharma",
                role: "Marketing Executive"
              },
              {
                text: "Best dental clinic in Noida. Got my implants done here. The hygiene standards are top-notch and the staff is very courteous.",
                author: "Rajesh Verma",
                role: "Business Owner"
              },
              {
                text: "My entire family visits Dr. Ravi for our dental needs. He is patient, explains everything clearly, and never suggests unnecessary treatments.",
                author: "Priya Singh",
                role: "Teacher"
              }
            ].map((review, i) => (
              <Card key={i} className="border border-gray-100 shadow-md p-8 relative bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
                <div className="absolute top-6 right-8 text-primary/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="flex text-accent mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{review.author}</h5>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img src="/images/hero-bg.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-6">
            Ready to transform your smile?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Schedule your consultation today and take the first step towards perfect dental health with Dr. Ravi Kumar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 text-lg rounded-md shadow-xl shadow-accent/30 w-full sm:w-auto">
                Book Appointment Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-primary rounded-md w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" /> +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
