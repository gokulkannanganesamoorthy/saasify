import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { cn } from '../../lib/utils';

function ParallaxText({ children, baseVelocity = 100, className }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex whitespace-nowrap flex-nowrap">
      <motion.div
        className={cn('flex whitespace-nowrap gap-10', className)}
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const testimonials = [
  { text: 'The future is here.', author: 'Elon Musk' },
  { text: 'Ideally, the software just works.', author: 'Naval Ravikant' },
  { text: 'Velocity is the only metric that matters.', author: 'Sam Altman' },
  { text: 'Design is not just what it looks like.', author: 'Steve Jobs' },
  {
    text: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
  },
];

export function VelocityScroll() {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <h2 className="text-center text-zinc-500 mb-12 uppercase tracking-[0.2em] text-sm">
        What Industry Leaders Are Saying
      </h2>

      <div className="flex flex-col gap-16">
        <ParallaxText
          baseVelocity={-2}
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-500/50 to-white/50"
        >
          SHIP FASTER. SCALE BETTER. BUILD SMARTER.
        </ParallaxText>

        <ParallaxText
          baseVelocity={2}
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-zinc-500/50"
        >
          RELIABILITY. SECURITY. PERFORMANCE.
        </ParallaxText>

        <ParallaxText
          baseVelocity={-1}
          className="text-4xl md:text-5xl font-medium text-zinc-700"
        >
          {testimonials.map((t, i) => (
            <span key={i} className="mr-12">
              "{t.text}" - <span className="text-zinc-500">{t.author}</span>
            </span>
          ))}
        </ParallaxText>
      </div>
    </section>
  );
}
