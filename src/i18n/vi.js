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
      'Đam mê công nghệ, xây dựng sản phẩm thực tế và không ngừng học hỏi để trở thành lập trình viên xuất sắc tạo ra giá trị.',
    viewProjects: 'Xem dự án',
    contactBtn: 'Liên hệ',
    studentYear: 'Sinh viên CNTT - Năm 4',
  },
  about: {
    title: 'Về bản thân',
    paragraphs: [
      'Mình là Đặng Bình Dương, sinh viên năm 4 ngành Công nghệ thông tin. Mình đam mê lập trình, đặc biệt là phát triển web hiện đại, ứng dụng di động và hệ thống backend như React, Spring Boot, Flutter.',
      'Mình luôn nỗ lực học hỏi, rèn luyện kỹ năng và thực hiện các dự án thực tế để từng bước trở thành kỹ sư phần mềm chuyên nghiệp và đạt được tự do tài chính.',
    ],
    learnMore: 'Xem thêm về mình',
  },
  skills: {
    title: 'Kỹ năng',
    categories: {
      'Languages & Frameworks': ['Java', 'Spring Boot', 'C#', '.NET', 'React', 'Flutter', 'Dart'],
      'Tools & Environments': ['Git', 'GitHub', 'VS Code', 'Docker', 'Firebase', 'MySQL', 'SQL Server'],
      'Core Foundations': ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Databases', 'Software Testing', 'Security'],
      'Soft Skills': ['Teamwork', 'Problem Solving', 'Logical Thinking', 'English (TOEIC in progress)'],
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
