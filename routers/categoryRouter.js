const express = require("express");
const { getCategoryById, postCategory, updateCategory, getAllCategory, getCategoryByIdOrName } = require("../controller/categoryController");
const categoryRouter = express.Router();

categoryRouter
.route('/:id')
.get(getCategoryById)
.patch(updateCategory)

categoryRouter
.route('/')
.get(getAllCategory)
.post(postCategory)

categoryRouter
    .route('/search/:idOrName')
    .get(getCategoryByIdOrName);
    
module.exports = categoryRouter;