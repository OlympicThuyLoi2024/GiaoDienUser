export default {
    fetchAndStoreQueryParams: () => {
        const ward = appsmith.URL.queryParams.ward;
        const jwt = appsmith.URL.queryParams.jwt;
        let user_id = appsmith.URL.queryParams.user_id;

        // Sử dụng decodeURIComponent để giải mã nếu có mã hóa URL
        if (user_id) {
            user_id = decodeURIComponent(user_id);

            // Kiểm tra và cắt dấu "?" trong user_id nếu có
            if (user_id.includes('?')) {
                user_id = user_id.split('?')[0]; // Cắt phần sau dấu "?" nếu có
            }
        }

        // Log các giá trị nhận được để kiểm tra
        console.log("Query Params - ward:", ward);
        console.log("Query Params - jwt:", jwt);
        console.log("Query Params - user_id:", user_id);

        // Lưu các giá trị vào Store nếu tồn tại
        if (ward) {
            storeValue('ward', ward);
            console.log("Stored - ward:", appsmith.store.ward);
        }

        if (jwt) {
            storeValue('jwt', jwt);
            console.log("Stored - jwt:", appsmith.store.jwt);
        }

        if (user_id) {
            storeValue('user_id', user_id);
            console.log("Stored - user_id:", appsmith.store.user_id);
        }
    }
}

/**
 * @Project GiaoDienUser
 * @Author TT(trungthanhcva2206@gmail.com@gmail.com)
 * @Copyright (C) 2024 CHK. All rights reserved
 * @License GNU/GPL version 3.0
 */
