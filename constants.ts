import { Project, Experience, SkillCategory, BlogPost, GameSkill, Achievement, Principle, NextSkillOption, ThemeConfig, ImpactMarker, Framework, InterviewQuestion } from './types';

export const PERSONAL_INFO = {
  name: "Agrim Garg",
  role: "Software Engineer",
  profilePicture: "profilePicture.jpeg", 
  tagline: "Building scalable AI-driven solutions and high-impact software.",
  summary: "Computer Science undergraduate with strong proficiency in data structures, algorithms, and object-oriented programming, and hands-on experience building scalable, production-ready applications. Demonstrated ability to solve complex problems through innovative projects, clean system design, and performance-focused implementations, experienced in vibe coding. Experienced in leading technical initiatives and collaborating across teams, with a growth mindset and a strong drive to build reliable, high-impact software at scale.",
  impactStatement: "Passionate about leadership, mathematical rigor, and rapid, high-precision problem solving. Building scalable digital systems and intelligent products through disciplined execution.",
  email: "agrimgrg06@gmail.com",
  phone: "+91 8130137674",
  location: "Gurugram, India (Open to Remote)",
  resumeUrl: "#resume-section",
  socials: {
    github: "https://github.com/coderhash-sketch",
    linkedin: "https://www.linkedin.com/in/agrim-garg-925241331/",
    instagram: "https://www.instagram.com/agrimraghav?igsh=bXRhdW9zanFheXc0",
    leetcode: "https://leetcode.com/u/mlbyte_21/",
    codechef: "https://www.codechef.com/users/mlbyte_21"
  }
};

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: "q1",
    category: "Introduction",
    question: "Tell me about yourself and your journey as a developer.",
    answerSummary: ["CS Undergrad at SRM University AP", "CEO of CESE Program", "Builder of Quantum-AI systems"],
    answerDetail: "I am a high-growth Software Engineer driven by mathematical rigor and scalability. Currently pursuing B.Tech in CSE with a 9.82 CGPA, I lead the CESE Program as CEO, impacting local startup ecosystems. My journey is defined by building high-stakes software like AtomoraCQ (AI-Quantum for SDG-13) and SkillSpresso (Microlearning EdTech). I combine deep technical competence in DSA/C++ with a founder's mindset."
  },
  {
    id: "q2",
    category: "Why Hire",
    question: "Why should we hire you over other candidates?",
    answerSummary: ["Top 0.1% Aptitude (AIR 335 AINCAT)", "Hybrid Technical Depth (Quantum + AI + Web)", "Proven Ownership as CEO/Convenor"],
    answerDetail: "Beyond my technical skill set, I bring a rare combination of raw aptitude (AIR 335 in AINCAT 2025) and execution discipline. I don't just write code; I design systems with business impact. My experience leading teams and programs at SRM University has prepared me to take ownership of complex technical roadmaps and deliver results under pressure."
  },
  {
    id: "q3",
    category: "Languages",
    question: "What programming languages are you strongest in and why?",
    answerSummary: ["C++ for performance/DSA", "TypeScript for scalable web architecture", "Python for AI/Quantum research"],
    answerDetail: "C++ is my primary tool for algorithmic challenges due to its performance and low-level control. For scalable application development, I rely on TypeScript and the React ecosystem to ensure type safety and maintainability. Python serves as my gateway for AI development and quantum simulations, where rapid prototyping and extensive libraries are critical."
  },
  {
    id: "q4",
    category: "Proud Project",
    question: "Explain a project you're most proud of and the technical challenges you faced.",
    answerSummary: ["AeronicX: Hybrid AI-Quantum Pipeline", "Implementation of VQE algorithm", "Global Winner (EnviroCast Hackathon)"],
    answerDetail: "AeronicX is my hallmark project. The challenge was simulating molecular energy states for carbon capture—a task classical computers struggle with. I implemented a Variational Quantum Eigensolver (VQE) and integrated it with a Next.js frontend. Bridging quantum physics logic with modern web architecture was complex, but it resulted in a 5th Prize win globally at the EnviroCast Hackathon."
  },
  {
    id: "q5",
    category: "Core CS",
    question: "What happens when you type a URL into a browser? (High Level)",
    answerSummary: ["DNS Lookup", "TCP/IP Handshake", "HTTP/HTTPS Request & Response", "Browser Rendering"],
    answerDetail: "It starts with a DNS lookup to find the IP. Then, a TCP handshake establishes a connection. The browser sends an HTTP/HTTPS request, the server processes it and sends back HTML/CSS/JS. Finally, the browser's rendering engine (like Blink) parses the DOM and CSSOM to paint the pixels on the screen."
  },
  {
    id: "q6",
    category: "Debugging",
    question: "Describe a challenging bug you resolved and your process.",
    answerSummary: ["State synchronization issue in FounderPilotAI", "Systematic isolation using logging", "Implementation of robust state management"],
    answerDetail: "In FounderPilotAI, users experienced inconsistent AI responses during long strategy sessions. I used 'Chain of Thought' logging to realize the context window was being polluted by irrelevant history. I implemented a sliding window context manager and validated it with stress testing, which resolved the sync issues and improved response accuracy."
  },
  {
    id: "q7",
    category: "Performance",
    question: "How do you optimize code for performance?",
    answerSummary: ["Algorithmic Complexity (Big O)", "Memory Management", "Concurrency & Asynchrony"],
    answerDetail: "First, I analyze the time and space complexity to ensure we're using the right data structures. I look for bottlenecks using profilers. In web environments, I utilize lazy loading, memoization, and efficient state updates (React) to minimize re-renders and bridge latency."
  },
  {
    id: "q8",
    category: "Scalability",
    question: "How would you design a scalable login system?",
    answerSummary: ["OAuth 2.0 / JWT", "Distributed Session Management", "Rate Limiting & Security"],
    answerDetail: "I would use JWTs for stateless authentication to allow horizontal scaling. Passwords must be hashed using Argon2 or BCrypt. For session persistence, I'd use a distributed cache like Redis. To handle traffic spikes, I'd implement rate limiting at the API gateway level."
  },
  {
    id: "q9",
    category: "Ambiguity",
    question: "How do you handle unclear product requirements?",
    answerSummary: ["Ask clarifying questions", "Build a Minimum Viable Prototype (MVP)", "Iterative feedback loops"],
    answerDetail: "Ambiguity is solved through communication. I break down the high-level goal into technical requirements and present an MVP. This 'vibe coding' approach—rapidly prototyping—allows stakeholders to see a concrete implementation and provide precise feedback early."
  },
  {
    id: "q10",
    category: "System Design",
    question: "Design a high-level system like Instagram/Twitter.",
    answerSummary: ["Load Balancers", "Microservices (Feed, Auth, Media)", "NoSQL for Feeds, SQL for User Data"],
    answerDetail: "The architecture requires a Load Balancer distributing requests to microservices. For the feed, I'd use a Write-Through cache and a NoSQL database (like Cassandra) for high availability. Media would be served via CDNs to reduce latency. WebSockets would handle real-time notifications."
  },
  {
    id: "q11",
    category: "Availability",
    question: "How would you ensure high availability in a distributed system?",
    answerSummary: ["Redundancy", "Failover Mechanisms", "Health Checks"],
    answerDetail: "Availability is achieved by eliminating single points of failure. I'd use multi-region deployments, database replication (Master-Slave), and automated failover systems. Constant health monitoring and circuit breakers prevent cascading failures across the network."
  },
  {
    id: "q12",
    category: "Trade-offs",
    question: "Describe a time you made a technical trade-off decision.",
    answerSummary: ["Consistency vs Availability (CAP Theorem)", "SkillSpresso: SQL vs NoSQL", "Optimizing for speed over perfection"],
    answerDetail: "For SkillSpresso, I chose a simpler SQL schema over a flexible NoSQL one to ensure data integrity for user progress tracking, even though it made horizontal scaling slightly more complex initially. This trade-off prioritized reliable learning records over theoretical massive scale which wasn't needed at day one."
  },
  {
    id: "q13",
    category: "Tech Debt",
    question: "How do you prioritize tech debt vs new features?",
    answerSummary: ["Impact Assessment", "The 20% Rule", "Stability first"],
    answerDetail: "Tech debt is prioritized if it hampers feature velocity or affects system stability. I advocate for the 20% rule—allocating a portion of every sprint to refactoring and debt reduction. If the debt is 'interest-bearing' (slowing down all future work), it becomes a P0 priority."
  },
  {
    id: "q14",
    category: "Reliability",
    question: "How would you improve system reliability at scale?",
    answerSummary: ["Automated Testing", "Chaos Engineering", "Observability"],
    answerDetail: "Reliability comes from rigorous testing (Unit, Integration, E2E) and observability. I'd implement distributed tracing (OpenTelemetry) and centralized logging to catch issues before they impact users. Chaos testing helps uncover hidden dependencies in microservices."
  },
  {
    id: "q15",
    category: "Behavioral",
    question: "Tell me about your biggest failure.",
    answerSummary: ["Underestimating an early project deadline", "Learned to manage scope", "Improved project estimation"],
    answerDetail: "In my first major independent project, I tried to build too many features at once and missed a critical internal deadline. I learned the value of 'Scope over Schedule' and now use strict MoSCoW prioritization to ensure the core value is delivered first."
  },
  {
    id: "q16",
    category: "Conflict",
    question: "Describe a conflict in your team and how you handled it.",
    answerSummary: ["Disagreement on tech stack", "Data-driven decision making", "Preserved team cohesion"],
    answerDetail: "During a hackathon, there was a split between using a familiar vs a cutting-edge library. I organized a 30-minute 'spike' session to benchmark both. The data showed the newer library was 2x faster for our use case. We aligned on the decision based on evidence rather than opinion."
  },
  {
    id: "q17",
    category: "Future Vision",
    question: "Where do you see technology shaping India by 2040?",
    answerSummary: ["AI-Driven Governance", "Quantum Logistics", "Digital Inclusion at Scale"],
    answerDetail: "By 2040, India will be a global AI-Sovereign power. I envision a future where digital infrastructure (like DPI) is combined with Quantum Computing to optimize national-scale logistics and energy grids. My goal is to be at the forefront of this transformation as an architect of these systems."
  }
];

