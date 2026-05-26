// Shared content for the workshop site wireframes.
const SITE = {
  series: "Framing the Problem",
  subtitle: "A workshop series on representation construction in cognitive science and AI",
  // blurb: [
  //   "Classical theories of problem solving asked how an agent searches within a given representation. But naturalistic problems rarely come pre-framed: deciding what to attend to and how to carve up the situation is itself part of the work. Framing the Problem convenes researchers in cognitive science, AI, and philosophy around that constructive step — what we variously call construal, abstraction, or representation construction.",
  //   "It does so across two complementary events. The CogSci 2026 workshop is theory-first: what ought a constructed representation be, and how might minds build one? The CCN 2026 community event is empirically grounded: which tasks and methods let us actually see this construction happening?",
  // ],
blurb: [
    "Classical theories of problem solving asked how an agent searches within a given problem representation. But naturalistic problems rarely come pre-framed: deciding what matters, what can be ignored, and how to carve up the situation is itself part of the cognitive work. **Framing the Problem** convenes researchers in cognitive science, AI, philosophy, neuroscience, and related fields to examine how problem solving changes when we move beyond fixed, laboratory-defined representations.",
    "The two events pursue this shared theme from complementary angles. The **CogSci 2026 workshop** focuses on the constructive step: how do people form, adapt, and reuse the **representations, abstractions, or construals** that make problem solving possible? The **CCN 2026 community event** broadens the lens to ask what happens in more **naturalistic settings**: do people build the kinds of representations assumed by classical theories, or rely on other processes that require new tasks and methods to study?",
    "Together, the events move from **theory to paradigm design**, and from the problem of constructing representations to the broader challenge of studying problem solving in the wild. The goal is to clarify which insights from **controlled paradigms** generalize to **real-world problems**, which assumptions need to be revised, and which new directions can better capture the richness of human problem solving."
  ],
  contact: "framing-the-problem@example.org",
  repo: "github.com/framing-the-problem/site",
};

