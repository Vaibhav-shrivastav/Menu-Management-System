const express = require("express");
const { getAllItems, getItemsBySubcategoryId, postItem, updateItem, getItemsByCategoryId, getItemByIdOrName } = require("../controller/itemsController");
const itemRouter = express.Router();

itemRouter
    .route('/:id')
    .patch(updateItem);

itemRouter
    .route('/')
    .get(getAllItems);

itemRouter
    .route('/subcategory/:subcategoryId')
    .get(getItemsBySubcategoryId)
    .post(postItem);

itemRouter
    .route('/category/:categoryId')
    .get(getItemsByCategoryId);

itemRouter
    .route('/search/:idOrName')
    .get(getItemByIdOrName);

module.exports = itemRouter;