export const THEMES: ThemeConfig[] = [
  {
    id: 'leadership',
    name: 'Black & Gold',
    description: 'Power, dominance, premium leadership',
    fontFamily: "'Inter', sans-serif",
    colors: {
      primary: '#D4AF37', // Gold
      secondary: '#FFD700',
      accent: '#D4AF37',
      bgBase: '#050505',
      bgCard: '#111111',
      textPrimary: '#FFFFFF',
      textSecondary: '#A0A0A0',
      glow: 'rgba(212, 175, 55, 0.3)'
    }
  },
  {
    id: 'strategic',
    name: 'Strategic Silver',
    description: 'Calm, IAS-inspired strategic authority',
    fontFamily: "'Inter', sans-serif",
    colors: {
      primary: '#C0C0C0', // Silver
      secondary: '#E0E0E0',
      accent: '#64748B',
      bgBase: '#0F172A',
      bgCard: '#1E293B',
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      glow: 'rgba(192, 192, 192, 0.2)'
    }
  },
  {
    id: 'hacker',
    name: 'Terminal Hacker',
    description: 'Tech-focused, builder mindset',
    fontFamily: "'Inter', monospace",
    colors: {
      primary: '#00FF41', // Matrix Green
      secondary: '#008F11',
      accent: '#00FF41',
      bgBase: '#0D0208',
      bgCard: '#121212',
      textPrimary: '#00FF41',
      textSecondary: '#008F11',
      glow: 'rgba(0, 255, 65, 0.3)'
    }
  },
  {
    id: 'visionary',
    name: 'Visionary Dashboard',
    description: 'AI-founder control hub',
    fontFamily: "'Inter', sans-serif",
    colors: {
      primary: '#38BDF8', // Cyan/Blue
      secondary: '#818CF8',
      accent: '#A855F7',
      bgBase: '#020617',
      bgCard: '#0F172A',
      textPrimary: '#F1F5F9',
      textSecondary: '#64748B',
      glow: 'rgba(56, 189, 248, 0.3)'
    }
  }
];

