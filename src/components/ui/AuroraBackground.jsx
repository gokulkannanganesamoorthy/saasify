import { cn } from '../../lib/utils';

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col h-[100vh] items-center justify-center bg-zinc-950 text-slate-950 transition-bg',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // The aurora effect
            'filter blur-[10px] invert dark:invert-0 pointer-events-none',
            "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]",
            'after:dark:[background-image:var(--dark-gradient),var(--aurora)]',
            'after:[background-size:200%,_100%]',
            'after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference',
            'pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform',
            showRadialGradient &&
              '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]'
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
