import { ContainerScroll } from '../ui/ContainerScroll';
import { Button } from '../ui/Button';

export function Hero({ onOpenModal }) {
  return (
    <div className="flex flex-col overflow-hidden bg-zinc-950">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                3D Web Experiences
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full bg-zinc-900 flex flex-col p-4 overflow-hidden relative rounded-[30px] border border-zinc-800">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-zinc-500 text-xs font-mono">
              dashboard.saasify.app
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 grid grid-cols-12 gap-4">
            {/* Sidebar */}
            <div className="hidden md:flex col-span-2 flex-col gap-4 border-r border-white/5 pr-4">
              {[
                'Overview',
                'Analytics',
                'Customers',
                'Billing',
                'Settings',
              ].map((item) => (
                <div
                  key={item}
                  className="h-8 w-full bg-white/5 rounded-md flex items-center px-3 text-xs text-zinc-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main Area */}
            <div className="col-span-12 md:col-span-10 flex flex-col gap-4">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    label: 'Total Revenue',
                    value: '$45,231',
                    change: '+20.1%',
                  },
                  { label: 'Active Users', value: '2,305', change: '+15%' },
                  { label: 'Bounce Rate', value: '2.5%', change: '-4%' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-4 rounded-xl border border-white/5"
                  >
                    <div className="text-zinc-500 text-xs mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white text-xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-green-500 text-xs mt-1">
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="flex-1 bg-gradient-to-tr from-white/5 to-transparent rounded-xl border border-white/5 p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                {/* Mock Chart Line */}
                <svg
                  className="w-full h-full absolute inset-0 z-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,100 C100,50 300,150 500,50 700,100 900,0 1000,80"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* CTA Section below hero */}
      <div className="flex justify-center -mt-20 md:-mt-40 relative z-20 pb-20">
        <Button
          onClick={onOpenModal}
          className="text-xl px-12 py-6 rounded-full bg-white text-black font-bold shadow-2xl hover:scale-105 transition-transform"
          size="lg"
        >
          Get Started Free
        </Button>
      </div>
    </div>
  );
}
