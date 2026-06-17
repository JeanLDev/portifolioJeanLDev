import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code, 
  Linkedin, 
  Github, 
  Instagram, 
  Send, 
  Boxes, 
  Server, 
  Palette, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Sliders, 
  Heart,
  Sparkles,
  Network,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';


// Imagens padrão do Unsplash para seleção na galeria
const IMAGE_OPTIONS = [
  { value: "https://wqkgxzpwzhblzunmjjnc.supabase.co/storage/v1/object/public/perfil/foto/perfil.png", label: "Retrato Feminino (Foco no Olhar)" },
  { value: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", label: "Retrato Masculino (Sorriso Amigável)" },
  { value: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600", label: "Retrato Moderno (Estilo Urbano)" },
  { value: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600", label: "Retrato Corporativo Criativo" }
];

const COLOR_OPTIONS = [
  { hex: '#2563EB', name: 'Azul Elétrico' },
  { hex: '#EC4899', name: 'Rosa Vibrante' },
  { hex: '#F59E0B', name: 'Amarelo Sol' },
  { hex: '#8B5CF6', name: 'Roxo Mágico' },
  { hex: '#0F172A', name: 'Mono Escuro' }
];

export default function App({projetos}) {
  // Estado para os dados personalizáveis do programador
  const [name, setName] = useState('Jean Lucas');
  const [title1, setTitle1] = useState('Programador');
  const [title2, setTitle2] = useState('Full-Stack');
  const [bio, setBio] = useState('Sou desenvolvedor de sistemas, formado em Análise e Desenvolvimento de Sistemas (ADS), especializado em Inteligência Artificial, automação de processos e aplicações web. Desenvolvo soluções tecnológicas que transformam dados e operações em experiências eficientes, ajudando empresas a reduzir custos, aumentar a produtividade e acelerar seu crescimento por meio da inovação. Atuo em todas as etapas do desenvolvimento de software, desde a arquitetura e modelagem de banco de dados até a implementação de interfaces modernas, integrações, automações e sistemas inteligentes. Meu foco é criar soluções escaláveis, seguras e orientadas a resultados, combinando tecnologia, estratégia e experiência do usuário para gerar valor real aos negócios.');
  const [imageUrl, setImageUrl] = useState(IMAGE_OPTIONS[0].value);
  const [brandColor, setBrandColor] = useState('#2563EB'); // Cor primária ativa
  const [customizerExpanded, setCustomizerExpanded] = useState(true);

  // Estilos auxiliares baseados na cor escolhida dinamicamente
  const dynamicTextColor = { color: brandColor };
  const dynamicBgColor = { backgroundColor: brandColor };
  const dynamicBorderColor = { borderColor: brandColor };
  const dynamicTextDecorationColor = { textDecorationColor: brandColor };
  const dynamicNeoShadowBlue = {
    boxShadow: `6px 6px 0px ${brandColor}`,
  };

  return (
    <div className="bg-[#EFF3F6] text-[#0F172A] font-sans min-h-screen selection:bg-opacity-30 p-4 md:p-6 lg:p-8 overflow-x-hidden">
      
      {/* Estilos CSS específicos para efeitos e animações */}
      <style>{`
        .neo-border {
          border: 2px solid #0F172A;
        }
        .neo-shadow {
          box-shadow: 4px 4px 0px #0F172A;
        }
        .neo-shadow-lg {
          box-shadow: 8px 8px 0px #0F172A;
        }
        .badge-spin {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER / NAVBAR */}
        <header className="bg-white neo-border rounded-2xl p-4 mb-6 flex justify-between items-center neo-shadow">
          <div class="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tighter text-[#0F172A]">
              {name.substring(0, 4)}<span style={dynamicTextColor}>.</span>
            </span>
          </div>
          
          <div>
            <a 
              href="https://wa.me/5571981298548?text=Olá!%20Vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
              target='_blank'
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-bold  tracking-wider hover:scale-105 transition-all duration-300"
              style={dynamicBgColor}
            >
              Vamos Conversar <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* SECÇÃO PRINCIPAL (GRID DO HERO) */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* COLUNA ESQUERDA: APRESENTAÇÃO E FOTO */}
          <section className="lg:col-span-7 bg-white neo-border rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between neo-shadow-lg min-h-[600px] lg:min-h-[700px]">
            
            {/* Elemento Rotativo "Let's Rock & Roll" */}
            <div className="absolute top-8 right-8 hidden md:block select-none z-10">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full badge-spin" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[8px] font-bold fill-[#0F172A] tracking-[0.2em] ">
                    <textPath href="#circlePath">⚡ automation ⚡ code  ⚡ fullstack ⚡ coffee </textPath>
                  </text>
                </svg>
                <div className="absolute text-white w-10 h-10 rounded-full flex items-center justify-center neo-border" style={dynamicBgColor}>
                  <Code className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Título Principal */}
            <div className="space-y-4 pt-4 z-10">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-[#0F172A]">
                <span>{title1}</span> <br />
                <span style={dynamicTextColor}>{title2}</span> <br />
                <span className="flex items-center gap-3">
                  <span className='text-[#F59E0B]'>Automações</span>
                  <span className="inline-block animate-pulse" style={dynamicTextColor}>
                   
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span>& muito mais</span>
                  <span className="inline-block animate-pulse" style={dynamicTextColor}>
                    <Sparkles className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
                  </span>
                </span>
              </h1>
              
              <button className="text-white px-4 py-2 text-xs font-bold  tracking-widest rounded-lg neo-border neo-shadow hover:translate-y-0.5 transition-all" style={dynamicBgColor}>
                Disponível para Projetos
              </button>
            </div>

            {/* Secção Central: Foto do Programador */}
            <div className="my-8 relative flex justify-center items-center">
              {/* Brilho de Fundo Colorido */}
              <div 
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full filter blur-xl opacity-20 pointer-events-none"
                style={dynamicBgColor}
              ></div>
              
              {/* Moldura da Foto */}
              <div 
                className="relative w-56 h-64 md:w-64 md:h-72 bg-[#0F172A] rounded-2xl overflow-hidden neo-border transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10"
                style={dynamicNeoShadowBlue}
              >
                <img 
                  src={imageUrl} 
                  alt={`Fotografia de perfil de ${name}`} 
                  className="w-full h-full object-cover grayscale-0 contrast-125 hover:grayscale transition-all duration-500"
                />
                <div className="absolute bottom-2 right-2 bg-white text-[#0F172A] font-bold text-xs px-2 py-1 rounded border border-[#0F172A]">
                  JEANLDEV
                </div>
              </div>
            </div>

            {/* Rodapé da Coluna Esquerda: Bio e Redes Sociais */}
            <div className="border-t-2 border-dashed border-slate-200 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
              <div className="space-y-2 max-w-md">
                <p className="text-sm font-bold  tracking-widest flex items-center gap-2" style={dynamicTextColor}>
                  <span>👋</span>Olá, o meu nome é
                </p>
                <h2 className="text-3xl font-extrabold text-[#0F172A]">{name}</h2>
                <p className="text-md text-slate-600 leading-relaxed font-medium">
                  {bio}
                </p>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/jean-lucas-86314225b/" target='_blank' className="w-10 h-10 bg-white rounded-lg neo-border flex items-center justify-center  transition-all hover:-translate-y-1" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/JeanLDev" target='_blank' class="w-10 h-10 bg-white rounded-lg neo-border flex items-center justify-center  transition-all hover:-translate-y-1" title="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/jeanldev/" target='_blank' className="w-10 h-10 bg-white rounded-lg neo-border flex items-center justify-center  transition-all hover:-translate-y-1" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                
                {/* Enviar Mensagem */}
                <div className="relative group ml-2">
                  <a 
                  href="https://wa.me/5571981298548?text=Olá!%20Vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
                  target='_blank'
                  className="w-14 h-14 bg-[#0F172A] text-white rounded-full flex items-center justify-center border-2 border-[#0F172A] neo-shadow hover:scale-110 active:scale-95 transition-all">
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* COLUNA DIREITA: SERVIÇOS E CRIACÕES */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            
            {/* SERVIÇOS */}
            <div className="bg-white neo-border rounded-3xl p-6 neo-shadow-lg flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-black  tracking-widest" style={dynamicTextColor}>As Minhas Soluções</h3>
                </div>
                <h4 className="text-xl font-bold text-[#0F172A]">
                  Especializado em sistemas web, integrações e inteligência artificial.
                </h4>
                
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-brandBlue transition-colors flex items-center gap-4">
                    <div className="w-10 h-10 text-white rounded-lg flex items-center justify-center neo-border" style={dynamicBgColor}>
                      <Boxes className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#0F172A]">Desenvolvimento Front-End</h5>
                      <p className="text-xs text-slate-500">React, Tailwind CSS, NextJS e interfaces animadas.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-brandBlue transition-colors flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#10B981] text-white rounded-lg flex items-center justify-center neo-border">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#0F172A]">Sistemas Back-End & APIs</h5>
                      <p className="text-xs text-slate-500">NodeJS, GraphQL, REST APIs e segurança de dados.</p>
                    </div>
                  </div>

                 <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-brandBlue transition-colors flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] text-white rounded-lg flex items-center justify-center neo-border">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#0F172A]">Inteligência Artificial</h5>
                      <p className="text-xs text-slate-500">
                        Assistentes inteligentes, automações e integração com modelos de IA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500  tracking-wider">Quer algo personalizado?</span>
                <a href="mailto:Lucas__jean@outlook.com" 
                className="text-sm bg-blue-700 rounded-xl p-4 text-white font-bold flex items-center gap-1 hover:underline" >
                Fale comigo <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CRIACÕES / PROJETOS */}
            <div className="bg-[#0F172A] text-white neo-border rounded-3xl p-6 neo-shadow-lg flex-1 flex flex-col justify-between relative overflow-hidden">
              <div 
                className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full opacity-10 filter blur-xl"
                style={dynamicBgColor}
              ></div>
              
              <div className="space-y-4 z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold  tracking-widest" style={dynamicTextColor}>Criações em Destaque</h3>
                  <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full neo-border" style={dynamicBgColor}>Novo</span>
                </div>
                <h4 class="text-xl font-bold">Explora as minhas melhores obras de arte digital.</h4>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                  to={'/projeto/0'}
                  >
                    <div className="group relative bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all cursor-pointer">
                      <div className="aspect-video w-full bg-slate-800 overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                          alt="Projeto ERP Modular"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                      </div>
                      <div className="p-2">
                        <h5 className="text-sm font-bold truncate">Plataforma de Gestão Empresarial Integrada (ERP Modular)</h5>
                        <p className="text-xs text-slate-400">PostgreSQL / React / N8N</p>
                      </div>
                    </div>
                  </Link>

                  <div className="group relative bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all cursor-pointer">
                    <div className="aspect-video w-full bg-slate-800 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                        alt="FinTech App" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                    </div>
                    <div className="p-2">
                      <h5 className="text-sm font-bold truncate">NAIG</h5>
                      <p className="text-xs text-slate-400">IA / React / Supabase</p>
                    </div>
                  </div>
                </div>



              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between z-10">
                <span className="text-xs font-bold text-slate-400  tracking-wider">A mostrar 2 de {projetos?.length} projetos</span>
              </div>
            </div>

          </aside>
          {/* PAINEL DE PERSONALIZAÇÃO INTERATIVO */}
        <div className="hidden fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white neo-border rounded-2xl p-4 shadow-2xl z-50 transform hover:scale-[1.01] transition-transform duration-300 neo-shadow">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <Sliders className="w-4 h-4" style={dynamicTextColor} />
            <h4 className="text-xs font-extrabold  tracking-wider">Painel de Customização</h4>
          </div>
          <button onClick={() => setCustomizerExpanded(!customizerExpanded)} className="text-slate-400 hover:text-slate-900 transition-colors">
            {customizerExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
        
        {customizerExpanded && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-xs  text-slate-500 mb-1">O Teu Nome</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none font-medium text-[#0F172A]"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-xs  text-slate-500 mb-1">Título Linha 1</label>
                <input 
                  type="text" 
                  value={title1} 
                  onChange={(e) => setTitle1(e.target.value)} 
                  className="w-full p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none font-medium text-[#0F172A]"
                />
              </div>
              <div>
                <label className="block font-bold text-xs  text-slate-500 mb-1">Título Linha 2</label>
                <input 
                  type="text" 
                  value={title2} 
                  onChange={(e) => setTitle2(e.target.value)} 
                  className="w-full p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none font-medium text-[#0F172A]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-xs  text-slate-500 mb-1">Biografia Curta</label>
              <textarea 
                value={bio} 
                onChange={(e) => setBio(e.target.value)} 
                rows={2} 
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none font-medium resize-none text-[#0F172A]"
              />
            </div>

            <div>
              <label className="block font-bold text-xs  text-slate-500 mb-1">Escolher Foto de Perfil</label>
              <select 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none font-medium text-[#0F172A]"
              >
                {IMAGE_OPTIONS.map((opt, i) => (
                  <option key={i} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-xs  text-slate-500 mb-1">Paleta de Cores do Portfólio</label>
              <div className="pt-1 flex gap-2">
                {COLOR_OPTIONS.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setBrandColor(color.hex)} 
                    className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 ${brandColor === color.hex ? 'border-black' : 'border-transparent'}`} 
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        </div>
        </main>
        
      </div>


    </div>
  );
}