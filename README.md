# Đặng Bình Dương – Portfolio Cá Nhân

Website portfolio cá nhân xây dựng bằng **React 18 + Vite + Tailwind CSS 3**, thiết kế hiện đại với chủ đề Dark / Light mode, bố cục chuẩn responsive và hiệu ứng mượt mà.

## Tính năng nổi bật

- **Chủ đề Dark / Light linh hoạt**: Tự động nhận diện thiết lập hệ thống (`prefers-color-scheme`), lưu tùy chọn vào `localStorage`, chuyển đổi không bị chớp trắng (Anti-FOUC).
- **Bộ màu thiết kế chuyên nghiệp**:
  - Dark Mode: `#070d1a`, `#0d1627`, `#111d33`, `#1b2a47`, `#2b8cff`, `#3ee0ff`.
  - Light Mode: `#f3f6fc`, `#ffffff`, `#eef3fb`, `#d9e2f1`, `#1570ef`, `#06a7d8`.
- **Typography chất lượng cao**: Google Fonts **Be Vietnam Pro** (hỗ trợ tiếng Việt đầy đủ) và font viết tay **Caveat** cho slogan.
- **Cuộn mượt & ScrollSpy**: Theo dõi vị trí cuộn trang bằng `IntersectionObserver`, tự động đồng bộ trạng thái active trên cả Header và Sidebar.
- **Dữ liệu tập trung**: Toàn bộ nội dung lưu tại `src/data/profile.js`, không hard-code văn bản trong components.
- **Chuẩn icon**: Giao diện dùng `lucide-react`, thương hiệu dùng `react-icons` và SVG inline chuẩn theo thiết kế. Không sử dụng emoji.

## Công nghệ sử dụng

- [React 18](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Cài đặt & Chạy dự án

```bash
# 1. Cài đặt dependencies
npm install

# 2. Khởi chạy môi trường phát triển
npm run dev

# 3. Đóng gói cho production
npm run build
```

---
© 2026 Đặng Bình Dương. All rights reserved.
