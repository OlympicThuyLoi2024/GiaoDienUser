# GiaoDienUser
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

Giao diện User của hệ thống SafeZone được xây dựng bằng nền tảng công nghệ LCDP Appsmith

## Changelog

### v1.0
- Giao diện thông tin cá nhân
- Giao diện trang chủ
- Giao diện thống kê
- Giao diện thông tin
- Giao diện Chat Box
- Giao diện Chat Bot
- Giao diện thông tin chi

## Hướng dẫn cài đặt
### 1. Yêu cầu
Để cài đặt và chạy được dự án, trước tiên bạn cần phải cài đặt các công cụ bên dưới. Hãy thực hiện theo các hướng dẫn cài đặt sau, lưu ý chọn hệ điều hành phù hợp với máy tính của bạn:
- [**AppSmith**](https://docs.appsmith.com/getting-started/setup): Phiên bản >=1.2

### 2. Cài đặt dữ án
#### Bước 1: Fork dự án về
1. Fork dự án của bạn tại: https://github.com/OlympicThuyLoi2024/GiaoDienUser
#### Bước 2: Thiết lập liên kết đến Git
2. Mở trang chủ của **Appsmith Workspace** trong AppSmith đã được cài đặt trước đó, nhấn **Create New** ở góc phải trên và chọn **Import**.
3. Chọn **Import from a Git repository** từ menu **Import**.
4. Chọn **Github** làm nhà cung cấp dịch vụ, sau đó nhấn **Configure Git**.

#### Bước 2: Thêm SSH Key vào Repository
5. Truy cập vào repository vừa fork về, nhấn **Code** và sao chép đường dẫn **SSH URL**.
6. Dán đường dẫn vừa sao chép vào mục **Generate SSH Key** trên Appsmith.
7. Nhấn nút **Generate SSH Keys**, chọn key **ECDSA 256** hoặc **RSA 4096** (tuỳ theo yêu cầu bảo mật).
8. Sao chép key, mở **Repository settings**, chọn **Deploy keys**, sau đó:
   - Nhấn **Add deploy key**, dán key vào và đặt tên dễ nhận diện.
   - Bật tuỳ chọn **Allow write access**.

#### Bước 3: Kết nối
9. Trong Appsmith, nhấn nút **Connect Git** để hoàn tất.
10. Sau khi kết nối thành công, nếu cần, cấu hình lại **Datasource** trong tab **Reconnect Datasources**.

## Tác giả
- Nguyễn Lê Trung Thành
- Trần Tuấn Anh
- Lê Văn Quang

# License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
