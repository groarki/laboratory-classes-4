const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (req, res) => {
  const products = Product.getAll();

  res.render("products", {
    headTitle: "Shop - Products",
    path: "/products",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: products,
  });
};

const getAddProductView = (req, res) => {
  res.render("add-product", {
    headTitle: "Shop - Add Product",
    path: "/products/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
};

const addNewProduct = (req, res) => {
  const { name, description } = req.body;
  const product = new Product(name, description);

  Product.add(product);

  res.redirect("/products/new");
};

const getNewProductView = (req, res) => {
  const newestProduct = Product.getLast();

  res.render("new-product", {
    headTitle: "Shop - Newest Product",
    path: "/products/new",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct: newestProduct,
  });
};

const getProductView = (req, res) => {
  const { name } = req.params;
  const product = Product.findByName(name);

  res.render("product", {
    headTitle: `Shop - ${product ? product.name : "Product"}`,
    path: `/products/${name}`,
    menuLinks: MENU_LINKS,
    activeLinkPath: `/products/${name}`,
    product: product,
  });
};

const deleteProduct = (req, res) => {
  const { name } = req.params;

  Product.deleteByName(name);

  res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
  getProductsView,
  getAddProductView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct,
};
