
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import PageProject from './Pages/Projetos/PageProjeto';

function App() {

  const [selectedProject, setSelectedProject] = useState(null)
  const INITIAL_PROJECTS = [
    {
  id: 0,
  progress: 100,
  title: "Plataforma de Gestão Empresarial Integrada (ERP Modular)",

  shortDescription:
    "ERP corporativo modular desenvolvido para centralizar processos comerciais, produtivos, financeiros, administrativos e operacionais em uma única plataforma.",

  fullDescription:
    "Sistema desenvolvido sob medida para gestão integrada de operações empresariais. A plataforma centraliza CRM, pedidos, produção, estoque, financeiro, recursos humanos, chamados internos, automações e integrações externas, eliminando processos descentralizados e fornecendo rastreabilidade completa das operações.",

  category: "Fullstack",

  tech: [
    "React",
    "React Router",
    "TypeScript",
    "Tailwind",
    "Supabase",
    "PostgreSQL",
    "N8N",
    "Evolution API",
    "OpenAI",
    "NEXT.JS"
  ],

  architecture: {
    style: "Arquitetura em Camadas",
    model: "Cliente-Servidor",
    database: "PostgreSQL",
    backend: "Supabase",
    frontend: "React",
  },

  metrics: {
    modules: 10,
    tables: 74,
    relationships: 100,
    users: 6,
    attributes:680,
    integrations: 5,
    automations: 20,
  },

  modules: [
    "CRM",
    "Pedidos",
    "Produção",
    "Estoque",
    "Financeiro",
    "RH",
    "Service Desk",
    "Portal do Cliente",
    "Portal do Colaborador",
    "IA"
  ],

  integrations: [
    "Bling",
    "Correios",
    "Wix",
    "Evolution API",
    "WhatsApp"
  ],

  automations: [
  "Envio automático de mensagens WhatsApp",
  "Atualização automática de status de pedidos",
  "Geração automática de pedidos de venda no Bling",
  "Geração automática de notas fiscais de saída",
  "Sincronização automática de clientes",
  "Sincronização automática de pedidos",
  "Sincronização automática com WIX",
  "Atualização automática de rastreamento de entregas",
  "Atualização automática de estoque",
  "Movimentação automática de insumos",
  "Baixa automática de estoque após produção",
  "Geração automática de notificações internas",
  "Processamento automático de chamados internos",
  "Registro automático de auditoria de ações",
  "Disparo de webhooks para sistemas externos",
  "Fluxos automatizados via N8N",
  "Integração automática com Evolution API",
  "Processamento de eventos baseado em alterações do sistema",
  "Envio automático de alertas operacionais",
  "Atualização automática de dashboards gerenciais",
  "Controle automático de permissões por perfil",
  "Registro automático de interações com clientes",
  "Automações baseadas em Inteligência Artificial",
  "Extração automática de informações via IA",
  "Gestão automatizada de prompts e consumo de tokens",
  "Sincronização de dados entre módulos do ERP"
],

  database: {
    tables: 74,
    attributes: 680,
    relationships: 100
  },

  responsibilities: [
    "Arquitetura",
    "Frontend",
    "Banco de Dados",
    "Integrações",
    "Automações",
    "Deploy",
    "Manutenção"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/1"
    },
    {
  id: 1,
  progress: 80,
  title: "NAIG - Plataforma de Atendimento Inteligente via WhatsApp",

  shortDescription:
    "Sistema de atendimento inteligente que transforma o WhatsApp em uma central completa de relacionamento, agendamentos e gestão empresarial utilizando Inteligência Artificial.",

  fullDescription:
    "O NAIG é uma plataforma SaaS desenvolvida para automatizar atendimentos e operações empresariais através do WhatsApp. Utilizando Evolution API, o sistema replica a experiência de um Web WhatsApp, permitindo que o usuário conecte sua própria conta através de QR Code e utilize agentes de Inteligência Artificial para responder clientes automaticamente. Além do atendimento inteligente, a plataforma oferece gestão de clientes, agendamentos, colaboradores, receitas, comissões, fichas de anamnese, pagamentos antecipados via Mercado Pago e automações personalizadas, permitindo que empresas centralizem suas operações em uma única solução.",

  category: "Fullstack",

  tech: [
    "React",
    "React Router",
    "JavaScript",
    "Tailwind",
    "Supabase",
    "PostgreSQL",
    "N8N",
    "Evolution API",
    "OpenAI",
    "Mercado Pago"
  ],

  architecture: {
    style: "Arquitetura em Camadas",
    model: "Cliente-Servidor",
    database: "PostgreSQL",
    backend: "Supabase",
    frontend: "React",
  },

  metrics: {
    modules: 9,
    tables: 42,
    relationships: 70,
    users: 200,
    attributes: 420,
    integrations: 4,
    automations: 25,
  },

  modules: [
    "Atendimento IA",
    "WhatsApp",
    "Clientes",
    "Agendamentos",
    "Receitas",
    "Colaboradores",
    "Ficha de Anamnese",
    "Comissionamento",
    "Financeiro"
  ],

  integrations: [
    "WhatsApp",
    "Evolution API",
    "Mercado Pago",
    "OpenAI"
  ],

  automations: [
    "Atendimento automático via IA",
    "Respostas automáticas no WhatsApp",
    "Agendamento automático de clientes",
    "Confirmação automática de agendamentos",
    "Lembrete automático de consultas",
    "Cancelamento automático de horários",
    "Reagendamento automático",
    "Envio automático de links de pagamento",
    "Geração automática de cobranças via Mercado Pago",
    "Validação automática de pagamentos",
    "Liberação automática de agendamentos após pagamento",
    "Captação automática de dados do cliente",
    "Atualização automática do histórico de atendimento",
    "Preenchimento automático de ficha de anamnese",
    "Distribuição automática de atendimentos",
    "Registro automático de conversas",
    "Treinamento personalizado de agentes",
    "Execução de prompts customizados",
    "Disparo de fluxos automatizados via N8N",
    "Envio automático de notificações internas",
    "Atualização automática de dashboards",
    "Controle automático de comissão por colaborador",
    "Cálculo automático de faturamento",
    "Integração automática com IA",
    "Processamento de eventos em tempo real"
  ],

  database: {
    tables: 42,
    attributes: 420,
    relationships: 70
  },

  responsibilities: [
    "Arquitetura",
    "Frontend",
    "Backend",
    "Banco de Dados",
    "Integrações",
    "Inteligência Artificial",
    "Automações",
    "Deploy",
    "Manutenção"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/1"
    },
    {
  id: 2,
  progress: 100,

  title: "Automação de Geração de Pedidos de Venda no Bling",

  shortDescription:
    "Integração automatizada entre plataformas de e-commerce e o ERP Bling para geração automática de Pedidos de Venda utilizando fluxos inteligentes no N8N.",

  fullDescription:
    "Projeto de automação desenvolvido para eliminar processos manuais na criação de Pedidos de Venda dentro do ERP Bling. A solução utiliza o N8N como orquestrador de integrações, recebendo eventos de novos pedidos provenientes de plataformas de e-commerce, marketplaces ou sistemas externos, realizando validações de dados, tratamento de informações do cliente, produtos, estoque e pagamentos, e gerando automaticamente o Pedido de Venda no Bling através de sua API. O fluxo também contempla monitoramento de falhas, notificações operacionais, atualização de status e sincronização bidirecional entre os sistemas integrados, garantindo maior produtividade e redução de erros operacionais.",

  category: "Automação",

  tech: [
    "N8N",
    "Bling API",
    "REST API",
    "Webhooks",
    "Node.js",
    "PostgreSQL",
    "HTTP Request",
    "JSON",
    "Docker",
    "Cloud Hosting"
  ],

  architecture: {
    style: "Arquitetura Orientada a Eventos",
    model: "Integração Cliente-Servidor",
    database: "PostgreSQL",
    backend: "N8N",
    frontend: "Dashboard Operacional"
  },

  metrics: {
    modules: 0,
    tables: 3,
    relationships: 4,
    users: 5,
    attributes: 3,
    integrations: 2,
    automations: 18,
  },

  modules: [
    "Recebimento de Pedidos",
    "Validação de Dados",
    "Cadastro de Clientes",
    "Consulta de Produtos",
    "Validação de Estoque",
    "Geração de Pedido de Venda",
    "Atualização de Status",
    "Logs Operacionais",
    "Tratamento de Erros",
    "Monitoramento"
  ],

  integrations: [
    "Bling",
    "N8N",
    "Wix",
    "PostgreSQL",
    "Webhook API"
  ],

  automations: [
    "Recebimento automático de pedidos do Wix",
    "Captura automática de eventos via Webhook",
    "Validação automática dos dados do pedido",
    "Validação automática de CPF e CNPJ",
    "Identificação automática de clientes existentes",
    "Cadastro automático de novos clientes",
    "Consulta automática de produtos no Bling",
    "Mapeamento automático de SKUs",
    "Validação automática de estoque",
    "Geração automática de Pedido de Venda",
    "Inclusão automática de observações comerciais",
    "Atualização automática de status do pedido",
    "Sincronização automática entre Wix e Bling",
    "Registro automático de logs de execução",
    "Reprocessamento automático em caso de falha",
    "Envio automático de notificações operacionais",
    "Monitoramento em tempo real das execuções",
    "Tratamento automático de exceções"
  ],

  workflow: [
    "Recebimento do pedido via Webhook",
    "Validação dos dados recebidos",
    "Consulta do cliente",
    "Consulta dos produtos",
    "Validação de estoque",
    "Montagem do payload do pedido",
    "Envio para API do Bling",
    "Confirmação da criação",
    "Atualização de status",
    "Registro de logs"
  ],

  database: {
    tables: 8,
    attributes: 65,
    relationships: 12
  },

  responsibilities: [
    "Levantamento de Requisitos",
    "Arquitetura da Integração",
    "Desenvolvimento dos Fluxos N8N",
    "Integração com API do Bling",
    "Integração com Wix",
    "Tratamento de Erros",
    "Monitoramento",
    "Testes",
    "Deploy",
    "Documentação"
  ],

  benefits: [
    "Eliminação de cadastro manual de pedidos",
    "Redução de erros operacionais",
    "Processamento em tempo real",
    "Maior produtividade da equipe",
    "Escalabilidade das operações",
    "Rastreabilidade completa das execuções"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/2"
    },
    {
  id: 3,
  progress: 100,

  title: "Sistema de Gestão de Ponto e Portal do Colaborador",

  shortDescription:
    "Plataforma completa para controle de jornada de trabalho, gestão de colaboradores, banco de horas, assinatura digital de documentos e processos internos de RH.",

  fullDescription:
    "Sistema web desenvolvido para centralizar a gestão de colaboradores e rotinas do setor de Recursos Humanos. A plataforma permite registro eletrônico de ponto, acompanhamento de banco de horas, abertura de chamados internos, gestão disciplinar, assinatura digital de documentos, anexação de arquivos e atestados médicos, além de um portal exclusivo para colaboradores. O sistema oferece rastreabilidade completa das ações realizadas, fluxo de aprovações por matrícula, histórico de movimentações e ferramentas administrativas para controle operacional e compliance trabalhista.",

  category: "Fullstack",

  tech: [
    "React",
    "React Router",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Storage",
    "N8N",
    "JWT",
    "Cloud Functions"
  ],

  architecture: {
    style: "Arquitetura em Camadas",
    model: "Cliente-Servidor",
    database: "PostgreSQL",
    backend: "Supabase",
    frontend: "React"
  },

  metrics: {
    modules: 14,
    tables: 12,
    relationships: 26,
    users: 15,
    attributes: 320,
    integrations: 1,
    automations: 20
  },

  modules: [
    "Portal do Colaborador",
    "Controle de Ponto",
    "Banco de Horas",
    "Gestão de Funcionários",
    "Assinatura Digital",
    "Documentos",
    "Atestados Médicos",
    "Advertências",
    "Suspensões",
    "Histórico de Ocorrências",
    "Chamados Internos",
    "Autorizações",
    "Relatórios",
    "Dashboard Gerencial"
  ],

  integrations: [
    "Supabase",
    "Storage",
    "N8N"
  ],

  automations: [
    "Registro automático de entrada e saída",
    "Cálculo automático de horas trabalhadas",
    "Cálculo automático de horas extras",
    "Atualização automática de banco de horas",
    "Controle automático de atrasos",
    "Controle automático de faltas",
    "Validação automática de jornadas",
    "Envio automático de solicitações para aprovação",
    "Notificação automática de pendências",
    "Assinatura digital de documentos",
    "Registro automático de histórico",
    "Anexação automática de documentos",
    "Processamento automático de atestados",
    "Controle automático de vencimento de documentos",
    "Abertura automática de protocolos",
    "Atualização automática de status de chamados",
    "Controle automático de advertências",
    "Fluxo automático de aprovação por matrícula",
    "Geração automática de relatórios",
    "Auditoria automática de ações"
  ],

  features: [
    "Registro de ponto por horário",
    "Controle de jornada",
    "Banco de horas",
    "Horas extras",
    "Portal do colaborador",
    "Cadastro de funcionários",
    "CRUD completo de colaboradores",
    "Assinatura digital",
    "Upload de documentos",
    "Upload de atestados médicos",
    "Controle disciplinar",
    "Advertências",
    "Suspensões",
    "Histórico completo de ações",
    "Abertura de chamados",
    "Gestão de solicitações",
    "Fluxo de aprovações",
    "Autorizações por matrícula",
    "Consulta de documentos",
    "Painel administrativo"
  ],

  database: {
    tables: 35,
    attributes: 320,
    relationships: 58
  },

  responsibilities: [
    "Levantamento de Requisitos",
    "Arquitetura de Software",
    "Modelagem de Banco de Dados",
    "Frontend",
    "Backend",
    "Controle de Acesso",
    "Integrações",
    "Automações",
    "Deploy",
    "Monitoramento",
    "Manutenção"
  ],

  benefits: [
    "Centralização das rotinas de RH",
    "Redução de processos manuais",
    "Controle preciso da jornada de trabalho",
    "Maior transparência para colaboradores",
    "Rastreabilidade completa das operações",
    "Gestão documental digital",
    "Redução de inconsistências trabalhistas",
    "Automação de aprovações internas"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/3"
    },
    {
  id: 4,
  progress: 100,

  title: "Plataforma de Gestão de Eventos e Venda de Ingressos",

  shortDescription:
    "Sistema completo para criação, gerenciamento e comercialização de eventos presenciais e online, com emissão de ingressos digitais, pagamentos instantâneos e certificação automática.",

  fullDescription:
    "Plataforma SaaS desenvolvida para organizadores de eventos, instituições de ensino, empresas e produtores independentes. O sistema permite criar eventos únicos, recorrentes, presenciais, online ou híbridos, gerenciar inscrições, comercializar ingressos e controlar participantes em uma única plataforma. A solução integra pagamentos instantâneos através do Mercado Pago, emissão de ingressos com QR Code, sorteios promocionais, cupons de desconto, formulários personalizados, certificados automáticos e lista de presença digital. Inspirado em plataformas como Sympla, o sistema oferece uma experiência completa tanto para organizadores quanto para participantes.",

  category: "Fullstack",

  tech: [
    "React",
    "React Router",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Mercado Pago",
    "QR Code",
    "Storage",
    "N8N",
    "PDF Generator",
    "Cloud Functions"
  ],

  architecture: {
    style: "Arquitetura em Camadas",
    model: "Cliente-Servidor",
    database: "PostgreSQL",
    backend: "Supabase",
    frontend: "React"
  },

  metrics: {
    modules: 16,
    tables: 48,
    relationships: 85,
    users: 8,
    attributes: 520,
    integrations: 2,
    automations: 28
  },

  modules: [
    "Eventos",
    "Cursos",
    "Inscrições",
    "Ingressos",
    "QR Code",
    "Mercado Pago",
    "Participantes",
    "Check-in",
    "Lista de Presença",
    "Certificados",
    "Cupons",
    "Sorteios",
    "Formulários Personalizados",
    "Financeiro",
    "Dashboard",
    "Relatórios"
  ],

  integrations: [
    "Mercado Pago",
    "Serviço de E-mail"
  ],

  automations: [
    "Criação automática de inscrições",
    "Validação automática de pagamentos",
    "Liberação automática de ingressos",
    "Geração automática de QR Code",
    "Envio automático de ingressos por e-mail",
    "Confirmação automática de inscrição",
    "Controle automático de vagas",
    "Bloqueio automático após lotação",
    "Aplicação automática de cupons",
    "Validação automática de cupons",
    "Processamento automático de reembolsos",
    "Registro automático de check-in",
    "Atualização automática da lista de presença",
    "Controle automático de participantes",
    "Geração automática de certificados",
    "Envio automático de certificados",
    "Sorteio automático de participantes",
    "Seleção automática de ganhadores",
    "Envio automático de notificações",
    "Disparo automático de lembretes",
    "Atualização automática de dashboards",
    "Geração automática de relatórios",
    "Controle automático de lotes",
    "Encerramento automático de vendas",
    "Registro automático de auditoria",
    "Processamento de eventos em tempo real",
    "Fluxos automatizados via N8N",
    "Backup automático de registros"
  ],

  features: [
    "Eventos presenciais",
    "Eventos online",
    "Eventos híbridos",
    "Cursos",
    "Palestras",
    "Workshops",
    "Congressos",
    "Venda de ingressos",
    "Lotes promocionais",
    "QR Code para acesso",
    "Check-in digital",
    "Lista de presença",
    "Certificados automáticos",
    "Formulários personalizados",
    "Cupons de desconto",
    "Sorteios",
    "Painel do organizador",
    "Painel do participante",
    "Dashboard financeiro",
    "Relatórios gerenciais",
    "Landing page personalizada",
    "Página pública do evento",
    "Controle de vagas",
    "Upload de materiais",
    "Área exclusiva para participantes"
  ],

  database: {
    tables: 48,
    attributes: 520,
    relationships: 85
  },

  responsibilities: [
    "Levantamento de Requisitos",
    "Arquitetura de Software",
    "UX/UI",
    "Frontend",
    "Backend",
    "Banco de Dados",
    "Integração Mercado Pago",
    "Geração de Certificados",
    "Sistema de QR Code",
    "Automações",
    "Deploy",
    "Monitoramento",
    "Manutenção"
  ],

  benefits: [
    "Centralização da gestão de eventos",
    "Venda automatizada de ingressos",
    "Recebimento instantâneo de pagamentos",
    "Redução de processos manuais",
    "Maior controle de participantes",
    "Automação de certificação",
    "Experiência moderna para organizadores",
    "Escalabilidade para eventos de qualquer porte"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/4"
  
    },
    {
  id: 5,
  progress: 100,

  title: "Automação de Monitoramento e Atualização de Entregas",

  shortDescription:
    "Rotina automatizada que consulta pedidos com código de rastreamento, verifica o status nos Correios e atualiza as informações de entrega sem intervenção humana.",

  fullDescription:
    "Automação backend desenvolvida para monitorar continuamente pedidos enviados pelos Correios. A rotina é executada automaticamente em intervalos programados no servidor, consultando o banco de dados em busca de pedidos com códigos de rastreamento ativos. Após identificar os registros elegíveis, o fluxo realiza consultas na API dos Correios, processa as movimentações retornadas e atualiza automaticamente os status logísticos, datas de entrega e histórico das encomendas. A solução elimina consultas manuais, mantém os dados sincronizados e garante informações atualizadas para outros sistemas da empresa.",

  category: "Automação",

  tech: [
    "N8N",
    "PostgreSQL",
    "Correios API",
    "REST API",
    "Supabase",
    "Docker",
    "Cron Jobs",
  ],

  architecture: {
    style: "Processamento Batch Automatizado",
    model: "Banco de Dados → Servidor → API Externa",
    database: "PostgreSQL",
    backend: "N8N",
    execution: "Agendada"
  },

  metrics: {
    workflows: 1,
    nodes: 18,
    integrations: 2,
    users:5,
    automations: 10,
    modules: 1,
    tables: 1,
    attributes: 1,
  },

  modules: [
    "Consulta de Pedidos",
    "Validação de Rastreamento",
    "Integração Correios",
    "Atualização de Status",
    "Histórico Logístico",
    "Logs de Execução"
  ],

  integrations: [
    "PostgreSQL",
    "Correios API"
  ],

  automations: [
    "Execução automática agendada",
    "Consulta automática de pedidos",
    "Filtragem automática de códigos de rastreamento",
    "Consulta automática na API dos Correios",
    "Processamento automático de movimentações",
    "Atualização automática de status",
    "Atualização automática da data de entrega",
    "Registro automático de histórico",
    "Registro automático de logs",
    "Tratamento automático de falhas"
  ],

  workflow: [
    "Execução programada pelo servidor",
    "Consulta ao banco de dados",
    "Busca de pedidos com rastreamento",
    "Consulta na API dos Correios",
    "Processamento dos eventos logísticos",
    "Atualização dos registros",
    "Gravação dos logs"
  ],

  database: {
    tables: 3,
    attributes: 25,
    relationships: 4
  },

  responsibilities: [
    "Arquitetura da Automação",
    "Modelagem de Dados",
    "Desenvolvimento N8N",
    "Integração com API dos Correios",
    "Tratamento de Erros",
    "Monitoramento",
    "Deploy"
  ],

  benefits: [
    "Eliminação de consultas manuais",
    "Atualização automática das entregas",
    "Maior confiabilidade dos dados",
    "Redução de trabalho operacional",
    "Sincronização contínua das informações"
  ],

  status: "Em Produção",

  featured: true,

  live: "/projeto/5"
}
  ];

  return (
    <Routes>
      <Route path="/" element={<Home projetos={INITIAL_PROJECTS} setSelectedProject={setSelectedProject} />} />
      <Route path="/projeto/:id" element={<PageProject selectedProject={selectedProject} projetos={INITIAL_PROJECTS}/>} />
    </Routes>
  );
}

export default App;
  