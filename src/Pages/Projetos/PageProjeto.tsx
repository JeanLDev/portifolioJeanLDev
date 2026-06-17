import React, { useState } from 'react';
import { 
  Folder, 
  Layers, 
  Database, 
  Cpu, 
  Globe, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Network, 
  Zap, 
  Code, 
  Server, 
  ChevronRight, 
  ExternalLink, 
  Boxes, 
  Check, 
  Flame, 
  Sparkles,
  Info
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/ui/BackButton';

// ==========================================
// INTERFACES E TIPAGENS (TypeScript)
// ==========================================

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tech: string[];
  architecture: {
    style: string;
    model: string;
    frontend: string;
    backend: string;
    database: string;
  };
  metrics: {
    modules: number;
    tables: number;
    attributes: number;
    relationships: number;
    users?: number;
    automations?: number;
    integrations?: number;
  };
  modules: string[];
  integrations: string[];
  automations: string[];
  responsibilities: string[];
  challenges?: string[];
  status: string;
  featured?: boolean;
}

interface ProjectDetailsProps {
  project: Project;
  brandColor?: string; // Cor de destaque dinâmica no formato Hexadecimal (ex: '#2563EB')
}

// ==========================================
// COMPONENTE DE DETALHES DO PROJETO (REUTILIZÁVEL)
// ==========================================

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ 
  project, 
  brandColor = '#2563EB' 
}) => {
  // Estado para aba ativa da visualização de arquitetura interativa
  const [activeArchLayer, setActiveArchLayer] = useState<'all' | 'frontend' | 'backend' | 'database'>('all');

  return (
    <div className="space-y-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-10 shadow-[8px_8px_0px_#0F172A]  mb-12">
          {/* Badge Decorativo de Destaque */}
          {project.featured && (
            <div className="bg-[#F59E0B] mb-2 w-fit text-[#0F172A] border-2 border-[#0F172A] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg flex items-center gap-1 shadow-[2px_2px_0px_#0F172A]">
              <Sparkles className="w-3 h-3 fill-current" />
              Destaque Portfólio
            </div>
          )}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#E2E8F0] text-[#0F172A] border-2 border-[#0F172A] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-[2px_2px_0px_#0F172A]">
            {project.category}
          </span>
          
          <span className={`border-2 border-[#0F172A] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-[2px_2px_0px_#0F172A] flex items-center gap-1 ${
            project.status.toLowerCase() === 'produção' || project.status.toLowerCase() === 'concluído'
              ? 'bg-[#10B981] text-white' 
              : 'bg-[#FFFFF] text-[#0000]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {project.status}
          </span>

          
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Tagline de Confirmação Profissional */}
        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border-2 border-[#3B82F6] text-[#1E40AF] px-4 py-2 rounded-xl font-bold text-sm">
          <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
          <span>Case de Software Real • Arquitetura Comercial Homologada</span>
        </div>
      </section>

      {/* GRID DE DUAS COLUNAS: VISÃO GERAL (ESQUERDA) + MÉTRICAS & TECNOLOGIAS (DIREITA) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* 2. VISÃO GERAL (Col-span 2) */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A]">
                  <Globe className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Escopo do Sistema</p>
                  <h2 className="text-xl md:text-2xl font-black text-[#0F172A]">Visão Geral do Case</h2>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-base font-normal whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Principais Desafios de Negócio Resolvidos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-lg border border-slate-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0" />
                  <span className="text-xs font-bold text-slate-700">Centralização segura de dados críticos</span>
                </div>
                <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-lg border border-slate-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0" />
                  <span className="text-xs font-bold text-slate-700">Eliminação de processos manuais repetitivos</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 4. TECNOLOGIAS UTILIZADAS (Col-span 1) */}
        <div className="space-y-8">
          <section className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 shadow-[6px_6px_0px_#0F172A] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A]">
                  <Code className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Stack Homologada</p>
                  <h2 className="text-xl md:text-2xl font-black text-[#0F172A]">Tecnologias</h2>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-bold mb-4">
                Ferramentas adotadas para garantir performance, escalabilidade e manutenibilidade:
              </p>

              {/* Badges Neo-Brutalistas */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-[#0F172A] border-2 border-[#0F172A] px-3 py-1 rounded-lg text-xs font-extrabold shadow-[2px_2px_0px_#0F172A] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#0F172A] transition-all duration-200 cursor-default"
                    style={{ borderLeftColor: index % 2 === 0 ? brandColor : '#0F172A', borderLeftWidth: index % 2 === 0 ? '4px' : '2px' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-[#F8FAFC] border-2 border-[#0F172A] rounded-xl p-4 shadow-[3px_3px_0px_#0F172A]">
              <div className="flex gap-3 items-start">
                <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0" />
                <p className="text-[11px] font-bold text-slate-600 leading-normal">
                  Todas as tecnologias listadas foram ativamente implementadas e integradas por mim durante o ciclo de desenvolvimento deste produto.
                </p>
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* 3. MÉTRICAS DO PROJETO */}
      <section className="space-y-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Fatos & Números</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">Métricas de Complexidade</h2>
          </div>
          <p className="text-sm font-bold text-slate-500">
            Indicadores estruturais da robustez técnica do software entregue.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          
          {/* Módulos */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Layers className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.modules}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Módulos</p>
            </div>
          </div>

          {/* Tabelas */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Database className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.tables}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Tabelas BD</p>
            </div>
          </div>

          {/* Atributos */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Code className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.attributes}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Campos/Atrib.</p>
            </div>
          </div>

          {/* Relacionamentos */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Network className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.relationships}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Relações ER</p>
            </div>
          </div>

          {/* Integrações */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Boxes className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.integrations ?? project.integrations.length}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Conexões API</p>
            </div>
          </div>

          {/* Automações */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Zap className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">{project.metrics.automations ?? project.automations.length}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Automações</p>
            </div>
          </div>

          {/* Usuários Ativos (Opcional) */}
          <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] col-span-2 md:col-span-1 flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
            <div className="bg-[#EEF2F6] p-2 rounded-lg border border-[#0F172A] w-fit mb-4">
              <Users className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0F172A]">
                {project.metrics.users ? (project.metrics.users >= 1000 ? `${(project.metrics.users/1000).toFixed(0)}k+` : project.metrics.users) : 'N/A'}
              </p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">Usuários Alvo</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ARQUITETURA DO SISTEMA */}
      <section className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A] mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Estrutura e Fluxo</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">Arquitetura de Software</h2>
          </div>
          
          {/* Seletor de visualização (Filtros Neo-brutalist) */}
          <div className="flex flex-wrap gap-2 bg-[#EFF3F6] p-2 border-2 border-[#0F172A] rounded-xl">
            {(['all', 'frontend', 'backend', 'database'] as const).map((layer) => (
              <button
                key={layer}
                onClick={() => setActiveArchLayer(layer)}
                className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-lg transition-transform ${
                  activeArchLayer === layer
                    ? 'bg-[#0F172A] text-white'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {layer === 'all' ? 'Ver Tudo' : layer}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Informações Gerais da Arquitetura */}
          <div className="bg-[#F8FAFC] border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b-2 border-slate-200 pb-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#2563EB]">Padrão Geral</span>
                <p className="text-lg font-extrabold text-[#0F172A] mt-0">{project.architecture.style}</p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#2563EB]">Modelo de Execução</span>
                <p className="text-base font-extrabold text-[#0F172A] mt-0">{project.architecture.model}</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-slate-200 text-xs font-semibold text-slate-500">
              Esta arquitetura prioriza acoplamento fraco e facilidade de manutenção em ambientes de nuvem.
            </div>
          </div>

          {/* Diagrama Sequencial */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-4 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-xl p-4 md:p-8">
            
            {/* Frontend Card */}
            {(activeArchLayer === 'all' || activeArchLayer === 'frontend') && (
              <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#E0F2FE] border-2 border-[#0F172A] rounded-lg">
                    <Globe className="w-5 h-5 text-[#0369A1]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#0369A1]">Camada de Apresentação (Frontend)</span>
                    <h4 className="text-base font-black text-[#0F172A]">{project.architecture.frontend}</h4>
                  </div>
                </div>
                <div className="text-xs bg-[#E2E8F0] px-2 py-1 rounded-md border border-[#0F172A] font-extrabold text-[#0F172A]">
                  SPA / UI Interativa
                </div>
              </div>
            )}

            {/* Setas de Conexão */}
            {activeArchLayer === 'all' && (
              <div className="flex justify-center my-1">
                <div className="flex flex-col items-center">
                  <div className="w-0 h-6 bg-[#0F172A] border border-[#0F172A]" />
                  <div className="w-2 h-2 bg-[#0F172A] rounded-full -mt-1" />
                </div>
              </div>
            )}

            {/* Backend Card */}
            {(activeArchLayer === 'all' || activeArchLayer === 'backend') && (
              <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FEE2E2] border-2 border-[#0F172A] rounded-lg">
                    <Server className="w-5 h-5 text-[#B91C1C]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#B91C1C]">Lógica de Negócio (Backend)</span>
                    <h4 className="text-base font-black text-[#0F172A]">{project.architecture.backend}</h4>
                  </div>
                </div>
                <div className="text-xs bg-[#E2E8F0] px-2 py-1 rounded-md border border-[#0F172A] font-extrabold text-[#0F172A]">
                  REST API / Serviços
                </div>
              </div>
            )}

            {/* Setas de Conexão */}
            {activeArchLayer === 'all' && (
              <div className="flex justify-center my-1">
                <div className="flex flex-col items-center">
                  <div className="w-0 h-6 bg-[#0F172A] border border-[#0F172A]" />
                  <div className="w-2 h-2 bg-[#0F172A] rounded-full -mt-1" />
                </div>
              </div>
            )}

            {/* Banco de Dados Card */}
            {(activeArchLayer === 'all' || activeArchLayer === 'database') && (
              <div className="bg-white border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FEF3C7] border-2 border-[#0F172A] rounded-lg">
                    <Database className="w-5 h-5 text-[#B45309]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#B45309]">Persistência (Banco de Dados)</span>
                    <h4 className="text-base font-black text-[#0F172A]">{project.architecture.database}</h4>
                  </div>
                </div>
                <div className="text-xs bg-[#E2E8F0] px-2 py-1 rounded-md border border-[#0F172A] font-extrabold text-[#0F172A]">
                  Relacional & Transacional
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 6. MÓDULOS DO SISTEMA */}
      <section className="space-y-4 mb-12">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Estruturação Funcional</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">Módulos do Sistema</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.modules.map((mod, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_#0F172A] hover:translate-y-[-2px] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 border-2 border-[#0F172A] font-black text-sm text-[#0F172A]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-extrabold text-[#0F172A]">{mod}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BANCO DE DADOS E RELACIONAMENTOS */}
      <section className="mb-12 bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A]">  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-4 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Modelo Relacional</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mt-1">Modelagem de Dados</h2>
              <p className="text-sm text-slate-500 font-bold mt-3 leading-relaxed">
                O banco de dados foi estruturado seguindo as regras de normalização para evitar redundâncias, mantendo alto desempenho em consultas complexas.
              </p>
            </div>

            <div className="bg-[#EFF3F6] p-4 rounded-xl border-2 border-[#0F172A]">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#0F172A]">Tipo de Modelagem</span>
              <p className="text-sm font-extrabold text-slate-700 mt-1">
                Foco em Integridade Referencial Estruturada
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="bg-[#F8FAFC] border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2563EB]">Tabelas Criadas</span>
                <p className="text-4xl font-black text-[#0F172A] mt-2">{project.metrics.tables}</p>
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-4">
                Entidades lógicas mapeadas para o banco de dados físico.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2563EB]">Atributos Totais</span>
                <p className="text-4xl font-black text-[#0F172A] mt-2">{project.metrics.attributes}</p>
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-4">
                Colunas de dados com tipagem estrita e validação.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border-2 border-[#0F172A] rounded-xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2563EB]">Relacionamentos</span>
                <p className="text-4xl font-black text-[#0F172A] mt-2">{project.metrics.relationships}</p>
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-4">
                Chaves estrangeiras (1:N, N:N) amarrando o modelo lógico.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INTEGRAÇÕES EXTERNAS */}
      <section className="space-y-4 mb-12">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Ecossistema Conectado</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">Integrações de API</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-[#0F172A] rounded-2xl p-4  shadow-[4px_4px_0px_#0F172A] flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-200"
            >
              <div>
                <div className="bg-[#EFF6FF] border border-[#0F172A] p-2 rounded-xl w-fit mb-4">
                  <ExternalLink className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-black text-[#0F172A]">{integration}</h3>
                <p className="text-xs text-slate-500 font-bold mt-2">
                  Serviço externo integrado de forma síncrona/assíncrona via protocolo REST ou Webhooks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-[#2563EB] uppercase tracking-wider">
                <span>API Conectada</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 border border-white outline outline-1 outline-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. AUTOMAÇÕES */}
      <section className="mb-12 bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Eficiência de Processos</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">Automações & Background Jobs</h2>
          </div>
          <span className="bg-[#FEF3C7] text-[#B45309] border-2 border-[#0F172A] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-xl shadow-[2px_2px_0px_#0F172A]">
            {project.automations.length} Fluxos Automatizados
          </span>
        </div>

        {/* Timeline Visual das Automações */}
        <div className="space-y-6 relative before:absolute before:left-4 md:before:left-[31px] before:top-2 before:bottom-2 before:w-[3px] before:bg-[#0F172A] h-[300px] overflow-y-auto">
          {project.automations.map((automation, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-8 relative">
              
              {/* Círculo do Timeline */}
              <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#0F172A] shadow-[2px_2px_0px_#0F172A] shrink-0 z-10">
                <Zap className="w-4 h-4 md:w-6 md:h-6 text-[#2563EB]" />
              </div>

              {/* Card da Automação */}
              <div className="bg-[#F8FAFC] border-2 border-[#0F172A] rounded-2xl p-4 md:p-4  shadow-[4px_4px_0px_#0F172A] flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base md:text-lg font-black text-[#0F172A]">{automation}</h4>
                  <span className="bg-white border-2 border-[#0F172A] text-[9px] font-black uppercase tracking-wider px-2 py-0 rounded-lg shadow-[1px_1px_0px_#0F172A]">
                    Trigger Ativo
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 10 e 11. GRID DUPLO: DESAFIOS TÉCNICOS & PAPEL NO PROJETO */}
      <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 10. DESAFIOS TÉCNICOS */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#FEF2F2] border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A]">
                  <Flame className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Superação Técnica</p>
                  <h2 className="text-xl md:text-2xl font-black text-[#0F172A]">Desafios Enfrentados</h2>
                </div>
              </div>

              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-3 bg-[#FFF5F5] border-2 border-[#FCA5A5] p-3 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0" />
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#991B1B]">{challenge}</h4>
                      <p className="text-[11px] text-slate-600 font-semibold mt-1">
                        Resolução de alta complexidade técnica exigindo pesquisa avançada, otimização de consultas ou configuração de infraestrutura específica.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-bold mt-6 pt-4 border-t border-slate-100">
              * Desafios mitigados através de boas práticas e testes rigorosos.
            </p>
          </section>
        )}

        {/* 11. PAPEL NO PROJETO */}
        <section className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#0F172A] flex flex-col justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ECFDF5] border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A]">
                <CheckCircle2 className="w-6 h-6 text-[#059669]" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Minha Atuação</p>
                <h2 className="text-xl md:text-2xl font-black text-[#0F172A]">Minhas Responsabilidades</h2>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-bold mb-6">
              Atividades desempenhadas de ponta a ponta na idealização, codificação e sustentação técnica do projeto:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {project.responsibilities.map((resp, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-[#F0FDF4] border-2 border-[#86EFAC] p-3 rounded-xl hover:translate-x-1 transition-transform"
                >
                  <div className="bg-[#10B981] text-white p-0 rounded-full border border-[#0F172A]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-extrabold text-[#065F46]">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EFF3F6] border border-slate-300 rounded-xl p-4 mt-6">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">Metodologia Adotada</span>
            <p className="text-[11px] font-bold text-slate-700 leading-normal">
              Entregas contínuas com foco em qualidade de código, boas práticas (Clean Code) e modularização completa.
            </p>
          </div>
        </section>

      </div>

    </div>
  );
};


// ==========================================
// COMPONENTE PRINCIPAL (CONTAINER / WRAPPER)
// ==========================================

export default function PageProject({selectedProject,projetos}) {
  const {id} = useParams()

  selectedProject = projetos?.find(p => p.id === selectedProject?.id) || projetos[id];

  return (
    <div className=" bg-[#EFF3F6] text-[#0F172A] font-sans antialiased  ">
      

      {/* ÁREA PRINCIPAL DO PROJETO */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 mt-12">
        <div className='pt-4'>
          <BackButton onBack={'/'} link={true} />
        </div>
        {/* Renderizador do Componente Altamente Reutilizável */}
        <ProjectDetails 
          project={selectedProject} 
        />

      </main>

    </div>
  );
}