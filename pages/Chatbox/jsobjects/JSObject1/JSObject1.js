export default {
	// Biến để lưu interval ID và dữ liệu cũ
	intervalId: null,
	lastDataApi2: null,

	// Hàm bắt đầu polling
	startPolling() {
		if (this.intervalId) {
			console.log("Polling đã chạy, không khởi động lại.");
			return;
		}

		console.log("Bắt đầu polling...");
		this.intervalId = setInterval(() => {
			console.log("Đang chạy Api2...");

			// Lấy dữ liệu từ Api2
			Get_Message2.run()
				.then((response) => {
				// Kiểm tra nếu dữ liệu từ Api2 thay đổi
				if (JSON.stringify(response.data) !== JSON.stringify(this.lastDataApi2)) {
					console.log("Dữ liệu từ Api2 thay đổi, chạy Api1...");
					this.lastDataApi2 = response.data;  // Cập nhật dữ liệu cũ từ Api2

					// Chạy Api1 nếu dữ liệu từ Api2 thay đổi
					Get_Message.run()
						.then(() => {
						console.log("API1 chạy thành công!");
					})
						.catch((error) => {
						console.error("Lỗi khi gọi API1:", error);
					});
				} else {
					console.log("Dữ liệu từ Api2 không thay đổi.");
				}
			})
				.catch((error) => {
				console.error("Lỗi khi gọi API2:", error);
			});
		}, 2000); // Kiểm tra mỗi 5 giây
	},

	// Hàm dừng polling
	stopPolling() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
			console.log("Đã dừng polling.");
		} else {
			console.log("Không có polling nào đang chạy.");
		}
	}
};
