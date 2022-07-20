const { RecipesRouter } = require("./routes/recipes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const bp = require("body-parser");
const express = require("express");
const { connectDB } = require("./config/mongoDB");
const { UsersRoute } = require("./routes/users");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use("/api/recipes/", RecipesRouter);
app.use("/api/users/", UsersRoute);

app.use(errorHandler);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`SERVER RUNNING ON PORT : ${port}`));
