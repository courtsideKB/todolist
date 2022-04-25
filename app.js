const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.use(express.static("public"));
app.set("view engine", "ejs");

/******* Home route get() *******/

app.get("/", (req, res) => {
   const day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

/******* Work route get() *******/

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work",
        newListItems: workItems
    });
});

/******* About me route get() *******/

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/", (req, res) => {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});