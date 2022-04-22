const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }; 

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day});
}); 

app.post("/", (req, res) => {
    var newTask = req.body.newItem;

    console.log(newTask);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});