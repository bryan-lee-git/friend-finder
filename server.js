const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.use(express.static(path.join(__dirname, '/app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});