const EVENTS = {
  cogsci: {
    id: "cogsci2026",
    badge: "CogSci 2026",
    date: "22 July 2026",
    dateLong: "Wednesday, 22 July 2026",
    city: "Rio de Janeiro, Brazil",
    cityShort: "Rio de Janeiro",
    venue: "Sheraton Grand Rio Hotel & Resort",
    conferenceName: "48th Annual Meeting of the Cognitive Science Society",
    conferenceDates: "CogSci 22–25 July",
    format: "Full-day workshop",
    formatDetail: "Full day · 7 hours + lunch",
    title: "Framing the problem: Abstraction and task representations in human problem solving",
    titleShort: "Framing the problem.",
    oneLine:
      "How problem representations are constructed, structured, and revised — theory-first across three sessions and a panel.",
    pitch:
      "Abstraction and task representations in human problem solving — a full-day workshop bringing together cognitive science, machine learning, and philosophy.",
    aboutTitle:
      <>How do humans <em>construct</em> the representations that make the search for a solution possible?</>,
    description: [
      "Cognitive scientists have long sought to explain the human capability to solve complex and often ill-defined problems. Early work cast problem solving as **search over fixed representations** — a framework that succeeded in lab-controlled puzzles but left a deeper question comparatively unexplored: how do people build the problem representations in the first place?",
      "This “problem of problem representation” marks a conceptual obstacle for theories of cognition. Agents must decide which facts, features, and contingencies matter — and which can be safely ignored — despite limited time and computation. Recent work in resource rationality, open-world cognition, program synthesis, and world modeling has converged on the question from multiple directions, yet the field remains **fragmented across disciplines**.",
      "This workshop convenes researchers in cognitive science, machine learning, and philosophy to clarify shared assumptions, identify unifying theoretical motifs, and articulate future directions for studying how representations are constructed, adapted, and reused in complex problem-solving environments.",
    ],
    pullquote:
      "Agents must determine which facts, features, and contingencies matter for the task at hand — and which can be safely ignored.",
    speakers: [
      { name: "Thomas Icard",       aff: "Stanford University",                       photo: "photos/thomas-icard.jpg",       bio: "Professor of Philosophy and Computer Science. Resource rationality, causal inference, and abstract representations." },
      { name: "Lio Wong",           aff: "Stanford University · Postdoc",             photo: "photos/lio-wong.jpg",           bio: "Language-induced representations, probabilistic models of cognition, and program synthesis." },
      { name: "Marcelo Mattar",    aff: "New York University · Assistant Professor", photo: "photos/marcelo-mattar.jpg",     bio: "Reinforcement learning, planning, and the cognitive structures that support flexible problem solving." },
      { name: "Frederick Callaway", aff: "NYU · Incoming AP, Dartmouth",              photo: "photos/frederick-callaway.jpg", bio: "Human metareasoning, planning, and resource rationality." },
      { name: "Kelsey Allen",       aff: "Google DeepMind · Sr. Research Scientist",  photo: "photos/kelsey-allen.jpg",       bio: "Physical reasoning, tool use, model-based learning, and cognitive AI." },
      { name: "Samuel Cheyette",    aff: "MIT CoCoSci · Postdoc",                     photo: "photos/samuel-cheyette.jpg",    bio: "Human reasoning, information seeking, and problem solving under limited cognitive resources." },
    ],
    programme: [
      { kind: "session", label: "Session I", range: "08:30 – 10:00", title: "Normative frameworks" },
      { time: "08:30", title: "Opening & session introduction", who: "Organizing team", note: "Framing remarks from the organizing team." },
      { time: "08:45", title: "Talk title forthcoming", who: "Thomas Icard", note: "Abstract forthcoming." },
      { time: "09:15", title: "Talk title forthcoming", who: "Lio Wong", note: "Abstract forthcoming." },
      { time: "09:45", title: "Discussion", who: "All speakers", note: "Open discussion of the session." },
      { kind: "break", time: "10:00", title: "Refreshments (10:00 – 10:30)" },
      { kind: "session", label: "Session II", range: "10:30 – 12:00", title: "Process-level models" },
      { time: "10:30", title: "Session intro & framing", who: "Organizing team" },
      { time: "10:45", title: "Talk title forthcoming", note: "Abstract forthcoming." },
      { time: "11:15", title: "Missing the tree for the branches: Representational constraints shape human planning strategies", note: "Abstract forthcoming." },
      { time: "11:45", title: "Discussion", who: "All speakers" },
      { kind: "break", time: "12:00", title: "Lunch on own (12:00 – 13:00)" },
      { kind: "session", label: "Session III", range: "13:00 – 14:30", title: "Methodology & experiments" },
      { time: "13:00", title: "Session intro & framing", who: "Organizing team" },
      { time: "13:15", title: "Talk title forthcoming", note: "Abstract forthcoming." },
      { time: "13:45", title: "Talk title forthcoming", note: "Abstract forthcoming." },
      { time: "14:15", title: "Discussion", who: "All speakers" },
      { kind: "break", time: "14:30", title: "Refreshments (14:30 – 15:00)" },
      { kind: "session", label: "Closing", range: "15:00 – 16:30", title: "Panel discussion" },
      { time: "15:00", title: "Introduction & poll results", who: "Organizing team", note: "Brief overview of the crowdsourced questions and discussion format." },
      { time: "15:10", title: "Moderated panel", who: "All speakers", note: "Approximately 60 minutes of discussion among the invited speakers, organized around questions voted on by the audience." },
      { time: "16:10", title: "Audience Q&A & open debate", who: "All speakers", note: "Open floor for questions and cross-disciplinary exchange." },
    ],
    formatNote:
      "Three thematic sessions plus a closing panel, with refreshment breaks between sessions. Each session pairs two ~30-minute talks with discussion; the panel runs ~90 minutes including audience Q&A.",
  },
  ccn: {
    id: "ccn2026",
    badge: "CCN 2026",
    date: "August 3–6, 2026",
    dateLong: "Monday 3 – Thursday 6 August 2026",
    city: "New York City",
    cityShort: "New York City",
    venue: "New York University",
    conferenceName: "9th Annual Conference on Cognitive Computational Neuroscience",
    conferenceDates: "CCN 3–6 August",
    format: "90-minute community event",
    formatDetail: "90-minute community event",
    title: "Naturalistic problem solving: theories, tasks, and methods",
    titleShort: "Naturalistic problem solving.",
    oneLine:
      "A live demonstration of naturalistic problem solving grounds two panels on emerging frameworks and the methods needed to study them.",
    pitch:
      "A 90-minute community event built around a live demonstration of naturalistic problem solving, framing two short panels on theory and method.",
    aboutTitle:
      <>What changes when problem solving <em>leaves the lab</em>?</>,
    description: [
      "Cognitive scientists have often studied problem solving as **search and planning** through a structured space of **states, actions, and goals**. This approach has been powerful in laboratory tasks where the problem representation is specified in advance. But many real-world problems — unclogging a sink, hosting a wedding, navigating interpersonal conflict, or starting a business — do not arrive as well-defined **graphs, programs, or MDPs**. The relevant variables, possible actions, and even the nature of the problem may be obscure.",
      "This raises a broader question: in naturalistic settings, do people construct the kinds of representations assumed by classical theories, or do they rely on **different cognitive processes altogether**? They may search and plan, but they may also reuse prior cases, coordinate socially, act to reveal what matters, reshape the environment, or draw on highly personal experience. These possibilities challenge us to ask how far insights from controlled paradigms generalize to real-world problems — and whether problem-solving mechanisms are truly **general**, **domain-specific**, or variable across tasks and individuals.",
      "This workshop brings together researchers across **cognitive science, neuroscience, artificial intelligence, philosophy, and related fields** to survey this broader landscape. Through a live task demonstration and two panel discussions, we will examine the **theories, methods, and paradigms** best suited for studying problem solving in the wild. The goal is to clarify what current approaches reveal, what they may obscure, and what new directions might better capture the richness of human problem solving.",
    ],
    pullquote:
      "If the representation is constructed on the fly, what would it look like to actually catch the construction happening?",
    speakers: [
      { name: "Samuel Gershman",   aff: "Harvard University",                  photo: "photos/samuel-gershman.jpg",    bio: "Computational psychiatry, reinforcement learning, and the representations agents bring to novel tasks." },
      { name: "Tom Silver",        aff: "Princeton University",                photo: "photos/tom-silver.webp",        bio: "Planning, abstraction discovery, and the interface between symbols and continuous representations." },
      { name: "Lio Wong",          aff: "Stanford University",                 photo: "photos/lio-wong.jpg",           bio: "Language-induced representations and probabilistic models of cognition." },
      { name: "Angela Radulescu",  aff: "Icahn School of Medicine at Mt. Sinai", photo: "photos/angela-radulescu.jpg", bio: "Attention, learning, and how task structure is inferred in dynamic environments." },
      { name: "Tyler Bonnen",      aff: "Stanford University",                 photo: "photos/tyler-bonnen.jpg",       bio: "Vision, memory, and the neural signatures of structured representations." },
    ],
    programme: [
      { time: "0:00", title: "Live demonstration — naturalistic task", who: "Participant + organizing team", note: "A participant solves an open-ended naturalistic task under instrumented conditions. The demo is the shared object of discussion for the panels that follow." },
      { time: "0:20", title: "Panel I — Theories & frameworks", who: "Samuel Gershman · Tom Silver · Lio Wong", note: "Moderated panel on the theoretical frames currently available for thinking about naturalistic problem solving." },
      { time: "0:55", title: "Panel II — Tasks & methods", who: "Angela Radulescu · Tyler Bonnen · Lio Wong", note: "Moderated panel on the empirical methods that could make those frames testable." },
      { time: "1:30", title: "Close", who: "Organizing team" },
    ],
    formatNote:
      "One 20-minute live demonstration, two ~35-minute moderated panels with audience Q&A. No formal talks — the demonstration is the shared object of discussion.",
  },
};

