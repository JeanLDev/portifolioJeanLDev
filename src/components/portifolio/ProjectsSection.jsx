import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Plus, 
  Search, 
  Star, 
  Code2, 
  Sparkles, 
  Layers, 
  Flame, 
  Cpu, 
  TrendingUp, 
  Grid, 
  Filter, 
  Trash2, 
  X,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// TOKENS DE CORES DE MARCA (BRAND COLORS)
// ==========================================
const BRAND_THEMES = {
  blue: { id: 'blue', hex: '#2563EB', name: 'Azul Elétrico', bg: 'bg-[#2563EB]', border: 'border-[#2563EB]' },
  orange: { id: 'orange', hex: '#F97316', name: 'Laranja Flame', bg: 'bg-[#F97316]', border: 'border-[#F97316]' },
  yellow: { id: 'yellow', hex: '#FACC15', name: 'Amarelo Figma', bg: 'bg-[#FACC15]', border: 'border-[#FACC15]' },
  pink: { id: 'pink', hex: '#EC4899', name: 'Rosa Cyberpunk', bg: 'bg-[#EC4899]', border: 'border-[#EC4899]' },
  green: { id: 'green', hex: '#22C55E', name: 'Verde Radiação', bg: 'bg-[#22C55E]', border: 'border-[#22C55E]' },
};

// ==========================================
// DADOS INICIAIS DE PROJETOS (MOCK DATA)
// ==========================================


