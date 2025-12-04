import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-zinc-700">•</span>
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>usando React, Vite & Tailwind</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Voltar ao topo</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}