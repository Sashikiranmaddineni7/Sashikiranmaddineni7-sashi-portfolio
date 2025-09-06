import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, ArrowRight, Download, Brain, Database, 
         Code, BarChart3, Mail, Phone, MapPin, Github, Linkedin, 
         ExternalLink, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

    const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        duration: 1200
      });

      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Machine Learning', level: 91, category: 'AI/ML' },
    { name: 'SQL', level: 98, category: 'Database' },
    { name: 'Data Engineering', level: 89, category: 'Engineering' },
    { name: 'Statistical Analysis', level: 93, category: 'Analytics' },
    { name: 'Deep Learning', level: 86, category: 'AI/ML' },
    { name: 'Gen AI', level: 92, category: 'AI/ML' },
    { name: 'TensorFlow', level: 88, category: 'Framework' },
    { name: 'PyTorch', level: 89, category: 'Framework' },
  ];

  const projects = [
  {
    title: "NLP Query System",
    description: "Built an NLP system with LLM architecture and advanced RAG integrated with knowledge graphs, achieving 92% query understanding accuracy.",
    tech: ["PyTorch", "Llama3", "RAG", "LangChain", "FastAPI", "Weaviate"],
    category: "NLP / Knowledge Graphs",
    status: "Research",
    year: "2024"
  },
  {
    title: "Cryptocurrency Market Analysis Engine",
    description: "Modeled market relationships as graph structures with Gini and Kolkata indices, improving cryptocurrency price prediction accuracy by 25%.",
    tech: ["Python", "Machine Learning", "Statistical Analysis"],
    category: "Machine Learning",
    status: "Research",
    year: "2023"
  },
  {
    title: "ALFA – Agentic AI Agent",
    description: "Built an AI Agent with LangGraph using Copilot to secure data, enable NL queries, integrate REST APIs, and enforce RBAC/guardrails.",
    tech: ["LangGraph", "Django", "GitHub Copilot", "REST APIs", "LLMs"],
    category: "AI/ML Agents",
    status: "Prototype",
    year: "2024"
  },
  {
    title: "End-to-End Data Management Pipeline",
    description: "Designed a pipeline processing 100GB+ healthcare claims data using Hadoop/Spark/Hive, cutting payment collection time & achieving 95% accuracy.",
    tech: ["Azure", "Hadoop", "PySpark", "Cosmos DB", "Snowflake"],
    category: "Big Data",
    status: "Production",
    year: "2022"
  }
];

