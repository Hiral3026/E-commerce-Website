const express = require("express");
const path = require("path"); //this is included with node

const app = express(); //Creating an express app
const port = process.env.PORT || "8888";

//Set up Express app to use pug  as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Set up public folder path for static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("index", { title: "Home" });
});

//Set up server listening
app.listen(port, () => {
    console.log(`Server is listening http://localhost: ${port}`);
});

