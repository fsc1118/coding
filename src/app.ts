import express from "express"
import path from "path"
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, "../public")))
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("question.ejs", {
        question: 1
    })
})

app.post("/submit", (req, res) => { })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})