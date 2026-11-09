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
    "LLMs for algorithm design",
    "LLMs for tabular data",
    "Multi-agent reinforcement learning",
  ],
  intro:
    "I'm a research assistant at the Modeling, Simulation and Optimization Laboratory (HUST), " +
    "working under Prof. Huynh Thi Thanh Binh. My research spans LLMs for automatic algorithm design, " +
    "LLMs for tabular data, and single- and multi-agent reinforcement learning.",

  stats: [
    { value: 2, suffix: "", label: "Accepted papers in 2026" },
    { value: 40, suffix: "+", label: "GitHub repositories" },
    { value: 3, suffix: "", label: "Hackathons & competitions" },
    { value: 2023, suffix: "", label: "Started at HUST", plain: true },
  ],

  about: [
    "I'm an undergraduate at <b>Hanoi University of Science and Technology</b> and currently a research assistant at the " +
      "<b>Modeling, Simulation and Optimization Laboratory (MSO Lab)</b> under <b>Prof. Huynh Thi Thanh Binh</b>. " +
      "My research currently follows four directions: <b>LLMs for automatic algorithm design</b>, " +
      "<b>LLMs for tabular data</b>, <b>reinforcement learning</b>, and <b>multi-agent reinforcement learning</b> " +
      "with decentralized training and execution (DTE).",
    "On the algorithm-design side, I study how language models can write, test and evolve heuristics for NP-hard " +
      "combinatorial problems such as TSP, CVRP, knapsack and bin packing. I also bring LLMs to tabular learning, " +
      "where they guide how tree ensembles are built and corrected. In multi-agent RL, I focus on fully decentralized " +
      "coordination, where every agent learns and acts from its own local information.",
    "Outside research I enjoy hackathons and data competitions, and building full-stack systems with " +
      "FastAPI, Spring Boot, React and Angular. I read a lot of papers, and try to turn the good ideas into code.",
  ],

  // Current research directions (shown as a numbered list)
  interests: [
    { title: "LLMs for automatic algorithm design", desc: "LLMs that write and evolve heuristics for combinatorial optimization" },
    { title: "LLMs for tabular data", desc: "Language-model priors and guidance for learning on tables" },
    { title: "Reinforcement learning", desc: "Policy search, including vision-language guidance" },
    { title: "Multi-agent RL (DTE)", desc: "Decentralized training and execution" },
  ],

  facts: [
    { label: "Position", value: "Research Assistant" },
    { label: "Lab", value: "MSO Lab, HUST" },
    { label: "Advisor", value: "Prof. Huynh Thi Thanh Binh" },
    { label: "University", value: "HUST, Hanoi" },
    { label: "Based in", value: "Hanoi, Vietnam" },
    { label: "Languages", value: "Vietnamese, English" },
    { label: "Focus", value: "LLMs · RL · MARL" },
  ],

  // Publications — big cards. Your name inside `authors` is highlighted automatically.
  // viz: "agents" (sensor network) or "tree" (search tree) picks the animated illustration.
  publications: [
    {
      venue: "SOICT 2026",
      award: "Oral presentation",
      title: "BeliefRAC",
      subtitle: "Belief-Aware Deep Multi-Agent Reinforcement Learning for Decentralized Visual Sensor Networks",
      authors: "Do Thi Phuong Thao, Vu Gia Nam, Nguyen Khanh Long, Nguyen Minh Loc, Nguyen Thi Hanh",
      desc:
        "Sensors in a decentralized network see only part of the scene and cannot observe their teammates' changing behavior. " +
        "BeliefRAC infers the current interaction context online with a causal belief model trained self-supervisedly, then " +
        "mixes posterior-weighted context values with an optimistic estimate whose strength adapts to belief uncertainty — " +
        "easing both non-stationarity and relative overgeneralization in fully decentralized MARL.",
      tags: ["MARL", "Decentralized training & execution", "Sensor networks", "Belief inference"],
      viz: "agents",
      code: "",
      paper: "",
    },
    {
      venue: "NeurIPS 2026",
      award: "ML × OR Workshop",
      title: "GENESIS",
      subtitle: "Generative Exploration via Stochastic Inference in Monte Carlo Tree Search for Automatic Heuristic Design",
      authors: "",
      desc:
        "LLM-written heuristics for NP-hard combinatorial problems have noisy, high-variance performance. GENESIS models it " +
        "that way: an uncertainty-aware Monte Carlo Tree Search that decides which heuristics to refine and which to explore, " +
        "instead of trusting a single noisy score.",
      tags: ["LLM", "MCTS", "Automatic heuristic design", "TSP / CVRP"],
      viz: "tree",
      code: "https://github.com/vgnam/GENESIS",
      paper: "",
    },
  ],

  // category must match one of the filter names below
  categories: ["Research", "Engineering", "Competitions"],
  projects: [
    {
      category: "Research",
      title: "MPaGE",
      desc: "LLM-designed heuristics for multi-objective combinatorial optimization, guided by a Pareto-front grid and semantic clustering of heuristics to balance runtime, quality and diversity.",
      tags: ["Algorithm design", "LLM", "Multi-objective"],
      code: "https://github.com/vgnam/LLMPSL",
    },
    {
      category: "Research",
      title: "ESLARA Evolved",
      desc: "An LLM-guided forest for tabular data: tree splits come from evolved split programs, and residuals are corrected by a policy chosen by an LLM, with calibration on a held-out out-of-bag fold.",
      tags: ["Tabular data", "LLM", "Tree ensembles"],
      code: "https://github.com/vgnam/TriKDForest",
    },
    {
      category: "Research",
      title: "Behavior-Guided Multimodal Policy Search",
      desc: "Uses vision-language models to guide policy search in reinforcement learning, steering exploration with behavior-level feedback.",
      tags: ["Reinforcement learning", "VLM", "Policy search"],
      code: "https://github.com/vgnam/Behavior-Guided-Multimodal-Policy-Search",
    },
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
      title: "LLM4ML",
      desc: "A curated collection of research on using LLMs to solve machine-learning problems, with a focus on tabular data: prediction, few-shot learning, feature engineering and imputation.",
      tags: ["Survey", "Tabular data", "LLM"],
      code: "https://github.com/vgnam/LLM4ML",
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
      desc: "Working under Prof. Huynh Thi Thanh Binh on LLMs for automatic algorithm design, LLMs for tabular data, reinforcement learning and multi-agent RL (DTE).",
    },
    {
      time: "2026",
      title: "BeliefRAC accepted at SOICT 2026",
      place: "Oral presentation",
      desc: "Belief-aware decentralized multi-agent RL for visual sensor networks.",
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
