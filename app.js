require('dotenv').config();//baca dotenv

const express = require('express');

const mongoose = require('mongoose');
const thumbRoutes = require('./routes/thumbRoute');
const productRoutes = require('./routes/productRoute');
const commentRoutes = require('./routes/commentRoute');

const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (err) =>{
    console.log(err);
});

db.once("connected", () =>{
    console.log("DB CONNECTED");
});


const app = express();
const port = 3000;

app.use(express.json()); //buat parse body JSON di request http
app.use("/thumb", thumbRoutes);
app.use("/product", productRoutes);
app.use("/comments", commentRoutes);

app.listen(3000,()=>{
    console.log(`server running in port: ${port}`);
});