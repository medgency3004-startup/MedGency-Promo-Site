import { Layers, Route, RefreshCw, Radio, Activity, Shield } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const features = [
  {
    icon: Layers,
    title: 'Emergency Response Automation',
    description:
      'Enable hospitals to request urgent medical resources instantly through a unified dashboard. MedGency connects the right provider to the right patient at the right time.',
  },
  {
    icon: Route,
    title: 'Real-Time Tracking & Navigation',
    description:
      'Track couriers, organ transport units, and delivery timelines with second-level accuracy. Built for critical decision-making.',
  },
  {
    icon: RefreshCw,
    title: 'Smart Resource Matching',
    description:
      'AI-driven engine that identifies the nearest available blood units, organs, or emergency medication across partnered facilities.',
  },
  {
    icon: Radio,
    title: 'Verified Medical Network',
    description:
      'Every hospital, donor, courier, and blood bank undergoes multi-step verification to ensure safety, compliance, and reliability.',
  },
  {
    icon: Activity,
    title: 'Emergency Analytics Dashboard',
    description:
      'Visualize demand patterns, resource shortages, delivery times, and hospital requests — helping teams improve response efficiency.',
  },
  {
    icon: Shield,
    title: 'Secure Digital Chain of Custody',
    description:
      'From organ handover to blood transport, every event is digitally logged with timestamp, identity verification, and tamper-proof signatures.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="bg-orb bg-orb-green w-[600px] h-[600px] -left-60 top-1/4 animate-pulse-glow" />
      <div className="bg-orb bg-orb-indigo w-[400px] h-[400px] right-0 bottom-20 animate-pulse-glow delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="section-divider max-w-md mx-auto mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider px-4">
              Advanced Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for emergency responses
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            MedGency is a next-generation intelligent emergency healthcare logistics platform 
            designed to reduce critical response time in life-saving scenarios. It builds a 
            unified digital network of hospitals, clinics, pharmacies, blood banks, organ 
            transport teams, donors, and on-ground responders.
          </p>
        </div>

        {/* Central Illustration */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Dashboard Mockup */}
              <div className="w-full h-full p-4 md:p-8">
                <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-sm border border-white/10 p-4">
                  {/* Header bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <div className="flex-1 h-4 bg-white/5 rounded ml-4" />
                  </div>
                  {/* Content grid */}
                  <div className="grid grid-cols-3 gap-3 h-[calc(100%-2rem)]">
                    <div className="col-span-2 bg-white/5 rounded-lg p-3">
                      <div className="h-3 w-1/3 bg-primary/30 rounded mb-3" />
                      <div className="grid grid-cols-3 gap-2 h-[calc(100%-1.5rem)]">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-white/5 rounded animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-secondary/20 rounded-lg h-1/3 p-2">
                        <div className="h-2 w-1/2 bg-secondary/40 rounded mb-2" />
                        <div className="h-full bg-secondary/20 rounded" />
                      </div>
                      <div className="bg-primary/20 rounded-lg h-1/3 p-2">
                        <div className="h-2 w-1/2 bg-primary/40 rounded mb-2" />
                        <div className="h-full bg-primary/20 rounded" />
                      </div>
                      <div className="bg-white/5 rounded-lg flex-1 h-1/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl blur-2xl opacity-30" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-teal-500 rounded-2xl blur-2xl opacity-30" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="glass-card p-6 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
