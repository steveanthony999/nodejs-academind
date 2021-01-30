// const products = [];
const Product = require('../models/product');

// render is relative to the views folder

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, docTitle: 'Shop', path: '/shop' });
  });
};
