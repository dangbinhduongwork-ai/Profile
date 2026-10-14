/**
 * Song ngữ Tiếng Việt (VI) và Tiếng Anh (EN)
 * Đảm bảo toàn bộ chữ trên trang được quản lý tập trung và không bị vỡ bố cục khi chữ tiếng Anh dài hơn.
 */

export const translations = {
  vi: {
    langCode: 'VI',
    nextLangCode: 'EN',
    langName: 'Tiếng Việt',
    nav: [
      { id: 'home', label: 'Trang chủ', icon: 'Home' },
      { id: 'about', label: 'Giới thiệu', icon: 'User' },
      { id: 'skills', label: 'Kỹ năng', icon: 'Layers' },
      { id: 'projects', label: 'Dự án', icon: 'Folder' },
      { id: 'contact', label: 'Liên hệ', icon: 'Mail' },
      { id: 'blog', label: 'Blog', icon: 'FileText' },
    ],
    // 5 mục cho Bottom Tab Bar mobile
    bottomNav: [
      { id: 'home', label: 'Trang chủ', icon: 'Home' },
      { id: 'about', label: 'Giới thiệu', icon: 'User' },
      { id: 'skills', label: 'Kỹ năng', icon: 'Layers' },
      { id: 'projects', label: 'Dự án', icon: 'Folder' },
      { id: 'contact', label: 'Liên hệ', icon: 'Mail' },
    ],
    hero: {
      greeting: 'Xin chào, tôi là',
      role: 'Sinh viên năm 4 | Công nghệ Thông tin',
      heroText:
        'Đam mê công nghệ, thích xây dựng những sản phẩm hữu ích và không ngừng học hỏi để trở thành một lập trình viên giỏi, tạo ra giá trị thực tế.',
      viewProjects: 'Xem dự án',
      downloadCv: 'Tải CV',
      studentYear: 'Sinh viên CNTT - Năm 4',
    },
    about: {
      title: 'Giới thiệu',
      paragraphs: [
        'Mình là Đặng Bình Dương, sinh viên năm 4 ngành Công nghệ Thông tin. Mình yêu thích lập trình, đặc biệt là phát triển web, ứng dụng di động và các công nghệ mới như React, Spring Boot, Flutter...',
        'Mình luôn cố gắng học hỏi, rèn luyện kỹ năng và xây dựng những dự án thực tế để từng bước tiến gần hơn đến mục tiêu trở thành một lập trình viên chuyên nghiệp và tự do tài chính.',
      ],
      learnMore: 'Tìm hiểu thêm về tôi',
    },
    skills: {
      title: 'Kỹ năng',
      categories: {
        'Ngôn ngữ & Framework': ['Java', 'Spring Boot', 'C#', '.NET', 'React', 'Flutter', 'Dart'],
        'Công cụ & Môi trường': ['Git', 'GitHub', 'VS Code', 'Docker', 'Firebase', 'MySQL', 'SQL Server'],
        'Kiến thức nền tảng': ['Cấu trúc dữ liệu & Giải thuật', 'Hệ điều hành', 'Mạng máy tính', 'Cơ sở dữ liệu', 'Kiểm thử phần mềm', 'Bảo mật'],
        'Kỹ năng mềm': ['Làm việc nhóm', 'Giải quyết vấn đề', 'Tư duy logic', 'Tiếng Anh (TOEIC - đang học)'],
      },
    },
    projects: {
      title: 'Dự án nổi bật',
      viewOnGithub: 'Xem trên GitHub',
      liveDemo: 'Xem Demo',
    },
    contact: {
      title: 'Liên hệ',
      greeting: 'Mình luôn sẵn sàng kết nối, hợp tác và học hỏi những điều mới!',
      emailLabel: 'Email',
      zaloLabel: 'Zalo',
      addressLabel: 'Địa chỉ',
      sendMessage: 'Gửi tin nhắn',
      socialTitle: 'Mạng xã hội',
    },
    blog: {
      title: 'Blog',
      comingSoon: 'Sắp ra mắt',
    },
    seasons: {
      auto: 'Tự động',
      spring: 'Xuân',
      summer: 'Hạ',
      autumn: 'Thu',
      winter: 'Đông',
      none: 'Tắt',
      ariaLabel: 'Hiệu ứng theo mùa',
    },
    footer: {
      copyright: '© 2026 Đặng Bình Dương.',
    },
  },

  en: {
    langCode: 'EN',
    nextLangCode: 'VI',
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
        "I'm Dang Binh Duong, a 4th-year Information Technology student. I love programming, especially web development, mobile apps, and modern technologies like React, Spring Boot, Flutter...",
        'I constantly strive to learn, hone my skills, and build real-world projects to step-by-step progress toward becoming a professional software engineer and achieving financial freedom.',
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
      greeting: 'Always open to connect, collaborate, and learn new things!',
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
      copyright: '© 2026 Dang Binh Duong.',
    },
  },
};

export default translations;
