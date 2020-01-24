const express = require("express");
const exphbs = require("express-handlebars");
const homeRouts = require("./routes/home");
const addRouts = require("./routes/add");
const coursesRouts = require("./routes/courses");

const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public")); // регистрация роутеров
app.use(express.urlencoded({extended: true})); // обработка данных POST метод
app.use("/", homeRouts);
app.use("/add", addRouts);
app.use("/courses", coursesRouts);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is runing ${PORT}`);
});