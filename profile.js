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
    "Outside research I enjoy hackathons and data competitions. I read a lot of papers, and try to turn the good ideas into code.",
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
      venue: "NeurIPS 2026 Workshop",
      award: "ML × OR",
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

  // Preprints / papers under review. viz: "bmps" or "evograft" picks the animated illustration.
  preprints: [
    {
      status: "Under review · AAMAS 2027",
      title: "BMPS",
      subtitle: "Behavior-Guided Multimodal Policy Search: Leveraging Vision-Language Models for Reinforcement Learning",
      authors: "Vu Gia Nam, Nguyen Tran Minh Nhat, Nguyen Viet Anh, Pham Vu Tuan Dat, Long Doan, Loc Nguyen, Huynh Thi Thanh Binh",
      desc:
        "LLM-based policy search usually sees only scalar rewards, which say whether a policy fails but not why. BMPS samples " +
        "policies around the current, best and worst anchors, renders their trajectories, and asks a vision-language model to " +
        "diagnose failure modes. That visual feedback, together with reward history, guides the LLM's next policy update.",
      tags: ["Reinforcement learning", "LLM optimizer", "Vision-language models"],
      viz: "bmps",
      caption: "VLM-diagnosed policy search loop",
      code: "https://github.com/vgnam/Behavior-Guided-Multimodal-Policy-Search",
      paper: "",
    },
    {
      status: "Under review · AAMAS 2027",
      title: "EvoGraft",
      subtitle: "Evolving Dataset-Specific Split Scores and Out-of-Bag Residual Correction for Tree Ensembles",
      authors: "Vu Gia Nam, Pham Vu Tuan Dat, Long Doan, Huynh Thi Thanh Binh",
      desc:
        "Tree ensembles split with the same fixed criterion, such as Gini or variance reduction, on every dataset. EvoGraft uses an " +
        "LLM as the variation operator to evolve a dataset-specific split-scoring program, then grafts uncertainty-aware " +
        "out-of-bag residual correctors onto the forest. It gets the lowest mean rank across 14 CARTE benchmarks.",
      tags: ["Tabular data", "Tree ensembles", "LLM-driven evolution"],
      viz: "evograft",
      caption: "evolve splits · grow forest · correct residuals",
      code: "",
      paper: "",
    },
  ],

  // Leave categories empty to hide the filter buttons
  categories: [],
  projects: [
    {
      category: "Hackathon",
      title: "Sentinel402",
      desc: "Built for UniHackfest 2026. AI agents propose payments while you keep spending authority — a policy-enforcing sandbox with guided demo scenarios and a live LLM-agent mode.",
      tags: ["AI agents", "Security", "Node.js"],
      code: "https://github.com/vgnam/Sentinel402",
    },
    {
      category: "Research",
      title: "CopulaPSO",
      desc: "Copula-based Particle Swarm Optimization, plus D-ECPSO for distributed black-box consensus optimization. Benchmarked on BBOB and CEC 2017 with statistical tests and ECDF analysis.",
      tags: ["Swarm intelligence", "Black-box optimization", "Python"],
      code: "https://github.com/vgnam/Copula-PSO",
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "C / C++", "SQL", "RISC-V Assembly"] },
    { group: "AI / ML", items: ["PyTorch", "Hugging Face", "scikit-learn", "LightGBM", "XGBoost", "Gymnasium", "LLM APIs"] },
    { group: "Tools", items: ["Git", "Docker", "Linux / WSL", "LaTeX", "Kaggle", "Jupyter"] },
  ],

  // Newest first
  journey: [
    {
      time: "2024 — Present",
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
      title: "GENESIS accepted at a NeurIPS 2026 workshop",
      place: "Workshop on Machine Learning and Operations Research (ML × OR)",
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
