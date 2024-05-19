const mongoose = require('mongoose');
const Subcategory = require('../models/subCategorySchema');

module.exports.getAllSubcategories = async function getAllSubcategories(req, res) {
    try {
        let subcategories = await Subcategory.find();
        res.json({
            message: "All Subcategories Fetched",
            data: subcategories
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

module.exports.getSubcategoryByIdOrName = async function getSubcategoryByIdOrName(req, res) {
    try {
        const { idOrName } = req.params;
        let subcategory;

        if (isValidObjectId(idOrName)) {
            subcategory = await Subcategory.findById(idOrName);
        } else {
            subcategory = await Subcategory.findOne({ name: idOrName });
        }

        if (subcategory) {
            res.json({
                message: "Subcategory fetched",
                data: subcategory
            });
        } else {
            res.status(404).json({
                error: "Subcategory not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.getSubcategoriesByCategoryId = async function getSubcategoriesByCategoryId(req, res) {
    try {
        let subcategories = await Subcategory.find({ categoryId: req.params.categoryId });
        res.json({
            message: "Subcategories Fetched",
            data: subcategories
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.postSubcategory = async function postSubcategory(req, res) {
    try {
        let data = req.body;
        data.categoryId = req.params.categoryId;
        let resp = await Subcategory.create(data);
        res.json({
            message: "Subcategory Created",
            data: resp
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.updateSubcategory = async function updateSubcategory(req, res) {
    try {
        let dataToBeUpdated = req.body;
        let uid = req.params.id;
        let resp = await Subcategory.findOneAndUpdate({ _id: uid }, dataToBeUpdated, { new: true });
        res.json({
            message: "Subcategory Updated",
            data: resp
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};