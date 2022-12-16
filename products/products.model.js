const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(product) {
  const { id, description, price, reviews } = product;

  const newProduct = {
    id,
    description,
    price,
    reviews,
  };
  products.push(newProduct);

  return newProduct;
}

function addNewProductReview(productId, review) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  product.reviews.push(review);
  return review;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
