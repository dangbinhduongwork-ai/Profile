/**
 * CẤU HÌNH HIỆU ỨNG THEO MÙA (SEASON CONFIG)
 * 
 * Hướng dẫn chỉnh sửa nhanh trên GitHub:
 * 1. Mở file này trên trình duyệt GitHub.
 * 2. Bấm vào biểu tượng cây bút (Edit this file).
 * 3. Đổi giá trị "mode" hoặc các thông số mong muốn bên dưới.
 * 4. Bấm "Commit changes" để lưu. Website sẽ tự động cập nhật sau khoảng 1 phút!
 */

export const seasonConfig = {
  // Chế độ hiển thị: "auto" (theo tháng) | "spring" (xuân) | "summer" (hạ) | "autumn" (thu) | "winter" (đông) | "none" (tắt)
  mode: "auto",

  // Hệ số mật độ số lượng hạt: 0.2 (rất ít) → 1 (vừa phải) → 2 (dày đặc)
  intensity: 1,

  // Hệ số tốc độ rơi/bay của hạt: 0.3 (rơi rất chậm) → 1 (bình thường) → 2 (rơi nhanh)
  speed: 1,

  // true = hiển thị ô chọn mùa (<select>) nhỏ trên Header để người xem tự chọn theo ý thích
  allowVisitorSwitch: true,

  // true = tự động tắt hiệu ứng chuyển động nếu người dùng bật chế độ "Giảm chuyển động" trên máy
  respectReducedMotion: true,

  // Phân chia tháng cho chế độ "auto" (1 = Tháng 1, ..., 12 = Tháng 12)
  autoMonths: {
    spring: [2, 3, 4],     // Mùa xuân: Tháng 2, 3, 4 (Hoa đào rơi)
    summer: [5, 6, 7],     // Mùa hè: Tháng 5, 6, 7 (Đốm sáng đom đóm bay lên)
    autumn: [8, 9, 10],    // Mùa thu: Tháng 8, 9, 10 (Lá vàng rơi)
    winter: [11, 12, 1],   // Mùa đông: Tháng 11, 12, 1 (Tuyết rơi)
  },

  // Chi tiết từng hiệu ứng mùa (shape: "petal" | "glow" | "leaf" | "dot")
  // fall: [min, max] (giá trị dương = rơi xuống, giá trị âm = bay lên)
  // sway: biên độ lắc lư ngang
  effects: {
    // Mùa xuân: Hoa đào rơi
    spring: {
      shape: "petal",
      count: 34,
      colors: ["#ffb7c5", "#ffcad4", "#ff9eb5"],
      size: [6, 11],
      fall: [0.5, 1.1],
      sway: 1.1,
    },

    // Mùa hè: Đốm sáng đom đóm bay lơ lửng lên trên
    summer: {
      shape: "glow",
      count: 38,
      colors: ["#ffd84d", "#ffe88a", "#ffc233"],
      size: [2, 4.5],
      fall: [-0.45, -0.15],
      sway: 0.7,
    },

    // Mùa thu: Lá vàng/lá đỏ bay là đà
    autumn: {
      shape: "leaf",
      count: 28,
      colors: ["#e8590c", "#f59f00", "#c92a2a", "#d9480f"],
      size: [9, 15],
      fall: [0.7, 1.5],
      sway: 1.4,
    },

    // Mùa đông: Bông tuyết trắng rơi nhẹ nhàng
    winter: {
      shape: "dot",
      count: 90,
      colors: ["#ffffff", "#e8f1ff"],
      // Màu bông tuyết khi người dùng bật giao diện Sáng (để không bị chìm vào nền trắng)
      lightThemeColors: ["#8fb8ff", "#a9c9ff"],
      size: [1.5, 4],
      fall: [0.5, 1.3],
      sway: 0.8,
    },
  },
};

export default seasonConfig;
