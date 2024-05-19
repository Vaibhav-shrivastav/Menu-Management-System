const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000 ;

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

const categoryRouter = require("./routers/categoryRouter");
const subcategoryRouter = require("./routers/subcategoryRouter");
const itemRouter = require("./routers/itemsRouter");

app.use(express.json());
app.use(cookieParser());

app.use('/category', categoryRouter);
app.use('/subcategories', subcategoryRouter);
app.use('/items', itemRouter);
