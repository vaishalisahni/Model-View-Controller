const express = require('express');
const { connectMongoDB } = require('./connection');

const userRouter= require('./routes/user');
const {logReqRes}=require('./middlewares'); //by default, it will look for index.js file in middlewares folder

const port = 8000;
const app = express();

// Connection
connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1').then(() => console.log("MongoDB connected successfully!"))
    .catch((err) => console.error("MongoDB connection failed!", err));


// middleware - plugins
app.use(express.urlencoded({ extended: false })); // to parse form data
app.use(express.json()); // to parse JSON data

app.use(logReqRes("logs.txt"));


// ----------------Routes
app.use("/api/users",userRouter); // all routes in userRouter will be prefixed with /api/users

// -------------------Server listening/using 
app.listen(port, () => {
    console.log(`server is running on port ${port}!`);
});
