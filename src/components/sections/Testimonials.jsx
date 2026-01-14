import { motion } from 'framer-motion';

const companies = [
  'Acme Corp',
  'Globex',
  'Soylent Corp',
  'Initech',
  'Umbrella Corp',
  'Stark Ind',
  'Wayne Ent',
  'Cyberdyne',
];

const testimonials = [
  {
    quote:
      'This platform has completely transformed how we manage our engineering team. The velocity increase is undeniable.',
    author: 'Sarah Connor',
    role: 'CTO @ TechFlow',
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    quote:
      "The best investment we've made this year. Security, scalability, and performance all in one package.",
    author: 'Tony Stark',
    role: 'VP Engineering @ StarkInd',
    image: 'https://i.pravatar.cc/150?u=tony',
  },
  {
    quote:
      'Incredible support and a robust feature set. It scales seamlessly as we grow our user base.',
    author: 'Bruce Wayne',
    role: 'Founder @ WayneEnt',
    image: 'https://i.pravatar.cc/150?u=bruce',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-400">
          Join thousands of high-growth companies.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="relative flex overflow-x-hidden mb-24 group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {companies.map((company) => (
            <span
              key={company}
              className="text-2xl font-bold text-slate-700 mx-8 uppercase tracking-widest hover:text-white transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
          {companies.map((company) => (
            <span
              key={`${company}-duplicate`}
              className="text-2xl font-bold text-slate-700 mx-8 uppercase tracking-widest hover:text-white transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
          {companies.map((company) => (
            <span
              key={`${company}-triplicate`}
              className="text-2xl font-bold text-slate-700 mx-8 uppercase tracking-widest hover:text-white transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="absolute top-8 right-8 text-6xl text-blue-500/10 font-serif leading-none">
                "
              </div>
              <p className="text-slate-300 mb-6 relative z-10 font-light text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800">
                  {/* Fallback avatar if external image fails or privacy policy blocks */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                    {t.author[0]}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
