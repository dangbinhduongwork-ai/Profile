/**
 * English translations for Dang Binh Duong's Developer Portfolio
 */

export const translations = {
  en: {
    langCode: 'EN',
    langName: 'English',
    nav: [
      { id: 'home', label: 'Home', icon: 'Home' },
      { id: 'about', label: 'About', icon: 'User' },
      { id: 'skills', label: 'Skills', icon: 'Layers' },
      { id: 'projects', label: 'Projects', icon: 'Folder' },
      { id: 'contact', label: 'Contact', icon: 'Mail' },
      { id: 'blog', label: 'Blog', icon: 'FileText' },
    ],
    // 5 items for mobile Bottom Tab Bar
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
      downloadCv: 'Download CV',
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
      copyright: '© 2026 Dang Binh Duong. All rights reserved.',
    },
  },
};

// Default fallback to English for any legacy reference
translations.vi = translations.en;

export default translations;
