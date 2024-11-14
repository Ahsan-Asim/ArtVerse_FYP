const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const { connectMongoDb } = require('./connection');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your frontend's origin
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./Routes/user");

// Connect MongoDB and set up routes
connectMongoDb('mongodb://localhost:27017/fyp');
app.use('/api/users', userRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
