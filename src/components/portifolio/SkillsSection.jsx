import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Palette, Server, 
  Workflow, Zap, GitBranch, Cloud,
  Smartphone, Globe, Bot, Layers
} from 'lucide-react';

const webSkills = [
  { name: 'React / Vite.js', icon: Code2, level: 95 },
  { name: 'Tailwind CSS', icon: Palette, level: 95 },
  { name: 'Supabase', icon: Database, level: 85 },
  { name: 'Git / GitHub', icon: GitBranch, level: 92 },
];

const automationSkills = [
  { name: 'N8N Workflows', icon: Workflow, level: 95 },
  { name: 'API Integrations', icon: Cloud, level: 90 },
  { name: 'Webhooks', icon: Zap, level: 92 },
  { name: 'Bots & Chatbots', icon: Bot, level: 85 },
  { name: 'Data Processing', icon: Layers, level: 88 },
  { name: 'Automação de CRM', icon: Globe, level: 90 },
];

const SkillCard = ({ skill, index, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="p-6 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl ${color === 'violet' ? 'bg-violet-100' : 'bg-indigo-100'}`}>
          <skill.icon className={`w-5 h-5 ${color === 'violet' ? 'text-violet-600' : 'text-indigo-600'}`} />
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">{skill.name}</h4>
          <span className="text-sm text-zinc-500">{skill.level}%</span>
        </div>
      </div>
      <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
          className={`h-full rounded-full ${color === 'violet' ? 'bg-gradient-to-r from-violet-500 to-purple-500' : 'bg-gradient-to-r from-indigo-500 to-blue-500'}`}
        />
      </div>
    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-medium tracking-wide uppercase text-sm">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
            Domínio em desenvolvimento web moderno e automações inteligentes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Web Development */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-violet-600 text-white">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Desenvolvimento Web</h3>
            </div>
            <div className="grid gap-4">
              {webSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} color="violet" />
              ))}
            </div>
          </div>

          {/* Automation */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-indigo-600 text-white">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Automações N8N</h3>
            </div>
            <div className="grid gap-4">
              {automationSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} color="indigo" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}