import * as types from './../constants/ActionTypes';

let initialState = [
    {
        id: 1,
        image: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1_1.jpg',
        title: 'Iphone 11',
        rating: 4,
        description: 'iPhone 11 64GB Chính hãng phiên bản 1 Sim mang đến nhiều màu sắc để lựa chọn, sở hữu con chip Apple A13 hàng đầu với vóc dáng nhỏ gọn, camera kép chụp ảnh góc rộng, xoá phông chất lượng. iPhone 11 phù hợp đối tượng người dùng thích smartphone thương hiệu lớn, hiệu năng mạnh và đa nhiệm tốt.',
        price: 16000000
    },
    {
        id: 2,
        image: 'https://cdn.tgdd.vn/Products/Images/42/218662/oppo-a31-2020-128gb-den-600x600-1-400x400.jpg',
        title: 'OPPO A31',
        rating: 5,
        description: 'Điện thoại OPPO A31 4GB/128GB Đen nổi bật với kiểu dáng hiện đại, màu sắc trẻ trung, sang trọng, thiết kế cong 3D đầy ấn tượng. Phần lưng và khung viền được chế tác từ một khối duy nhất tạo sự chắc chắn, cho cảm giác cầm nắm thoải mái trong tay đồng thời các thao tác vuốt chạm 1 tay.',
        price: 4000000
    },
    {
        id: 3,
        image: 'https://cdn.nguyenkimmall.com/images/detailed/648/10045480_dien-thoai-samsung-a31-xanh-1.jpg',
        title: 'Galaxy A31',
        rating: 4,
        description: 'Samsung Galaxy A31 là một trong những chiếc smartphone đến từ thương hiệu đình đám Samsung và sắp được hãng này cho ra mắt vào thời gian sắp tới. Điện thoại nhận được nhiều sự chú ý từ người dùng nhờ sở hữu thiết kế sang trọng, hệ thống camera chất lượng, viên pin khủng cùng cấu hình mạnh mẽ.',
        price: 5000000
    }
];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_LIST:
            return state;
        default:
            return [...state];
    }
}

export default myReducer;