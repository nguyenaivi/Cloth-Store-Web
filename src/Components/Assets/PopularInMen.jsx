import p16_img from './product-16.webp';
import p17_img from './product-17.webp';
import p18_img from './product-18.webp';
import p19_img from './product-19.webp';
import p20_img from './product-20.webp';
import p21_img from './product-21.webp';
import p22_img from './product-22.webp';
import p23_img from './product-23.webp';
import p24_img from './product-24.webp';
import p25_img from './product-25.webp';
import p26_img from './product-26.webp';
import p27_img from './product-27.webp';
import p28_img from './product-28.webp';
import p29_img from './product-29.webp';
import p30_img from './product-30.webp';

let PopularInMen = [
    {
        id: 16,
        name: 'Denim Jacket',
        category: 'men',
        image: p16_img,
        newPrice: '305.000đ',
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
        id: 17,
        name: 'Leather Jacket',
        category: 'men',
        image: p17_img,
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
        id: 18,
        name: 'Denim Jacket',
        category: 'men',
        image: p18_img,
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
        id: 19,
        name: 'Leather Jacket',
        category: 'men',
        image: p19_img,
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
        id: 20,
        name: 'Denim Jacket',
        category: 'men',
        image: p20_img,
        newPrice: '350.000đ',
        oldPrice: '700.000đ',
        description: 
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Chất liệu: 100% cotton\n' +
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
        id: 21,
        name: 'Leather Jacket',
        category: 'men',
        image: p21_img,
        newPrice: '400.000đ',
        oldPrice: '800.000đ',
        description: 
        '- Màu sắc: Trắng, Đen, Xanh\n' +
        '- Kích thước: S, M, L, XL\n' +
        '- Mô tả: Áo sơ mi nữ tay ngắn, cổ bẻ, họa tiết hoa văn, phong cách trẻ trung, năng động.\n' +
        '- Chất liệu: 100% cotton\n' +
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
        id: 22,
        name: 'Denim Jacket',
        category: 'men',
        image: p22_img,
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
        id: 23,
        name: 'Leather Jacket',
        category: 'men',
        image: p23_img,
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
        id: 24,
        name: 'Denim Jacket',
        category: 'men',
        image: p24_img,
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
        id: 25,
        name: 'Leather Jacket',
        category: 'men',
        image: p25_img,
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
        id: 26,
        name: 'Denim Jacket',
        category: 'men',
        image: p26_img,
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
        id: 27,
        name: 'Leather Jacket',
        category: 'men',
        image: p27_img,
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
        id: 28,
        name: 'Denim Jacket',
        category: 'men',
        image: p28_img,
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
        id: 29,
        name: 'Leather Jacket',
        category: 'men',
        image: p29_img,
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
        id: 30,
        name: 'Denim Jacket',
        category:'men',
        image: p30_img,
        newPrice: '359.000đ',
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
];

export default PopularInMen;