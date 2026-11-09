/* ==========================================================================
   PROFILE — all site content lives here. Edit this file and reload the page.
   Remove an item from any list to hide it (an empty list [] hides the section's cards).
   ========================================================================== */

const PROFILE = {
  name: "Vũ Gia Nam",
  handle: "vgnam",
  status: "Open to research collaborations & internships",
  // Shown one after another with a typing effect
  roles: [
    "Research Assistant @ MSO Lab",
    "AI Researcher",
    "LLM × Evolutionary Computation",
    "Reinforcement Learning enthusiast",
    "Full-stack builder",
  ],
  intro:
    "I'm a research assistant at the Modeling, Simulation and Optimization Laboratory (HUST), " +
    "working under Prof. Huynh Thi Thanh Binh. I teach large language models to design algorithms. I work where LLMs meet evolutionary search, Monte Carlo Tree Search and " +
    "reinforcement learning — and I like shipping the software that makes those ideas real.",

  stats: [
    { value: 1, suffix: "", label: "NeurIPS 2026 workshop paper" },
    { value: 40, suffix: "+", label: "GitHub repositories" },
    { value: 3, suffix: "", label: "Hackathons & competitions" },
    { value: 2023, suffix: "", label: "Started at HUST", plain: true },
  ],

  about: [
    "I'm an undergraduate at <b>Hanoi University of Science and Technology</b> and currently a research assistant at the " +
      "<b>Modeling, Simulation and Optimization Laboratory (MSO Lab)</b> under <b>Prof. Huynh Thi Thanh Binh</b>. " +
      "Most of my time goes into research on " +
      "<b>LLM-driven automatic heuristic design</b>: letting language models write, test and evolve heuristics for " +
      "NP-hard combinatorial optimization problems such as TSP, CVRP, knapsack and bin packing.",
    "My work <b>GENESIS</b> — an uncertainty-aware Monte Carlo Tree Search framework for heuristic design — " +
      "was accepted at the <b>NeurIPS 2026 Workshop on ML × OR</b>. I also explore swarm intelligence, " +
      "test-time adaptation for vision-language models, and agentic AI safety.",
    "Outside research I enjoy hackathons and data competitions, and building full-stack systems with " +
      "FastAPI, Spring Boot, React and Angular. I read a lot of papers, and try to turn the good ideas into code.",
  ],

  interests: [
    "LLMs for algorithm design",
    "Evolutionary computation",
    "Monte Carlo Tree Search",
    "Reinforcement learning",
    "Combinatorial optimization",
    "Swarm intelligence",
    "Test-time adaptation",
    "AI agents & safety",
  ],

  facts: [
    { label: "Position", value: "Research Assistant" },
    { label: "Lab", value: "MSO Lab, HUST" },
    { label: "Advisor", value: "Prof. Huynh Thi Thanh Binh" },
    { label: "University", value: "HUST, Hanoi" },
    { label: "Based in", value: "Hanoi, Vietnam" },
    { label: "Languages", value: "Vietnamese, English" },
    { label: "Focus", value: "AI / Optimization" },
  ],

  // Big highlighted cards in the "Featured research" section
  featured: [
    {
      badge: "NeurIPS 2026 · ML × OR Workshop",
      title: "GENESIS",
      subtitle: "Generative Exploration via Stochastic Inference in Monte Carlo Tree Search for Automatic Heuristic Design",
      desc:
        "An LLM writes heuristic functions for NP-hard combinatorial problems, but their measured performance behaves like " +
        "samples from a noisy, high-variance process. GENESIS treats it that way: an uncertainty-aware MCTS that decides " +
        "which heuristics to refine and which to explore, instead of trusting a single noisy score.",
      tags: ["LLM", "MCTS", "Heuristic design", "TSP / CVRP", "Python"],
      code: "https://github.com/vgnam/GENESIS",
      paper: "",
    },
  ],

  // category must match one of the filter names below
  categories: ["Research", "Engineering", "Competitions"],
  projects: [
    {
      category: "Research",
      title: "STAR",
      desc: "Sinkhorn-balanced test-time adaptation for text-based person search. Balanced optimal-transport pseudo-labels adapt a CLIP/IRRA model to unlabeled target data, compared against UATTA, TCR, Tent, SAR and READ.",
      tags: ["PyTorch", "CLIP", "Optimal transport", "TTA"],
      code: "https://github.com/vgnam/TBPS-STAR",
    },
    {
      category: "Research",
      title: "CopulaPSO",
      desc: "Copula-based Particle Swarm Optimization, plus D-ECPSO for distributed black-box consensus optimization. Benchmarked on BBOB and CEC 2017 with statistical tests and ECDF analysis.",
      tags: ["Swarm intelligence", "Black-box optimization", "Python"],
      code: "https://github.com/vgnam/Copula-PSO",
    },
    {
      category: "Research",
      title: "MPaGE",
      desc: "LLM-designed heuristics for multi-objective combinatorial optimization, guided by a Pareto-front grid and semantic clustering of heuristics to balance runtime, quality and diversity.",
      tags: ["Multi-objective", "LLM", "Evolutionary search"],
      code: "https://github.com/vgnam/LLMPSL",
    },
    {
      category: "Competitions",
      title: "Sentinel402",
      desc: "Built for UniHackfest 2026. AI agents propose payments while you keep spending authority — a policy-enforcing sandbox with guided demo scenarios and a live LLM-agent mode.",
      tags: ["AI agents", "Security", "Node.js"],
      code: "https://github.com/vgnam/Sentinel402",
    },
    {
      category: "Competitions",
      title: "Datathon VinIntelligence 2026",
      desc: "Time-series sales forecasting with a stacked ensemble of Random Forest, LightGBM and XGBoost, time-series cross-validation and a gradient-boosting meta-learner.",
      tags: ["LightGBM", "XGBoost", "Forecasting"],
      code: "https://github.com/vgnam/Datathon-VinIntelligence-2026",
    },
    {
      category: "Competitions",
      title: "Vietnamese Medical NER",
      desc: "Offline extraction of Vietnamese medical concepts: fine-tuned ViHealthBERT with a lexicon fallback, character-offset preservation and rule-based section detection.",
      tags: ["NLP", "BERT", "Healthcare"],
      code: "https://github.com/vgnam/Medical-NER",
    },
    {
      category: "Engineering",
      title: "AIMS",
      desc: "Team e-commerce system for the ISD course: Spring Boot backend with Flyway migrations, Angular frontend and PostgreSQL, with VietQR and PayPal payment subsystems.",
      tags: ["Spring Boot", "Angular", "PostgreSQL"],
      code: "https://github.com/vgnam/ISD.20252-13",
    },
    {
      category: "Engineering",
      title: "Library Management System",
      desc: "Full-stack library system with a FastAPI backend, React + TypeScript (Vite) frontend, PostgreSQL and Docker Compose for one-command local setup.",
      tags: ["FastAPI", "React", "TypeScript", "Docker"],
      code: "https://github.com/vgnam/Library-Management-System",
    },
    {
      category: "Research",
      title: "LLM4Finance",
      desc: "A curated map of research on LLMs for quantitative finance — from autonomous quant R&D agents to alpha mining — with links to official code.",
      tags: ["Survey", "Quant", "LLM agents"],
      code: "https://github.com/vgnam/LLM4Finance",
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "C / C++", "TypeScript", "JavaScript", "SQL", "RISC-V Assembly"] },
    { group: "AI / ML", items: ["PyTorch", "Hugging Face", "scikit-learn", "LightGBM", "XGBoost", "Gymnasium", "LLM APIs"] },
    { group: "Web & Backend", items: ["FastAPI", "Spring Boot", "React", "Angular", "Node.js", "PostgreSQL"] },
    { group: "Tools", items: ["Git", "Docker", "Linux / WSL", "LaTeX", "Kaggle", "Jupyter"] },
  ],

  // Newest first
  journey: [
    {
      time: "Present",
      title: "Research Assistant",
      place: "Modeling, Simulation and Optimization Laboratory (MSO Lab), HUST",
      desc: "Working under Prof. Huynh Thi Thanh Binh on LLM-driven automatic heuristic design, evolutionary computation and optimization.",
    },
    {
      time: "2026",
      title: "GENESIS accepted at NeurIPS 2026",
      place: "ML × OR Workshop",
      desc: "Paper on uncertainty-aware MCTS for LLM-based automatic heuristic design.",
    },
    {
      time: "2026",
      title: "UniHackfest 2026",
      place: "Hackathon",
      desc: "Built Sentinel402, a spending-authority guard for payment-capable AI agents.",
    },
    {
      time: "2026",
      title: "Datathon VinIntelligence 2026",
      place: "Data competition",
      desc: "Sales forecasting with stacked tree ensembles and time-series cross-validation.",
    },
    {
      time: "2023 — now",
      title: "Undergraduate student",
      place: "Hanoi University of Science and Technology",
      desc: "Coursework across OOP, compilers, computer architecture, software design and mathematical modelling — alongside research on AI for optimization.",
    },
  ],

  contact: {
    text: "I'm always happy to talk about research, collaborations or internships. My inbox is open — I'll get back to you.",
    email: "vgnam112358@gmail.com",
    github: "https://github.com/vgnam",
    linkedin: "",
    scholar: "",
    facebook: "",
  },
};
