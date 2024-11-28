const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const { connectMongoDb } = require('./connection');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your frontend's origin
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import user and artist routers
const userRouter = require("./Routes/user");
const artistRouter = require("./Routes/artist");
const artworkRouter = require("./Routes/artwork");
const adminRouter = require("./Routes/admin");

// Connect MongoDB and set up routes
connectMongoDb('mongodb://127.0.0.1:27017/fyp');
app.use('/api/users', userRouter);
app.use('/api/artists', artistRouter); // Add the artist route
app.use('/api/artwork', artworkRouter); // Add the artist route
app.use('/api/admin', adminRouter); // Add the artist route
const cartRoutes = require('./Routes/cart');
app.use('/api/cart', cartRoutes);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
