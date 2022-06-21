require("./db/connection.js");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const userRouter = require("./user/routes");

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Connected to ${port}`)
})