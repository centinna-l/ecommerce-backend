const express = require("express");
var router = express.Router();
const {
  getCategoryById,
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/catergory");
const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
//Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);
//Create Routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
//Read Routes
router.get("/category/:categoryId", getCategory);
router.get("/category/", getAllCategories);
//Update Route
router.put(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
  );
//Delete Route
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);
module.exports = router;
