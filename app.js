const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const indexRouter = require('./routes/index');
// URL encoded
app.use(express.urlencoded({extended: true}));

// Setting EJS
app.set("view engine", "ejs");
app.set("views", "views");


// Routes
app.use("/", indexRouter);

app.listen(port, console.log(`Server started, App is running on ${port}`));