import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

export function LeadCapture({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101]"
          >
            <div className="relative w-full rounded-2xl overflow-hidden p-[1px]">
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite] opacity-50" />

              <div className="relative bg-zinc-950 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-zinc-400">
                      We'll be in touch shortly to schedule your demo.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        Book a Demo
                      </h3>
                      <p className="text-zinc-400">
                        Join the waitlist for early access.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-zinc-300 ml-1"
                        >
                          Work Email
                        </label>
                        <div className="relative group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-focus-within:opacity-75 transition duration-1000 group-hover:opacity-100"></div>
                          <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="relative w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 transition-all shadow-xl"
                            placeholder="name@company.com"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5 transition-all"
                      >
                        {status === 'loading' ? (
                          <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                          <>
                            Request Access
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-zinc-600 mt-4">
                        No credit card required. Cancel anytime.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
