import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    category: 'Blood Banks',
    content:
      'Trying to connect different blood banks with hospitals as well as different other blood banks in need of blood supplies during emergencies. MedGency aims to streamline this process by providing a unified platform for real-time inventory management, urgent request handling, and optimized delivery routes, ensuring that life-saving blood units reach patients without delay.',
  },
  {
    category: 'Hospitals & Clinics',
    content:
      'We are trying to connect hospitals and clinics in need of urgent medical supplies in emergency with our platform as fast as possible. MedGency will provide real-time tracking, proof-of-delivery, and automated documentation to ensure every critical shipment reaches its destination on time and intact.',
  },
  {
    category: '24×7 Support',
    content:
      'Providing 24/7 support from our end to the user and guiding them through the process. With a chatbot integrated into the platform, users can get instant answers to common questions, track their requests, and receive updates on delivery status without waiting on hold. It will provide better support in case of emergencies.',
  },
  {
    category: 'Emergency Services',
    content:
      'Any other medical emergencies like booking beds, transferring patients, or providing additional emergency services will be handled. Many more services will be added in the future based on real-world requirements.',
  },
];

const categories = ['View All', 'Hospitals & Clinics', 'Blood Banks', '24×7 Support', 'Emergency Services'];

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('View All');

  const filteredTestimonials =
    activeFilter === 'View All'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="bg-orb bg-orb-indigo w-[500px] h-[500px] -right-40 top-20 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We're Building MedGency For
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            We're designing MedGency for the people who fight for every second in a medical 
            emergency — doctors, nurses, coordinators, and responders who need life-saving 
            resources to move faster, safer, and smarter.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-glow-indigo'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonial Cards - Masonry Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 transition-all duration-500 hover:-translate-y-1 ${
                index % 3 === 0 ? 'md:row-span-1' : ''
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary">{testimonial.category}</span>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