const QUESTIONS = [
  {
    n: 1,
    topic: "Normative models",
    q: "To what extent do human problem representations approximate resource-rational objectives?",
    refs: [
      { cite: "Icard & Goodman (2015)", note: "Resource-rational analysis as a unifying frame for bounded cognition." },
      { cite: "Ho et al. (2022)",        note: "People plan with simplified, value-equivalent task models." },
      { cite: "Wong et al. (2025)",      note: "Language-mediated construction of task representations." },
    ],
  },
  {
    n: 2,
    topic: "Methodology",
    q: "Which insights generalise from controlled tasks to naturalistic environments? How can we probe latent representations?",
    refs: [
      { cite: "Carvalho & Lampinen (2025)", note: "Naturalistic benchmarks and their tradeoffs." },
      { cite: "Wise et al. (2024)",          note: "Decoding latent structure from behaviour and neural signals." },
    ],
  },
  {
    n: 3,
    topic: "Construction vs. reuse",
    q: "When do agents construct new representations versus reuse them across tasks?",
    refs: [
      { cite: "Nagy et al. (2025)", note: "Compositional reuse of learned abstractions." },
      { cite: "Konidaris (2019)",    note: "Skill discovery and the symbol grounding loop." },
    ],
  },
  {
    n: 4,
    topic: "Crosstalk",
    q: "What do current cognitive models reveal about the frame problem? What can be learned from large language models?",
    refs: [
      { cite: "Dennett (1990)",     note: "The frame problem reframed as a problem of relevance." },
      { cite: "Wong et al. (2025)", note: "LLMs as inference machines over linguistic priors." },
    ],
  },
];

const ORGANISERS = [
  { name: "David G. Nagy",  aff: "TU Darmstadt · MPI Biological Cybernetics", photo: "photos/david-g-nagy.jpg",  url: "https://david-nagy.github.io/" },
  { name: "Hanqi Zhou",     aff: "University of Tübingen · IMPRS-IS",         photo: "photos/hanqi-zhou.jpg",     url: "https://zhouhq10.github.io/" },
  { name: "Shuze Liu",      aff: "Harvard University",                        photo: "photos/shuze-liu.jpg",      url: "https://kempnerinstitute.harvard.edu/people/our-people/shuze-liu/" },
  { name: "Tracey Mills",   aff: "MIT",                                       photo: "photos/tracey-mills.jpg",   url: "https://temills.github.io/" },
  { name: "Tony Chen",      aff: "MIT",                                       photo: "photos/tony-chen.jpg",      url: "https://chentoast.github.io/" },
  { name: "Zergham Ahmed",  aff: "Harvard University",                        photo: "photos/zergham-ahmed.jpg",  url: "https://gershmanlab.com/people/zergham.html" },
  { name: "Mark K. Ho",     aff: "New York University",                       photo: "photos/mark-k-ho.jpg",      url: "https://markkho.github.io/" },
];

Object.assign(window, { SITE, EVENTS, QUESTIONS, ORGANISERS });
