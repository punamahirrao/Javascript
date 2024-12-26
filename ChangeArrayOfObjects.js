const products = [
    { name: "iPhone", price: 1000 },
    { name: "GooglePixel", price: 500 },
    { name: "Samsung", price: 750 }
];

const discountedPrices = products.map(product => ({
    ...product,
    price: product.price * 0.9 // 10% discount
}));

console.log(discountedPrices);
/* 
[
    { name: "iPhone", price: 900 },
    { name: "GooglePixel", price: 450 },
    { name: "Samsung", price: 675 }
]
*/