export default function App({projetos, setSelectedProject}) {
  // Estado global para guardar a cor de destaque ativa
  const [activeTheme, setActiveTheme] = useState(BRAND_THEMES.blue);
  
  // Estado dos projetos e filtros
  const [projects, setProjects] = useState(projetos);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  // Estados para abrir o formulário de novo projeto
  const [showModal, setShowModal] = useState(false);
  
  // Estado do formulário de novo projeto
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "Front-end",
    tech: "",
    progress: 50,
    github: "",
    live: "",
    status: "Em Desenvolvimento"
  });

  // Categorias únicas dos projetos para o filtro
  const categories = useMemo(() => {
    const list = new Set(projects.map(p => p.category));
    return ["Todos", ...Array.from(list)];
  }, [projects]);

  // Lista filtrada de projetos de acordo com pesquisa e categoria
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                            project.tech.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
                            project.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [projects, search, selectedCategory]);

  // Estatísticas dinâmicas dos projetos carregados
  const stats = useMemo(() => {
    return {
      total: projects.length,
      stars: projects.reduce((acc, curr) => acc + curr.stars, 0),
      completed: projects.filter(p => p.progress === 100).length,
      avgProgress: Math.round(projects.reduce((acc, curr) => acc + curr.progress, 0) / (projects.length || 1))
    };
  }, [projects]);

  // Função para dar "Star/Favorito"
  const toggleStar = (projectId) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return { ...p, stars: p.stars + 1 };
      }
      return p;
    }));
  };

  // Remover um projeto
  const deleteProject = (projectId) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
  };

  // Submeter o novo projeto
  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.description.trim()) return;

    const techArray = newProject.tech
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    const projectToAdd = {
      id: Date.now(),
      title: newProject.title,
      description: newProject.description,
      category: newProject.category,
      tech: techArray.length > 0 ? techArray : ["React"],
      stars: 0,
      status: newProject.status,
      progress: Number(newProject.progress),
      github: newProject.github || "github.com",
      live: newProject.live,
      featured: false
    };

    setProjects([projectToAdd, ...projects]);
    setShowModal(false);
    
    // Limpar formulário
    setNewProject({
      title: "",
      description: "",
      category: "Front-end",
      tech: "",
      progress: 50,
      github: "",
      live: "",
      status: "Em Desenvolvimento"
    });
  };

  return (
    <div className="min-h-screen bg-[#EFF3F6] text-[#0F172A] font-sans p-4 sm:p-6 md:p-8 selection:bg-black selection:text-white">
      
      {/* ==========================================
          HEADER / CABEÇALHO DO DASHBOARD
          ========================================== */}
      <header className="hidden max-w-7xl mx-auto mb-8 bg-white border-2 border-[#0F172A] rounded-2xl p-6 shadow-[6px_6px_0px_#0F172A] transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`h-4 w-4 rounded-full ${activeTheme.bg} border-2 border-[#0F172A]`} />
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                PROJETOS DE ENGENHARIA / PORTFÓLIO
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] flex items-center gap-2">
              ROOT<span className="text-stroke-3">_</span>LABS <FolderGit2 className="h-8 w-8 text-black" />
            </h1>
            <p className="text-sm font-semibold text-slate-500 mt-1">
              Repositório de projetos open-source e protótipos experimentais.
            </p>
          </div>

          {/* Seletor de Cores de Destaque Dinâmicas (Brutalist Playground) */}
          <div className="bg-[#EFF3F6] border-2 border-[#0F172A] rounded-xl p-3 shadow-[4px_4px_0px_#0F172A]">
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500 mb-2">
              Escolher Accent Color (Neo-Brutalismo):
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.values(BRAND_THEMES).map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`px-3 py-1 text-xs font-extrabold rounded-md border-2 border-[#0F172A] transition-all duration-150 flex items-center gap-1.5
                    ${activeTheme.id === theme.id 
                      ? `${theme.bg} text-white shadow-[2px_2px_0px_#0F172A] -translate-x-0.5 -translate-y-0.5` 
                      : 'bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#0F172A] active:translate-y-0'}`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full border border-black ${theme.bg}`} />
                  {theme.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================
          PAINEL DE ESTATÍSTICAS (Métricas de Eng.)
          ========================================== */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        
        {/* Card Estatística 1 */}
        <div className="bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_#0F172A] flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
          <div className="p-3 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-xl">
            <Code2 className="h-6 w-6 text-[#0F172A]" />
          </div>
          <div>
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Total Projetos</span>
            <span className="text-2xl font-black">{stats.total}</span>
          </div>
        </div>


        {/* Card Estatística 3 */}
        <div className="bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_#0F172A] flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
          <div className="p-3 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-xl">
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Concluídos</span>
            <span className="text-2xl font-black">{stats.completed}</span>
          </div>
        </div>

        {/* Card Estatística 4 */}
        <div className="bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_#0F172A] flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
          <div className="p-3 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-xl">
            <TrendingUp className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Progresso Médio</span>
            <span className="text-2xl font-black">{stats.avgProgress}%</span>
          </div>
        </div>

      </section>

      {/* ==========================================
          BARRA DE AÇÕES (Pesquisa, Filtros e Add)
          ========================================== */}
      <section className="max-w-7xl mx-auto mb-8 bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_#0F172A] flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Barra de Pesquisa */}
        <div className="relative w-full lg:w-1/3">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar por nome, tecnologia..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0F172A] placeholder-slate-400"
          />
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Categoria:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-lg border-2 border-[#0F172A] transition-all duration-150
                ${selectedCategory === cat
                  ? `bg-[#0F172A] text-white shadow-[2px_2px_0px_#EFF3F6]`
                  : 'bg-[#EFF3F6] text-[#0F172A] hover:bg-white hover:-translate-y-0.5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* ==========================================
          GRELHA DE CARTÕES DE PROJETO (GRID)
          ========================================== */}
      <main className="max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="bg-white border-2 border-[#0F172A] rounded-2xl p-12 text-center shadow-[4px_4px_0px_#0F172A]">
            <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-[#0F172A] mb-1">Nenhum projeto encontrado</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">Experimenta limpar os filtros ou realizar outra pesquisa.</p>
            <button
              onClick={() => { setSearch(""); setSelectedCategory("Todos"); }}
              className="px-4 py-2 bg-[#EFF3F6] text-[#0F172A] border-2 border-[#0F172A] font-bold rounded-lg hover:bg-white transition-all duration-200"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-white border-2 border-[#0F172A] rounded-2xl p-6 shadow-[6px_6px_0px_#0F172A] hover:shadow-[8px_8px_0px_#0F172A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative group"
              >
                {/* Badge de Destaque / Estrela Topo Direito */}
                {project.progress === 100 && (
                  <div className="absolute top-4 right-4 bg-emerald-100 border border-emerald-500 text-emerald-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    CONCLUÍDO ✅
                  </div>
                )}
                {project.progress < 100 && (
                  <div className="absolute top-4 right-4 bg-orange-100 border border-orange-400 text-orange-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    DESENVOLVIMENTO ⚡
                  </div>
                )}

                <div>
                  {/* Categoria do Projeto */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <span 
                      style={{ backgroundColor: activeTheme.hex }}
                      className="w-2.5 h-2.5 rounded-full border border-[#0F172A]"
                    />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Título do Projeto */}
                  <h2 className="text-2xl font-black mb-2 text-[#0F172A] group-hover:text-black">
                    {project.title}
                  </h2>

                  {/* Descrição */}
                  <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-8">
                    {project.shortDescription}
                  </p>

                  {/* Tecnologias Utilizadas (Badge Neo-Brutalista) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((technology, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-xs font-bold bg-[#EFF3F6] text-[#0F172A] border-2 border-[#0F172A] rounded-md shadow-[2px_2px_0px_#0F172A]"
                      >
                        #{technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secção Inferior: Progresso e Ações */}
                <div className="mt-auto border-t-2 border-[#0F172A] pt-4">
                  {/* Barra de Progresso Customizada (Neo-Brutalista) */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">
                      <span>Progresso do Sprint</span>
                      <span>{project.progress}%</span>
                    </div>
                    {/* Canaleta de Progresso */}
                    <div className="h-4 w-full bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg overflow-hidden relative">
                      <div 
                        style={{ 
                          width: `${project.progress}%`,
                          backgroundColor: activeTheme.hex
                        }} 
                        className="h-full border-r-2 border-[#0F172A] transition-all duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* Botões de Ação Dinâmicos */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Link GitHub */}
                      {project.github && (
                        <a
                          href={`https://${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A] hover:bg-[#EFF3F6] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
                          title="Ver Código Fonte"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}

                      {/* Link Live Preview */}
                      {project.live && (
                        <Link
                          to={project.live}
                          onClick={()=> setSelectedProject(project)}
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-white border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A] hover:bg-[#EFF3F6] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all flex items-center gap-1 text-xs font-bold"
                        >
                          <span>Live</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* ==========================================
          MODAL DE NOVO PROJETO (INLINE PORTAL)
          ========================================== */}
      {showModal && (
        <div className="hidden fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white border-4 border-[#0F172A] rounded-2xl max-w-xl w-full p-6 shadow-[8px_8px_0px_#0F172A] relative overflow-y-auto max-h-[90vh]"
            style={{ borderLeftColor: '#0F172A', borderTopColor: '#0F172A' }}
          >
            {/* Fechar Modal */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 bg-white border-2 border-[#0F172A] rounded-lg shadow-[2px_2px_0px_#0F172A] hover:bg-[#EFF3F6] active:translate-y-0.5 active:shadow-none"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6" style={{ color: activeTheme.hex }} />
              <h3 className="text-2xl font-black uppercase tracking-tight">Criar Novo Projeto</h3>
            </div>
            
            <form onSubmit={handleSubmitProject} className="space-y-4">
              
              {/* Título */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                  Nome do Projeto <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="Ex: Aura Compiler"
                  className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                  Descrição Curta <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows="3"
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="Explica resumidamente o foco do projeto..."
                  className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              {/* Grid de Inputs Duplos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Categoria */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    Categoria
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                    className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-bold focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="Sistemas">Sistemas</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>

                {/* Tecnologias */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    Tecnologias (Separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                    placeholder="React, Rust, WASM"
                    className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

              </div>

              {/* Repositórios e Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* GitHub */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    Link GitHub (URL)
                  </label>
                  <input
                    type="text"
                    value={newProject.github}
                    onChange={(e) => setNewProject({...newProject, github: e.target.value})}
                    placeholder="github.com/utilizador/repo"
                    className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                {/* Live Preview */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    Link Live (Opcional)
                  </label>
                  <input
                    type="text"
                    value={newProject.live}
                    onChange={(e) => setNewProject({...newProject, live: e.target.value})}
                    placeholder="projeto.io"
                    className="w-full px-3 py-2 bg-[#EFF3F6] border-2 border-[#0F172A] rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

              </div>

              {/* Slider de Progresso Brutalista */}
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                  <span>Progresso Atual</span>
                  <span className="font-extrabold text-[#0F172A]">{newProject.progress}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newProject.progress}
                  onChange={(e) => setNewProject({...newProject, progress: e.target.value})}
                  className="w-full accent-[#0F172A] cursor-ew-resize bg-[#EFF3F6] h-3 rounded-lg border-2 border-[#0F172A]"
                />
              </div>

              {/* Botões de Ação do Formulário */}
              <div className="flex justify-end gap-3 pt-4 border-t-2 border-[#0F172A]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-white text-[#0F172A] border-2 border-[#0F172A] font-extrabold rounded-lg hover:bg-[#EFF3F6] transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{ 
                    backgroundColor: activeTheme.hex,
                    boxShadow: '4px 4px 0px #0F172A'
                  }}
                  className="px-5 py-2 text-white border-2 border-[#0F172A] font-black rounded-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                >
                  PUBLICAR PROJETO
                </button>
              </div>

            </form>
          </div>
        </div>
      )}


    </div>
  );
}