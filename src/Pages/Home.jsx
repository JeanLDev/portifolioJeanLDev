import Navbar from '../components/portifolio/Navbar';
import HeroSection from "../components/portifolio/HeroSection"
import AboutSection from '../components/portifolio/AboutSection';

import ProjectsSection from '../components/portifolio/ProjectsSection';
import ContactSection from '../components/portifolio/ContactSection';
import Footer from '../components/portifolio/Footer';

export default function Home({projetos, setSelectedProject}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection projetos={projetos}/>
      <ProjectsSection projetos={projetos} setSelectedProject={setSelectedProject}/>
    </div>
  );
}