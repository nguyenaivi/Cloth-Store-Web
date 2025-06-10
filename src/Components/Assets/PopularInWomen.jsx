import p1_img from './product-1.webp';
import p2_img from './product-2.webp';
import p3_img from './product-3.webp';
import p4_img from './product-4.webp';
import p5_img from './product-5.webp';
import p6_img from './product-6.webp';
import p7_img from './product-7.webp';
import p8_img from './product-8.webp';
import p9_img from './product-9.webp';
import p10_img from './product-10.webp';
import p11_img from './product-11.webp';
import p12_img from './product-12.webp';
import p13_img from './product-13.webp';
import p14_img from './product-14.webp';
import p15_img from './product-15.webp';
let PopularInWomen = [
    {
        id: 1,
        name: 'Blossom Blouse',
        category: 'women',
        image: p1_img,
        newPrice: '200.000đ',
        oldPrice: '400.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',

    },
    {
        id: 2,
        name: 'Midi Dress',
        category: 'women',
        image: p2_img,
        newPrice: '300.000đ',
        oldPrice: '600.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 3,
        name: 'Floral Dress',
        category: 'women',
        image: p3_img,
        newPrice: '250.000đ',
        oldPrice: '500.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 4,
        name: 'Denim Jacket',
        category: 'women',
        image: p4_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 5,
        name: 'Leather Jacket',
        category: 'women',
        image: p5_img,
        newPrice: '400.000đ',
        oldPrice: '800.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 6,
        name: 'Denim Jacket',
        category: 'women',
        image: p6_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 7,
        name: 'Leather Jacket',
        category: 'women',
        image: p7_img,
        newPrice: '400.000đ',
        oldPrice: '800.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 8,
        name: 'Denim Jacket',
        category: 'women',
        image: p8_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 9,
        name: 'Leather Jacket',
        category: 'women',
        image: p9_img,
        newPrice: '400.000đ',
        oldPrice: '800.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 10,
        name: 'Denim Jacket',
        category: 'women',
        image: p10_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 11,
        name: 'Leather Jacket',
        category: 'women',
        image: p11_img,
        newPrice: '400.000đ',
        oldPrice:'800.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 12,
        name: 'Denim Jacket',
        category: 'women',
        image: p12_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 13,
        name: 'Leather Jacket',
        category: 'women',
        image: p13_img,
        newPrice: '400.000đ',
        oldPrice: '800.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 14,
        name: 'Denim Jacket',
        category: 'women',
        image: p14_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        'Chất liệu: 100% cotton\n' +
        'Màu sắc: Trắng, Đen, Xanh\n' +
        'Kích thước: S, M, L, XL\n' +
        'Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        'Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        'Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        'Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
    {
        id: 15,
        name: 'Leather Jacket',
        category: 'women',
        image: p15_img,
        newPrice: '400.000đ',
        oldPrice: '80.000đ',
        description: 
        '- Chất liệu: 100% cotton\n' +
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Hướng dẫn bảo quản: Giặt tay, không ngâm nước lâu, không sử dụng chất tẩy mạnh.\n' +
        '- Hướng dẫn sử dụng: Phù hợp với nhiều dịp như đi làm, đi chơi, dạo phố.\n' +
        '- Lưu ý: Màu sắc có thể khác biệt một chút do ánh sáng',
        color: [
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
        selectSize:
        '- Chọn kích thước: S, M, L, XL\n' +
        '- Kích thước S: Dành cho người có chiều cao từ 1m50 đến 1m55, cân nặng từ 40kg đến 50kg.\n' +
        '- Kích thước M: Dành cho người có chiều cao từ 1m55 đến 1m60, cân nặng từ 50kg đến 60kg.\n' +
        '- Kích thước L: Dành cho người có chiều cao từ 1m60 đến 1m65, cân nặng từ 60kg đến 70kg.\n' +
        '- Kích thước XL: Dành cho người có chiều cao từ 1m65 trở lên, cân nặng từ 70kg trở lên.\n' +
        '- Lưu ý: Kích thước có thể thay đổi tùy theo từng thương hiệu và kiểu dáng sản phẩm.',
    },
];

export default PopularInWomen;