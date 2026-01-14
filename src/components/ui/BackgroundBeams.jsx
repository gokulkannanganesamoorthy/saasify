import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const BackgroundBeams = ({ className }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full bg-neutral-950 overflow-hidden',
        className
      )}
    >
      <div className="absolute h-full w-full bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 bg-neutral-950 [background-image:radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      <motion.div
        initial={{ opacity: 0.5, width: '15rem', height: '15rem' }}
        animate={{ opacity: 1, width: '30rem', height: '30rem' }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          left: '50%',
          top: '50%',
          translate: '-50% -50%',
        }}
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"
      />
      <motion.div
        initial={{ opacity: 0.5, width: '10rem', height: '10rem' }}
        animate={{ opacity: 1, width: '20rem', height: '20rem' }}
        transition={{
          duration: 7,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
        style={{
          left: '40%',
          top: '40%',
          translate: '-50% -50%',
        }}
        className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 blur-3xl opacity-20"
      />
    </div>
  );
};
