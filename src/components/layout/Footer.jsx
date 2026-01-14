import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10 relative overflow-hidden">
      {/* Giant Text Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-bold leading-none text-white whitespace-nowrap">
          SAASIFY
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to transform your workflow?
            </h2>
            <button className="text-xl md:text-2xl font-medium border-b border-white hover:text-zinc-400 hover:border-zinc-400 transition-colors pb-1">
              Book a demo now
            </button>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-zinc-500 max-w-sm text-right">
              San Francisco, CA <br />
              100 Smith Street, Suite 500
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div>
            <h4 className="font-bold mb-4 text-zinc-300">Product</h4>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-zinc-300">Company</h4>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-zinc-300">Resources</h4>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-zinc-300">Legal</h4>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Developed by{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline hover:text-blue-400 transition-colors"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
