import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code2, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '../../components/ui/badge';
import useniveloTumblr from "../../imagens/useniveloTumblr.png"

const projects = [
    {
    id: 1,
    title: 'Usenivelo',
    description: 'Plataforma de organização visual com hierarquias avançadas, múltiplos níveis de boards e colaboração em tempo real. Permite criar fluxos complexos, gerenciar times e estruturar projetos de forma totalmente personalizada.',
    image: useniveloTumblr,
    tags: ['React', 'Vite.js', 'Tailwind', 'Supabase'],
    category: 'web',
    link: 'https://usenivelo.com',
    github: 'https://github.com/JeanLDev/Usenivelo-repository'
  },

  {
    id: 2,
    title: 'Automação de CRM',
    description: 'Sistema de automação completo integrando WhatsApp, email marketing e CRM. Leads qualificados automaticamente com IA.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['N8N', 'WhatsApp API', 'OpenAI', 'Webhook'],
    category: 'automation',
    link: '#',
  },
  {
    id: 3,
    title: 'Plataforma SaaS',
    description: 'Plataforma multi-tenant para gestão empresarial com módulos de finanças, RH e projetos. Arquitetura escalável.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'AWS'],
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Bot de Atendimento',
    description: 'Chatbot inteligente com IA para atendimento 24/7. Integração com agenda, pagamentos e suporte automatizado.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
    tags: ['N8N', 'GPT-4', 'Telegram', 'Discord'],
    category: 'automation',
    link: '#',
  },
  {
    id: 5,
    title: 'App de Delivery',
    description: 'Aplicação web completa para restaurantes com pedidos em tempo real, rastreamento e gestão de entregas.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop',
    tags: ['React', 'Firebase', 'Google Maps', 'PWA'],
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Sincronização de Estoque',
    description: 'Automação para sincronizar estoque entre múltiplas plataformas: Shopify, WooCommerce, Mercado Livre e mais.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    tags: ['N8N', 'REST APIs', 'Shopify', 'ML API'],
    category: 'automation',
    link: '#',
  },
];

const filters = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'web', label: 'Web', icon: Code2 },
  { id: 'automation', label: 'Automações', icon: Workflow },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projetos" className="py-2 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos em desenvolvimento web e automações
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-zinc-900 text-white' 
                  : 'border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href={project.link}
                        target='_blank'
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className={`${project.category === 'web' ? 'bg-violet-100 text-violet-700' : 'bg-indigo-100 text-indigo-700'} text-xs`}>
                        {project.category === 'web' ? 'Web' : 'Automação'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium text-zinc-500 bg-zinc-100 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}