import { motion } from "framer-motion";
import { ExternalLink, Github, Mail, Code, Layout, Smartphone } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "L'ASADO - Café Restaurant",
      desc: "Une expérience digitale luxueuse pour un établissement gastronomique à Meknès. Focus sur l'élégance et la fluidité.",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      link: "https://votre-lien-vercel.vercel.app", // حط هنا رابط Vercel ديالك
      github: "https://github.com/votre-username/asado-project", // حط هنا رابط GitHub
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" // تقدر تبدلها بسكرين شوت ديالك
    }
  ];

  return (
    <div className="min-h-screen bg-[#011627] text-white font-body">
      {/* Hero Section */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[#d97706] tracking-[0.3em] uppercase text-sm mb-4 block">Creative Developer</span>
          <h1 className="font-display text-5xl md:text-7xl font-light mb-8 italic">
            L'art de coder le <span className="text-[#d97706]">Prestige</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Spécialisé dans la création d'interfaces haut de gamme et d'expériences numériques immersives pour les marques d'exception.
          </p>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="font-display text-3xl mb-16 border-b border-white/10 pb-4 inline-block">Projets Sélectionnés</h2>
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-[40px] border border-white/10">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <h3 className="font-display text-4xl text-[#d97706] italic">{project.title}</h3>
                <p className="text-white/70 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-1 bg-white/5 rounded-full text-xs border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-6 pt-4">
                  <a href={project.link} target="_blank" className="flex items-center gap-2 hover:text-[#d97706] transition-colors">
                    <ExternalLink size={20} /> Preview
                  </a>
                  <a href={project.github} target="_blank" className="flex items-center gap-2 hover:text-[#d97706] transition-colors">
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-32 bg-black/30 text-center">
        <h2 className="font-display text-4xl mb-8">Prêt à lancer votre projet ?</h2>
        <a href="mailto:votre-email@gmail.com" className="inline-flex items-center gap-3 bg-[#d97706] px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-[#fbbf24] transition-all transform hover:-translate-y-1">
          <Mail size={18} /> Contactez-moi
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
