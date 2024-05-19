const mongoose = require("mongoose");

const SubcategorySchema = mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, default: null },
    tax: { type: Number, default: null }
})

const Subcategory = mongoose.model("Subcategory", SubcategorySchema);

module.exports = Subcategory;