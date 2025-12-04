import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Workflow, Zap, Award } from 'lucide-react';
import perfil from "../../imagens/perfil.png"

const stats = [
  { value: '3+', label: 'Anos de Experiência' },
  { value: '15+', label: 'Projetos Entregues' },
  { value: '20+', label: 'Clientes Satisfeitos' },
  { value: '10+', label: 'Automações Criadas' },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
           <div className="relative aspect-square max-w-md mx-auto">
  {/* Decorative Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl transform rotate-6" />

  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden">
    
    {/* Abstract Pattern */}
    <div className="absolute inset-0 z-10">
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-violet-400 rounded-xl rotate-12" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-indigo-400 rounded-full" />

      {/* FOTO BEM MAIOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-64 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 border border-white/20 backdrop-blur-md bg-white/5">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400/20 to-indigo-400/20 blur-xl" />

          {/* Foto */}
          <img 
            src={perfil} 
            className="relative z-10 w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>

    {/* Icon Grid – flutuando ao redor */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid grid-cols-2 gap-10">
        {[Code2, Workflow, Zap, Award].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <Icon className="w-10 h-10 text-violet-400" />
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</div>

          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-violet-600 font-medium tracking-wide uppercase text-sm">
              Sobre Mim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3 mb-6">
              Criando soluções digitais que fazem a diferença
            </h2>
           <div className="space-y-4 text-zinc-600 leading-relaxed">
  <p>
    Sou um desenvolvedor especializado em criar aplicações modernas, rápidas e eficientes, 
    sempre focado em oferecer a melhor experiência possível ao usuário. Trabalho diariamente 
    com <span className="underline text-blue-500 mx-1">React</span>, 
    <span className="underline text-blue-500 mx-1">Vite</span> e 
    <span className="underline text-blue-500 mx-1">Tailwind</span>, utilizando 
    <span className="underline text-blue-500 mx-1">Supabase</span> como base sólida para autenticação, 
    banco de dados e APIs. Também desenvolvo automações inteligentes com 
    <span className="underline text-blue-500 mx-1">n8n</span>, integrando CRMs e redes sociais para 
    otimizar processos e unificar informações. Além disso, utilizo ferramentas de 
    <span className="underline text-blue-500 mx-1">Inteligência Artificial</span> no meu dia a dia 
    para acelerar desenvolvimento, melhorar decisões técnicas e aumentar a eficiência dos projetos.
  </p>

  <p>
    Transformo ideias em soluções completas — desde sistemas de agendamento e dashboards 
    personalizados até fluxos automatizados que reduzem retrabalho e aumentam a produtividade. 
    Minha missão é ajudar empresas e profissionais a economizar tempo e alcançar mais resultados 
    através de tecnologia feita sob medida.
  </p>
</div>

 


            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl font-bold text-zinc-900">{stat.value}</div>
                  <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}