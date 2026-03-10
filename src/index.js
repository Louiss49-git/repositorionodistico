import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, "../public")))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/service", (req, res) => {
    res.render("service")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/blog", (req, res) => {
    res.render("blog")
})


app.listen(port, () => {
    console.log(`App listening in localhost:${port}`)
})
