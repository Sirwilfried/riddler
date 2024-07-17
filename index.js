import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://riddles-api.vercel.app/random";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("index.ejs", { riddle: "Test", answer: "Test Answer" });
// });

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { 
        riddle: JSON.stringify(result.data.riddle),
        answer: JSON.stringify(result.data.answer)
    });
});

app.get("/new", async(req, res) => {
try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { 
        riddle: JSON.stringify(result.data.riddle),
        answer: JSON.stringify(result.data.answer)
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});