export const IMPACT_MARKERS: ImpactMarker[] = [
  {
    id: '1',
    x: 48,
    y: 78,
    location: 'Amaravati, AP',
    initiative: 'CESE Program Leadership',
    summary: 'Spearheading social innovation programs as CEO, impacting thousands in the local startup ecosystem.',
    type: 'cese'
  },
  {
    id: '2',
    x: 44,
    y: 28,
    location: 'Gurugram, HR',
    initiative: 'Community Tech Mentorship',
    summary: 'Providing foundational tech and math training to local youth through interactive workshops.',
    type: 'community'
  },
  {
    id: '3',
    x: 46,
    y: 32,
    location: 'New Delhi',
    initiative: 'Generative AI Workshop',
    summary: 'Spreading Gen AI awareness and tool proficiency among high-potential engineering students.',
    type: 'community'
  },
  {
    id: '4',
    x: 50,
    y: 10,
    location: 'Leh, Ladakh',
    initiative: 'Remote Impact Vision',
    summary: 'Designing digital infrastructure strategies for high-altitude remote regions.',
    type: 'vision'
  },
  {
    id: '5',
    x: 28,
    y: 65,
    location: 'Mumbai, MH',
    initiative: 'Digital Finance Summit',
    summary: 'Consulting on scalable fintech architectures for large-scale financial inclusion.',
    type: 'community'
  },
  {
    id: '6',
    x: 42,
    y: 85,
    location: 'Bengaluru, KA',
    initiative: 'Tech Innovation Hub',
    summary: 'Collaborating with Tier-1 engineering teams on distributed system performance.',
    type: 'cese'
  },
  {
    id: '7',
    x: 75,
    y: 55,
    location: 'Kolkata, WB',
    initiative: 'Eastern Outreach',
    summary: 'Bridging the tech gap in East India through specialized data science workshops.',
    type: 'community'
  },
  {
    id: '8',
    x: 35,
    y: 38,
    location: 'Jaipur, RJ',
    initiative: 'Heritage Tech Innovation',
    summary: 'Applying AI to preserve and scale traditional Rajasthani craftsmanship data.',
    type: 'vision'
  },
  {
    id: '9',
    x: 88,
    y: 40,
    location: 'Guwahati, AS',
    initiative: 'North East Tech Corridor',
    summary: 'Pioneering educational technology initiatives for students across the seven sisters.',
    type: 'vision'
  }
];

