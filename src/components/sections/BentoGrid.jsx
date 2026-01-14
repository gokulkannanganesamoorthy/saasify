import { SpotlightCard } from '../ui/SpotlightCard';
import { Zap, Shield, BarChart3, Globe, Layers, Cpu } from 'lucide-react';

const features = [
  {
    title: 'Instant Deploy',
    description:
      'Push to git and your website is live. No configuration required.',
    icon: <Zap className="w-8 h-8 text-white" />,
    className: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption by default. We handle the complexity.',
    icon: <Shield className="w-8 h-8 text-white" />,
    className: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Global Edge',
    description: 'Low latency worldwide with our automated edge network.',
    icon: <Globe className="w-8 h-8 text-white" />,
    className: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Analytics First',
    description: 'Real-time insights into your application performance.',
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    className: 'col-span-1 md:col-span-2',
  },
  {
    title: 'AI Optimization',
    description:
      'Our AI analyzes your traffic and optimizes routing automatically.',
    icon: <Cpu className="w-8 h-8 text-white" />,
    className: 'col-span-1 md:col-span-1',
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
            Everything you need. <br /> Nothing you don't.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A complete suite of tools designed for modern engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => (
            <SpotlightCard key={i} className={feature.className}>
              <div className="p-8 h-full flex flex-col justify-between relative z-20">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Optional: Add background patterns or gradients specifically for some cards */}
              <div className="absolute inset-0 z-0 bg-dot-white opacity-20" />
            </SpotlightCard>
          ))}

          {/* CTA Card */}
          <SpotlightCard className="col-span-1 md:col-span-3 bg-gradient-to-r from-zinc-900 to-black">
            <div className="p-8 h-full flex flex-col md:flex-row items-center justify-between gap-8 z-20 relative">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to scale?
                </h3>
                <p className="text-zinc-400">
                  Join 10,000+ developers building with SaaSify.
                </p>
              </div>
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                Get Started Now
              </button>
              <div className="absolute inset-0 z-0 bg-grid-small-white opacity-20" />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
