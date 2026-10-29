# Dang Binh Duong – Developer Portfolio

Website portfolio cá nhân được xây dựng bằng **React 18 + Vite + Tailwind CSS 3 + Three.js**, thiết kế hiện đại theo phong cách tối giản, hỗ trợ song ngữ (Tiếng Việt / English), chủ đề Dark / Light mode, hiệu ứng mùa tự động và nhân vật 3D Chibi tương tác độc đáo.

---

## ✨ Tính năng nổi bật

- 🤖 **Nhân vật 3D Chibi tương tác (Three.js Mascot)**:
  - Nhân vật Chibi 3D bước đi thong thả qua lại dưới đáy màn hình.
  - Tương tác kéo - thả (**Drag & Drop**) bằng chuột hoặc cảm ứng trên điện thoại.
  - Trọng lực rơi tự do (**Gravity**) và nảy nhẹ (**Bounce**) khi thả tay tiếp đất.
  - Tự động nhận diện thiết bị, tự né thanh điều hướng trên mobile (`BottomTabBar`).
  - **Tối ưu hiệu năng**: Nạp ngầm qua `requestIdleCallback` và `React.lazy`, không làm chậm tốc độ tải trang ban đầu.
- 🎨 **Chủ đề Dark / Light linh hoạt**: Tự động nhận diện thiết lập hệ thống (`prefers-color-scheme`), lưu tùy chọn vào `localStorage`, chuyển đổi mượt mà không chớp trắng (Anti-FOUC).
- 🌸 **Hiệu ứng mùa độc đáo (Seasonal Canvas Effects)**: Hoa đào mùa xuân, đốm sáng đom đóm mùa hè, lá vàng mùa thu, tuyết rơi mùa đông. Tùy biến 100% qua file cấu hình `src/config/season.js`.
- 🌐 **Hỗ trợ song ngữ Tiếng Việt & English**: Chuyển đổi ngôn ngữ tức thì, có script kiểm tra tính đồng bộ cấu trúc khóa tự động (`npm run check:i18n`).
- 📜 **Minh chứng chứng chỉ trực tuyến**: Kỹ năng tiếng Anh **APTIS B2** tích hợp liên kết xác thực trực tiếp từ [Hội đồng Anh (British Council)](https://credentials.britishcouncil.org/2568f20c-7ed1-49ec-88a7-1a253a9e30b6?key=c0f39f1c6e82f12130d59a0a565d7b93c1026064085c03d9b3f22fce463fcd14&record_view=true).
- 📱 **Giao diện chuẩn Responsive**: Bố cục Sidebar + Main Content trên Desktop và Header + Bottom Tab Bar tiện lợi trên Mobile.

---

## 🎮 Hướng dẫn chỉnh kích cỡ & tốc độ nhân vật 3D Chibi (.glb)

Nhân vật 3D được gọi và quản lý tại file [`src/App.jsx`](src/App.jsx). Bạn có thể dễ dàng thay đổi kích thước, tốc độ di chuyển hoặc đổi mô hình khác bằng cách chỉnh sửa các thuộc tính (props).

### 1. Vị trí chỉnh sửa trong mã nguồn

Mở file [`src/App.jsx`](src/App.jsx), tìm đoạn mã gọi component `<WalkingCharacter />` (khoảng dòng 43):

```jsx
{/* 3D Walking & Interactive Character */}
{show3D && (
  <Suspense fallback={null}>
    <WalkingCharacter
      modelUrl="/models/chibi_bald_business_man_walk.glb"
      scale={100}
      speed={85}
      gravity={1800}
      bounce={0.35}
    />
  </Suspense>
)}
```

### 2. Bảng tham số chi tiết của `WalkingCharacter`

| Thuộc tính (Prop) | Kiểu dữ liệu | Giá trị mặc định | Giải thích ý nghĩa |
| :--- | :--- | :--- | :--- |
| **`scale`** | `number` | `100` | **Kích cỡ chiều cao của nhân vật** (tính theo pixel màn hình). Ví dụ: `75` (nhỏ gọn), `100` (chuẩn), `130` (lớn hơn). |
| **`speed`** | `number` | `85` | **Tốc độ di chuyển bước đi** (pixel / giây). Ví dụ: `50` (đi dạo chậm rãi), `85` (vừa phải), `130` (đi nhanh năng động). |
| **`modelUrl`** | `string` | `"/models/chibi_..."` | Đường dẫn đến file mô hình 3D định dạng `.glb` trong thư mục `public/`. |
| **`gravity`** | `number` | `1800` | Gia tốc trọng trường khi bạn nhấc nhân vật lên rồi thả rơi xuống sàn. |
| **`bounce`** | `number` | `0.35` | Độ đàn hồi nảy lên khi nhân vật chạm sàn (`0` = không nảy, `0.5` = nảy cao). |

---

### 3. Một số ví dụ tùy biến thường gặp

#### Ví dụ A: Chibi nhỏ gọn, đi chậm thong thả
```jsx
<WalkingCharacter
  modelUrl="/models/chibi_bald_business_man_walk.glb"
  scale={80}   // Thu nhỏ kích cỡ xuống 80px
  speed={55}   // Đi chậm lại thong thả
/>
```

#### Ví dụ B: Chibi to rõ hơn, bước đi nhanh nhẹn
```jsx
<WalkingCharacter
  modelUrl="/models/chibi_bald_business_man_walk.glb"
  scale={120}  // Phóng to lên 120px
  speed={115}  // Bước đi nhanh hơn
/>
```

#### Ví dụ C: Thay đổi bằng một mô hình 3D (.glb) mới của bạn
1. Sao chép file mô hình 3D mới (ví dụ `my_pet.glb`) vào thư mục `public/models/`.
2. Trong `src/App.jsx`, đổi đường dẫn `modelUrl`:
```jsx
<WalkingCharacter
  modelUrl="/models/my_pet.glb"
  scale={100}
  speed={85}
/>
```
*(Mô hình `.glb` có chứa sẵn animation bước đi (`walk`, `run`, hoặc animation đầu tiên) sẽ tự động được phát).*

#### Ví dụ D: Tạm thời tắt nhân vật 3D
Nếu bạn muốn tắt tạm thời nhân vật Chibi, chỉ cần comment lại đoạn gọi component trong `src/App.jsx`:
```jsx
{/* {show3D && (
  <Suspense fallback={null}>
    <WalkingCharacter ... />
  </Suspense>
)} */}
```

---

## 🍂 Hướng dẫn chỉnh hiệu ứng mùa (Seasonal Effects)

Bạn có thể thay đổi hiệu ứng mùa trực tiếp tại file [`src/config/season.js`](src/config/season.js) mà không cần can thiệp vào các component giao diện.

### Bảng cấu hình `seasonConfig`:

| Tham số | Giá trị hỗ trợ | Ý nghĩa |
| :--- | :--- | :--- |
| `mode` | `"auto"` \| `"spring"` \| `"summer"` \| `"autumn"` \| `"winter"` \| `"none"` | Chế độ mùa muốn hiển thị (`"auto"` = tự đổi theo tháng, `"none"` = tắt hoàn toàn). |
| `intensity` | `0.2` → `2.0` | Mật độ hạt trên màn hình (`1.0` là chuẩn, `1.5` – `2.0` là dày đặc). |
| `speed` | `0.3` → `2.0` | Tốc độ rơi/bay (`0.5` = rơi chậm lãng mạn, `1.0` = bình thường). |
| `allowVisitorSwitch` | `true` \| `false` | Hiển thị menu chọn mùa nhỏ trên thanh điều hướng để người xem tự chọn. |

> **Xem thử nhanh qua URL**: Bạn có thể gắn thêm tham số `?season=winter` (hoặc `spring`, `summer`, `autumn`, `none`) vào sau link website để xem thử hiệu ứng ngay lập tức. Ví dụ: `http://localhost:5173/?season=winter`.

---

## 🚀 Dự án nổi bật (Featured Projects)

1. [GoalOverlay (Target_X)](https://github.com/dangbinhduongwork-ai/Target_X)
   - **Công nghệ**: .NET 8, C#, WPF, MVVM Toolkit, Win32 API
   - **Mô tả**: Ứng dụng Windows Desktop HUD Overlay bán trong suốt ghim màn hình theo dõi mục tiêu ngày/tháng, tự chuyển tiếp mục tiêu chưa xong, hẹn giờ nhắc việc thông minh không cướp focus bàn phím (`WS_EX_NOACTIVATE`), 96 bài unit test hoàn thành 100%.

2. [TroLy (Windows AI Assistant)](https://github.com/dangbinhduongwork-ai/TroLy)
   - **Công nghệ**: Python, Gemini API, Ollama (Local LLM), SQLite, APScheduler, Windows Toast
   - **Mô tả**: Trợ lý ảo AI chạy trên Windows 10/11 tương tác bằng tiếng Việt: điều khiển máy tính, quản lý file, trí nhớ dài hạn (SQLite), hẹn giờ nhắc việc và kết hợp linh hoạt Gemini Cloud & Ollama Local.

3. [Grocery Shop (Nguyen Huong Store)](https://github.com/dangbinhduongwork-ai/candy-shop) – [Live Demo](https://nguyenhuongshop.vercel.app)
   - **Công nghệ**: React, Flutter, Spring Boot, MySQL, JWT
   - **Mô tả**: Nền tảng thương mại điện tử đa nền tảng (Web + Mobile App + Backend) quản lý bán lẻ bánh kẹo & bách hóa với 7 phân hệ quản trị.

4. [Duck Pond (Ao Vit 3D)](https://github.com/dangbinhduongwork-ai/duck-duck-test-main) – [Live Demo](https://ducktherapy.vercel.app/)
   - **Công nghệ**: Three.js, WebGL, JavaScript, PWA, Web Audio
   - **Mô tả**: Bể thủy sinh thư giãn 3D tương tác dưới góc nhìn đáy hồ với hiệu ứng sóng nước vật lý, vịt bơi lội sinh động, âm thanh ASMR và chế độ Zen mode.

5. [Realtime Language Translation](https://github.com/dangbinhduongwork-ai/realtimelanguagetranslation)
   - **Công nghệ**: Python, RapidOCR, PySide6
   - **Mô tả**: Ứng dụng Windows dịch văn bản màn hình trực tiếp từ tiếng Anh sang tiếng Việt thời gian thực bằng OCR với lớp phủ overlay trong suốt.

6. [CaloOut (Mobile App)](https://github.com/dangbinhduongwork-ai/CaloOutV2)
   - **Công nghệ**: Flutter, Dart, Firebase
   - **Mô tả**: Ứng dụng di động theo dõi thể lực, tính toán và kiểm soát lượng calo tiêu hao hàng ngày.

7. [CaloIn](https://github.com/dangbinhduongwork-ai/CaloIn)
   - **Công nghệ**: Flutter, Dart, SQLite
   - **Mô tả**: Ứng dụng ghi chép dinh dưỡng offline-first, hỗ trợ quét mã vạch thực phẩm và lưu trữ cơ sở dữ liệu SQLite nội bộ.

---

## 🛠️ Công nghệ sử dụng

- **Frontend Core**: [React 18](https://react.dev/), [Vite 6](https://vite.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) (WebGL, GLTFLoader, Orthographic Camera, Physics & Animations)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), CSS Custom Properties (Theme tokens)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **i18n**: Custom Lightweight Context & Verification Script

---

## 💻 Cài đặt & Chạy dự án

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển (Development Server)
npm run dev
# Hoặc nhấp đúp chạy file dev.bat (trên Windows)
# Mở trình duyệt tại: http://localhost:5173

# 3. Kiểm tra tính đồng bộ song ngữ (i18n Parity Check)
npm run check:i18n

# 4. Đóng gói cho môi trường Production
npm run build
```

---

© 2026 **Dang Binh Duong**
