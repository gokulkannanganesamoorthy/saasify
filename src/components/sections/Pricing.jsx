import { Button } from '../ui/moving-border';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
            A plan for every scale.
          </h2>
          <p className="text-xl text-neutral-400">
            From solo founders to global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="rounded-3xl p-1 bg-zinc-900 border border-zinc-800">
            <div className="rounded-[22px] bg-zinc-950 p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $0<span className="text-sm font-normal text-zinc-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 User', '3 Projects', 'Community Support'].map((feat) => (
                  <li key={feat} className="flex items-center text-zinc-400">
                    <Check className="w-5 h-5 mr-2 text-zinc-600" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors border border-zinc-800">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro - With Moving Border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20" />
            <Button
              borderRadius="1.75rem"
              className="bg-zinc-950 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-0"
              containerClassName="w-full h-full"
              duration={3000}
            >
              <div className="w-full h-full p-8 flex flex-col items-start bg-zinc-950/90 rounded-[1.70rem]">
                <div className="flex justify-between items-center w-full mb-2">
                  <h3 className="text-xl font-bold text-white">Pro</h3>
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold">
                    POPULAR
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-6">
                  $29
                  <span className="text-sm font-normal text-zinc-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1 w-full">
                  {[
                    'Unlimited Users',
                    'Unlimited Projects',
                    'Priority Support',
                    'Analytics',
                    'SSO',
                  ].map((feat) => (
                    <li key={feat} className="flex items-center text-zinc-300">
                      <Check className="w-5 h-5 mr-2 text-blue-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                  Upgrade Now
                </button>
              </div>
            </Button>
          </div>

          {/* Enterprise */}
          <div className="rounded-3xl p-1 bg-zinc-900 border border-zinc-800">
            <div className="rounded-[22px] bg-zinc-950 p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Dedicated Support',
                  'SLA',
                  'Custom Integrations',
                  'Audit Logs',
                ].map((feat) => (
                  <li key={feat} className="flex items-center text-zinc-400">
                    <Check className="w-5 h-5 mr-2 text-zinc-600" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors border border-zinc-800">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
