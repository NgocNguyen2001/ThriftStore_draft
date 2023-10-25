// id: the unique ID for each product - number
// name: the name of the product - string
// size: S or M or L - string
// type: clothes, top, shoes - string
// category: women, men, unisex, kid, shoes-accessories - strring
// deal_duration: the time (minute) of the product deal - number
// original_price: the price before discount - number
// sale_price: the price after discount - number
// description: the details of the product - string
// image: the path of the image - string
// ***IMPORTANT: If deal_duration = 0, we will not show the sale price. If deal_duration > 0, we will show the sale price and the reserved time.

const productList = [
  {
    // id: +"1", => id: 1
    id: 1,
    name: "Zara Casual Summer Dress",
    size: "M",
    type: "clothes",
    category: "women",
    deal_duration: 0,
    original_price: 20.99,
    sale_price: 10.99,
    description: "This is a dress for summer.",
    image: "images/shop/womens/1.png",
  },
  {
    id: 2,
    name: "Men's Classic Blue Jeans",
    size: "L",
    type: "clothes",
    category: "men",
    deal_duration: 0,
    original_price: 39.99,
    sale_price: 29.99,
    description: "A classic pair of blue jeans for men.",
    image: "images/shop/womens/1.png",
  },
  {
    id: 3,
    name: "Running Shoes",
    size: "S",
    type: "shoes",
    category: "men",
    deal_duration: 30,
    original_price: 49.99,
    sale_price: 39.99,
    description: "High-performance running shoes for all athletes.",
    image: "images/shop/womens/1.png",
  },
  {
    id: 4,
    name: "Women's Sunglasses",
    size: "S",
    type: "accessories",
    category: "women",
    deal_duration: 60,
    original_price: 14.99,
    sale_price: 9.99,
    description: "Stylish sunglasses for women with UV protection.",
    image: "images/shop/womens/1.png",
  },
  {
    id: 5,
    name: "Unisex's Sunglasses",
    size: "M",
    type: "accessories",
    category: "unisex",
    deal_duration: 0,
    original_price: 14.99,
    sale_price: 9.99,
    description: "Stylish sunglasses for women with UV protection.",
    image: "images/shop/sunglass.png",
  },
];

export default productList;
