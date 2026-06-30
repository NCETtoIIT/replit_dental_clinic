import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Stories() {
  const testimonials = [
    {
      text: "I was extremely nervous about getting a root canal, but Dr. Ravi and his team made the process completely painless. Very professional clinic. Highly recommended for anyone with dental anxiety.",
      author: "Anjali Sharma",
      role: "Marketing Executive",
      date: "2 months ago"
    },
    {
      text: "Best dental clinic in Noida. Got my implants done here. The hygiene standards are top-notch and the staff is very courteous. The procedure was explained thoroughly before starting.",
      author: "Rajesh Verma",
      role: "Business Owner",
      date: "4 months ago"
    },
    {
      text: "My entire family visits Dr. Ravi for our dental needs. He is patient, explains everything clearly, and never suggests unnecessary treatments. A doctor you can genuinely trust.",
      author: "Priya Singh",
      role: "Teacher",
      date: "1 year ago"
    },
    {
      text: "Got braces for my daughter here. The progress has been amazing and the doctor always makes her feel comfortable during adjustments. Very clean clinic.",
      author: "Vikram Malhotra",
      role: "Software Engineer",
      date: "6 months ago"
    },
    {
      text: "I visited for a smile makeover before my wedding. The teeth whitening and minor contouring results were fantastic! Everyone complimented my smile.",
      author: "Sneha Gupta",
      role: "Architect",
      date: "1 month ago"
    },
    {
      text: "Had a severe toothache at night, they accommodated me first thing in the morning. Swift diagnosis and immediate relief. Thank you Dr. Ravi!",
      author: "Amit Desai",
      role: "Banker",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-4">Patient <span className="text-primary">Stories</span></h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about their experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <Card className="border-0 shadow-md p-8 h-full bg-white rounded-xl relative overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <div className="flex text-accent mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm">{review.author}</h5>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
