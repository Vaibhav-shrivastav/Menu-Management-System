const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },
    name: { type: String, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true },
    tax: { type: Number, required: true },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, required: true },
    totalAmount: { type: Number, required: true }
})

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;