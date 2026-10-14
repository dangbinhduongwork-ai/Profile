# Đặng Bình Dương – Portfolio Cá Nhân

Website portfolio cá nhân xây dựng bằng **React 18 + Vite + Tailwind CSS 3**, thiết kế hiện đại với chủ đề Dark / Light mode, bố cục chuẩn responsive và hiệu ứng mượt mà.

## Tính năng nổi bật

- **Chủ đề Dark / Light linh hoạt**: Tự động nhận diện thiết lập hệ thống (`prefers-color-scheme`), lưu tùy chọn vào `localStorage`, chuyển đổi không bị chớp trắng (Anti-FOUC).
- **Bộ màu thiết kế chuyên nghiệp**:
  - Dark Mode: `#070d1a`, `#0d1627`, `#111d33`, `#1b2a47`, `#2b8cff`, `#3ee0ff`.
  - Light Mode: `#f3f6fc`, `#ffffff`, `#eef3fb`, `#d9e2f1`, `#1570ef`, `#06a7d8`.
- **Hiệu ứng theo mùa độc đáo (Seasonal Canvas Effects)**: Tuyết rơi mùa đông, hoa đào mùa xuân, đốm sáng đom đóm mùa hè, lá vàng mùa thu. Tùy biến 100% qua file cấu hình duy nhất.
- **Typography chất lượng cao**: Google Fonts **Be Vietnam Pro** (hỗ trợ tiếng Việt đầy đủ) và font viết tay **Caveat** cho slogan.
- **Cuộn mượt & ScrollSpy**: Theo dõi vị trí cuộn trang bằng `IntersectionObserver`, tự động đồng bộ trạng thái active trên cả Header và Sidebar.
- **Dữ liệu tập trung**: Toàn bộ nội dung lưu tại `src/data/profile.js`, không hard-code văn bản trong components.
- **Chuẩn icon**: Giao diện dùng `lucide-react`, thương hiệu dùng `react-icons` và SVG inline chuẩn theo thiết kế. Không sử dụng emoji.

---

## Hướng dẫn chỉnh hiệu ứng mùa

Bạn có thể thay đổi hoặc tùy biến toàn bộ hiệu ứng mùa trên website **trực tiếp trên giao diện GitHub** mà không cần cài đặt hay sửa code component:

### Các bước thực hiện:
1. Mở file [`src/config/season.js`](src/config/season.js) trên trình duyệt GitHub.
2. Bấm vào biểu tượng cây bút **(Edit this file)** ở góc trên bên phải file.
3. Thay đổi giá trị cấu hình mong muốn (ví dụ sửa `"mode": "winter"`).
4. Kéo xuống dưới cùng và bấm nút xanh **Commit changes**.
5. Sau khi commit, nền tảng lưu trữ (Vercel / GitHub Pages) sẽ tự động build và deploy lại website sau khoảng 1 phút!

> **Mẹo xem thử nhanh**: Bạn có thể thêm tham số `?season=winter` (hoặc `spring`, `summer`, `autumn`, `none`) vào sau địa chỉ website trên trình duyệt để kiểm tra ngay tức thì (Ví dụ: `https://your-domain.vercel.app/?season=winter`).

### Bảng giải thích các tham số trong `seasonConfig`:

| Tham số | Giá trị | Ý nghĩa |
| :--- | :--- | :--- |
| `mode` | `"auto"` \| `"spring"` \| `"summer"` \| `"autumn"` \| `"winter"` \| `"none"` | Chế độ mùa muốn hiển thị (`"auto"` = tự động theo tháng, `"none"` = tắt hoàn toàn). |
| `intensity` | `0.2` → `2` | Mật độ / số lượng hạt trên màn hình (`1` là chuẩn, `1.5` - `2` là dày đặc). |
| `speed` | `0.3` → `2` | Tốc độ rơi/bay của hạt (`0.5` = rơi chậm lãng mạn, `1` = bình thường). |
| `allowVisitorSwitch` | `true` \| `false` | Hiển thị ô chọn mùa nhỏ (`<select>`) trên Header để người xem tự chọn. |
| `respectReducedMotion`| `true` \| `false` | Tự động tắt hiệu ứng chuyển động nếu máy người dùng bật "Giảm chuyển động". |
| `autoMonths` | Object | Danh sách các tháng trong năm tương ứng với từng mùa cho chế độ `"auto"`. |
| `effects` | Object | Định nghĩa chi tiết hình dạng (`shape`), số lượng (`count`), màu sắc (`colors`), màu nền sáng (`lightThemeColors`), kích thước (`size`), tốc độ rơi (`fall`), và biên độ lắc lư (`sway`). |

### Một số ví dụ tùy biến thường dùng:

#### 1. Tắt hẳn hiệu ứng
```javascript
export const seasonConfig = {
  mode: "none",
  // ... các cấu hình khác giữ nguyên
};
```

#### 2. Tuyết rơi dày đặc hơn vào dịp Giáng sinh
```javascript
export const seasonConfig = {
  mode: "winter",
  intensity: 1.8,  // Tăng mật độ hạt lên 1.8 lần
  // ...
};
```

#### 3. Hoa đào hoặc lá vàng rơi chậm rãi, nhẹ nhàng hơn
```javascript
export const seasonConfig = {
  mode: "spring",
  speed: 0.6,      // Giảm tốc độ rơi xuống 60%
  // ...
};
```

#### 4. Thêm hiệu ứng mới (Ví dụ: Sao băng / Mưa sao mùa hè)
Bạn chỉ cần thêm một mục vào `effects` trong `src/config/season.js`:
```javascript
effects: {
  // Thêm hiệu ứng "stars"
  stars: {
    shape: "glow",
    count: 45,
    colors: ["#ffffff", "#e0e7ff", "#a5b4fc"],
    size: [1.5, 3.5],
    fall: [0.2, 0.6],
    sway: 0.4,
  },
  // ... các hiệu ứng khác
}
```
Sau đó đặt `mode: "stars"` là hiệu ứng mới sẽ tự động hoạt động mà không cần sửa bất kỳ file component nào!

---

## Dự án nổi bật

- [Realtime Language Translation](https://github.com/dangbinhduongwork-ai/realtimelanguagetranslation) – Ứng dụng dịch màn hình thời gian thực (Python, RapidOCR, PySide6)
- [Grocery Shop (Nguyen Huong Store)](https://github.com/dangbinhduongwork-ai/candy-shop) – Nền tảng TMĐT đa nền tảng (Web React + App Flutter + Spring Boot) cho cửa hàng tạp hóa & bánh kẹo ([Demo](https://nguyenhuongshop.vercel.app))
- [CaloOut (Flutter App)](https://github.com/dangbinhduongwork-ai/CaloOutV2) – Ứng dụng theo dõi calo & sức khỏe (Flutter, Dart, Firebase)
- [CaloIn](https://github.com/dangbinhduongwork-ai/CaloIn) – Ứng dụng ghi nhật ký calo & dinh dưỡng nạp vào (Flutter, Dart, SQLite)

---

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
