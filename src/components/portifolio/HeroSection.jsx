import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 mt-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400 text-sm">Disponível para projetos</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Desenvolvedor</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Web & Automações
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformo ideias em experiências digitais excepcionais e automatizo 
            processos complexos com soluções inteligentes em N8N.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700  hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/JeanLDev', label: 'GitHub', target:'_blank' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jean-lucas-86314225b/', label: 'LinkedIn',target:'_blank'},
              { icon: Mail, href: "mailto:Lucas__jean@outlook.com?subject=Contato%20sobre%20seu%20portf%C3%B3lio&body=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.", label: 'Email',target:'_blank'},
            ].map(({ icon: Icon, href, label,target }) => (
              <motion.a
                key={label}
                href={href}
                target={target}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-zinc-500"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}