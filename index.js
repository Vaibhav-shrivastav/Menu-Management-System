const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT ;

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

const categoryRouter = require("./routers/categoryRouter");
const subcategoryRouter = require("./routers/subcategoryRouter");
const itemRouter = require("./routers/itemsRouter");

app.use(express.json());
app.use(cookieParser());

app.use('/', (req, res) =>{
    res.json("Welcome to Menu Management System")
})

app.use('/category', categoryRouter);
app.use('/subcategories', subcategoryRouter);
app.use('/items', itemRouter);
