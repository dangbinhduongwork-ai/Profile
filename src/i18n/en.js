/**
 * English translations dictionary for Developer Portfolio
 */

export const en = {
  langCode: 'EN',
  langName: 'English',
  nav: [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'about', label: 'About', icon: 'User' },
    { id: 'skills', label: 'Skills', icon: 'Layers' },
    { id: 'projects', label: 'Projects', icon: 'Folder' },
    { id: 'blog', label: 'Blog', icon: 'FileText' },
    { id: 'contact', label: 'Contact', icon: 'Mail' },
  ],
  bottomNav: [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'about', label: 'About', icon: 'User' },
    { id: 'skills', label: 'Skills', icon: 'Layers' },
    { id: 'projects', label: 'Projects', icon: 'Folder' },
    { id: 'contact', label: 'Contact', icon: 'Mail' },
  ],
  hero: {
    greeting: "Hello, I'm",
    role: '4th-year Student | Information Technology',
    heroText:
      'Passionate about software craftsmanship, building practical products across Desktop, Web, and Mobile, and continuously learning to create real-world value.',
    viewProjects: 'View Projects',
    contactBtn: 'Contact Me',
    studentYear: 'IT Student - 4th Year',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm Dang Binh Duong, a 4th-year Information Technology student. I'm passionate about building practical software products across Windows desktop (.NET/WPF, Python AI Assistant), Flutter mobile apps, and modern web applications (React, Three.js, Spring Boot).",
      'Driven by hands-on engineering and curiosity, I continuously strengthen my core computer science foundations, architectural thinking, and clean code practices to deliver smooth, user-focused solutions.',
    ],
    learnMore: 'More about me',
  },
  skills: {
    title: 'Skills',
    categories: {
      'Languages & Frameworks': [
        'C#',
        '.NET 8',
        'WPF',
        'Java',
        'Spring Boot',
        'Python',
        'React',
        'Three.js',
        'WebGL',
        'Flutter',
        'Dart',
      ],
      'Tools & Environments': [
        'Git',
        'GitHub',
        'VS Code',
        'Visual Studio',
        'Docker',
        'Firebase',
        'SQLite',
        'MySQL',
        'SQL Server',
        'Ollama',
      ],
      'Core Foundations': [
        'Data Structures & Algorithms',
        'OOP & MVVM Pattern',
        'Win32 API & System Automation',
        'AI / LLM Integration',
        '3D Graphics & PWA',
        'Databases',
        'Software Testing',
      ],
      'Soft Skills': [
        'Teamwork',
        'Problem Solving',
        'Logical Thinking',
        {
          name: 'English (APTIS B2)',
          url: 'https://credentials.britishcouncil.org/2568f20c-7ed1-49ec-88a7-1a253a9e30b6?key=c0f39f1c6e82f12130d59a0a565d7b93c1026064085c03d9b3f22fce463fcd14&record_view=true',
          label: 'Click to view British Council credential',
        },
      ],
    },
  },
  projects: {
    title: 'Featured Projects',
    viewOnGithub: 'View on GitHub',
    liveDemo: 'Live Demo',
  },
  contact: {
    title: 'Contact',
    greeting: "I'm always open to connect, collaborate, and explore new opportunities!",
    emailLabel: 'Email',
    zaloLabel: 'Zalo',
    addressLabel: 'Address',
    sendMessage: 'Send Message',
    socialTitle: 'Social Media',
  },
  blog: {
    title: 'Blog',
    comingSoon: 'Coming Soon',
    viewAll: 'View all',
    footerNotice: "The first posts are coming soon. Follow on GitHub so you don't miss them.",
    followGithub: 'Follow on GitHub',
    emptyTitle: 'No posts yet',
    emptyMessage: 'The first articles are being prepared and will be published soon.',
    posts: [
      {
        id: 'getting-started-with-flutter',
        tag: 'Flutter',
        title: 'Getting Started with Flutter for Beginners',
        excerpt:
          'Set up your environment, run your first app and understand widgets and state the easy way.',
        status: 'soon',
        date: 'Jan 15, 2025',
        readTime: '5 min read',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'Code',
          gradient: ['#0b1e3f', '#1e5fd8'],
        },
      },
      {
        id: 'spring-boot-rest-api',
        tag: 'Spring Boot',
        title: 'Spring Boot REST API from A to Z',
        excerpt: '',
        status: 'soon',
        date: 'Feb 1, 2025',
        readTime: '7 min read',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'Layers',
          gradient: ['#0f3d2a', '#22c55e'],
        },
      },
      {
        id: 'software-engineering-student-journey',
        tag: 'Journal',
        title: 'My Journey as a 4th-Year Software Engineering Student',
        excerpt: '',
        status: 'soon',
        date: 'Feb 15, 2025',
        readTime: '4 min read',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'FileText',
          gradient: ['#2a1a52', '#7c3aed'],
        },
      },
    ],
  },
  seasons: {
    auto: 'Auto',
    spring: 'Spring',
    summer: 'Summer',
    autumn: 'Autumn',
    winter: 'Winter',
    none: 'Off',
    ariaLabel: 'Seasonal Effect',
  },
  footer: {
    copyright: 'Dang Binh Duong',
  },
};

export default en;
