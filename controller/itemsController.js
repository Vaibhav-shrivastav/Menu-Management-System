const mongoose = require('mongoose');
const Item = require('../models/itemsSchema');
const Subcategory = require('../models/subCategorySchema');

module.exports.getAllItems = async function getAllItems(req, res) {
    try {
        let items = await Item.find();
        res.json({
            message: "All Items Fetched",
            data: items
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.getItemsByCategoryId = async function getItemsByCategoryId(req, res) {
    try {
        const subcategories = await Subcategory.find({ categoryId: req.params.categoryId });
        const subcategoryIds = subcategories.map(sub => sub._id);
        const items = await Item.find({ subcategoryId: { $in: subcategoryIds } });
        
        res.json({
            message: "Items fetched for the category",
            data: items
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports.getItemByIdOrName = async function getItemByIdOrName(req, res) {
    try {
        const { idOrName } = req.params;
        let item;

        if (isValidObjectId(idOrName)) {
            item = await Item.findById(idOrName);
        } else {
            item = await Item.findOne({ name: idOrName });
        }

        if (item) {
            res.json({
                message: "Item fetched",
                data: item
            });
        } else {
            res.status(404).json({
                error: "Item not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.getItemsBySubcategoryId = async function getItemsBySubcategoryId(req, res) {
    try {
        let items = await Item.find({ subcategoryId: req.params.subcategoryId });
        res.json({
            message: "Items Fetched",
            data: items
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.postItem = async function postItem(req, res) {
    try {
        let data = req.body;
        data.subcategoryId = req.params.subcategoryId;
        let resp = await Item.create(data);
        res.json({
            message: "Item Created",
            data: resp
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.updateItem = async function updateItem(req, res) {
    try {
        let dataToBeUpdated = req.body;
        let uid = req.params.id;
        let resp = await Item.findOneAndUpdate({ _id: uid }, dataToBeUpdated, { new: true });
        res.json({
            message: "Item Updated",
            data: resp
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};