const express = require("express");
const { getAllSubcategories, getSubcategoriesByCategoryId, postSubcategory, updateSubcategory, getSubcategoryByIdOrName } = require("../controller/subCategoryController");
const subcategoryRouter = express.Router();

subcategoryRouter
    .route('/:id')
    .patch(updateSubcategory);

subcategoryRouter
    .route('/')
    .get(getAllSubcategories);

subcategoryRouter
    .route('/category/:categoryId')
    .get(getSubcategoriesByCategoryId)
    .post(postSubcategory);

subcategoryRouter
    .route('/search/:idOrName')
    .get(getSubcategoryByIdOrName);

module.exports = subcategoryRouter;