const experience = [
  {
    title: "Machine Learning Engineer",
    company: "Vosyn",
    period: "Feb 2025 – Present",
    description: "Developed entity-level connections between LLM outputs to enrich knowledge graph structures, trained models on GCP with PyTorch, and deployed pipelines on Kubernetes Cloud Run integrated with GCS. Optimized serving with FastAPI, improving latency by 30%.",
    technologies: ["Python", "PyTorch", "Vertex AI", "GCP", "Kubernetes", "FastAPI"]
  },
  {
    title: "AI Intern / Open Source Contributor",
    company: "Tublian",
    period: "Mar 2024 – Jun 2024",
    description: "Fine-tuned Llama3 chatbot with entity recognition and semantic matching for knowledge-based query resolution. Designed scalable ML models with 90% deployment success and built an AI-powered SQL agent using Copilot for knowledge-driven retrieval.",
    technologies: ["Llama3", "LangChain", "TensorFlow", "Copilot", "Docker"]
  },
  {
  title: "Programmer Analyst / Data Scientist",
  company: "Cognizant Technology & Solutions",
  period: "Mar 2021 – Dec 2022",
  description: "Built ETL pipelines with Python/Spark (98.7% accuracy), developed predictive models (XGBoost, Random Forest, TensorFlow) improving KPI forecasting by 20%, optimized real-time processing with PySpark & Kafka, delivered insights via Power BI, and mentored 3 juniors improving team productivity by 40%.",
  technologies: ["Python", "SQL", "PySpark", "TensorFlow", "XGBoost", "Random Forest", "Kafka", "Power BI", "Pandas", "NumPy", "Jira"]
 }
];

  const certifications = [
    {
      title: "AWS Certified Machine Learning Professional",
      issuer: "Amazon Web Services",
      date: "Dec 2024 - Dec 2027",
      credential: "AWS-MLP-2024-123456",
      link: "https://www.credly.com/badges/01088d2e-8e5a-4c51-aa53-6858300a0bc9/public_url",
      icon: <Award className="w-5 h-5" />,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle Cloud",
      date: "2023",
      credential: "OCI-GAI-2023-004321",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1325C6B8A4B72A002076BD89C9E8A2AFAEF7584B0F07E2128BCA36A648B35F3E",
      icon: <Database className="w-5 h-5" />,
      color: "from-red-400 to-orange-500"
    },
    {
      title: "IBM Certified Data Scientist Professional",
      issuer: "IBM-Coursera",
      date: "2024",
      credential: "IBM-DS-2024-009012",
      link: "#",
      icon: <Brain className="w-5 h-5" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      date: "2022",
      credential: "CAP-2022-003456",
      link: "#",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-green-400 to-teal-500"
    },
  ];

  // Theme system
  const theme = {
    bg: {
      primary: isDarkMode ? 'bg-gray-900' : 'bg-white',
      secondary: isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50',
      card: isDarkMode ? 'bg-gray-800/80' : 'bg-white',
      overlay: isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
    },
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      muted: isDarkMode ? 'text-gray-400' : 'text-gray-500'
    },
    border: {
      primary: isDarkMode ? 'border-gray-700' : 'border-gray-200',
      secondary: isDarkMode ? 'border-gray-600' : 'border-gray-300'
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${theme.bg.primary} ${theme.text.primary}`}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * { font-family: 'Inter', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .skill-bar {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-up {
          animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .html {
        scroll-behavior: smooth;
        scroll-duration: 1200ms;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        /* === Added from reference for sliding effects === */
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }

        .animate-slide-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }

        .animate-on-scroll { opacity: 0; transform: translateY(30px); }
        .animate-visible { opacity: 1; transform: translateY(0); transition: all 0.6s ease-out; }

        .mesh-background {
        background-color: ${isDarkMode ? '#111827' : '#ffffff'};
        background-image: 
      radial-gradient(at 40% 20%, ${isDarkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 80% 0%, ${isDarkMode ? 'rgba(168, 85, 247, 0.08)' : 'rgba(168, 85, 247, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 0% 50%, ${isDarkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 80% 50%, ${isDarkMode ? 'rgba(168, 85, 247, 0.08)' : 'rgba(168, 85, 247, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 0% 100%, ${isDarkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 80% 100%, ${isDarkMode ? 'rgba(168, 85, 247, 0.08)' : 'rgba(168, 85, 247, 0.1)'} 0px, transparent 50%),
      radial-gradient(at 0% 0%, ${isDarkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.1)'} 0px, transparent 50%);
    background-size: 200% 200%;
    animation: meshGradient 15s ease-in-out infinite;
  }

  @keyframes meshGradient {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? `${theme.bg.overlay} backdrop-blur-md shadow-xl ${theme.border.primary} border-b` : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold gradient-text">
              Sashi Kiran
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    activeSection === item 
                      ? `${theme.text.primary} border-b-2 border-blue-500` 
                      : `${theme.text.secondary} hover:${theme.text.primary}`
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme.bg.card} ${theme.border.primary} border`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/20"
            >
              {isMobileMenuOpen ? 
                <X className="w-6 h-6" /> : 
                <Menu className="w-6 h-6" />
              }
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4">
              {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 capitalize text-sm font-medium transition-all duration-300 ${
                    activeSection === item 
                      ? `${theme.text.primary} bg-gray-800/20` 
                      : `${theme.text.secondary} hover:${theme.text.primary}`
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-700">
                <button
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 text-sm font-medium ${theme.text.secondary}`}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-blue-600" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-25 flex justify-center">
              <div className="relative inline-block animate-fade-in">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl">
                  <img 
                  src={process.env.PUBLIC_URL + '/Images/Myimage.jpeg'}        
                  alt="Sashi Kiran"
                  className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
               <div className={`w-full h-full rounded-full ${theme.bg.card} items-center justify-center hidden`}>
                <User className="w-20 h-20 text-blue-500" />
                </div>
              </div>
  </div>
  </div>

            {/* Hero Text */}
            <div className="space-y-8">
              <div className="slide-up stagger-1">
                <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight">
                  <span className="gradient-text">Sashi Kiran</span>
                  <br />
                  <span className={theme.text.primary}>Full stack ML Engineer</span>
                </h1>
              </div>
              
              <div className="slide-up stagger-2">
                <p className={`text-xl lg:text-2xl ${theme.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
                  AI/ML Engineer with <span className="font-semibold text-blue-500">3+ years</span> of experience 
                  transforming complex data challenges into scalable AI solutions
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-12 slide-up stagger-3">
                {['ML Engineering', 'Data Science', 'AI Solutions', 'Analytics'].map((tag) => (
                  <span key={tag} className={`px-6 py-3 ${theme.bg.card} ${theme.border.primary} border rounded-full text-sm font-medium ${theme.text.secondary} hover:scale-105 transition-all`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up stagger-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className={`inline-flex items-center gap-2 px-8 py-4 ${theme.bg.card} ${theme.border.primary} border ${theme.text.primary} rounded-full font-semibold hover:scale-105 transition-all`}>
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 ${theme.bg.secondary}`} data-animate>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${visibleElements.has('about') ? 'animate-slide-left' : 'animate-on-scroll'}`}>
              <div>
                <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('about') ? 'animate-slide-up' : 'animate-on-scroll'}`}>About Me</h2>
                <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 ${visibleElements.has('about') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
              </div>
              
              <p className={`text-lg ${theme.text.secondary} leading-relaxed ${visibleElements.has('about') ? 'animate-fade-in' : 'animate-on-scroll'}`}>
                I'm a dedicated machine learning engineer who thrives on building intelligent systems that solve real-world problems. 
                My expertise spans the entire ML lifecycle, from data engineering to model deployment and monitoring.
              </p>
              
              <p className={`text-lg ${theme.text.secondary} leading-relaxed ${visibleElements.has('about') ? 'animate-fade-in stagger-2' : 'animate-on-scroll'}`}>
                Currently focused on developing scalable AI solutions and contributing to open-source projects. 
                I believe in the transformative power of data-driven decision making.
              </p>

              <div className={`grid grid-cols-2 gap-6 ${visibleElements.has('about') ? 'animate-slide-up' : 'animate-on-scroll'}`}>
                <div>
                  <div className={`text-3xl font-bold ${theme.text.primary} mb-2`}>3+</div>
                  <div className={`text-sm ${theme.text.muted} uppercase tracking-wide`}>Years Experience</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme.text.primary} mb-2`}>15+</div>
                  <div className={`text-sm ${theme.text.muted} uppercase tracking-wide`}>Projects Completed</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme.text.primary} mb-2`}>4</div>
                  <div className={`text-sm ${theme.text.muted} uppercase tracking-wide`}>Certifications</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme.text.primary} mb-2`}>94%</div>
                  <div className={`text-sm ${theme.text.muted} uppercase tracking-wide`}>Model Accuracy</div>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-6 ${visibleElements.has('about') ? 'animate-slide-right' : 'animate-on-scroll'}`}>
              {[
                { icon: Brain, title: 'Machine Learning', desc: 'Advanced ML algorithms and model optimization' },
                { icon: Database, title: 'Data Engineering', desc: 'Scalable data pipelines and infrastructure' },
                { icon: Code, title: 'AI Development', desc: 'End-to-end AI solution architecture' },
                { icon: BarChart3, title: 'Analytics', desc: 'Statistical analysis and business insights' }
              ].map((item, idx) => (
                <div key={item.title} className={`${theme.bg.card} p-6 rounded-2xl ${theme.border.primary} border card-hover shadow-lg ${visibleElements.has('about') ? `animate-slide-up stagger-${(idx % 4) + 1}` : 'animate-on-scroll'}`}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${theme.text.primary}`}>{item.title}</h3>
                  <p className={`text-sm ${theme.text.muted} leading-relaxed`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32" data-animate>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('skills') ? 'animate-slide-up' : 'animate-on-scroll'}`}>Skills & Expertise</h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 ${visibleElements.has('skills') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
            <p className={`text-xl ${theme.text.secondary} max-w-2xl mx-auto ${visibleElements.has('skills') ? 'animate-fade-in' : 'animate-on-scroll'}`}>
              Comprehensive technical skills across the modern data science and machine learning stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`${theme.bg.card} p-8 rounded-2xl ${theme.border.primary} border card-hover shadow-lg ${visibleElements.has('skills') ? `animate-slide-up stagger-${(index % 4) + 1}` : 'animate-on-scroll'}`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className={`font-semibold text-lg ${theme.text.primary}`}>{skill.name}</h3>
                    <p className={`text-sm ${theme.text.muted}`}>{skill.category}</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-500">{skill.level}%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full skill-bar"
                    style={{ 
                      width: visibleElements.has('skills') ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 ${theme.bg.secondary}`} data-animate>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('projects') ? 'animate-slide-up' : 'animate-on-scroll'}`}>Featured Projects</h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 ${visibleElements.has('projects') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${theme.bg.card} rounded-2xl overflow-hidden ${theme.border.primary} border card-hover shadow-xl group ${visibleElements.has('projects') ? `animate-slide-up stagger-${(index % 4) + 1}` : 'animate-on-scroll'}`}>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                          {project.status}
                        </span>
                        <span className={`text-sm ${theme.text.muted}`}>{project.year}</span>
                      </div>
                      <h3 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>{project.title}</h3>
                      <p className={`text-sm ${theme.text.muted} mb-4`}>{project.category}</p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <p className={`${theme.text.secondary} leading-relaxed mb-6`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 ${theme.bg.secondary} ${theme.text.secondary} text-xs font-medium rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section id="experience" className="py-32" data-animate>
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-20">
      <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('experience') ? 'animate-slide-up' : 'animate-on-scroll'}`}>Experience</h2>
      <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto ${visibleElements.has('experience') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
    </div>

    <div className="space-y-8">
      {experience.map((exp, index) => (
        <div key={index} className={`${theme.bg.card} p-8 rounded-2xl ${theme.border.primary} border card-hover shadow-lg ${visibleElements.has('experience') ? `animate-slide-up stagger-${(index % 4) + 1}` : 'animate-on-scroll'}`}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div>
                <h3 className={`text-xl font-bold ${theme.text.primary} mb-1`}>{exp.title}</h3>
                <p className="text-blue-500 font-semibold mb-2">{exp.company}</p>
              </div>
              <span className={`text-sm ${theme.text.muted} lg:text-right`}>{exp.period}</span>
            </div>
            <p className={`${theme.text.secondary} leading-relaxed`}>{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className={`px-3 py-1 ${theme.bg.secondary} ${theme.text.secondary} text-xs font-medium rounded-full hover:bg-blue-500/10 transition-colors`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-32 ${theme.bg.secondary}`} data-animate>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('certifications') ? 'animate-slide-up' : 'animate-on-scroll'}`}>Certifications</h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto ${visibleElements.has('certifications') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`${theme.bg.card} p-8 rounded-2xl ${theme.border.primary} border card-hover shadow-lg ${visibleElements.has('certifications') ? `animate-slide-up stagger-${(index % 4) + 1}` : 'animate-on-scroll'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold ${theme.text.primary} mb-2 leading-tight`}>{cert.title}</h3>
                    <p className={`${theme.text.secondary} font-medium mb-2`}>{cert.issuer}</p>
                    <p className={`text-sm ${theme.text.muted} mb-4`}>{cert.date}</p>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 ${theme.bg.secondary} ${theme.text.muted} text-xs font-mono rounded`}>
                        {cert.credential}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 font-medium text-sm hover:underline transition-colors"
                      >
                        View Badge →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32" data-animate>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`text-5xl font-bold mb-6 gradient-text ${visibleElements.has('contact') ? 'animate-slide-up' : 'animate-on-scroll'}`}>Let's Connect</h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 ${visibleElements.has('contact') ? 'animate-scale-in' : 'animate-on-scroll'}`}></div>
          <p className={`text-xl ${theme.text.secondary} mb-16 max-w-2xl mx-auto ${visibleElements.has('contact') ? 'animate-fade-in' : 'animate-on-scroll'}`}>
            Ready to collaborate on innovative ML projects? Let's discuss how we can solve complex data challenges together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: 'Email', info: 'sashikiranm7@gmail.com', href: 'mailto:sashikiranm7@gmail.com' },
              { icon: Phone, title: 'Phone', info: '+1 (940)-252-4140', href: 'tel:+19402524140' },
              { icon: MapPin, title: 'Location', info: 'United States', href: '#' }
            ].map((contact, idx) => (
              <a key={contact.title} href={contact.href} className={`${theme.bg.card} p-8 rounded-2xl ${theme.border.primary} border card-hover shadow-lg block ${visibleElements.has('contact') ? `animate-slide-up stagger-${(idx % 4) + 1}` : 'animate-on-scroll'}`}>
                <contact.icon className={`w-8 h-8 mx-auto mb-4 text-blue-500`} />
                <h3 className={`font-semibold mb-2 ${theme.text.primary}`}>{contact.title}</h3>
                <p className={`${theme.text.muted} text-sm`}>{contact.info}</p>
              </a>
            ))}
          </div>

          <div className={`flex justify-center gap-6 ${visibleElements.has('contact') ? 'animate-scale-in' : 'animate-on-scroll'}`}>
            <a href="#" className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.bg.secondary} py-12 px-6 ${theme.border.primary} border-t`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${theme.text.secondary}`}>
            © 2025 Sashi Kiran. Crafted with passion for data and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;