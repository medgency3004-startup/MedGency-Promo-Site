import SpotlightCard from './SpotlightCard';
import { Truck, Droplet, HeadphonesIcon } from 'lucide-react';

const workflows = [
  {
    icon: Truck,
    badge: 'When seconds matter, MedGency delivers.',
    title: 'On-Demand Medication Delivery',
    description: 'Instant Request System, AI-Optimized Dispatch, Live Courier Tracking',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Droplet,
    badge: 'Emergency Blood Delivery',
    title: 'Emergency Blood Delivery',
    description: 'Life-saving blood supply, delivered efficiently. Real-Time Blood Inventory Finder, Verified Donor Network.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: HeadphonesIcon,
    badge: '24/7 AI Based Customer Support',
    title: '24/7 AI Based Customer Support',
    description: 'Round-the-Clock Support Desk, Intelligent Chat & Voice Assistant.',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const Workflows = () => {
  return (
    <section id="workflows" className="py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="section-divider max-w-md mx-auto mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider px-4">
              Tailored Workflows
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            On-Demand Medication Delivery
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Reducing critical response time through intelligent systems. Designed for moments 
            where precision and coordination save lives. Creating invisible links that make 
            visible differences. Operational intelligence for high-impact response networks.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <SpotlightCard
              key={index}
              className="glass-card group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <a
                href="/"
                className="block p-8"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${workflow.gradient} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <workflow.icon className="w-7 h-7 text-white" />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-4" style={{ backgroundColor: 'rgba(43, 59, 85, 1)', color: 'rgba(8, 12, 22, 1)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-xs" style={{ color: 'rgba(8, 12, 22, 1)' }}>{workflow.badge}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {workflow.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {workflow.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
