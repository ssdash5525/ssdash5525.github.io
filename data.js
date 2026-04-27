// ============================================================
//  data.js  —  Your single source of truth
//  Edit this file to update content across the entire website.
// ============================================================

const SITE = {

  // ── Identity ───────────────────────────────────────────────
  name:       "Shashanka Shekhar Dash",
  nameShort:  "Shashanka",
  initials:   "SSD",
  role:       "PhD Scholar",
  department: "Department of Physics & Astronomy",
  institute:  "National Institute of Technology Rourkela",
  location:   "Odisha, India",
  photo:      "assets/profile_pic.jpg",

  // ── Contact & Links ────────────────────────────────────────
  email:        "524ph6009@nitrkl.ac.in",
  github:       "https://github.com/ssdash5525",
  scholar:      "https://scholar.google.com/citations?user=7UT6Z0wAAAAJ&hl=en",
  orcid:        "https://orcid.org/0009-0001-8598-9932",
  linkedin:     "https://www.linkedin.com/in/ssdash5525/",
  cvPDF:        "assets/Profile.pdf",

  // ── Bio paragraphs (shown on About page & homepage) ───────
  bio: [
    "I am a PhD student in the Department of Physics and Astronomy at NIT Rourkela, working under the supervision of Dr. Mithun Biswas. My research lies at the intersection of statistical physics and molecular biophysics — I am interested in how macromolecular crowding in the cell modulates protein-protein association kinetics and protein conformational dynamics.",
    "Before joining NIT Rourkela, I completed my Master's in Physics from the Central University of Jharkhand, Ranchi, with a specialization in High Energy Physics. Transitioning into biophysics brought me to questions where physical intuition meets the complexity of living systems — a combination I find endlessly rewarding.",
    "I am originally from Kendrapara, Odisha. Outside of physics, I am drawn to natural history, the ecology of coastal Odisha, and the gap between folk knowledge and formal science."
  ],

  // ── Short tagline (used on homepage hero only) ────────────
  tagline: "I study protein dynamics under macromolecular crowding using theoretical methods and molecular simulation, asking how the dense cellular interior shapes biomolecular interactions.",

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      years:      "2024 - present",
      degree:     "Doctor of Philosophy, Physics",
      institution:"National Institute of Technology Rourkela",
      detail:     "Supervisor: Dr. Mithun Biswas · Theoretical Biophysics & Simulation."
    },
    {
      years:      "2022 - 2024",
      degree:     "Master of Science, Physics",
      institution:"Central University of Jharkhand, Ranchi",
      detail:     "Specialization: High Energy Physics"
    },
    {
      years:      "2019 - 2022",
      degree:     "Bachelor of Science, Physics (Hons.)",
      institution:"Ravenshaw University, Cuttack",
      detail:     ""
    }
  ],

  // ── Research areas ────────────────────────────────────────
  research: [
    {
      tag:   "Ongoing",
      title: "Protein-Protein Association under Macromolecular Crowding",
      desc:  "How do large, inert crowding agents alter the protein dynamics? I combine MD simulations with theoretical frameworks to characterize association kinetics across different concentrations."
    },
    {
      tag:   "Methods",
      title: "Simulation & Computational Tools",
      desc:  "GROMACS for all-atom and coarse-grained MD; PACKMOL for initial system construction; PyMOL / VMD for structural visualization; Python (NumPy, MDAnalysis, Matplotlib) for trajectory post-processing and statistical analysis."
    }
  ],

  // ── Publications ──────────────────────────────────────────
  publications: [
    // {
    //   status:  "Manuscript in preparation · 2025",
    //   title:   "Macromolecular Crowding Effects on Protein-Protein Association Kinetics: A Simulation Study",
    //   authors: ["Shashanka Shekhar Dash", "Mithun Biswas"],
    //   journal: "Target: Journal of Chemical Theory and Computation",
    //   doi:     ""
    // }
    {
      status: "Published · 2024",
      title: "Effect of strong magnetic field on thermodynamic properties of quarkonia: NUFA method",
      authors: ["Rishabh Sharma", "Shashanka Shekhar Dash", "Vineet Kumar Agotiya*"],
      journal: "The European Physical Journal Plus",
      doi: "https://doi.org/10.1140/epjp/s13360-024-05784-x"
    }
    // Add more entries in the same format
  ],

  // ── CV — Academic Profile ─────────────────────────────────
  // 3–4 sentences. Edit freely — this is your voice.
  cvObjective: "I am a physicist turned biophysicist, interested in how the physical principles of crowding, confinement, and diffusion govern protein behaviour inside the cell. My PhD work combines coarse-grained molecular dynamics simulation with analytical theory to characterise protein-protein association kinetics under macromolecular crowding. I aim to bridge the gap between simplified in vitro models and the genuinely dense, heterogeneous environment of the living cell.",
 
  // ── CV — Research Interests ──────────────────────────────
  // Short keyword phrases — 4 to 6 is ideal.
  cvInterests: [
    "Macromolecular crowding & excluded-volume effects",
    "Protein-protein association kinetics",
    "Coarse-grained & all-atom molecular dynamics",
    "Free-energy Surfaces",
    "Markov State Models",
    "Statistical mechanics of biological systems"
  ],
 
  // ── CV — Awards & Fellowships ────────────────────────────
  // { years: "2023", title: "Award name", org: "Awarding body" }
  cvAwards: [
    // { years: "2023", title: "CSIR-NET (JRF)", org: "Council of Scientific & Industrial Research, India" },
    {
      years: "2024",
      title: "GATE Physics 2024",
      org:   "Indian Institute of Science, Bangalore."
    },
    {
      years: "2025",
      title: "GATE Physics 2025",
      org:   "Indian Institute of Technology, Roorkee."
    }
  ],
 
  // ── CV — References ──────────────────────────────────────
  // Set email: "" to hide it from the public page.
  cvReferences: [
    {
      name:  "Dr. Mithun Biswas",
      role:  "PhD Supervisor",
      org:   "Department of Physics & Astronomy, NIT Rourkela",
      email: "biswasm@nitrkl.ac.in"
    }
  ],

  // ── CV sections ───────────────────────────────────────────
  cvExperience: [
    {
      years:      "2024 - present",
      title:      "PhD Research",
      org:        "NIT Rourkela",
      desc:       "Protein dynamics and association kinetics under macromolecular crowding. MD simulation, theory, and data analysis."
    },
    {
      years:      "2022 - 2024",
      title:      "Master's Dissertation",
      org:        "CUJ Ranchi",
      desc:       "Spectroscopic Study of Heavy Quarkonia under the Influence of Magnetic Field in Hellmann-plus-Screened-Kratzer Potential."
    }
  ],

  cvTeaching: [
    {
      years:   "2024 - present",
      title:   "Teaching Assistant",
      org:     "NIT Rourkela",
      desc:    "Undergraduate laboratory and tutorial courses in Physics."
    }
  ],

  cvConferences: [
    {
      years: 2025,
      event: "Statistical Mechanics in Chemistry and Biology (SMCB) 2025, Hyderabad",
      org: "Tata Institute of Fundamental Research Hyderabad",
      title: "Poster: Exploring GB1 Dimerization Through Short Simulations and Markov State Models"
    },
    {
      years: 2024,
      event: "NSM Workshop on Introduction to High Performance Computing, Rourkela",
      org: "IIT Kharagpur and NIT Rourkela",
      title: "Workshop on HPC for Molecular Simulation"
    }
  ],

  skills: [
    "Python", "GROMACS", "PACKMOL", "PyMOL",
    "MDAnalysis", "NumPy / SciPy", "Matplotlib",
    "LaTeX", "Bash / Linux", "Git", "MATLAB", "Jupyter Notebooks",
    "Scientific Writing", "Data Visualization", "Statistical Analysis"
  ],

  // ── Blog / Notes ──────────────────────────────────────────
  posts: [
    {
      date:    "Dec 2024",
      title:   "XVG file format in GROMACS: A beginner's guide",
      excerpt: "Understanding the structure and content of .xvg files for trajectory analysis in GROMACS.",
      url:     "posts/xvg-python.html",
      tags:    ["GROMACS", "Python", "Data Analysis"]
    },
    {
      date:    "Feb 2025",
      title:   "GROMACS-2024.5 with PLUMED-2.9.3 installation on KALAM",
      excerpt: "A complete guide: building, patching, and fixing the MPICH rank error on the KALAM cluster.",
      url:     "posts/gromacs-plumed-installation.html",
      tags:    ["GROMACS", "PLUMED", "HPC"]
    },
  ],

  // ── Gallery — Photos & Captions ───────────────────────────
  // src: "path/to/image.jpg" (relative to the website root) | caption: "A brief description of the photo" | category: "Professional" / "Personal" / "Others"
  // ──────────────────────────────────────────────────────────
  gallery: [

    // ── Professional ────────────────────────────────────────
    {
      src:      "assets/group.jpg",
      caption:  "Our research group at NIT Rourkela",
      category: "Professional",
      // pinned at top — no date field so it sorts first
      pinned:   true
    },
    {
      src:      "assets/sweta_defense.jpg",
      caption:  "At Sweta's PhD defence, NIT Rourkela",
      category: "Professional",
      date:     "2025-09",
    },
    {
      src:      "assets/with_seniors.jpg",
      caption:  "With senior lab members, NIT Rourkela",
      category: "Professional",
      date:     "2025-11",
    },
    {
      src:      "assets/nsm_workshop.jpg",
      caption:  "NSM Workshop on HPC for Molecular Simulation, Rourkela",
      category: "Professional",
      date:     "2024-12",
    },
    {
      src:      "assets/poster_solo.jpg",
      caption:  "Poster presentation at SMCB 2025, Hyderabad",
      category: "Professional",
      date:     "2025-12",
      focus:    "50% 5%"
    },
    {
      src:      "assets/smcb_duo.jpg",
      caption:  "With my senior Mr. R. Rath at SMCB 2025, Hyderabad",
      category: "Professional",
      date:     "2025-12",
      focus:    "50% 5%"
    },
    {
      src:      "assets/smcb_group.jpg",
      caption:  "Group photo at SMCB 2025, Hyderabad",
      category: "Professional",
      date:     "2025-12",
    },

    // ── Personal ────────────────────────────────────────────
    {
      src:      "assets/cuj_brambe.jpg",
      caption:  "At Central University of Jharkhand, Brambe",
      category: "Personal",
      date:     "2022-12",
    },
    {
      src:      "assets/anchoring_rnc.jpg",
      caption:  "Anchoring at CUJ Ranchi",
      category: "Personal",
      date:     "2023-08",
    },
    {
      src:      "assets/restaurant_rnc.jpg",
      caption:  "Quick restaurant time in Ranchi",
      category: "Personal",
      date:     "2023-08",
      focus:    "50% 35%"
    },
    {
      src:      "assets/dinner_rkl.jpg",
      caption:  "Dinner at Nottee9, Rourkela",
      category: "Personal",
      date:     "2024-10",
    },

    // ── Others ──────────────────────────────────────────────
    {
      src:      "assets/coastal_odisha.jpg",
      caption:  "Coastal Odisha",
      category: "Others",
      date:     "2024-07",
      focus:    "50% 75%"
    },
    {
      src:      "assets/village_landscape.jpg",
      caption:  "Village landscape, Odisha",
      category: "Others",
      date:     "2024-08",
    },
    {
      src:      "assets/mandira_dam.jpg",
      caption:  "Mandira Dam, Rourkela",
      category: "Others",
      date:     "2025-01",
    },
    {
      src:      "assets/rkl_outing.jpg",
      caption:  "Outing in Rourkela",
      category: "Others",
      date:     "2025-03",
      focus:    "50% 30%"
    },
    {
      src:      "assets/rkl_ring_road.jpg",
      caption:  "Ring Road, Rourkela",
      category: "Others",
      date:     "2026-01",
    },
    {
      src:      "assets/rkl_cityscape.jpg",
      caption:  "Rourkela cityscape",
      category: "Others",
      date:     "2026-03",
    },

  ],

};