export const MENTAL_FRAMEWORKS: Framework[] = [
  {
    id: 'eagle',
    title: 'Macro Strategic Vision',
    mindset: 'Eagle Mindset',
    icon: '🦅',
    description: 'The ability to perceive macro-architectural shifts before diving into micro-optimization.',
    detailedContent: 'Aligned with my work on AtomoraCQ, where I architected a hybrid AI-quantum pipeline. Like an eagle, I focus on the end-to-end impact—from quantum energy states to user-facing material selection dashboards—ensuring the high-level strategy guides every line of code.'
  },
  {
    id: 'lion',
    title: 'Technical Dominance',
    mindset: 'Lion Mindset',
    icon: '🦁',
    description: 'Commanding leadership through peak performance in core competitive competence.',
    detailedContent: 'Reflected in my AIR 335 in AINCAT 2025 and 9.82 CGPA. I approach engineering challenges with the "Lion Doctrine"—owning the problem space, dominating mathematical logic, and delivering solutions with high-precision authority in competitive environments.'
  },
  {
    id: 'wolf',
    title: 'Collective Intelligence',
    mindset: 'Wolf Mindset',
    icon: '🐺',
    description: 'Strength through collaboration and leading high-functioning technical packs.',
    detailedContent: 'As Convenor of the Math Club and CEO of the CESE Program, I foster "Wolf Pack" dynamics. I lead by coordinating diverse talents to achieve complex goals, whether it is organizing national-level technical events or leading community impact workshops.'
  },
  {
    id: 'ant',
    title: 'Compound Persistence',
    mindset: 'Ant Mindset',
    icon: '🐜',
    description: 'Massive systems are built through relentless, disciplined, and automated execution.',
    detailedContent: 'Demonstrated through the development of SkillSpresso. I believe massive impact is the result of compounding small, disciplined efforts. I apply this to building robust codebases where every modular component contributes to a larger, unbreakable system.'
  },
  {
    id: 'cheetah',
    title: 'High-Velocity Agility',
    mindset: 'Cheetah Mindset',
    icon: '🐆',
    description: 'Rapid adaptation and peak acceleration in development and problem solving.',
    detailedContent: 'My "vibe coding" philosophy and performance in timed challenges like Kaun Banega Ganitpati. I excel at rapid prototyping—transitioning from a conceptual problem to a functional, optimized solution at lightning speed without sacrificing technical rigor.'
  }
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Think Long-Term",
    description: "Prioritize architectural scalability and code maintainability over quick, fragile fixes.",
    icon: "🔭"
  },
  {
    title: "Systems Over Shortcuts",
    description: "Build robust frameworks and automated workflows to solve entire classes of problems.",
    icon: "⚙️"
  },
  {
    title: "Discipline Over Motivation",
    description: "Reliable, consistent execution drives progress when inspiration is absent.",
    icon: "🛡️"
  },
  {
    title: "Build for Impact",
    description: "Focus energy on high-leverage features that create real value for users.",
    icon: "🎯"
  },
  {
    title: "Learn Relentlessly",
    description: "Adapt to new paradigms and technologies to stay at the cutting edge of engineering.",
    icon: "📚"
  }
];

