const mongoose = require('mongoose');
const Category = require('../models/category');

module.exports.getAllCategory = async function getAllCategory(req, res){
    try{
        let resp = await Category.find();

        console.log("All Categories Fetched ", resp);
        res.json({
            message: "All Categories Fetched",
            data: resp
        })
    }catch(err){
        console.log("Error: ", err);
        res.status(500).json({
            error: err.message
        })
    }
}
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports.getCategoryByIdOrName = async function getCategoryByIdOrName(req, res) {
    try {
        const { idOrName } = req.params;
        let category;

        if (isValidObjectId(idOrName)) {
            category = await Category.findById(idOrName);
        } else {
            category = await Category.findOne({ name: idOrName });
        }

        if (category) {
            res.json({
                message: "Category fetched",
                data: category
            });
        } else {
            res.status(404).json({
                error: "Category not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports.getCategoryById = async function getCategoryById(req, res){
    try{
        let category = await Category.findById(req.params.id).exec();
        if(category){
            res.json({
                message: "Category fetched",
                data: category
            })
            console.log("Category Fetched ", category);
        }else{
            res.status(500).json({
                error: "Category not found"
            })
        }
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports.postCategory = async function postCategory(req, res){
    try{
        let data = req.body;
        let resp = await Category.create(data);

        console.log("Category Created ", resp);
        res.json({
            message: "Category created",
            data: resp
        })
    }catch(err){
        console.log("Error: ", err.message);
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports.updateCategory = async function updateCategory(req, res){
    try{
        let dataToBeUpdated = req.body ;
        let uid = req.params.id ;

        let resp = await Category.findOneAndUpdate({_id: uid}, dataToBeUpdated);

        console.log("Category Updated ", resp);

        res.json({
            message: "Category Updated",
            data: resp
        })

    }catch(err){
        console.log("Error: ", err.message);
        res.status(500).json({
            error: err.message
        })
    }
}