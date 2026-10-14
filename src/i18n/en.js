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
      'Passionate about technology, building practical products, and continuously learning to become an outstanding developer creating real-world value.',
    viewProjects: 'View Projects',
    contactBtn: 'Contact Me',
    studentYear: 'IT Student - 4th Year',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm Dang Binh Duong, a 4th-year Information Technology student. I have a deep passion for software engineering, especially modern web development, mobile applications, and backend systems like React, Spring Boot, and Flutter.",
      'I continuously strive to learn, sharpen my engineering skills, and build practical projects to step-by-step progress toward becoming a professional software engineer and achieving financial independence.',
    ],
    learnMore: 'More about me',
  },
  skills: {
    title: 'Skills',
    categories: {
      'Languages & Frameworks': ['Java', 'Spring Boot', 'C#', '.NET', 'React', 'Flutter', 'Dart'],
      'Tools & Environments': ['Git', 'GitHub', 'VS Code', 'Docker', 'Firebase', 'MySQL', 'SQL Server'],
      'Core Foundations': ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Databases', 'Software Testing', 'Security'],
      'Soft Skills': ['Teamwork', 'Problem Solving', 'Logical Thinking', 'English (TOEIC in progress)'],
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
