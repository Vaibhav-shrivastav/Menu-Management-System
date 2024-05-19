const mongoose = require('mongoose');
require('mongoose-type-url');

const db_link = process.env.MONGO_URL;

mongoose.connect(db_link)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("Error: ", err);
})

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true },
    tax: { type: Number, required: function() { return this.taxApplicability; } },
    taxType: { type: String }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;

