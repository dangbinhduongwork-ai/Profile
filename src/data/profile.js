export const profile = {
  name: "Đặng Bình Dương",
  greeting: "Xin chào, tôi là",
  role: "Sinh viên năm 4 | Công nghệ Thông tin",
  heroText: "Đam mê công nghệ, thích xây dựng những sản phẩm hữu ích và không ngừng học hỏi để trở thành một lập trình viên giỏi, tạo ra giá trị thực tế.",
  tagline: ["Better", "Code", "Bigger", "Dreams"],
  quote: "Không có gì là không thể, chỉ có những thứ chưa làm được.",
  location: "Ba Vì, Hà Nội",
  address: "Thôn 8, xã Suối 2, Ba Vì, Hà Nội",
  email: "dangbinhduong.work@gmail.com",
  zalo: "0865087784",
  github: "https://github.com/dangbinhduongwork-ai",
  linkedin: "https://www.linkedin.com/in/duong-dang-binh-4997a2443",
  zaloLink: "https://zalo.me/0865087784",
  mapLink: encodeURI("https://www.google.com/maps/search/?api=1&query=Thôn 8 xã Suối 2 Ba Vì Hà Nội"),
  about: [
    "Mình là Đặng Bình Dương, sinh viên năm 4 ngành Công nghệ Thông tin. Mình yêu thích lập trình, đặc biệt là phát triển web, ứng dụng di động và các công nghệ mới như React, Spring Boot, Flutter...",
    "Mình luôn cố gắng học hỏi, rèn luyện kỹ năng và xây dựng những dự án thực tế để từng bước tiến gần hơn đến mục tiêu trở thành một lập trình viên chuyên nghiệp và tự do tài chính."
  ],
  skills: {
    "Ngôn ngữ & Framework": ["Java", "Spring Boot", "C#", ".NET", "React", "Flutter", "Dart"],
    "Công cụ & Môi trường": ["Git", "GitHub", "VS Code", "Docker", "Firebase", "MySQL", "SQL Server"],
    "Kiến thức nền tảng": ["Cấu trúc dữ liệu & Giải thuật", "Hệ điều hành", "Mạng máy tính", "Cơ sở dữ liệu", "Kiểm thử phần mềm", "Bảo mật"],
    "Kỹ năng mềm": ["Làm việc nhóm", "Giải quyết vấn đề", "Tư duy logic", "Tiếng Anh (TOEIC - đang học)"]
  },
  projects: [
    {
      title: "Realtime Language Translation",
      icon: "Globe",
      gradient: ["#0b1e3f", "#1e5fd8"],
      tags: ["Python", "RapidOCR", "PySide6"],
      desc: "Ứng dụng Windows đọc chữ tiếng Anh trên màn hình bằng OCR, dịch sang tiếng Việt theo thời gian thực và hiển thị bằng lớp phủ trong suốt.",
      url: "https://github.com/dangbinhduongwork-ai/realtimelanguagetranslation"
    },
    {
      title: "Grocery Shop (Nguyen Huong)",
      icon: "ShoppingCart",
      gradient: ["#0f3d2a", "#22c55e"],
      tags: ["React", "Spring Boot", "Flutter", "MySQL"],
      desc: "Nền tảng thương mại điện tử đa nền tảng (Web React + App Flutter + Spring Boot) cho cửa hàng tạp hóa & bánh kẹo, hỗ trợ giỏ hàng, đặt hàng, bảo mật JWT và bộ quản trị 7 phân hệ.",
      url: "https://github.com/dangbinhduongwork-ai/candy-shop",
      demoUrl: "https://nguyenhuongshop.vercel.app"
    },
    {
      title: "CaloOut (Flutter App)",
      icon: "Activity",
      gradient: ["#062b1e", "#10b981"],
      tags: ["Flutter", "Dart", "Firebase"],
      desc: "Ứng dụng theo dõi calo, sức khỏe, đang phát triển và tối ưu UI/UX.",
      url: "https://github.com/dangbinhduongwork-ai/CaloOutV2"
    },
    {
      title: "CaloIn",
      icon: "Heart",
      gradient: ["#102a56", "#0d9488"],
      tags: ["Flutter", "Dart", "SQLite"],
      desc: "Ứng dụng Flutter ghi nhật ký calo và macro nạp vào mỗi ngày, hoạt động offline, hỗ trợ quét mã vạch.",
      url: "https://github.com/dangbinhduongwork-ai/CaloIn"
    }
  ],
  blog: [
    "Bắt đầu với Flutter cho người mới",
    "Spring Boot REST API từ A đến Z",
    "Hành trình học lập trình năm 4"
  ],
  nav: [
    { id: "home", label: "Trang chủ", icon: "Home" },
    { id: "about", label: "Giới thiệu", icon: "User" },
    { id: "skills", label: "Kỹ năng", icon: "Layers" },
    { id: "projects", label: "Dự án", icon: "Folder" },
    { id: "blog", label: "Blog", icon: "FileText" },
    { id: "contact", label: "Liên hệ", icon: "Mail" }
  ],
  viewProjects: "Xem dự án",
  downloadCv: "Tải CV",
  cvFile: "/cv.pdf",
  studentYear: "Sinh viên CNTT - Năm 4",
  learnMore: "Tìm hiểu thêm về tôi",
  sectionTitles: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án nổi bật",
    blog: "Blog",
    contact: "Liên hệ"
  },
  viewOnGithub: "Xem trên GitHub",
  contactGreeting: "Mình luôn sẵn sàng kết nối, hợp tác và học hỏi những điều mới!",
  sendMessage: "Gửi tin nhắn",
  socialTitle: "Mạng xã hội",
  comingSoon: "Sắp ra mắt",
  emailLabel: "Email",
  zaloLabel: "Zalo",
  addressLabel: "Địa chỉ",
  copyright: "© 2026 Đặng Bình Dương."
};

export default profile;
