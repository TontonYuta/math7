
# 📚 HƯỚNG DẪN NHÂN BẢN APP HỌC TẬP (CLONE GUIDE)

> **Mục đích:** Hướng dẫn chi tiết từng bước để tạo ra một ứng dụng mới (Ví dụ: Từ Toán 6 sang Toán 7) dựa trên bộ khung mã nguồn (Source Code) hiện có mà không bị lỗi xung đột hệ thống.

---

## 🚀 QUY TRÌNH 4 BƯỚC NHÂN BẢN APP

### BƯỚC 1: NHÂN BẢN CƠ SỞ DỮ LIỆU (Google Sheets)

Mỗi ứng dụng cần một "nhà kho" riêng để lưu điểm học sinh.

1. Vào Google Drive, **Tạo bản sao (Make a copy)** file Google Sheets của môn hiện tại (VD: `Diem_Toan_6`).
2. Đổi tên file mới thành môn bạn muốn (VD: `Diem_Toan_7`).
3. Mở file mới, vào `Extensions > Apps Script`.
4. Bấm **Deploy > New Deployment**.
* Type: `Web App`
* Access: `Anyone`


5. **[QUAN TRỌNG]** Copy và lưu lại đường link `Web App URL` vừa nhận được. Link này chính là "địa chỉ nhận hàng" của App mới.

---

### BƯỚC 2: NHÂN BẢN KHO CHỨA OTA (Github)

Mỗi ứng dụng cần một "trạm phát sóng" cập nhật riêng.

1. Đăng nhập Github.
2. Tạo một Repository mới (VD: Tên repo là `math7`).
3. Sao chép đường link của Repo mới này (VD: `https://github.com/TontonYuta/math7.git`).

---

### BƯỚC 3: NHÂN BẢN & CẤU HÌNH MÃ NGUỒN (Local Code)

Đây là bước "thay máu" cho App để nó trở thành một thực thể độc lập.

1. **Copy thư mục code:** Copy toàn bộ thư mục dự án Toán 6 sang một thư mục mới (VD: `Toan7_App`).
2. **Xóa rác cũ (Cực kỳ quan trọng):** Vào thư mục mới, xóa thư mục `android` (nếu có). Việc này bắt buộc để App mới tự sinh ra bộ khung chuẩn theo ID mới.
3. **Cấu hình API:** Mở file `src/config.ts`.
* Dán `Web App URL` (lấy ở Bước 1) vào biến `API_URL`.
* Reset `CURRENT_VERSION` về `"1.0.0"`.


4. **Cấu hình Định danh (App ID):** Mở file `capacitor.config.json`.
* Sửa `appId` thành định danh mới (VD: `"com.tontonyuta.math7"`). ID này giúp điện thoại cài App Toán 7 bên cạnh Toán 6 mà không bị đè lên nhau.
* Sửa `appName` thành `"Toán 7"`.


5. **Trỏ Github:** Mở Terminal (CMD) tại thư mục dự án mới, gõ lệnh:
* `git remote set-url origin https://github.com/TontonYuta/math7.git` (Trỏ về Repo lấy ở Bước 2).



---

### BƯỚC 4: THAY ĐỔI GIAO DIỆN & NỘI DUNG

1. **Hình ảnh nhận diện:** - Chuẩn bị 2 file ảnh mới có chữ "Toán 7": `icon.png` (Hình vuông, 1024x1024) và `splash.png` (Hình chữ nhật đứng, 2732x2732).
* Dán đè 2 file này vào thư mục gốc của dự án. File `build.bat` sẽ tự động cắt ảnh và nhét vào App.


2. **Nội dung bài học:**
* Mở thư mục chứa dữ liệu bài tập (VD: `src/data/`).
* Sửa lại các File JSON/TypeScript (chứa tên bài, câu hỏi trắc nghiệm) cho khớp với chương trình Toán 7.



---

## ⚡ CHẠY FILE BUILD.BAT CHO APP MỚI

Sau khi hoàn tất 4 bước trên, hãy chạy file `build.bat`. File này sẽ tự động:

1. Tạo thư mục `android` mới tinh theo đúng App ID mới (`com.tontonyuta.math7`).
2. Tự động cắt `icon.png` mới dán vào App.
3. Đóng gói thành file APK.
4. Đẩy bản OTA cập nhật đầu tiên (`update.zip`) lên Github `math7`.
5. Báo cáo phiên bản `"1.0.0"` về đúng Google Sheets `Diem_Toan_7`.

> **Mẹo kiểm tra nhanh:** Sau khi build xong, Hân hãy cài App Toán 7 lên điện thoại. Nếu thấy màn hình chính có cả 2 icon (Toán 6 và Toán 7) là Hân đã nhân bản thành công mỹ mãn!

---
