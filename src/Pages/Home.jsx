import Navbar from '../components/portifolio/Navbar';
import HeroSection from "../components/portifolio/HeroSection"
import AboutSection from '../components/portifolio/AboutSection';

import ProjectsSection from '../components/portifolio/ProjectsSection';
import ContactSection from '../components/portifolio/ContactSection';
import Footer from '../components/portifolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}