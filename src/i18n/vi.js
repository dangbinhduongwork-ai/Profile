/**
 * Vietnamese translations dictionary for Developer Portfolio
 */

export const vi = {
  langCode: 'VI',
  langName: 'Tiếng Việt',
  nav: [
    { id: 'home', label: 'Trang chủ', icon: 'Home' },
    { id: 'about', label: 'Giới thiệu', icon: 'User' },
    { id: 'skills', label: 'Kỹ năng', icon: 'Layers' },
    { id: 'projects', label: 'Dự án', icon: 'Folder' },
    { id: 'blog', label: 'Blog', icon: 'FileText' },
    { id: 'contact', label: 'Liên hệ', icon: 'Mail' },
  ],
  bottomNav: [
    { id: 'home', label: 'Trang chủ', icon: 'Home' },
    { id: 'about', label: 'Giới thiệu', icon: 'User' },
    { id: 'skills', label: 'Kỹ năng', icon: 'Layers' },
    { id: 'projects', label: 'Dự án', icon: 'Folder' },
    { id: 'contact', label: 'Liên hệ', icon: 'Mail' },
  ],
  hero: {
    greeting: 'Xin chào, mình là',
    role: 'Sinh viên năm 4 | Công nghệ thông tin',
    heroText:
      'Đam mê xây dựng sản phẩm thực tế từ Desktop, Mobile đến Web, không ngừng học hỏi và rèn luyện để tạo ra những giải pháp phần mềm chất lượng.',
    viewProjects: 'Xem dự án',
    contactBtn: 'Liên hệ',
    studentYear: 'Sinh viên CNTT - Năm 4',
  },
  about: {
    title: 'Về bản thân',
    paragraphs: [
      'Mình là Đặng Bình Dương, sinh viên năm 4 chuyên ngành Công nghệ Thông tin. Mình yêu thích lập trình và tập trung xây dựng các sản phẩm thực tế – từ ứng dụng Windows Desktop (.NET/WPF, Trợ lý AI), ứng dụng di động Flutter đến các dự án web hiện đại (React, Three.js, Spring Boot).',
      'Với tinh thần chủ động và ham học hỏi, mình luôn chú trọng nắm chắc nền tảng, hoàn thiện tư duy kiến trúc phần mềm và trau chuốt trải nghiệm người dùng trong từng dòng mã.',
    ],
    learnMore: 'Xem thêm về mình',
  },
  skills: {
    title: 'Kỹ năng',
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
        'Cấu trúc dữ liệu & Giải thuật',
        'Lập trình OOP & MVVM',
        'Win32 API & Tự động hóa hệ thống',
        'Tích hợp AI / LLM',
        'Đồ họa 3D & PWA',
        'Cơ sở dữ liệu',
        'Kiểm thử phần mềm',
      ],
      'Soft Skills': [
        'Làm việc nhóm',
        'Giải quyết vấn đề',
        'Tư duy logic',
        {
          name: 'Tiếng Anh (APTIS B2)',
          url: 'https://credentials.britishcouncil.org/2568f20c-7ed1-49ec-88a7-1a253a9e30b6?key=c0f39f1c6e82f12130d59a0a565d7b93c1026064085c03d9b3f22fce463fcd14&record_view=true',
          label: 'Bấm xem minh chứng chứng chỉ British Council',
        },
      ],
    },
  },
  projects: {
    title: 'Dự án nổi bật',
    viewOnGithub: 'Xem trên GitHub',
    liveDemo: 'Bản thử nghiệm',
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
    viewAll: 'Xem tất cả',
    footerNotice: 'Bài viết đầu tiên sắp ra mắt. Theo dõi trên GitHub để không bỏ lỡ.',
    followGithub: 'Theo dõi trên GitHub',
    emptyTitle: 'Chưa có bài viết',
    emptyMessage: 'Các bài viết đầu tiên đang được chuẩn bị và sẽ sớm ra mắt.',
    posts: [
      {
        id: 'getting-started-with-flutter',
        tag: 'Flutter',
        title: 'Bắt đầu với Flutter cho người mới bắt đầu',
        excerpt:
          'Cài môi trường, chạy ứng dụng đầu tiên và hiểu widget, state theo cách dễ nhất.',
        status: 'soon',
        date: '15/01/2025',
        readTime: '5 phút đọc',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'Code',
          gradient: ['#0b1e3f', '#1e5fd8'],
        },
      },
      {
        id: 'spring-boot-rest-api',
        tag: 'Spring Boot',
        title: 'Spring Boot REST API từ A đến Z',
        excerpt: '',
        status: 'soon',
        date: '01/02/2025',
        readTime: '7 phút đọc',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'Layers',
          gradient: ['#0f3d2a', '#22c55e'],
        },
      },
      {
        id: 'software-engineering-student-journey',
        tag: 'Nhật ký',
        title: 'Hành trình sinh viên năm 4 ngành Kỹ thuật Phần mềm',
        excerpt: '',
        status: 'soon',
        date: '15/02/2025',
        readTime: '4 phút đọc',
        url: 'https://github.com/dangbinhduongwork-ai',
        cover: {
          icon: 'FileText',
          gradient: ['#2a1a52', '#7c3aed'],
        },
      },
    ],
  },
  seasons: {
    auto: 'Tự động',
    spring: 'Mùa xuân',
    summer: 'Mùa hạ',
    autumn: 'Mùa thu',
    winter: 'Mùa đông',
    none: 'Tắt hiệu ứng',
    ariaLabel: 'Hiệu ứng mùa',
  },
  footer: {
    copyright: 'Đặng Bình Dương',
  },
};

export default vi;
