const express = require("express");
var router = express.Router();
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { getCategoryById } = require("../controllers/catergory");

//Get Parameters

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);
router.param("productId", getProductById);

//Routes
//Create Routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

router.get("/product/:productId", getProduct);
router.get("product/photo/:productId", photo);
//Update Route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);
//Delete Route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);
//Listing Route
router.get("/products", getAllProducts);

router.get("/product/categories", getAllUniqueCategories);
module.exports = router;
