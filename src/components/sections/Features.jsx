import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Layers, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: 'Lightning Fast',
    description:
      'Optimized for speed. Our platform ensures your workflow never hits a bottleneck.',
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and security protocols to keep your data safe and compliant.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    title: 'Real-time Analytics',
    description:
      'Gain actionable insights with our powerful, real-time data visualization tools.',
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: 'Global Scale',
    description:
      'Deploy anywhere. Our infrastructure scales automatically to meet your demands.',
  },
  {
    icon: <Layers className="w-6 h-6 text-pink-400" />,
    title: 'Seamless Integration',
    description:
      'Connect with your favorite tools. API-first design for maximum extensibility.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: 'AI Powered',
    description:
      'Leverage machine learning to automate complex tasks and decision making.',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Engineered for Excellence
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to build, scale, and manage your software
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:border-blue-500/30"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
