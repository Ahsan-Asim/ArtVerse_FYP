const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectMongoDb } = require('./connection.js');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your frontend's origin
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routers
const userRouter = require("./Routes/user");
const artistRouter = require("./Routes/artist");
const artworkRouter = require("./Routes/artwork");
const adminRouter = require("./Routes/admin");
const cartRouter = require("../artverse_backend/Routes/cartRoutes.js"); // Import cart routes

// Connect MongoDB and set up routes
connectMongoDb('mongodb://127.0.0.1:27017/fyp');
app.use('/api/users', userRouter);
app.use('/api/artists', artistRouter);
app.use('/api/artwork', artworkRouter);
app.use('/api/admin', adminRouter);
app.use('/api/cart', cartRouter); // Add the cart route

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});