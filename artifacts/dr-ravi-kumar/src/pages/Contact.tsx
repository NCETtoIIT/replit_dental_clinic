import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent Successfully",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
  };

  return (
    <div className="bg-white">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-4">Contact <span className="text-primary">Us</span></h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are here to help you. Reach out for appointments, emergencies, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                    <p className="text-gray-600">Sector 18, Noida,<br />Uttar Pradesh 201301, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">+91 98765 43210<br />+91 120 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">drravikumar@dentalcare.com<br />info@dentalcare.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Clinic Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: Prior Appointment Only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Book an Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input placeholder="John Doe" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input type="tel" placeholder="+91 98765 43210" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                      <Input type="email" placeholder="john@example.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                      <Input type="date" required className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message / Reason for Visit</label>
                    <Textarea placeholder="Briefly describe your dental issue or requested service..." rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14">
                    <Send className="w-5 h-5 mr-2" /> Request Appointment
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col">
           <MapPin className="w-12 h-12 text-primary mb-2" />
           <p className="text-gray-600 font-medium">Google Maps Embed Placeholder</p>
           <p className="text-sm text-gray-500">Sector 18, Noida</p>
        </div>
      </section>
    </div>
  );
}