export const NEXT_SKILL_OPTIONS: NextSkillOption[] = [
  { id: 'policy', name: 'Public Policy Analysis', category: 'Strategy' },
  { id: 'ai_systems', name: 'Advanced AI Systems', category: 'Technical' },
  { id: 'finance', name: 'Financial Modeling', category: 'Business' },
  { id: 'product', name: 'Product Strategy', category: 'Management' },
  { id: 'gov', name: 'Data Governance', category: 'Compliance' }
];

export const GAME_SKILLS: GameSkill[] = [
  { name: "Mathematics", level: 9, xp: 92, icon: "∑" },
  { name: "Algorithm Design", level: 9, xp: 88, icon: "⟨/⟩" },
  { name: "AI/LLM Architecture", level: 8, xp: 75, icon: "🧠" },
  { name: "Entrepreneurship", level: 8, xp: 85, icon: "🚀" },
  { name: "Systems Thinking", level: 7, xp: 70, icon: "⚙️" },
  { name: "Problem Solving", level: 10, xp: 100, icon: "⚡" }
];

export const GAME_ACHIEVEMENTS: Achievement[] = [
  {
    id: "math_wizard",
    title: "Math Wizard",
    requirement: "Mathematics Level 9",
    description: "Mastered advanced mathematical logic and rapid calculations.",
    thresholdSkill: "Mathematics",
    thresholdValue: 9,
    icon: "🪄"
  },
  {
    id: "serial_founder",
    title: "Serial Founder",
    requirement: "Entrepreneurship Level 7",
    description: "Successfully launched and managed multiple ventures.",
    thresholdSkill: "Entrepreneurship",
    thresholdValue: 7,
    icon: "👑"
  },
  {
    id: "architect",
    title: "System Architect",
    requirement: "Systems Thinking Level 7",
    description: "Designing complex, scalable digital architectures.",
    thresholdSkill: "Systems Thinking",
    thresholdValue: 7,
    icon: "🏗️"
  },
  {
    id: "polymath",
    title: "Digital Polymath",
    requirement: "Problem Solving Level 10",
    description: "Peak-level versatility across multiple engineering domains.",
    thresholdSkill: "Problem Solving",
    thresholdValue: 10,
    icon: "💎"
  }
];

