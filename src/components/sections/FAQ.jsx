import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesCore } from '../ui/Sparkles';

const faqs = [
  {
    question: 'What makes this different from other boilerplates?',
    answer:
      "We don't just give you code. We give you a complete design system, specific animations, and a high-end aesthetic that would cost thousands to hire for.",
  },
  {
    question: 'Is it easy to customize?',
    answer:
      'Everything is built with Tailwind CSS and standard React components. You can change colors, fonts, and layout in minutes.',
  },
  {
    question: 'Do you offer support?',
    answer:
      'Yes, we have a Discord community and priority email support for Pro users.',
  },
  {
    question: 'Can I use this for multiple projects?',
    answer:
      'Our license allows you to build unlimited personal and commercial projects.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-black relative">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="text-white" />
                ) : (
                  <Plus className="text-white" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-zinc-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
