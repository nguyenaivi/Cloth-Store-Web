import p36_img from './product-1.webp'
import p37_img from './product-2.webp';
import p38_img from './product-3.webp';
import p39_img from './product-4.webp';
import p40_img from './product-5.webp';
import p41_img from './product-6.webp';
import p42_img from './product-7.webp';
import p43_img from './product-8.webp';
import p44_img from './product-9.webp';
import p45_img from './product-10.webp';

let NewCollectionProduct = [
    {
        id: 36,
        name: 'Blossom Blouse',
        category: 'women',
        image: p36_img,
        newPrice: '200.000đ',
        oldPrice: '400.000đ',
        color: [
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/pink.png')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Cream', image: require('../ProductColor/cream.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'Pink', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
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
            {name: 'Black', image: require('../ProductColor/black.jpg')},
            {name: 'White', image: require('../ProductColor/white.jpg')},
        ],
        size: ['S', 'M', 'L', 'XL'],
    }
]

export default NewCollectionProduct;
