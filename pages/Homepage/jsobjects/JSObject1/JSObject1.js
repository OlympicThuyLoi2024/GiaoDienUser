export default {
	fetchAndStoreQueryParams: () => {
		const ward = appsmith.URL.queryParams.ward;
		const jwt = appsmith.URL.queryParams.jwt;
		let user_id = appsmith.URL.queryParams.user_id;

		// Sử dụng decodeURIComponent để giải mã nếu có mã hóa URL
		user_id = decodeURIComponent(user_id);

		// Kiểm tra và cắt dấu "?" trong user_id nếu có
		if (user_id && user_id.includes('?')) {
			user_id = user_id.split('?')[0]; // Cắt phần sau dấu "?" nếu có
		}

		// Log các giá trị nhận được để kiểm tra
		console.log("Query Params - ward:", ward);
		console.log("Query Params - jwt:", jwt);
		console.log("Query Params - user_id:", user_id);

		// Lưu các giá trị vào Store
		storeValue('ward', ward);
		storeValue('jwt', jwt);
		storeValue('user_id', user_id);

		// Log các giá trị sau khi lưu vào Store
		console.log("Stored - ward:", appsmith.store.ward);
		console.log("Stored - Signinjwt:", appsmith.store.Signinjwt);
		console.log("Stored - Signinuser_id:", appsmith.store.Signinuser_id);
	}
}
