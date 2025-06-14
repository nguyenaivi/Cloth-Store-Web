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
import p31_img from './product-31.webp';
import p32_img from './product-32.webp';
import p33_img from './product-33.webp';
import p34_img from './product-34.webp';
import p35_img from './product-35.webp';
import p36_img from '../Assets/NewCollection/product-1.webp'
import p37_img from '../Assets/NewCollection/product-2.webp';
import p38_img from '../Assets/NewCollection/product-3.webp';
import p39_img from '../Assets/NewCollection/product-4.webp';
import p40_img from '../Assets/NewCollection/product-5.webp';
import p41_img from '../Assets/NewCollection/product-6.webp';
import p42_img from '../Assets/NewCollection/product-7.webp';
import p43_img from '../Assets/NewCollection/product-8.webp';
import p44_img from '../Assets/NewCollection/product-9.webp';
import p45_img from '../Assets/NewCollection/product-10.webp';
let AllProducts = [
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
    {
        id: 31,
        name: 'Leather Jacket',
        category: 'kid',
        image: p31_img,
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
        id: 32,
        name: 'Denim Jacket',
        category: 'kid',
        image: p32_img,
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
        id: 33,
        name: 'Kewwly Bag',
        category: 'accessories',
        image: p33_img,
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
        id: 34,
        name: 'Leather Bag',
        category: 'accessories',
        image: p34_img,
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
        id: 35,
        name: 'Denim Bag',
        category: 'accessories',
        image: p35_img,
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
        id: 36,
        name: 'Blossom Blouse',
        category: 'women',
        image: p36_img,
        newPrice: '200.000đ',
        oldPrice: '400.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 37,
        name: 'Elegant Dress',
        category: 'women',
        image: p37_img,
        newPrice: '350.000đ',
        oldPrice: '500.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 38,
        name: 'Classic Trench Coat',
        category: 'women',
        image: p38_img,
        newPrice: '800.000đ',
        oldPrice: '1.200.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 39,
        name: 'Casual Denim Jacket',
        category: 'women',
        image: p39_img,
        newPrice: '450.000đ',
        oldPrice: '650.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 40,
        name: 'Floral Maxi Skirt',
        category: 'women',
        image: p40_img,
        newPrice: '300.000đ',
        oldPrice: '500.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 41,
        name: 'High-Waist Jeans',
        category: 'women',
        image: p41_img,
        newPrice: '400.000đ',
        oldPrice: '600.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 42,
        name: 'Chic Crop Top',
        category: 'women',
        image: p42_img,
        newPrice: '250.000đ',
        oldPrice: '400.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 43,
        name: 'Lace Midi Dress',
        category: 'women',
        image: p43_img,
        newPrice: '700.000đ',
        oldPrice: '1.000.000đ',
        color: [
            {name: 'Cream', image: require('../Assets/ProductColor/cream.jpg')},
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 44,
        name: 'Knitted Sweater',
        category: 'women',
        image: p44_img,
        newPrice: '350.000đ',
        oldPrice: '550.000đ',
        color: [
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 45,
        name: 'Sporty Leggings',
        category: 'women',
        image: p45_img,
        newPrice: '280.000đ',
        oldPrice: '400.000đ',
        color: [
            {name: 'Black', image: require('../Assets/ProductColor/black.jpg')},
            {name: 'Pink', image: require('../Assets/ProductColor/pink.png')},
            {name: 'White', image: require('../Assets/ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    }
]

export default AllProducts