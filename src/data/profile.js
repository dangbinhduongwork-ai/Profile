export const profile = {
  name: "Dang Binh Duong",
  avatar: "/avatar.jpg",
  greeting: "Hello, I'm",
  role: "4th-year Student | Information Technology",
  heroText: "Passionate about software craftsmanship, building practical products across Desktop, Web, and Mobile, and continuously learning to create real-world value.",
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
    "I'm Dang Binh Duong, a 4th-year Information Technology student. I'm passionate about building practical software products across Windows desktop (.NET/WPF, Python AI Assistant), Flutter mobile apps, and modern web applications (React, Three.js, Spring Boot).",
    "Driven by hands-on engineering and curiosity, I continuously strengthen my core computer science foundations, architectural thinking, and clean code practices to deliver smooth, user-focused solutions."
  ],
  skills: {
    "Languages & Frameworks": [
      "C#",
      ".NET 8",
      "WPF",
      "Java",
      "Spring Boot",
      "Python",
      "React",
      "Three.js",
      "WebGL",
      "Flutter",
      "Dart"
    ],
    "Tools & Environments": [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Docker",
      "Firebase",
      "SQLite",
      "MySQL",
      "SQL Server",
      "Ollama"
    ],
    "Core Foundations": [
      "Data Structures & Algorithms",
      "OOP & MVVM Pattern",
      "Win32 API & System Automation",
      "AI / LLM Integration",
      "3D Graphics & PWA",
      "Databases",
      "Software Testing"
    ],
    "Soft Skills": [
      "Teamwork",
      "Problem Solving",
      "Logical Thinking",
      {
        name: "English (APTIS B2)",
        url: "https://credentials.britishcouncil.org/2568f20c-7ed1-49ec-88a7-1a253a9e30b6?key=c0f39f1c6e82f12130d59a0a565d7b93c1026064085c03d9b3f22fce463fcd14&record_view=true",
        label: "Verify Credential"
      }
    ]
  },
  projects: [
    {
      title: "GoalOverlay (Target_X)",
      icon: "Target",
      gradient: ["#0f172a", "#3b82f6"],
      tags: [".NET 8", "C#", "WPF", "MVVM", "Win32 API"],
      desc: "High-performance Windows HUD overlay displaying daily & monthly goals unobtrusively (WS_EX_NOACTIVATE, click-through, auto carry-over, smart timers & reminder window).",
      descVi: "Ứng dụng Windows Desktop HUD Overlay bán trong suốt ghim màn hình theo dõi mục tiêu ngày/tháng, tự chuyển tiếp mục tiêu, hẹn giờ nhắc việc không cướp focus (WS_EX_NOACTIVATE).",
      url: "https://github.com/dangbinhduongwork-ai/Target_X"
    },
    {
      title: "TroLy (AI Assistant Windows)",
      icon: "Bot",
      gradient: ["#1e1035", "#8b5cf6"],
      tags: ["Python", "Gemini API", "Ollama", "SQLite", "Automation"],
      desc: "Intelligent Windows desktop AI assistant with natural Vietnamese interaction, system automation, persistent long-term memory (SQLite), timely reminders, and hybrid Gemini & local Ollama LLMs.",
      descVi: "Trợ lý ảo AI chạy trên Windows 10/11 tương tác bằng tiếng Việt: điều khiển máy tính, quản lý file, trí nhớ dài hạn (SQLite), hẹn giờ nhắc việc và kết hợp linh hoạt Gemini Cloud & Ollama Local.",
      url: "https://github.com/dangbinhduongwork-ai/TroLy"
    },
    {
      title: "Grocery Shop (Nguyen Huong)",
      icon: "ShoppingCart",
      gradient: ["#0f3d2a", "#22c55e"],
      tags: ["React", "Spring Boot", "Flutter", "MySQL"],
      desc: "Full-stack e-commerce platform (React Web + Flutter App + Spring Boot) for grocery & confectionery retail with cart, checkout, JWT authentication, and a 7-module admin suite.",
      descVi: "Hệ thống thương mại điện tử đa nền tảng (React Web + Flutter Mobile + Spring Boot) cho cửa hàng bách hóa: giỏ hàng, thanh toán, xác thực JWT và trang quản trị 7 phân hệ.",
      url: "https://github.com/dangbinhduongwork-ai/candy-shop",
      demoUrl: "https://nguyenhuongshop.vercel.app"
    },
    {
      title: "Duck Pond (Ao Vit 3D)",
      icon: "Waves",
      gradient: ["#0e3a40", "#06b6d4"],
      tags: ["Three.js", "WebGL", "JavaScript", "PWA"],
      desc: "Interactive 3D relaxation pond viewed from an underwater perspective, featuring Three.js physics water ripples, swimming ducks, ASMR audio, and Zen mode.",
      descVi: "Bể thủy sinh thư giãn 3D tương tác dưới góc nhìn đáy hồ, hiệu ứng sóng nước vật lý Three.js, vịt bơi lội sinh động, âm thanh ASMR và chế độ Zen mode.",
      url: "https://github.com/dangbinhduongwork-ai/duck-duck-test-main",
      demoUrl: "https://ducktherapy.vercel.app/"
    },
    {
      title: "Realtime Language Translation",
      icon: "Globe",
      gradient: ["#0b1e3f", "#1e5fd8"],
      tags: ["Python", "RapidOCR", "PySide6"],
      desc: "Windows desktop application for real-time English-to-Vietnamese on-screen OCR translation displayed seamlessly via a transparent overlay.",
      descVi: "Ứng dụng Windows Desktop dịch màn hình thời gian thực từ tiếng Anh sang tiếng Việt bằng RapidOCR, hiển thị tiện lợi qua lớp phủ overlay trong suốt.",
      url: "https://github.com/dangbinhduongwork-ai/realtimelanguagetranslation"
    },
    {
      title: "CaloOut (Flutter App)",
      icon: "Activity",
      gradient: ["#062b1e", "#10b981"],
      tags: ["Flutter", "Dart", "Firebase"],
      desc: "Mobile fitness & health tracking application built with Flutter and Firebase, featuring intuitive calorie monitoring and modern UI/UX.",
      descVi: "Ứng dụng di động theo dõi sức khỏe và thể lực phát triển bằng Flutter và Firebase, giao diện trực quan hỗ trợ quản lý lượng calo tiêu thụ hàng ngày.",
      url: "https://github.com/dangbinhduongwork-ai/CaloOutV2"
    },
    {
      title: "CaloIn",
      icon: "Heart",
      gradient: ["#102a56", "#0d9488"],
      tags: ["Flutter", "Dart", "SQLite"],
      desc: "Offline-first Flutter app for daily calorie and macronutrient logging with barcode scanning support and local SQLite storage.",
      descVi: "Ứng dụng Flutter ghi chép calo và chất dinh dưỡng theo cơ chế offline-first, hỗ trợ quét mã vạch và lưu trữ dữ liệu an toàn trên SQLite nội bộ.",
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