export const EDUCATION = [
  {
    institution: "SRM University AP",
    degree: "B.Tech in CSE",
    period: "2024 - present",
    grade: "CGPA: 9.81/10.00"
  },
  {
    institution: "Green Valley International School",
    degree: "Class 12 (PCM) at Green Valley International School",
    period: "2022 - 2024",
    grade: "Percentage : 86%"
  },
  {
    institution: "Rockford Convent High School(CBSE)",
    degree: "Class 10",
    period: "2020 - 2022",
    grade: "Percentage : 94.8%"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 }
    ]
  },
  {
    name: "Relevant Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: 95 },
      { name: "OOPs", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Gen AI", level: 80 }
    ]
  },
  {
    name: "Core Competencies",
    skills: [
      { name: "Artificial Intelligence", level: 85 },
      { name: "Problem Solving", level: 98 },
      { name: "Fast Calculations", level: 95 },
      { name: "Logical Thinking", level: 95 },
      { name: "Quantitative Aptitude", level: 92 },
      { name: "Machine Learning", level: 75 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "NighaTech Global Pvt. Limited",
    role: "Software Development Engineer Intern",
    period: "May 2026 - Present",
    description: [
      "Working on the development of full-stack and IoT-based applications, contributing to role-based dashboard systems, REST API development, database design, and real-time device monitoring solutions.",
      "Collaborating on system architecture, authentication workflows, data visualization, debugging, testing, and deployment while following agile development practices and industry-standard software engineering methodologies."
    ],
    skills: ["MERN Stack", "Systems Design", "Hybrid Intern", "Problem Solving", "Internet of Things(IoT)"]
  },
  {
    company: "SRM University AP",
    role: "Quantum Computing Research Intern",
    period: "Jun 2026 - Present",
    description: [
      "Engaging in cutting-edge quantum computing research, investigating quantum algorithms and computational frameworks to address complex computational challenges. Contributed to research studies, technical analysis, and the exploration of next-generation quantum technologies."
    ],
    skills: ["Quantum Computing", "Hybrid Intern", "Linear Algebra", "QML" , "Qubits"]
  },
  {
    company: "ShadowFox",
    role: "Web Development Intern",
    period: "Feb 2026 - Mar2026",
    description: [
      "Working on real-world web development projects using modern frontend technologies while following industry best practices.",
      "Collaborating in a virtual team environment and participating in domain meetings, code reviews and enhancing problem solving skills."
    ],
    skills: ["React", "Virtual Intern", "Problem Solving"]
  },
  {
    company: "Math Club",
    role: "Convenor",
    period: "Nov 2025 - May2026",
    description: [
      "Responsible for organizing academic events, workshops, and interactive mathematical activities.",
      "It includes a recent interactive session showcasing mathematical magic tricks to make numbers fun and fascinating for young learners."
    ],
    skills: ["SRM University AP", "Leadership", "Event Strategy", "Mathematics"]
  },
  {
    company: "GeeksforGeeks SRMUAP",
    role: "Events Co-head",
    period: "Oct 2024 - Present",
    description: [
      "Organizing technical events, coding competitions, and workshops to enhance student engagement in competitive programming.",
      "Coordinating with industry experts and mentors to deliver high-quality educational content and career development sessions."
    ],
    skills: [ "Competitive Programming", "Technical Events"]
  },
  {
    company: "Amdox Technologies",
    role: "Full Stack Developer",
    period: "Jan2026 - Apr2026",
    description: [
      "Developed responsive and interactive web interfaces using modern JavaScript frameworks and optimized CSS architectures.",
      "Improved site performance and accessibility scores by implementing lazy loading and semantic HTML structures.",
      "Collaborated with UI/UX designers to translate complex wireframes into functional, high-fidelity web components."
    ],
    skills: ["Web Development", "Performance Tuning", "UI/UX Translation"]
  },
  {
    company: "Open Source Connect",
    role: "Open Source Contributor",
    period: "Jul 2025 - Sep 2025",
    description: [
      "Contributed to production-level open source projects, collaborating with global developers on scalable codebases.",
      "Implemented version control workflows using Git, managing tasks and progress through NexFellow Platform.",
      "Enhanced collaborative development skills through peer code reviews and collective intelligence practices."
    ],
    skills: ["Remote", "Git", "NexFellow", "Global Collaboration"]
  },
  {
    company: "SRM University AP - Directorate of Innovation and Entrepreneurship",
    role: "Chief Executive Officer, CESE Program",
    period: "Feb 2025 - Present",
    description: [
      "Leading community engagement initiatives and social innovation programs, bridging purpose-driven entrepreneurship with real-world impact.",
      "Designing and executing entrepreneurship programs addressing social challenges, collaborating with NGOs and government bodies."
    ],
    skills: ["Amaravati, India", "NGO Collaboration", "Social Innovation"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aeronicx",
    title: "AeronicX",
    tagline: "TypeScript, Next.js, Quantum Computing - VQE, ML, SDG-13",
    problem: "Developed a hybrid AI-quantum simulation platform to model CO2-material interactions at the atomic scale for advanced carbon-capture research.",
    solution: "Implemented the Variational Quantum Eigensolver (VQE) algorithm to estimate molecular energy states and support quantum-assisted evaluation of candidate materials.",
    techStack: ["TypeScript", "Next.js", "VQE", "ML"],
    impact: "Winner of 5th Prize at the EnviroCast Global Engineering Outlook Hackathon on Devpost for addressing SDG-13: Climate Action via hybrid AI-Quantum pipelines.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://atomoracq-cj63.vercel.app/",
    date: "Mar 2026"
  },
  {
    id: "founderpilotai",
    title: "FounderPilotAI",
    tagline: "HTML, CSS (Tailwind), JavaScript, Node.js, AI/LLM APIs, Vercel",
    problem: "Built an AI-powered founder co-pilot that guides early-stage startups from idea validation to execution using structured decision-making frameworks.",
    solution: "Designed intelligent workflows to break down complex startup problems into actionable roadmaps, improving clarity and execution speed.",
    techStack: ["Node.js", "AI APIs", "Tailwind"],
    impact: "Integrated real-world startup thinking into AI prompts to simulate mentor-level guidance for founders.",
    imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://founder-pilot-ai-eta.vercel.app/",
    date: "Feb 2026"
  },
  {
    id: "rcb-fan-portal",
    title: "RCB Fan Portal",
    tagline: "Next.js, Tailwind CSS, Interactive Fan Experience",
    problem: "RCB fans lack a unified, immersive digital platform that combines official team data, interactive engagement, and personalized fan experiences in one place.",
    solution: "An interactive, frontend-powered RCB Fan Portal that blends team stats, gamified features, customization tools, and immersive experiences into a single bold digital ecosystem.",
    impact: "Transforms passive supporters into deeply engaged digital fans, strengthening community, loyalty, and global reach for Royal Challengers Bengaluru.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "API Integration"],
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://rcb-fanportal.vercel.app/",
    githubUrl: "https://github.com/coderhash-sketch/RCB-FanPortal",
    date: "Feb 2026"
  },
  {
    id: "logic-lockdown",
    title: "Logic Lockdown",
    tagline: "React, Competitive Logic puzzles, Digital Escape",
    problem: "Traditional quizzes reward memorization and speed, but fail to truly test structured reasoning and real-time logical thinking under pressure.",
    solution: "Logic Lockdown is a competitive digital escape experience that challenges participants with layered, logic-driven puzzles where reasoning is the only way forward.",
    impact: "It transforms passive knowledge testing into an immersive battle of minds, sharpening analytical thinking, composure, and decision-making under pressure.",
    techStack: ["React", "State Management", "Logic Algorithms", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://logic-lockdown.vercel.app/",
    githubUrl: "https://github.com/coderhash-sketch/LOGIC-LOCKDOWN",
    date: "Jan 2026"
  },
  {
    id: "skillspresso",
    title: "SkillSpresso",
    tagline: "Microlearning Platform | Founder & CEO",
    problem: "Founding and leading SkillSpresso, a 10-minute microlearning platform teaching practical skills like Excel, Canva, and Finance.",
    solution: "Designing curriculum and content strategy to deliver bite-sized, high-impact learning experiences for students and professionals.",
    techStack: ["Microlearning", "EdTech", "Curriculum Design"],
    impact: "Driving user acquisition and engagement through innovative product features and community-building initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://skill-sprinter--agrimgarganuj.replit.app/",
    date: "2024 - Present"
  },
  {
    id: "kb-ganitpati",
    title: "Kaun Banega Ganitpati",
    tagline: "Mathematical Game Platform",
    problem: "It is a web-based quiz application that allows students to attempt up to 20 questions within a fixed time limit of 100 seconds.",
    solution: "The project showcases skills in algorithm design, user-centric application development, and mathematical concept implementation through gamification.",
    techStack: ["JavaScript", "HTML5", "Game Logic"],
    impact: "Created an engaging competitive environment for learning math concepts.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/coderhash-sketch/kb-ganitpati",
    date: "Aug 2025"
  }
];

export const ACHIEVEMENTS = [
  "5th Prize Global Winner: EnviroCast Hackathon - Recognized at the 'Global Engineering Outlook: Furthering the Future' event (Devpost) for building AtomoraCQ, a hybrid AI-Quantum solution addressing SDG-13: Climate Action.",
  "Achieved AIR 335 in AINCAT 2025 - A national-level aptitude test assessing aptitude skills among 4.6L+ participants.",
  "1st Prize National Ideathon – Won among 200+ teams for innovation pitch.",
  "DSA Excellence - Recognized for exceptional performance in Data Structures and Algorithms assessments.",
  "SRM Maths Olympiad (UG Category) - Secured 3rd position demonstrating strong analytical and problem-solving skills."
  "Top 20 AI4Good Fest – Recognized for AI healthcare triage innovation among 8000+ participants"
  "Qualified NSEA Olympiad – Ranked among top 1% astronomy students nationwide"
];

export const CERTIFICATIONS = [
  "AlgoUniversity Tech Fellowship Merit Certificate ",
  "MongoDB Associate Developer Certification",
  "AlgoUniversity Dynamic Programming Camp ",
  "Salesforce 100K AgentBlazer Champion Course",
  "AI Volution Entrepreneurship Challenge Semi-Finalist by IIT Kharagpur",
  "Certified for completing Entrepreneurship Bootcamp 3.0, where I started my idea SkillSpresso.",
  "Generative AI Workshop at IIT Delhi(Speaker:Adarsh Rai)",
  "be10X AI Tools Workshop by IIT Kharagpur Alumni"
];

export const BLOG_POSTS: (BlogPost & { content: string })[] = [
  {
    id: "1",
    title: "Quantum Simulation: The Next Frontier",
    excerpt: "Exploring molecular energy states using VQE and AI algorithms to revolutionize carbon capture research.",
    date: "Jan 2026",
    readTime: "7 min read",
    category: "Quantum Computing",
    content: `## The Convergence of Physics and Code
Quantum computing is moving from a scientific curiosity to a practical engineering discipline. At the heart of this transition is the ability to simulate quantum systems—molecules, materials, and chemical reactions—at a level of detail that classical supercomputers can never hope to reach. For engineers today, this represents a shift from binary logic to probability-based computation.

### Why Classical Computing Fails in Material Science
In classical computing, representing the state of an atom requires an exponential increase in memory as you add more particles. A simple caffeine molecule would require a memory bank larger than any existing supercomputer to simulate accurately. This "exponential wall" has hindered progress in areas like battery chemistry, drug discovery, and specifically, carbon capture.

### Enter the Variational Quantum Eigensolver (VQE)
The VQE is a hybrid quantum-classical algorithm designed for the "Noisy Intermediate-Scale Quantum" (NISQ) era. It works by using a quantum computer to calculate the expectation value of a molecule's Hamiltonian (its energy state) while a classical optimizer adjusts the parameters to find the minimum energy—the ground state.

### Bridging the Gap: The AtomoraCQ Pipeline
In the AtomoraCQ project, we developed a pipeline that integrates quantum simulations with a modern web-based visualization stack.
- **Quantum Core**: Utilizing Python-based quantum libraries, we modeled CO2-material interactions.
- **Hybrid Optimization**: The VQE algorithm narrow down the search space for efficient catalysts.
- **Data Visualization**: Built using TypeScript and Next.js, the dashboard allows researchers to interact with 3D atomic models and see real-time energy convergence graphs.

### The Future of Sustainable Engineering
The ultimate goal of this research is \"Inverse Design.\" Instead of testing existing materials, we use quantum-assisted ML to define the properties we need (e.g., \"capture CO2 at 30°C with 90% efficiency\") and let the algorithm design the molecule. This is the future of engineering: moving from trial-and-error to high-precision design at the atomic scale.`
  },
  {
    id: "2",
    title: "FounderPilotAI: Scaling Early-Stage Mentorship",
    excerpt: "How structured AI decision-making frameworks can bridge the gap for first-time founders through LLM workflows.",
    date: "Feb 2026",
    readTime: "6 min read",
    category: "AI & Startups",
    content: `## The Founder's Dilemma
Building a startup is essentially a sequence of decisions made under extreme uncertainty. For first-time founders, the "blank page" problem is the primary killer of innovation. They have a vision but lack the roadmap to validate it. FounderPilotAI was conceived to solve this by providing an AI-driven "co-pilot" that applies professional-grade strategic frameworks to raw ideas.

### Beyond the Chatbot: Structured Decision Workflows
Most people view AI as a chat interface. However, for startup mentorship, a chat interface is often too open-ended. To be useful, AI must lead the user through structured logical steps.
- **Framework Integration**: We embedded frameworks like the Lean Canvas, SWOT analysis, and the TAM/SAM/SOM market sizing methodology into the LLM's prompt architecture.
- **Iterative Validation**: The system doesn't just "generate" a business plan; it challenges the founder. If a user suggests a target market, the AI asks, "Why this market? How will you reach them with zero budget?"

### Technical Architecture: The Vercel & Node.js Stack
Building an AI co-pilot requires a balance of speed and state management.
- **Prompt Engineering**: We utilized "Chain of Thought" prompting to ensure the AI explains its reasoning before providing a strategic recommendation.
- **Edge Functions**: By leveraging Vercel Edge Functions, we reduced the latency of LLM streaming, making the interaction feel like a real-time conversation with a human mentor.
- **Context Preservation**: One of the biggest hurdles was ensuring the AI remembered the "core vision" of the startup while diving deep into specific technical modules.

### The Impact of AI on Innovation Velocity
Our data shows that founders using structured AI workflows reach "Product-Market Fit" signals 40% faster than those navigating blindly. By automating the boilerplate of startup strategy—the research, the formatting, the logical vetting—we allow founders to focus on what humans do best: building relationships and iterating on the product.

### What's Next?
The next phase of FounderPilotAI involves "Smart Agents" that can perform actual market research by crawling the web, checking competitor pricing, and identifying potential early-adopters on social platforms. We are moving from a co-pilot that thinks with you, to one that executes for you.`
  }
];
