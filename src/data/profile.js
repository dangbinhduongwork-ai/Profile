export const profile = {
  name: "Dang Binh Duong",
  greeting: "Hello, I'm",
  role: "4th-year Student | Information Technology",
  heroText: "Passionate about technology, building practical products, and continuously learning to become an outstanding developer creating real-world value.",
  tagline: ["Better", "Code", "Bigger", "Dreams"],
  quote: "Nothing is impossible, only things yet to be done.",
  location: "Ba Vi, Hanoi, Vietnam",
  address: "Village 8, Suoi 2, Ba Vi, Hanoi, Vietnam",
  email: "dangbinhduong.work@gmail.com",
  emailComposeLink: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=dangbinhduong.work@gmail.com",
  zalo: "0865087784",
  github: "https://github.com/dangbinhduongwork-ai",
  linkedin: "https://www.linkedin.com/in/duong-dang-binh-4997a2443",
  zaloLink: "https://zalo.me/0865087784",
  mapLink: encodeURI("https://www.google.com/maps/search/?api=1&query=Thôn 8 xã Suối 2 Ba Vì Hà Nội"),
  about: [
    "I'm Dang Binh Duong, a 4th-year Information Technology student. I love programming, especially modern web development, mobile applications, and backend systems like React, Spring Boot, and Flutter.",
    "I continuously strive to learn, sharpen my engineering skills, and build practical projects to step-by-step progress toward becoming a professional software engineer and achieving financial independence."
  ],
  skills: {
    "Languages & Frameworks": ["Java", "Spring Boot", "C#", ".NET", "React", "Flutter", "Dart"],
    "Tools & Environments": ["Git", "GitHub", "VS Code", "Docker", "Firebase", "MySQL", "SQL Server"],
    "Core Foundations": ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Databases", "Software Testing", "Security"],
    "Soft Skills": ["Teamwork", "Problem Solving", "Logical Thinking", "English (TOEIC in progress)"]
  },
  projects: [
    {
      title: "Grocery Shop (Nguyen Huong)",
      icon: "ShoppingCart",
      gradient: ["#0f3d2a", "#22c55e"],
      tags: ["React", "Spring Boot", "Flutter", "MySQL"],
      desc: "Full-stack e-commerce platform (React Web + Flutter App + Spring Boot) for grocery & confectionery retail with cart, checkout, JWT authentication, and a 7-module admin suite.",
      url: "https://github.com/dangbinhduongwork-ai/candy-shop",
      demoUrl: "https://nguyenhuongshop.vercel.app"
    },
    {
      title: "Duck Pond (Ao Vit 3D)",
      icon: "Waves",
      gradient: ["#0e3a40", "#06b6d4"],
      tags: ["Three.js", "WebGL", "JavaScript", "PWA"],
      desc: "Interactive 3D relaxation pond viewed from an underwater perspective, featuring Three.js physics water ripples, swimming ducks, ASMR audio, and Zen mode.",
      url: "https://github.com/dangbinhduongwork-ai/duck-duck-test-main",
      demoUrl: "https://ducktherapy.vercel.app/"
    },
    {
      title: "Realtime Language Translation",
      icon: "Globe",
      gradient: ["#0b1e3f", "#1e5fd8"],
      tags: ["Python", "RapidOCR", "PySide6"],
      desc: "Windows desktop application for real-time English-to-Vietnamese on-screen OCR translation displayed seamlessly via a transparent overlay.",
      url: "https://github.com/dangbinhduongwork-ai/realtimelanguagetranslation"
    },
    {
      title: "CaloOut (Flutter App)",
      icon: "Activity",
      gradient: ["#062b1e", "#10b981"],
      tags: ["Flutter", "Dart", "Firebase"],
      desc: "Mobile fitness & health tracking application built with Flutter and Firebase, featuring intuitive calorie monitoring and modern UI/UX.",
      url: "https://github.com/dangbinhduongwork-ai/CaloOutV2"
    },
    {
      title: "CaloIn",
      icon: "Heart",
      gradient: ["#102a56", "#0d9488"],
      tags: ["Flutter", "Dart", "SQLite"],
      desc: "Offline-first Flutter app for daily calorie and macronutrient logging with barcode scanning support and local SQLite storage.",
      url: "https://github.com/dangbinhduongwork-ai/CaloIn"
    }
  ],
  blog: [
    "Getting Started with Flutter for Beginners",
    "Spring Boot REST API from A to Z",
    "My Journey as a 4th-Year Software Engineering Student"
  ],
  nav: [
    { id: "home", label: "Home", icon: "Home" },
    { id: "about", label: "About", icon: "User" },
    { id: "skills", label: "Skills", icon: "Layers" },
    { id: "projects", label: "Projects", icon: "Folder" },
    { id: "blog", label: "Blog", icon: "FileText" },
    { id: "contact", label: "Contact", icon: "Mail" }
  ],
  viewProjects: "View Projects",
  contactBtn: "Contact Me",
  cvFile: "/cv.pdf",
  studentYear: "IT Student - 4th Year",
  learnMore: "More about me",
  sectionTitles: {
    about: "About Me",
    skills: "Skills",
    projects: "Featured Projects",
    blog: "Blog",
    contact: "Contact"
  },
  viewOnGithub: "View on GitHub",
  liveDemo: "Live Demo",
  contactGreeting: "I'm always open to connect, collaborate, and learn new things!",
  sendMessage: "Send Message",
  socialTitle: "Social Media",
  comingSoon: "Coming Soon",
  emailLabel: "Email",
  zaloLabel: "Zalo",
  addressLabel: "Address",
  copyright: "Dang Binh Duong"
};

export default profile;
