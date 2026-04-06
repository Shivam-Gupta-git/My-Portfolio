import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

// Lazy load all sections for better performance
const AboutPage = lazy(() => import("./components/About"));
const ExperiencePage = lazy(() => import("./components/Experience"));
const EducationPage = lazy(() => import("./components/Education"));
const SkillsPage = lazy(() => import("./components/Skills"));
const TechStackPage = lazy(() => import("./components/ImageCards"));
const WorkPage = lazy(() => import("./components/Carousel"));
const GithubPage = lazy(() => import("./components/GithubStatus"));
const ContactPage = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-indigo-100 selection:text-indigo-800 scroll-smooth">
      <Navbar />
      
      <main className="w-full flex flex-col items-center">
        <section id="home" className="w-full">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-slate-50"><div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            <Home />
          </Suspense>
        </section>

        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <section id="about" className="w-full pt-12 text-center">
            <AboutPage />
          </section>

          <section id="experience" className="w-full pt-12">
            <ExperiencePage />
          </section>

          <section id="education" className="w-full pt-12">
            <EducationPage />
          </section>

          <section id="skills" className="w-full pt-12">
            <SkillsPage />
          </section>

          <section id="tech-stack" className="w-full pt-12">
            <TechStackPage />
          </section>

          <section id="work" className="w-full pt-12">
            <WorkPage />
          </section>

          <section id="github" className="w-full pt-12">
            <GithubPage />
          </section>

          <section id="contact" className="w-full pt-12">
            <ContactPage />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
