import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Github,
  Cpu,
  Globe,
  Shield,
  Zap,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden pt-32 pb-12 border-t border-white/5">
      {/* Cyberpunk Grid Floor */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Central Reactor Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* The HUD Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: System Status */}
          <div className="lg:col-span-3 flex flex-col justify-end">
            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <h4 className="text-xs font-mono text-blue-400 mb-4 flex items-center gap-2">
                <Cpu className="w-3 h-3" /> SYSTEM STATUS
              </h4>

              <div className="space-y-4">
                {[
                  {
                    label: 'Operational',
                    val: '99.9%',
                    color: 'text-emerald-500',
                  },
                  { label: 'Latency', val: '24ms', color: 'text-blue-400' },
                  {
                    label: 'Security',
                    val: 'Optimal',
                    color: 'text-purple-400',
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-zinc-500">{stat.label}</span>
                    <span className={`font-mono ${stat.color}`}>
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Core: Brand & Mission */}
          <div className="lg:col-span-6 flex flex-col items-center text-center pt-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl rounded-full animate-pulse" />
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white relative z-10">
                SaaS
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  ify
                </span>
              </h2>
            </motion.div>

            <p className="text-zinc-400 max-w-md text-lg mb-12">
              Advanced infrastructure for the next generation of digital
              architects.
            </p>

            {/* Holographic Nav Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Globe, label: 'Platform' },
                { icon: Shield, label: 'Security' },
                { icon: Zap, label: 'Performance' },
              ].map((item, i) => (
                <button
                  key={i}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/80 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-zinc-300 group-hover:text-white">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Social Connection Node */}
          <div className="lg:col-span-3 flex flex-col justify-end items-end">
            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative group w-full lg:w-auto">
              <h4 className="text-xs font-mono text-purple-400 mb-4 flex items-center justify-end gap-2">
                CONNECT <Globe className="w-3 h-3" />
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {[Twitter, Github, Linkedin, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-12 w-full lg:w-12 rounded-lg bg-black border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group/icon relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/icon:translate-y-0 transition-transform duration-300" />
                    <Icon className="w-5 h-5 relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Data Line */}
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span>ID: 884-29-X</span>
            <span>SECURE CONNECTION</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400">
              Privacy Protocol
            </a>
            <span className="text-zinc-800">|</span>
            <a href="#" className="hover:text-blue-400">
              Terms of Ops
            </a>
          </div>
          <div>
            DEV:{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
